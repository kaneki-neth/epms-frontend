<template>
    <div>
      <Header/>

      <Navbar/>

      <Content/>

      <Footer/>
      
    </div>
</template>
  
  <script>
  import Header from '../components/layouts/Header.vue'
  import Navbar from '../components/layouts/Navbar.vue'
  import Content from '../components/Content.vue'
  import Footer from '../components/layouts/Footer.vue'
  
  export default {
    name: 'AdminDashboard',
    components: {
        Header,
        Navbar,
        Content,
        Footer,
    }
  }
  </script>
  