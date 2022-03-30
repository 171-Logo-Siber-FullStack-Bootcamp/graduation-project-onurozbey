<template>
    <div id="DealSection" class="deal-section section section-padding pt-0">
        <div class="container">
            <div class="section-title text-center col mb-30">
                <!-- I'll get most popular products here -->
                <br />
                <br />
                <h1>Most Popular Product</h1>
            </div>
            <div class="deal-product-slider pb-30">
                <div
                    v-for="product of products.slice(0, 1)"
                    :key="product.rating"
                    class="deal-product mbn-30"
                >
                    <div class="image col-md-4 col-12 mb-30">
                        <img height="440" v-bind:src="product.image" alt="Image" />
                    </div>
                    <div class="content col-md-6 col-12 mb-30">
                        <router-link :key="product.id" :to="'/product/' + product.id">
                            <h2 class="title">
                                <a>{{ product.title }}</a>
                            </h2>
                        </router-link>

                        <br />
                        <span class="price">Price: ${{ product.price }}</span>
                        <span class="price">Rating: {{ product.rating }}</span>
                        <span class="price">In Stock: {{ product.stock }}</span>
                        <div class="countdown" data-countdown="2023/06/20"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "DealSection",
    data() {
        return {
            products: [],
        };
    },
    async created() {
        try {
            const res = await axios.get(`http://localhost:3000/api/getProductsByRating/`);
            this.products = res.data;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>