<template>
    <div class="container">

        <div class="columns is-mobile is-centered">
            <div class="column is-4 signup-background">
                <div class="title">
                    <h3 class="has-text-centered">Login</h3>
                </div>

                <b-field label="Email">
                    <b-input type="email" v-model="loginForm.email">
                    </b-input>
                </b-field>
                <b-field label="Password">
                    <b-input type="password" v-model="loginForm.password">
                    </b-input>
                </b-field>
                <div class="is-mobile is-centered has-text-centered">
                    <button class="button is-rounded" @click="loginUser()">Submit</button>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        beforeRouteEnter(to, from, next) {

            console.log(to, from, next)

            if (localStorage.getItem('auth')) {

                return next({path: "/"})
            }
            next()
        },
        name: 'login',
        data: function () {
            return {
                loginForm: {
                    email: 'eve.holt@reqres.in',
                    password: 'cityslicka'
                }

            }
        },
        methods: {
            loginUser() {
                axios.post('https://reqres.in/api/login', this.loginForm).then(response => {

                    localStorage.setItem('auth', JSON.stringify(response.data.token));

                    this.$root.auth = response.data.token;

                    this.$router.push('/')

                    console.log(response)

                }).catch(error => {
                    console.log(error);
                })
                // console.log(this.signupForm.name, this.signupForm.email, this.signupForm.password)
            }
        }

    }
</script>

<style>
    .signup-background {
        background: #31d1b2;
        color: white;
        border-radius: 10px;
        margin-top: 15Vh;
    }

    .signup-background .label {
        color: white
    }

    .title {
        color: aliceblue
    }
</style>
