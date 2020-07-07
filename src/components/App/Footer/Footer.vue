<template>
  <footer class="footer">
    <div class="footer__container container">
      <ul class="social">
        <li class="social__item">
          <a
            href="https://www.linkedin.com/in/ruslan-lukianenko-2474b3154/"
            target="_blank"
            class="social__link"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <span class="social__wrap"><span class="fab fa-linkedin-in" /></span>
          </a>
        </li>
        <li class="social__item">
          <a
            href="https://t.me/BlackJeezuz/"
            target="_blank"
            class="social__link"
            aria-label="Telegram"
            title="Telegram"
          >
            <span class="social__wrap"><span class="fab fa-telegram-plane" /></span>
          </a>
        </li>
        <li class="social__item">
          <a
            href="https://www.facebook.com/ruslan.lukyanenko.5"
            target="_blank"
            class="social__link"
            aria-label="Facebook"
            title="Facebook"
          >
            <span class="social__wrap"><span class="fab fa-facebook-f" /></span>
          </a>
        </li>
      </ul>
      <div class="created-text">Created with <span class="fas fa-heart"/> Vue</div>
      <div class="copy">{{ $t('myname') }} &copy;2018</div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "footer";
</style>
