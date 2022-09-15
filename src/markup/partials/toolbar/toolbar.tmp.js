import hbs from 'handlebars';

const template = `
    <header class="toolbar">
        <img class="toolbar__avatar"/>
        <nav class="toolbar__nav">
            <ul class="toolbar__list">
                <li class="toolbar__list-item">
                    <button class="toolbar__button toolbar__button_chats"/>
                </li>
                <li class="toolbar__list-item">
                    <button class="toolbar__button toolbar__button_profile"/>
                </li>
            </ul>
        </nav>
    </header>
`

hbs.registerPartial('toolbar', template);
