<template>
    <div class="header-bottom header-bottom-one header-sticky">
        <div class="container-fluid">
            <div class="row menu-center align-items-center justify-content-between">
                <div class="col mt-15 mb-15">
                    <!-- Logo Start -->
                    <div class="header-logo">
                        <router-link to="/">
                            <a>
                                <img src="assets/images/logo.png" alt="Jadusona" />
                            </a>
                        </router-link>
                    </div>
                    <!-- Logo End -->
                </div>

                <div class="col order-2 order-lg-3">
                    <!-- Header Advance Search Start -->
                    <div class="header-shop-links">
                        <HeaderSearch />

                        <!-- <div class="header-wishlist">
                            <a>
                                <img src="assets/images/icons/wishlist.png" alt="Wishlist" />
                                <span>02</span>
                            </a>
                        </div>-->

                        <!-- <div class="header-mini-cart">
                            <a>
                                <img src="assets/images/icons/cart.png" alt="Cart" />
                                <span>02($250)</span>
                            </a>
                        </div>-->
                    </div>
                    <!-- Header Advance Search End -->
                </div>

                <div class="col order-3 order-lg-2">
                    <div class="main-menu">
                        <nav>
                            <ul>
                                <li class="active">
                                    <router-link to="/">
                                        <a>HOME</a>
                                    </router-link>
                                </li>
                                <!-- <li>
                                    <a>PRODUCTS</a>
                                </li>-->
                                <li>
                                    <a href="#">PAGES</a>
                                    <ul class="sub-menu">
                                        <li>
                                            <a>Login & Register</a>
                                        </li>
                                        <li>
                                            <a>My Account</a>
                                        </li>
                                        <li>
                                            <a>Wishlist</a>
                                        </li>
                                        <li>
                                            <a>Cart</a>
                                        </li>
                                        <li>
                                            <a>Checkout</a>
                                        </li>
                                        <li>
                                            <a>404 Error</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>BLOG</a>
                                </li>
                                <li>
                                    <a>CONTACT</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div class="mobile-menu order-4 d-block d-lg-none col"></div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderSearch from "./HeaderSearch.vue";
export default {
    name: "HeaderBottom",
    components: { HeaderSearch }
}
</script>