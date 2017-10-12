<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">Home</router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <ul class="nav navbar-nav">
          <li><router-link to="/category/berita">Berita</router-link></li>
          <li><router-link to="/category/tutorial">Tutorial</router-link></li>
          <li><router-link to="/category/teknologi">Teknologi</router-link></li>

        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/dashboard">LOGIN</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    doLogout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
