import hbs from 'handlebars';

const template = `
    <label class="input">
      <span class="input__text">{{placeholder}}</span>
      <input 
          class="input__field input__field_{{color}}"
          value={{value}} 
          type={{type}} 
          placeholder={{placeholder}}
      />
    </label>
`
hbs.registerPartial('input', template);
