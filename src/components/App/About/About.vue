<template>
  <section class="section" id="About">
    <div class="container">
      <h2 class="section-title">{{ $t('navigation.about') }}</h2>
      <main class="about">
        <div
          class="about__content"
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
        >
          <figure class="about__person">
            <img class="about__img" src="~/static/images/RL.jpg" alt="Ruslan Lukianenko">
            <figcaption class="about__caption">{{ $t('about.figcaption') }}</figcaption>
          </figure>
          <p>{{ $t('about.position') }} <a href="https://any.cash/ru/" target="_blank" class="link">{{ $t('about.currentJob') }}</a> {{ $t('about.location') }}.<br>{{ $t('about.text') }} <a href="./files/RuslanL_CV.pdf" class="link" target="_blank">{{ $t('about.cv') }}</a></p>
        </div>
        <div
          class="about__skills"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <ul
            class="skills-list"
            data-aos="width-rigth"
            data-aos-anchor-placement="top-center"
          >
            <li
              v-for="(skill, index) in skills"
              :key="skill.name"
              class="skills-list__item"
            >
              <div class="skills-list__name">{{ skill.name }}</div>
              <div class="skills-list__percent">
                <div
                  :style="`width: ${skill.percent}%`"
                  class="skills-list__percent-line"
                >
                  <span class="skills-list__percent-text" :style="{'transition-delay': `${(5 + index*0.5)*0.1}s`}">{{ skill.percent }}%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  computed: {
    skills () {
      return [{
        name: 'CSS',
        percent: '80'
      }, {
        name: 'HTML',
        percent: '90'
      }, {
        name: 'JavaScript',
        percent: '80'
      }, {
        name: 'Vue',
        percent: '80'
      }, {
        name: 'React',
        percent: '30'
      }, {
        name: 'SASS/SCSS',
        percent: '90'
      }, {
        name: 'GIT',
        percent: '40'
      }, {
        name: 'Photoshop',
        percent: '40'
      }, {
        name: 'Webpack/Gulp',
        percent: '60'
      }, {
        name: 'SSR',
        percent: '30'
      }]
    }
  }
}
</script>

<style lang="scss">
@import "about";
</style>
