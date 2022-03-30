<template>
    <div id="PageBannerSection" class="page-banner-section section">
        <div class="container">
            <div v-for="product in products" :key="product.id" class="row">
                <div
                    v-if="productId === product.id"
                    :key="product.id"
                    class="page-banner-content col"
                >
                    <h1>{{ product.title }}</h1>
                    <ul class="page-breadcrumb">
                        <li>
                            <a href="/">Go Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"

export default {
    name: "PageBannerSection",
    data() {
        return {
            products: [],
        };
    },
    async created() {
        try {
            const res = await axios.get(`http://localhost:3000/api/getallproducts/`);
            this.products = res.data;
        } catch (error) {
            console.log(error);
        }
    },
    computed: {
        productId() {
            return parseInt(this.$route.params.id)
        }
    }
}
</script>