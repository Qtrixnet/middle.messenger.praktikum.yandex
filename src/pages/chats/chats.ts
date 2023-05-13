import Block from '../../core/Block';
import styles from './chats.module.pcss';
import ChatsController from '../../controllers/ChatsController';
import AuthController from '../../controllers/AuthController';
import store from '../../core/Store';
import getElement from '../../utils/getElement';

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
      isLoading: false,

      onChatCreatePopupOpen: () => this.setProps({ isCreateChatPopupOpen: true }),
      onChatCreatePopupClose: () => this.setProps({ isCreateChatPopupOpen: false }),

      onUserAddPopupOpen: () => this.setProps({ isUserAddPopupOpen: true }),
      onUserAddPopupClose: () => this.setProps({ isUserAddPopupOpen: false }),

      onUserDeletePopupOpen: () => this.setProps({ isUserDeletePopupOpen: true }),
      onUserDeletePopupClose: () => this.setProps({ isUserDeletePopupOpen: false }),

      createChat: async (value: string) => ChatsController.create(value).then(async () => {
        await ChatsController.fetchChats().then(() => {
          const { chats } = store.getState();
          this.setProps({
            chats,
          });
          store.set('selectedChat', chats[0]?.id || {});
        });
      }),

      onChatSelect: (id: number): void => {
        ChatsController.selectChat(id);
        this.setProps({
          selectedChat: store.getState().chats.find((chat: { id: number; }) => chat.id === id) || {},
        });
      },

      onChatCreate: async (e: SubmitEvent) => {
        e.preventDefault();

        const inputElement = getElement(this.element, 'chatName');

        this.setProps({ isLoading: true });

        await this.props.createChat(inputElement.value).then(() => {
          this.setProps({ isLoading: false });
        });
      },

      onChatDelete: async (id: number) => {
        await ChatsController.delete(id).then(async () => {
          ChatsController.fetchChats().then(() => {
            const { chats } = store.getState();
            this.setProps({
              chats,
            });
            store.set('selectedChat', chats[0]?.id || {});
          });
        });
      },
    });
  }

  componentDidMount() {
    AuthController.fetchUser();
    ChatsController.fetchChats().finally(() => {
      const { chats } = store.getState();
      this.setProps({
        chats,
        isCreateChatPopupOpen: store.getState().isCreateChatPopupOpen,
        selectedChat: chats[0],
      });
      store.set('selectedChat', chats[0]?.id || {});
    });
  }

  render() {
    // language=hbs
    return `
        <section class=${styles.chats}>
            {{{Toolbar}}}
            {{#if chats.length}}
                <main class=${styles.container}>
                    <section class=${styles.list}>
                        <div class=${styles['search-container']}>
                            <div class=${styles['search-line']}>
                                <input class=${styles.search} type="text" placeholder="Поиск по сообщениям..."/>
                            </div>
                        </div>
                        <ul class=${styles['chats-list']}>
                            {{#each chats}}
                                {{{ChatCard
                                        id=id
                                        avatar=avatar
                                        name=title
                                        message=last_message.content
                                        time=last_message.time
                                        notify=unread_count
                                        onClick=../onChatSelect
                                        onDelete=../onChatDelete
                                }}}
                            {{/each}}
                        </ul>
                        {{{Button
                                text="Создать чат"
                                onClick=onChatCreatePopupOpen
                                className="${styles['create-button']}"
                        }}}
                    </section>
                    {{{Chat
                            title=selectedChat.title
                            id=selectedChat.id
                            handleAddUser=onUserAddPopupOpen
                            handleDeleteUser=onUserDeletePopupOpen
                    }}}
                    {{#if isCreateChatPopupOpen}}
                        {{{CreateChatPopup handleClose=onChatCreatePopupClose createChat=createChat}}}
                    {{/if}}
                    {{#if isUserAddPopupOpen}}
                        {{{AddUserPopup handleClose=onUserAddPopupClose}}}
                    {{/if}}
                    {{#if isUserDeletePopupOpen}}
                        {{{DeleteUserPopup handleClose=onUserDeletePopupClose}}}
                    {{/if}}
                </main>
            {{else}}
                {{{EmptyChats onChatCreate=onChatCreate isLoading=isLoading}}}
            {{/if}}
        </section>
    `;
  }
}
