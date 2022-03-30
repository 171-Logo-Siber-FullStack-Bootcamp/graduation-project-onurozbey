<template>
    <div id="PageSection" class="page-section section section-padding">
        <div v-for="product in products" :key="product.id" class="container">
            <div v-if="productId === product.id" :key="product.id" class="row row-30 mbn-50">
                <div class="col-12">
                    <div class="row row-20 mb-10">
                        <div class="col-lg-6 col-12 mb-40">
                            <div>
                                <img height="420" width="420" v-bind:src="product.image" alt />
                            </div>
                            <!-- Single Product Thumbnail Slider -->
                            <!-- <ul id="pro-thumb-img" class="pro-thumb-img">
                                <li>
                                    <a
                                        href="assets/images/product/product-zoom-1.jpg"
                                        data-standard="assets/images/product/product-big-1.jpg"
                                    >
                                        <img src="assets/images/product/product-1.jpg" alt />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="assets/images/product/product-zoom-2.jpg"
                                        data-standard="assets/images/product/product-big-2.jpg"
                                    >
                                        <img src="assets/images/product/product-2.jpg" alt />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="assets/images/product/product-zoom-3.jpg"
                                        data-standard="assets/images/product/product-big-3.jpg"
                                    >
                                        <img src="assets/images/product/product-3.jpg" alt />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="assets/images/product/product-zoom-4.jpg"
                                        data-standard="assets/images/product/product-big-4.jpg"
                                    >
                                        <img src="assets/images/product/product-4.jpg" alt />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="assets/images/product/product-zoom-5.jpg"
                                        data-standard="assets/images/product/product-big-5.jpg"
                                    >
                                        <img src="assets/images/product/product-5.jpg" alt />
                                    </a>
                                </li>
                            </ul>-->
                        </div>

                        <div class="col-lg-6 col-12 mb-40">
                            <div class="single-product-content">
                                <div class="head">
                                    <div class="head-left">
                                        <h3 class="title">{{ product.title }}</h3>

                                        <div class="ratting">
                                            <br />
                                            <i>Rating: {{ product.rating }}</i>
                                            <i class="fa fa-star"></i>
                                            <br />
                                        </div>
                                    </div>

                                    <div class="head-right">
                                        <span class="price">${{ product.price }}</span>
                                    </div>
                                </div>

                                <div class="description">
                                    <p>{{ product.description }}</p>
                                </div>

                                <span class="availability">
                                    In Stock:
                                    <span>{{ product.stock }}</span>
                                </span>

                                <div class="quantity-colors">
                                    <div class="quantity">
                                        <h5>Quantity:</h5>
                                        <div class="pro-qty">
                                            <input type="text" value="1" />
                                        </div>
                                    </div>
                                </div>

                                <div class="actions">
                                    <button>
                                        <i class="ti-shopping-cart"></i>
                                        <span>ADD TO CART</span>
                                    </button>
                                    <button class="box" data-tooltip="Compare">
                                        <i class="ti-control-shuffle"></i>
                                    </button>
                                    <button class="box" data-tooltip="Wishlist">
                                        <i class="ti-heart"></i>
                                    </button>
                                </div>

                                <div class="tags">
                                    <h5>Tags:</h5>
                                    <a href="#">Electronic</a>
                                    <a href="#">Men's Clothing</a>
                                    <a href="#">Women's Clothing</a>
                                    <a href="#">Jewelry</a>
                                </div>

                                <!-- <div class="share">
                                    <h5>Share:</h5>
                                    <a href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </div>-->
                            </div>
                        </div>
                    </div>

                    <!-- <div class="row mb-50"> -->
                    <!-- Nav tabs -->
                    <!-- <div class="col-12">
                            <ul class="pro-info-tab-list section nav">
                                <li>
                                    <a
                                        class="active"
                                        href="#more-info"
                                        data-bs-toggle="tab"
                                    >More info</a>
                                </li>
                                <li>
                                    <a href="#data-sheet" data-bs-toggle="tab">Data sheet</a>
                                </li>
                                <li>
                                    <a href="#reviews" data-bs-toggle="tab">Reviews</a>
                                </li>
                            </ul>
                    </div>-->
                    <!-- Tab panes -->
                    <!-- <div class="tab-content col-12">
                            <div class="pro-info-tab tab-pane active" id="more-info">
                                <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                            </div>
                            <div class="pro-info-tab tab-pane" id="data-sheet">
                                <table class="table-data-sheet">
                                    <tbody>
                                        <tr class="odd">
                                            <td>Compositions</td>
                                            <td>Cotton</td>
                                        </tr>
                                        <tr class="even">
                                            <td>Styles</td>
                                            <td>Casual</td>
                                        </tr>
                                        <tr class="odd">
                                            <td>Properties</td>
                                            <td>Short Sleeve</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="pro-info-tab tab-pane" id="reviews">
                                <a href="#">Be the first to write your review!</a>
                            </div>
                    </div>-->
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "PageSection",
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