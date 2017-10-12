<template lang="html">
  <div class="">
    User Home
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: localStorage.getItem('username'),
      userPost: []
    }
  },
  methods: {
    getUserPost () {
      this.$axios.get(`author/${this.name}`)
      .then(({data}) => {
        this.userPost = data
      })
    }
  },
  created () {
    this.getUserPost()
  }
}
</script>

<style lang="css">
</style>
