<template>

    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="product.image"
                     :alt="product.title">
            </figure>
        </div>
        <div class="card-content">
            <h5 class="has-text-centered">
                <strong>{{product.title}}</strong>
            </h5>
            <h4 class="product-price has-text-centered">
                <strong>$ {{product.price}}</strong>
            </h4>
            <div class="has-text-centered m-2">
                <button class="button is-primary" :disabled="isInCart" @click="$emit('addToCart', product)">
                    {{isInCart ? 'Added to cart' : 'Add to cart'}}
                </button>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'product',
        props: ['product', 'isInCart'],
        data() {
            return {}
        }
    }
</script>
<style scoped>
    .product-price{
        margin-bottom: 10px;
    }
    .card{
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        overflow: hidden;
    }
</style>