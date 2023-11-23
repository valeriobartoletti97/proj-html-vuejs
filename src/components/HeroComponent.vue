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
    <div class="row flex-nowrap justify-content-center">
        <div class="col-4 course-card me-5">
            <i class="fa-solid fa-earth-europe d-block mb-4"></i>
            <h5 class="mb-4">Worldwide Trends</h5>
            <p>Our services and collections adhere to cutting-edge solutions in the design world.</p>
        </div>
        <div class="col-4 course-card me-5">
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
</template>

<script>
    export default {
        name:'HeroComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;
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