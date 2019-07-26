<template>
    <div id="app" style="">
        <app-navbar></app-navbar>
        <router-view/>
    </div>
</template>

<script>


    import NavBar from './components/NavBar.vue'

    export default {
        name: 'App',
        components: {
            'app-navbar': NavBar
        },
        data: function () {
            return {}
        }
    }
</script>

<style>

</style>
