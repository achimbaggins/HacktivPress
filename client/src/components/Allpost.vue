<template lang="html">
  <div class="container">
    <div class="list-group text-left" v-for="(post, index) in allPost">
      <router-link :to="'/read/'+ post.slug" class="list-group-item">
        <h4 class="list-group-item-heading">{{ post.title }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['allDataPost'],
  data () {
    return {
      allPost: []
    }
  },
  methods: {
    getallpost () {
      this.$axios.get('/')
      .then(({data}) => {
        console.log('datanya', data);
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
