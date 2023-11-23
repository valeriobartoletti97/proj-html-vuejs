<template>
  <div class="hero-wrapper overflow-hidden">
    <div class="container">
        <div class="row">
            <div class="col-6 hero-title">
                <h1 class="mb-4">Start Investing in Yourself</h1>
                <p class="subtitle mb-5">With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.</p>
                <button class="my-btn-large">
                    <span class="text-uppercase">Join for free</span>
                </button>
            </div>
            <div class="col-6 hero-img position-relative">
                <div class="position-absolute">
                    <img src="/images/base.png" alt="hero" class="main-img">
                    <img src="/images/book2.png" alt="book" class="position-absolute book-2">
                    <img src="/images/book1.png" alt="book" class="position-absolute book-1">
                    <img src="/images/magnifier.png" alt="magnifier" class="position-absolute magnifier">
                    <img src="/images/bubblespeech.png" alt="magnifier" class="position-absolute bubblespeech">
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="container course-card-wrapper">
    <div class="row flex-nowrap">
        <div class="col-4 course-card me-3">
            <i class="fa-solid fa-earth-europe d-block mb-4"></i>
            <h5 class="mb-4">Worldwide Trends</h5>
            <p>Our services and collections adhere to cutting-edge solutions in the design world.</p>
        </div>
        <div class="col-4 course-card me-3">
            <i class="fa-solid fa-desktop d-block mb-4"></i>
            <h5 class="mb-4">Complex Online Education</h5>
            <p>We have everything for effective learning and delivery of assignments by students.</p>
        </div>
        <div class="col-4 course-card">
            <i class="fa-solid fa-calendar-check d-block mb-4"></i>
            <h5 class="mb-4">Brand certificate</h5>
            <p>After completing the course, you will receive a certificate confirming your knowledge.</p>
        </div>
    </div>
  </div>
  <div class="hero-card-wrapper">
    <div class="container">
        <div class="row mb-4 flex-wrap">
            <div class="col-8 course-big">
                <HeroCardComponent :img="this.store.categories[0].img" :title="this.store.categories[0].name" :courseNumber="this.store.categories[0].coursesNumber"/>
            </div>
            <div class="col-4">
                <div class="double-card">
                    <HeroCardComponent :img="this.store.categories[1].img" :title="this.store.categories[1].name" :courseNumber="this.store.categories[1].coursesNumber"/>
                </div>
                <div>
                    <HeroCardComponent :img="this.store.categories[2].img" :title="this.store.categories[2].name" :courseNumber="this.store.categories[2].coursesNumber"/>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4" v-for="(card,index) in lastCategories" :key="card.id">
                <HeroCardComponent :img="card.img" :title="card.name" :courseNumber="card.coursesNumber"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {store} from '../data/store'
import HeroCardComponent from './HeroCardComponent.vue';
    export default {
    name: "HeroComponent",
    components: { HeroCardComponent },
    data() {
        return {
            store
        };
    },
    computed: {
        lastCategories() {
            return this.store.categories.filter(item => item.id > 3);
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;
.hero-card-wrapper{
    margin-bottom: 100px;
    .double-card{
        margin-bottom:28px
    }
    img{
        width:100%;
    }
}
.fa-earth-europe,.fa-desktop,.fa-calendar-check{
    color: $blue;
    font-size: 3.5em
}
.course-card{
    background-color: #F0F4FA;
    padding:30px;
    font-weight:300;
    margin-bottom: 100px;
    h5{
        font-size:1.1em
    }
    p{
        font-size:0.9em;
    }
}
.bubblespeech{
    right:7%;
    top:15%
}
.magnifier{
    bottom:24%;
    right:12%
}
.book-1{
    right:7%;
    top:26%
}
.book-2{
    bottom:7%;
    right:26%
}
.hero-title{
    padding:100px 0;
}
    .hero-wrapper{
        padding: 100px 0;
    }
    h1{
        font-size: 3.5em;
        font-weight: 300;
    }
    .subtitle{
        font-size:1.4em
    }
</style>