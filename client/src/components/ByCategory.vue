<template lang="html">
  <div class="">
    <div class="" v-if="byCat.length == 0">
      mohon maaf belum ada artikel untuk <b>{{cat}}</b>
    </div>
    <div class="list-group" v-for="(post, index) in byCat" v-else>
      <router-link :to="'/read/'+ post.slug" class="list-group-item">
        <h4 class="list-group-item-heading">{{ post.title }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cat'],
  data () {
    return {
      byCat: []
    }
  },
  methods: {
    getbycat (cat) {
      this.$axios.get(`category/${cat}`)
      .then(({data}) => {
        this.byCat = data
      })
    }
  },
  created () {
    this.getbycat(this.cat)
  },
  watch: {
    cat () {
      this.getbycat(this.cat)
    }
  }
}
</script>

<style lang="css">
</style>
