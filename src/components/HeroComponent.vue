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
                </div>
            </div>
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