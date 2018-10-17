import ru from 'vee-validate/dist/locale/ru'

export default {
  en: {
    messages: {
      required: () => 'This field is required',
      email: () => 'Email is not valid',
      numeric: () => 'Phone must contains only numeric symbols'
    }
  },
  ru: {
    messages: ru.messages
  },
  ua: {
    messages: {
      required: () => 'Це поле є обов\'язковим',
      email: () => 'Пошта не є валідною',
      numeric: () => 'Номер повинен містити тільки цифри'
    }
  }
}