<template>
    <div class="header-section section">
        <!-- Header Top Start -->
        <HeaderTop />
        <!-- Header Top End -->

        <!-- Header Bottom Start -->
        <HeaderBottom />
        <!-- Header Bottom End -->
    </div>
</template>
<script>
import HeaderTop from "./HeaderSectionComps/HeaderTop.vue";
import HeaderBottom from "./HeaderSectionComps/HeaderBottom.vue";
export default {
    name: "HeaderSection",
    components: { HeaderTop, HeaderBottom }
}
</script>