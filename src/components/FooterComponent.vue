<template>
    <footer>
        <div class="footer-wrapper mt-5">
            <div class="container">
                <div class="row flex-nowrap justify-content-between">
                    <div class="col-3">
                        <h3>About</h3>
                        <p>
                            <span class="my-text-blue">Masterstudy</span>
                            is Education WordPress theme featured by Learning Management System (LMS) for online education.
                            Developed by 
                            <span class="my-text-blue">StylemixThemes</span>
                        </p>
                        <div class="footer-icons d-flex flex-nowrap">
                            <i class="fa-brands fa-facebook me-3"></i>
                            <i class="fa-brands fa-twitter me-3"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div class="col-3">
                        <h3>Contact</h3>
                        <p>USA, California 20, First Avenue, California</p>
                        <span class="d-block">+1 212 458 300 32</span>
                        <span class="d-block mb-3">+1 212 375 24 14</span>
                        <a href="#" class="footer-email">info@masterstudy.com</a>
                    </div>
                    <div class="col-3">
                        <h3>Pages</h3>
                    </div>
                    <div class="col-3">
                        <h3>Blog</h3>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name:'FooterComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;
footer{
    font-size:0.8em;
    h3{
        font-size: 1.4em;
        font-weight: 700;
        margin-bottom: 30px
    }
    .my-text-blue{
        color: $blue;
    }
    .my-text-blue:hover{
        cursor:pointer;
    }
    .footer-icons{
        color:rgb(158, 157, 157);
        font-size: 1.6em
    }
    .footer-email{
        color:rgb(158, 157, 157);
        text-decoration: none;
    }
}
   
</style>