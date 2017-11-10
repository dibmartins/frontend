<template>
  <div class="clientes">
    <h1>{{ msg }}</h1>
    <h2>Clientes</h2>

    <br>
    <router-link to="/">Home</router-link>
    <br>

    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'clientes',
  data: () => ({
    msg: 'Pesquisa de clientes',
    posts: []
  }),
  created: function () {
    this.request.get('posts')
    .then(response => {
      console.error(response.data)
      this.posts = response.data
    }).catch(error => {
      console.error(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
