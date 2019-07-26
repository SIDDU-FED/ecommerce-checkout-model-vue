<template>
    <ul class="list-group">
        <div class="cart-list" v-for="(item ,i) in items" :key="item.id">
            <div class="columns">
                <div class="column is-6">
                    <img :src="item.image" alt="">
                </div>
                <div class="column is-6">
                    <h5 class="has-text-centered">{{item.title}}</h5>
                    <h5 class="has-text-centered">${{item.price}}</h5>
                    <div class="has-text-centered">
                        <button class="button is-danger is-outlined" @click="$emit('remove_From_Cart', item)">Remove from cart </button>
                    </div>
                </div>
            </div>


        </div>
    </ul>
</template>
<script>
    export default {
        name: 'cart',
        props: ['items'],
    }
</script>
<style>
.cart-list{
    padding: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background-color: #fff;
    background-color: #fff;
    margin-bottom: 5px;
}
    .cart-list .has-text-centered{
        padding: 6px 0px;
    }
</style>