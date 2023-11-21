<template>
    <header>
        <!-- top header -->
        <div id="top-header">
            <div class="my-container d-flex justify-content-between align-items-center">
                <!-- language -->
                <div class="left-top-header">
                    <div @click="toggleShow(el)" class="position-relative">
                        <span class="me-2">English</span>
                        <i class="fa-solid fa-angle-down"></i>
                        <div class="position-absolute my-dropdown" :class="show ? 'show' : 'd-none'">
                            <div>Italian</div>
                            <div>Deutsch</div>
                        </div>
                    </div>
                </div>
                <div class="right-top-header d-flex justify-content-center align-items-center">
                    <!-- list cpourses and pages -->
                    <div>
                        <ul class="d-flex flex-row align-items-center">
                            <li>Courses</li>
                            <li class="position-relative"><span>
                                CoursesFormats
                                </span>
                               <!--  <ul class="position-absolute my-dropdown d-none">
                                    <li>Italian</li>
                                    <li>Deutsch</li>
                                </ul>  -->
                            </li>
                            <!-- courseformat dropdown menu -->
                            <li>Pages</li>
                            <!-- pages dropdown menu -->
                            <li>AddCourse</li>
                            <li>Memberships</li>
                            <li>Demos</li>
                            <!-- demos dropdown menu -->
                        </ul>
                    </div>
                    <!-- icons -->
                    <div class="header-icons d-flex no-wrap">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-behance"></i>
                        <i class="fa-solid fa-basketball"></i>
                        <i class="fa-solid fa-message"></i>
                        <i class="fa-brands fa-git"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-pinterest"></i>
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
        toggleShow(el){
            this.show = !this.show
        },
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
    .header-icons{
        i{
            font-size:1.3em;
            padding: 0 7px;
        }
    }
    li{
        text-decoration: none;
        list-style: none;
        padding:0 10px
    }
}
</style>