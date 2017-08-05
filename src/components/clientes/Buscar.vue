<template>
  <div class="clientes">
    <h1>{{ msg }}</h1>
    <h2>Clientes</h2>
  </div>
</template>

<script>
export default {
  name: 'clientes',
  data () {
    return {
      msg: 'Pesquisa de clientes'
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
