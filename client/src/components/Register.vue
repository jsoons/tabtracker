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
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log(`Email changed to value ${value} .`)
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
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
