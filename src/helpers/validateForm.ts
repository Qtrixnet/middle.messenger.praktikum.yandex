export enum ValidateType {
  Login = 'login',
  Password = 'password',
  Email = 'email',
  FirstName = 'first_name',
  Phone = 'phone',
  SecondName = 'second_name',
  SecondPassword = 'password__second'
}

interface ValidateRule {
  type: ValidateType;
  value: string;
}

export function validateForm(rules: ValidateRule[]): string {
  let errorMessage = '';

  for (let i = 0; i < rules.length; i++) {
    const {type, value} = rules[i];

    if(type === ValidateType.Login) {
      if(value.length === 0) {
        errorMessage = 'Логин не может быть пустым';
        break;
      } else if (value.length < 4) {
        errorMessage = 'Логин должен содержать больше 3х символов';
        break;
      } else if (value.length > 20) {
        errorMessage = 'Логин должен содержать не больше 20ти символов';
        break;
      }
    } else if (type === ValidateType.Password) {
      if(value.length === 0) {
        errorMessage = 'Пароль не может быть пустым';
        break;
      } else if (value.length < 4) {
        errorMessage = 'Пароль должен содержать больше 3х символов';
        break;
      } else if (value.length > 20) {
        errorMessage = 'Пароль должен содержать не больше 20ти символов';
        break;
      }
    } else if (type === ValidateType.Email) {
      if(value.length === 0) {
        errorMessage = 'Email не может быть пустым';
        break;
      } else if (value.length < 4) {
        errorMessage = 'Email должен содержать больше 3х символов';
        break;
      } else if (value.length > 20) {
        errorMessage = 'Email должен содержать не больше 20ти символов';
        break;
      }
    } else if (type === ValidateType.FirstName) {
      if(value.length === 0) {
        errorMessage = 'Имя не может быть пустым';
        break;
      } else if (value.length < 4) {
        errorMessage = 'Имя должно содержать больше 3х символов';
        break;
      } else if (value.length > 20) {
        errorMessage = 'Имя должно содержать не больше 20ти символов';
        break;
      }
    } else if (type === ValidateType.Phone) {
      if(value.length === 0) {
        errorMessage = 'Телефон не может быть пустым';
        break;
      } else if (value.length < 4) {
        errorMessage = 'Телефон должен содержать больше 3х символов';
        break;
      } else if (value.length > 20) {
        errorMessage = 'Телефон должен содержать не больше 20ти символов';
        break;
      }
    } else if (type === ValidateType.SecondName) {
      if(value.length === 0) {
        errorMessage = 'Фамилия не может быть пустой';
        break;
      } else if (value.length < 4) {
        errorMessage = 'Фамилия должна содержать больше 3х символов';
        break;
      } else if (value.length > 20) {
        errorMessage = 'Фамилия должна содержать не больше 20ти символов';
        break;
      }
    } else if (type === ValidateType.SecondPassword) {
      if(value.length === 0) {
        errorMessage = 'Пароль не может быть пустым';
        break;
      } else if (value.length < 4) {
        errorMessage = 'Пароль должен содержать больше 3х символов';
        break;
      } else if (value.length > 20) {
        errorMessage = 'Пароль должен содержать не больше 20ти символов';
        break;
      }
    }

  }

  return errorMessage;
}
