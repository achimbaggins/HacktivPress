<template lang="html">
  <div class="">
    <div class="list-group" v-for="(post, index) in byAuthor">
      <router-link :to="'/read/'+ post.slug" class="list-group-item">
        <h4 class="list-group-item-heading">{{ post.title }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data () {
    return {
      byAuthor: []
    }
  },
  methods: {
    getbycat (name) {
      this.$axios.get(`author/${name}`)
      .then(({data}) => {
        this.byAuthor = data
      })
    }
  },
  created () {
    this.getbycat(this.name)
  },
  watch: {
    name () {
      this.getbycat(this.name)
    }
  }
}
</script>

<style lang="css">
</style>
