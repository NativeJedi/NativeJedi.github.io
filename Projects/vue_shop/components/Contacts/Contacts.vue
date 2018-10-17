<template>
  <section class="section contacts-section">
    <div class="container">
      <h2 class="main-title">{{ $t('contacts.title') }}</h2>
      <div class="contacts-wrapper">
        <ul class="contacts">
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.phone') }}</div>
            <a href="#" class="contacts__link"><fa class="contacts__icon" :icon="['fas', 'phone']" />+380962790520</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.mail') }}</div>
            <a href="#" class="contacts__link"><fa class="contacts__icon" :icon="['fas', 'envelope']" />ruslan201010@gmail.com</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.telegram') }}</div>
            <a href="#" class="contacts__link"><fa class="contacts__icon" :icon="['fab', 'telegram-plane']" />@BlackJeezuz</a>
          </li>
          <li class="contacts__item">
            <div class="contacts__caption">{{ $t('contacts.adress') }}</div>
            <a href="#" class="contacts__link"><fa class="contacts__icon" :icon="['fas', 'map-marker-alt']" />{{ $t('contacts.place') }}</a>
          </li>
        </ul>
        <main-form class="form--contacts" :reqFields="['name', 'email', 'message']" />
      </div>
    </div>
  </section>
</template>

<script>
import MainForm from '~/components/MainForm'

export default {
  name: 'Contacts',
  layout: 'aside',
  components: {
    MainForm
  },
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  }
}
</script>

<style lang="scss">
@import "contacts";
</style>
