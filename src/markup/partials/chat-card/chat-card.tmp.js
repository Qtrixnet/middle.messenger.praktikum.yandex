import hbs from 'handlebars';

const template = `
    <li class="chat-card">
        <img class="chat-card__avatar" src={{avatar}} alt={{name}}>
        <div class="chat-card__container">
            <h2 class="chat-card__title">{{name}}</h2>
            <p class="chat-card__text">{{message}}</p>
        </div>
        <div class="chat-card__container">
            <span class="chat-card__time">{{time}}</span>
            <div class="chat-card__notify">{{notify}}</div>
        </div>
    </li>
`
hbs.registerPartial('chat-card', template);
