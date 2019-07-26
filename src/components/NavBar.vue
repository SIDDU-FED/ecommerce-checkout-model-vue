<template>
    <div>

        <nav class="navbar" role="navigation" aria-label="main navigation">

            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <div v-if="!isAuth" class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link" style="margin-right: 20px;">
                                    Jhon
                                </a>

                                <div class="navbar-dropdown" style="padding: 0px;">
                                    <a class="navbar-item" @click="logOut()">
                                        Log Out
                                    </a>
                                </div>
                            </div>


                            <router-link tag="a" to="/signup" class="button is-light" v-if="isAuth">Sign up
                            </router-link>


                            <router-link tag="a" to="/login" class="button is-light" v-if="isAuth">Login</router-link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        data: function () {
            return {}
        },
        methods: {
            logOut(){
                localStorage.removeItem('auth');
                this.$root.auth = {}
            }
        },
        computed: {

            isAuth() {
                if (this.$root.auth === "QpwL5tke4Pnpja7X4") {
                    console.log("auth set")
                    return false
                }
                else if (this.$root.auth) {
                    return true
                    console.log("auth not set")
                }
            }


        },
        mounted() {

            console.log(this.$root)
        }

    }
</script>

