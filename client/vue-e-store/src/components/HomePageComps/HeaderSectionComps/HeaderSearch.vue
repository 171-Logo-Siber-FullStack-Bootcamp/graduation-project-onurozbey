<template>
    <!-- <div id="HeaderSearch" class="header-search">
        <button class="search-toggle">
            <input type="text" placeholder="Search" />
        </button>
        <div class="header-search-wrap">
            <form>
                <input type="text" placeholder="Type and hit enter" />
                <button>
                    <img src="assets/images/icons/search.png" alt="Search" />
                </button>
            </form>
        </div>
    </div>-->
    <div class="input-group input-group-lg bottom">
        <input type="text" placeholder="Search product" @keyup.prevent="search" v-model="query" />
    </div>

    <div class="card-row">
        <div v-if="data" v-for="title in data" :key="index" :ref="`card_${index}`" class="card">
            <router-link :key="title.id" :to="'/product/' + title.id">
                <div>
                    <h3>{{ title.title.slice(0, 30) }}</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "HeaderSearch",
    data() {
        return {
            query: "",
            data: [],
        };
    },
    methods: {
        search() {
            axios.get(`http://localhost:3000/api/getproductelastic?s=` + this.query)
                .then(response => {
                    this.data = response.data;
                })
        }
    }
}
</script>