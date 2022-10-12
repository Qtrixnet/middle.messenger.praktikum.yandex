export enum ValidateType {
  Login = 'login',
  Password = 'password',
  Email = 'email',
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
    }

  }

  return errorMessage;
}
