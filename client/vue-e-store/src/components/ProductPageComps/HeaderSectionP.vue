<template>
    <div class="header-section section">
        <!-- Header Top Start -->
        <HeaderTop />
        <!-- Header Top End -->

        <!-- Header Bottom Start -->
        <HeaderBottom />
        <!-- Header BOttom End -->
    </div>
</template>
<script>
import HeaderBottomP from "./ProductHeaderComps/HeaderBottomP.vue";
import HeaderTopP from "./ProductHeaderComps/HeaderTopP.vue";
import HeaderTop from "../HomePageComps/HeaderSectionComps/HeaderTop.vue";
import HeaderBottom from "../HomePageComps/HeaderSectionComps/HeaderBottom.vue";
export default {
    name: "HeaderSectionP",
    components: { HeaderBottomP, HeaderTopP, HeaderTop, HeaderBottom }
}
</script>