<template>
    <div class="product-section section section-padding">
        <div class="container">
            <div class="row">
                <ul class="product-tab-list nav col mb-30">
                    <li>
                        <a data-bs-toggle="tab" class="active" href="#product-new">Products</a>
                    </li>
                </ul>
            </div>

            <div class="row">
                <div class="tab-content col-12" id="myTabContent">
                    <!-- New products tab -->
                    <NewProductsTab />
                    <!-- Popular products tab -->
                    <PopularProductsTab />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewProductsTab from "./ProductSectionComps/NewProductsTab.vue";
import PopularProductsTab from "./ProductSectionComps/PopularProductsTab.vue";

export default {
    name: "ProductSection",
    components: { NewProductsTab, PopularProductsTab }
}
</script>