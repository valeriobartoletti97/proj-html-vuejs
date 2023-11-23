<template>
    <div class="single-curses-card position-relative">
        <div class="carousel-img">
            <img :src="`/images/` + img" :alt="title">
        </div>
        <div class="courses-card-description">
            <span class="badge position-absolute text-uppercase" v-if="badge">{{badge}}</span>
            <span class="d-block mb-2 card-category">{{category}}</span>
            <h4 class="pb-3">{{title}}</h4>
            <div class="d-flex justify-content-end">
                <div>
                    <span class="old-price d-block" v-if="oldPrice">{{oldPrice}}</span>
                    <span class="price">{{price}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'PopularCoursesCard',
    props:{
        img:String,
        category:String,
        title:String,
        oldPrice:String,
        price:String,
        badge:String
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.badge{
    padding:5px 8px;
    color:white;
    top:10px;
    right:10px;
    background-color:$green;
    font-size:0.8em;
}
img{
    width:100%;
    height: 100%;
}
.carousel-img:hover{
    cursor:pointer;
}
.courses-card-description{
    padding: 15px;
    background-color:white;
    height:157px;
    .price{
        color:black;
        font-weight: 600
    }
    .old-price{
        color:rgb(199, 199, 199);
        text-decoration: line-through;
        font-size: 0.8em;
        text-align: center;
    }
    .card-category{
        color:rgb(180, 180, 180);
        font-size: 0.9em;
    }
    h4{
        border-bottom: 1px solid rgb(197, 197, 197);
        font-size:1em
    }
}
.carousel-img{
    width:100%;
    height:140px;
    object-fit:cover

}
.single-curses-card{
    margin:0 10px;
    min-width: calc((100% / 6) - 20px);
    border: 1px solid white
}
</style>