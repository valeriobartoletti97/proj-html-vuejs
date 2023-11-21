<template>
    <header>
        <!-- top header -->
        <div id="top-header">
            <div class="my-container d-flex justify-content-between align-items-center">
                <!-- language -->
                <div>
                    <div @click="toggleShow" class="position-relative">
                        <span class="me-2">English</span>
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="position-absolute my-dropdown" :class="show ? 'show' : 'd-none'">
                            <div>Italian</div>
                            <div>Deutsch</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- bottom header -->
        <div id="bottom-header">

        </div>
    </header>
</template>

<script>
import { store } from '../data/store';

export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
            show: false
        }
    },
    methods:{
        toggleShow(){
            this.show = !this.show
            console.log(this.show)
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

#top-header {
    color: gray;
    padding:20px 0;
    font-size: 0.8em;
    border-bottom: 1px solid $gray;
    .my-dropdown{
        top:200%;
        left:0;
        background-color: $gray;
        border-radius: 5px;
        width:150px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.175);
        div{
            padding:8px 15px
        }
    }
}
</style>