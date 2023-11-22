<template>
    <footer>
        <div class="footer-wrapper pt-5 pb-4">
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
                        <ul class="d-flex justify-content-start flex-wrap">
                            <li class="my-margin-li mb-2">
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Courses</a>
                            </li>
                            <li class="my-margin-li mb-2">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Shortcodes</a>
                            </li>
                            <li class="my-margin-li">
                                <a href="#">Typography</a>
                            </li>
                            <li>
                                <a href="#">Memberships</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h3>Blog</h3>
                        <div class="blog-card d-flex flex-nowrap mb-4">
                            <img src="/images/blog-1.jpeg" alt="blog-1">
                            <div class="ms-3">
                                <h5 class="blog-title">
                                    Our main target is to “Developing Yourself as a Leader”
                                </h5>
                                <div class="d-flex flex-nowrap align-items-center">
                                    <hr class="me-2">
                                    <span class="blog-date"> August 9, 2018</span>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card d-flex flex-nowrap">
                            <img src="/images/blog-2.jpeg" alt="blog-2">
                            <div class="ms-3">
                                <h5 class="blog-title">
                                    Those Other College Expenses You Aren`t Thinking About
                                </h5>
                                <div class="d-flex flex-nowrap align-items-center">
                                    <hr class="me-2">
                                    <span class="blog-date">June 3, 2015</span>
                                </div>
                            </div>
                        </div>
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
    ul{
        padding-left: 1rem;
        li{
            width:100px
        }
        a{
            text-decoration:none;
            color:gray;
            font-size: 1.1em;
        }
        a:hover{
            color:$blue
        }
        .my-margin-li{
            margin-right: 20px
        }
    }
    h5{
        margin-bottom:0
    }
    .blog-card{
        max-height: 75px;
    }
    .blog-title{
        font-size: 1.1em;
        font-weight: 600;
    }
    .blog-date{
        color:rgb(209, 203, 203);
        font-size: 1.1em;
    }
    hr{
        color:gray;
        width:15px
    }
}
   
</style>