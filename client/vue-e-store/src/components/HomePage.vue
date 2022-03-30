<template>
    <div class="main-wrapper">
        <!-- Header Section Start -->
        <HeaderSection />
        <!-- Header Section End -->

        <!-- Hero Section Start -->
        <!-- <HeroSection /> -->
        <!-- Hero Section End -->

        <!-- Slider -->
        <!-- <SliderComponent /> -->

        <!-- Deal Section Start -->
        <DealSection />
        <!-- Deal Section End -->

        <!-- Product Section Start -->
        <ProductSection />
        <!-- Product Section End -->

        <!-- Banner Section Start -->
        <!-- <BannerSection /> -->
        <!-- Banner Section End -->

        <!-- Feature Product Section Start -->
        <!-- <FeatureProductSection /> -->
        <!-- Product Section End -->

        <!-- Feature Section Start -->
        <!-- <FeatureSection /> -->
        <!-- Feature Section End -->

        <!-- Blog Section Start -->
        <!-- <BlogSection /> -->
        <!-- Blog Section End -->

        <!-- Brand Section Start -->
        <!-- <BrandSection /> -->
        <!-- Brand Section End -->

        <!-- Footer Top Section Start -->
        <FooterTop />
        <!-- Footer Top Section End -->

        <!-- Footer Bottom Section Start -->
        <FooterBottom />
        <!-- Footer Bottom Section End -->
    </div>
</template>
<script>
import HeaderSection from "./HomePageComps/HeaderSection.vue"
import HeroSection from "./HomePageComps/HeroSection.vue"
import ProductSection from "./HomePageComps/ProductSection.vue"
import BannerSection from "./HomePageComps/BannerSection.vue"
import FeatureProductSection from "./HomePageComps/FeatureProductSection.vue"
import DealSection from "./HomePageComps/DealSection.vue"
import FeatureSection from "./HomePageComps/FeatureSection.vue"
import BlogSection from "./HomePageComps/BlogSection.vue"
import BrandSection from "./HomePageComps/BrandSection.vue"
import FooterTop from "./HomePageComps/FooterTop.vue"
import FooterBottom from "./HomePageComps/FooterBottom.vue"
import SliderComponent from "./SliderComponent.vue"

export default {
    name: "HomePage",
    components: { HeaderSection, HeroSection, ProductSection, BannerSection, FeatureProductSection, DealSection, FeatureSection, BlogSection, BrandSection, FooterTop, FooterBottom, SliderComponent }
}
</script>