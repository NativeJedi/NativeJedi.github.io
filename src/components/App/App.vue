<template>
  <div class="app">
    <Header />
    <Cases />
    <About />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Cases from './Cases'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: {
    Header,
    Cases,
    About,
    Projects,
    Footer
  },
  mounted () {
    AOS.init({
      disable: 'mobile',
      once: true
    })
  }
}
</script>
