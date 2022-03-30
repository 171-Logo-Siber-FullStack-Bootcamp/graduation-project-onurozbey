<template>
    <div class="main-wrapper">
        <!-- Header Section Start -->
        <HeaderSection />
        <!-- Header Section End -->

        <!-- Page Banner Section Start -->
        <PageBannerSection />
        <!-- Page Banner Section End -->

        <!-- Page Section Start -->
        <PageSection />
        <!-- Page Section End -->

        <!-- Related Product Section Start -->
        <!-- <RelatedProductSection /> -->
        <!-- Related Product Section End -->

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
import HeaderSectionP from "./ProductPageComps/HeaderSectionP.vue";
import PageBannerSection from "./ProductPageComps/PageBannerSection.vue";
import PageSection from "./ProductPageComps/PageSection.vue";
import RelatedProductSection from "./ProductPageComps/RelatedProductSection.vue";
import BrandSection from "./HomePageComps/BrandSection.vue";
import FooterTop from "./HomePageComps/FooterTop.vue";
import FooterBottom from "./HomePageComps/FooterBottom.vue";
import HeaderSection from "./HomePageComps/HeaderSection.vue";

export default {
    name: "ProductPage",
    components: { HeaderSectionP, PageBannerSection, PageSection, RelatedProductSection, BrandSection, FooterTop, FooterBottom, HeaderSection }
}
</script>