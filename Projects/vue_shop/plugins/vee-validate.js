import Vue from 'vue'
import VeeValidate from 'vee-validate'
import rules from '~/locales/rules'
console.log(rules)
Vue.use(VeeValidate, {
  dictionary: {
    ru: rules.ru,
    ua: rules.ua
  }
})
