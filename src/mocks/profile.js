const profile = {
  avatar: 'https://basetop.ru/wp-content/uploads/2021/09/majkl-ili2.jpg',
  name: 'Иван Иванов',
  data: [
    {
      label: 'Логин:',
      type: 'text',
      placeholder: 'Логин',
      value: 'ivanivanov',
      color: 'light',
      name: 'login',
    },
    {
      label: 'Имя:',
      type: 'text',
      placeholder: 'Имя',
      value: 'Иван',
      color: 'light',
      name: 'first_name',
    },
    {
      label: 'Электронный адрес:',
      type: 'email',
      placeholder: 'Электронный адрес',
      value: 'example@gmail.com',
      color: 'light',
      name: 'email',
    },
    {
      label: 'Фамилия:',
      type: 'text',
      placeholder: 'Фамилия',
      value: 'Иванов',
      color: 'light',
      name: 'second_name',
    },
    {
      label: 'Телефон:',
      type: 'phone',
      placeholder: 'Телефон',
      value: '+7123456789',
      color: 'light',
      name: 'phone',
    },
    {
      label: 'Имя в чате:',
      type: 'text',
      placeholder: 'Имя в чате',
      value: 'Иваныч',
      color: 'light',
      name: 'display_name',
    },
  ]
}

export default profile;
