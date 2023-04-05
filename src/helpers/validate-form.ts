export enum ValidateType {
  Login = 'login',
  Password = 'password',
  Email = 'email',
  FirstName = 'first_name',
  Phone = 'phone',
  SecondName = 'second_name',
  SecondPassword = 'password__second',
  DisplayName = 'display_name',
  Message = 'message'
}

interface ValidateRule {
  type: ValidateType;
  value: string;
}

const validateForm = (rules: ValidateRule[]): string => {
  let errorMessage = '';

  rules.forEach((rule) => {
    const {type, value} = rule;

    if(type === ValidateType.Login) {
      const regExp = /^[a-zA-Z0-9_-]{3,20}$/;
      if(!regExp.test(value)) {
        errorMessage = 'От 3 до 20 символов, латиница, может содержать цифры, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).';
        return;
      }
    } else if (type === ValidateType.Password || type === ValidateType.SecondPassword) {
      const regExp = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;
      if(!regExp.test(value)) {
        errorMessage = 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.';
        return;
      }
    } else if (type === ValidateType.Email) {
      const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!regExp.test(value)) {
        errorMessage = 'латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.';
        return;
      }
    } else if (type === ValidateType.FirstName || type === ValidateType.SecondName || type === ValidateType.DisplayName) {
      const regExp = /^[A-ZА-ЯЁ][a-zа-яё]*(-[A-ZА-ЯЁ][a-zа-яё]*)?$/
      if(!regExp.test(value)) {
        errorMessage = 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).';
        return;
      }
    } else if (type === ValidateType.Phone) {
      const regExp = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
      if(!regExp.test(value)) {
        errorMessage = 'от 10 до 15 символов, состоит из цифр, может начинается с плюса.';
        return;
      }
    } else if (type === ValidateType.Message) {
      if(value.length <= 0) {
        errorMessage = 'Сообщение в чате не может быть пустым';
        return;
      }
    }
  });

  return errorMessage;
}

export default validateForm;
