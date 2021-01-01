<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      id=""
      v-model="email"
      placeholder="email"
    />
    <br />
    <input
      type="password"
      name="password"
      id=""
      v-model="password"
      placeholder="password"
    />
    <br />
    <button>Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  watch: {
    email (value) {
      console.log(`Email changed to value ${value} .`)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'Hello World.'
    }, 2000)
  }
}
</script>

<style scoped>
</style>
