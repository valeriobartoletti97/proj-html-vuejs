<template>
    <div class="overflow-hidden img-wrap">
        <img class="mb-3" :src="`/images/` + img" :alt="title">
    </div>
    <div class="d-flex justify-content-between">
        <h6>{{ title }}</h6>
        <span>{{ courseNumber }} Courses</span>
    </div>
</template>

<script>
import {store} from '../data/store'
    export default {
        name:'HeroCardComponent',
        props:{
           img:String,
           title:String,
           courseNumber:String
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
.img-wrap{
    object-fit:cover;
}
img{
        width:100%;
        height:100%;
        transition: 0.2s all ease-in-out;
    }
    span{
        font-size:0.9em
    }
    img:hover{
        transform: scale(1.05);
    }
</style>