<template>
    <header class="overflow-x-hidden">
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
            <div class="my-container d-flex justify-content-between align-items-center">
                <!-- logo -->
                <div class="me-3 logo-img">
                    <img src="/images/MasterStudy_logo.svg" alt="MasterStudy logo">
                </div>
                <!-- category -->
                <div class="header-category-menu me-3">
                    <i class="fa-solid fa-bars"></i>
                    <span class="text-uppercase">Category</span>
                </div>
                <!-- Searchbar -->
                <div class="d-flex me-3" id="searchbar">
                    <input type="text" placeholder="Search courses">
                    <button class="search-btn">
                        <i class="fa-solid fa-search"></i>
                    </button>
                </div>
                <!-- Links -->
                <div class="d-flex me-3">
                    <div class="me-3">
                        <i class="fa-solid fa-bullhorn"></i>
                        <span class="blue-hover">Become an Instructor</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-briefcase"></i>
                        <span class="blue-hover">For Enterprise</span>
                    </div>
                </div>
                <!-- buttons -->
                <div class="d-flex align-items-center me-3">
                    <div class="me-3">
                        <i class="fa-regular fa-user"></i>
                        <span class="login">Log in</span>
                    </div>
                    <button class="my-btn-large me-3">
                        <span class="text-uppercase">Sign Up</span>
                    </button>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
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
@media only screen and (max-width: 1200px){
.logo-img{
    display:none
}
}
.login:hover{
    cursor:pointer;
}
#top-header {
    color: gray;
    padding:20px 0;
    font-size: 0.8em;
    border-bottom: 1px solid $gray;
    div:hover{
        cursor:pointer;
    }
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
        i:hover{
            cursor:pointer
        }
    }
    .fa-user:hover{
        cursor:pointer
    }
    li{
        text-decoration: none;
        list-style: none;
        padding:0 10px
    }
}
#bottom-header{
    padding:20px 0;
    font-size: 0.9em;
    .header-category-menu{
        color: grey;
        font-size: 0.9em;
        span{
            font-weight: 600;
            margin-left: 5px;
        }
    }
    input{
        background-color: $gray;
        border: 1px solid $gray;
        width:100%;
        height: 44px;
        padding: 20px;
        display:block
    }
    .fa-solid.fa-bullhorn,.fa-briefcase,.fa-user,.fa-heart{
    color: $blue;
    margin-right: 10px;
    }
    .blue-hover{
        font-size: 0.9em;
    }
    .blue-hover:hover{
        color:$blue;
        cursor: pointer;
    }
    .login{
        color:blue;
        font-size: 0.9em
    }
    .fa-heart.fa-regular{
        font-size: 2em;
    }
    #searchbar{
        width:600px
    }
} 
</style>