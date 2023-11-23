<template>
    <img class="mb-3" :src="`/images/` + img" :alt="title">
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
img{
        width:100%
    }
</style>