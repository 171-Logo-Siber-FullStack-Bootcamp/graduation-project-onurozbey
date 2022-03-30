<template>
    <div id="PopularProductsTab" class="tab-pane fade">
        <div class="row mbn-40">
            <!-- Single product -->
            <div
                v-for="product of products"
                :key="product.rating"
                class="col-xl-3 col-lg-4 col-md-6 col-12 mb-40"
            >
                <div class="product-item">
                    <div class="product-inner">
                        <div class="image">
                            <img height="320" v-bind:src="product.image" alt="Image" />
                        </div>

                        <div class="content">
                            <div class="content-left">
                                <h4 class="title">
                                    <a href="single-product.html">
                                        {{
                                            product.title.substring(0, 20) +
                                                "..."
                                        }}
                                    </a>
                                </h4>

                                <div class="ratting">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>

                                <h5 class="size">
                                    Rate:
                                    <span>
                                        {{ product.rating }}
                                        <i class="fa fa-star"></i>
                                    </span>
                                </h5>
                                <h5 class="size">
                                    Stock:
                                    <span>{{ product.stock }}</span>
                                </h5>
                            </div>

                            <div class="content-right">
                                <span class="price">${{ product.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "PopularProductsTab",
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