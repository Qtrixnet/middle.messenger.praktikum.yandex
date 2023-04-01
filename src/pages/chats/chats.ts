import Block from '../../core/Block';
import styles from './chats.module.pcss';
import ChatsController from "../../controllers/ChatsController";
import AuthController from "../../controllers/AuthController";
import store from "../../core/Store";
import {IChatInfo} from "../../api/ChatsAPI";
import getElement from "../../utils/getElement";

export class Chats extends Block {
  static componentName = 'Chats';
  constructor() {
    super();

    this.setProps({
      chats: [],
      selectedChat: {},
      isCreateChatPopupOpen: false,
      isUserAddPopupOpen: false,
      isUserDeletePopupOpen: false,

      onChatCreatePopupOpen: () => this.setProps({isCreateChatPopupOpen: true}),
      onChatCreatePopupClose: () => this.setProps({isCreateChatPopupOpen: false}),

      onUserAddPopupOpen: () => this.setProps({isUserAddPopupOpen: true}),
      onUserAddPopupClose: () => this.setProps({isUserAddPopupOpen: false}),

      onUserDeletePopupOpen: () => this.setProps({isUserDeletePopupOpen: true}),
      onUserDeletePopupClose: () => this.setProps({isUserDeletePopupOpen: false}),

      updateChats(chats: IChatInfo[]) {
        console.log(chats)
        // store.set('selectedChat', store.getState().chats[0].id);
      },

      onChatSelect: (id: number) => {
        ChatsController.selectChat(id);
        this.setProps({
          selectedChat: store.getState().chats.find((chat: { id: number; }) => chat.id === id) || {},
        })
      },

      onChatCreate: async (e: SubmitEvent) => {
        e.preventDefault();

        const inputElement = getElement(this.element, 'chatName');

        await ChatsController.create(inputElement.value).then(async () => {
          await ChatsController.fetchChats();
          this.setProps({
            chats: store.getState().chats,
          })
          store.set('selectedChat', store.getState().chats[0].id);
        })
      }
    })
  }

  componentDidMount() {
    AuthController.fetchUser();
    ChatsController.fetchChats().finally(() => {
      this.setProps({
        chats: store.getState().chats,
        isCreateChatPopupOpen: store.getState().isCreateChatPopupOpen,
        selectedChat: store.getState().chats[0],
      })
      store.set('selectedChat', store.getState().chats[0].id);
    })
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.chats}>
            {{{Toolbar}}}
            {{#if chats.length}}
                <main class=${styles.container}>
                    <section class=${styles.list}>
                        <div class=${styles.search_container}>
                            <div class=${styles.search_line}>
                                <input class=${styles.search} type="text" placeholder="Поиск по сообщениям..."/>
                            </div>
                        </div>
                        <ul class=${styles.chats_list}>
                            {{#each chats}}
                                {{{ChatCard
                                        id=id
                                        avatar=avatar
                                        name=title
                                        message=last_message.content
                                        time=last_message.time
                                        notify=unread_count
                                        onClick=../onChatSelect
                                }}}
                            {{/each}}
                        </ul>
                        {{{Button text="Создать чат" onClick=onChatCreatePopupOpen
                                  className="${styles.create_button}"}}}
                    </section>
                    {{{Chat
                            title=selectedChat.title
                            id=selectedChat.id
                            handleAddUser=onUserAddPopupOpen
                            handleDeleteUser=onUserDeletePopupOpen
                    }}}
                    {{#if isCreateChatPopupOpen}}
                        {{{CreateChatPopup handleClose=onChatCreatePopupClose}}}
                    {{/if}}
                    {{#if isUserAddPopupOpen}}
                        {{{AddUserPopup handleClose=onUserAddPopupClose}}}
                    {{/if}}
                    {{#if isUserDeletePopupOpen}}
                        {{{DeleteUserPopup handleClose=onUserDeletePopupClose}}}
                    {{/if}}
                </main>
            {{else}}
                {{{EmptyChats onChatCreate=onChatCreate}}}
            {{/if}}
        </section>
    `;
  }
}
