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
                        <div class="header-search">
                            <button class="search-toggle">
                                <img src="assets/images/icons/search.png" alt="Search Toggle" />
                                <img
                                    class="toggle-close"
                                    src="assets/images/icons/close.png"
                                    alt="Search Toggle"
                                />
                            </button>
                            <div class="header-search-wrap">
                                <form action="#">
                                    <input type="text" placeholder="Type and hit enter" />
                                    <button>
                                        <img src="assets/images/icons/search.png" alt="Search" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div class="header-wishlist">
                            <a>
                                <img src="assets/images/icons/wishlist.png" alt="Wishlist" />
                                <span>02</span>
                            </a>
                        </div>

                        <div class="header-mini-cart">
                            <a>
                                <img src="assets/images/icons/cart.png" alt="Cart" />
                                <span>02($250)</span>
                            </a>
                        </div>
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
                                <li>
                                    <router-link to="/product">
                                        <a>PRODUCTS</a>
                                    </router-link>
                                </li>
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
export default {
    name: "HeaderBottomP"
}
</script>