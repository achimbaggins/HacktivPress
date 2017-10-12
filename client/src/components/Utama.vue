<template lang="html">
  <div class="container">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      allPost: []
    }
  },
  methods: {
    getallpost () {
      this.$axios.get('/articles')
      .then(({data}) => {
        this.allPost = data
      })
    }
  },
  created () {
    this.getallpost()
  }
}
</script>

<style lang="css">
</style>
