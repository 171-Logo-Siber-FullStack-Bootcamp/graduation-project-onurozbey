<template>
    <div id="HeroSection" class="hero-section section">
        <!-- Hero Slider Start -->
        <div
            v-for="product of products.slice(0, 2)"
            :key="product.rating"
            class="hero-slider hero-slider-three fix"
        >
            <!-- Hero Item Start / I'm gonna use "v-for" here to get multiple products' details -->
            <div class="hero-item" style="background-image: :src=`product.image`">
                <div class="container">
                    <!-- Hero Content -->
                    <div class="hero-content-2">
                        <h3>
                            {{ product.title }}
                            <br />
                            ${{ product.price }}
                        </h3>
                        <a href="#">SHOP NOW</a>
                    </div>
                </div>
            </div>
            <!-- Hero Item End -->
        </div>
        <!-- Hero Slider End -->
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "HeroSection",
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
    },
}
</script>