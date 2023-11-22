<template>
    <main>
        <div id="developers-feedbacks" class="position-relative">
            <img src="/images/Tim-Sab.jpg" alt="tim-sab">
            <div class="feedback-text position-absolute">
                <h3>Come as you are</h3>
                <p class="my-4">MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.</p>
                <span class="d-block developer-name">Tim Sab</span>
                <span class="developer-role">Product Manager, Apple Inc</span>
                <i class="fa-solid fa-play position-absolute"></i>
            </div>
        </div>
    </main>
</template>

<script>

    export default {
        name:'MainComponent'
    }
</script>

<style lang="scss" scoped>
#developers-feedbacks{
    width:100%;
    height:670px;
    overflow:hidden;
}
img{
    width:100%;
    height:100%;
    display:block;
    object-fit:cover
}
.feedback-text{
    top:10%;
    left:15%;
    width: 700px;
    height: 500px;
    z-index:1000;
    background-color:white;
    padding:80px;
    /* letter-spacing: 0.5px; */
    h3{
        font-size: 2.3em;
        font-weight: 400
    }
    p{
        font-size: 1.2em;
        color:gray;
        font-weight:300;
    }
    .developer-name{
        font-weight:600;
        font-size:1.2em
    }
    .fa-solid.fa-play{
        color:white;
        font-size:2.7em;
        top:50%;
        left: 99%;
        transform: translate(0, -50%);
    }
}
</style>