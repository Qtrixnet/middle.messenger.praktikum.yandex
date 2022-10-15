import Block from '../../core/Block';
import './chats.css';
import {validateForm, ValidateType} from "../../helpers/validateForm";

export class Chats extends Block {
  constructor() {
    super();

    this.setProps({
      messageError: '',
      messageValue: '',

      onMessageFocus: () => console.log('message focus'),
      onMessageInput: (e: InputEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: ValidateType.Message, value: element.value},
        ])
        this.setProps({
          messageValue: element.value,
          messageError: errorMessage,
        })
      },
      onBlur: (e: FocusEvent) => {
        const element = e.target as HTMLInputElement;
        const errorMessage = validateForm([
          {type: this.props.name, value: element.value},
        ])
        this.setProps({
          messageError: errorMessage
        })
      },

      onSubmit: (e: SubmitEvent) => {
        e.preventDefault();
      }
    })
  }

  render() {
    // language=hbs
    return `
        <section class="chats">
            {{{Toolbar}}}
            <main class="chats-container">
                <section class="chats-list">
                    <div class="chats-list__search-container">
                        <div class="chats-list__search-line">
                            <input class="chats-list__search" type="text" placeholder="Поиск по сообщениям..."/>
                        </div>
                    </div>
                    <ul class="chats-list__list">
                        {{{ChatCard
                                avatar="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                                name="Иван Иванов"
                                message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                time="1: 38"
                                notify="8"
                        }}}
                        {{{ChatCard
                                avatar="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                                name="Илон Маск"
                                message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                time="1: 38"
                                notify="9"
                        }}}
                        {{{ChatCard
                                avatar="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                                name="Станислав"
                                message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                time="1: 38"
                                notify="24"
                        }}}
                        {{{ChatCard
                                avatar="https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg"
                                name="Мария"
                                message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                                time="1: 38"
                                notify="18"
                        }}}
                    </ul>
                </section>
                <section class="chat">
                    <header class="chat__header">
                        <div class="chat__header-container">
                            <h1 class="chat__title">Иван Иванов</h1>
                            <span class="chat__status"></span>
                            <p class="chat__status-text">Был в сети 6 минут назад</p>
                        </div>
                        <button class="chat__options"></button>
                    </header>
                    <div class="chat__messages">
                        <ul class="chat__messages-list">
                            <li class="chat__messages-list-item">
                                <p class="chat__messages-list-text">Друзья, у меня для вас особенный выпуск
                                    новостей!</p>
                            </li>
                            <li class="chat__messages-list-item">
                                <p class="chat__messages-list-text">У меня для вас особенный выпуск новостей!</p>
                            </li>
                            <li class="chat__messages-list-item">
                                <img class="chat__messages-list-image"
                                     src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
                                     alt="">
                            </li>
                            <li class="chat__messages-list-item chat__messages-list-item_self">
                                <p class="chat__messages-list-text chat__messages-list-text_self">Pellentesque habitant
                                    morbi
                                    tristique!</p>
                            </li>
                            <li class="chat__messages-list-item chat__messages-list-item_self">
                                <p class="chat__messages-list-text chat__messages-list-text_self">Duis ac diam nec massa
                                    aliquam
                                    consequat. Curabitur ante neque</p>
                            </li>
                        </ul>
                    </div>
                    <footer class="chat__footer">
                        <span class="chat__footer-error">${this.props.messageError}</span>
                        <form class="chat__footer-form" onsubmit="${this.props.onSubmit}">
                            <button class="chat__footer-attach" type="button"></button>
                            {{{
                            Message
                                    onInput=onMessageInput
                                    onFocus=onMessageFocus
                                    obBlur=onMessageBlur
                                    value=messageValue
                                    error=messageError
                                    ref=messageRef
                            }}}
                            <button class="chat__footer-send"></button>
                        </form>
                    </footer>
                </section>
            </main>
        </section>
    `;
  }
}
