<template>
    <div class="wrapper ">
        <div class="container">
            <div class='columns '>
                <div class="column is-8">
                    <div class="columns is-multiline">
                        <div class="column is-4" v-for="(product , i) in products" :key="product.id">
                            <product-list :isInCart = "isInCart(product)" v-on:addToCart="add_To_Cart(product)" :product="product" ></product-list>
                        </div>

                    </div>
                </div>
                <div class="column is-4 bg-white">
                    <h3 class="has-text-centered head">Shopping Cart</h3>
                    <cart-list v-on:remove_From_Cart="removeFromCart($event)" :items="cart"></cart-list>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import products from '../../products';
    import ProductList from "../Product"
    import Cart from "../Cart"
    export default {
        name: 'home-component',
        components:{
          'product-list': ProductList,
            'cart-list': Cart
        },
        data:function() {
            return {
                products,
                cart:[]
            }
        },
        methods:{
            add_To_Cart(product){
                this.cart.push(product)
                console.log(product)

            },
            isInCart(product){
                const item = this.cart.find(item=>item.id === product.id)
                if(item){
                    return true
                }
                return false
                console.log(item)
            },
            removeFromCart(product){
                    this.cart = this.cart.filter(item => item.id !== product.id)
            }
        },
        computed:{

        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .head{
        margin-bottom: 5px;
        font-weight: bold;
    }
</style>
