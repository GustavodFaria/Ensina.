@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Plus+Jakarta+Sans&family=Rubik:wght@300;400;500;600&display=swap');


:root{

    --green: #00e77f;
    --white:#fff;
    --light-white: #aaa;
    --black: #3d3d3d;
    --light-bg: #4b4b4b;

}

*{
    font-family: 'Rubik', sans-serif;
    margin: 0; padding: 0px;
    box-sizing: border-box;
    outline: none; border: none;
    text-decoration: none;
    transition: .2s linear;
}

*::selection{
    background-color: var(--white);
    color: var(--black);
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 8rem;
}

::-webkit-scrollbar{
    height: .5rem;
    width: 1rem;
}

::-webkit-scrollbar-track{
    background-color:transparent;
}

::-webkit-scrollbar-thumb{
    background-color: var(--green);
    border-radius: 5rem;
}

body{
    background-color: var(--black);
}


/*header*/
section{
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}



.header{
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    background-color: var(--light-bg);
}

.header .flex{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.header .flex .logo{
    font-size: 2.5rem;
    color: var(--white);
}

.ponto{
    color: var(--green);
}


.header .flex .navbar a{
    margin-left: 2rem;
    color: var(--light-white);
    font-size: 2rem;
}

.header .flex .navbar a:hover{
    color: var(--green);
}

#menu-btn{
    cursor: pointer;
    color: var(--white);
    font-size: 2.5rem;
    display: none;
}



/*body*/

/********HOME*/
.home{
    margin-top: 6rem;
}

.home .row{
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 1.5rem;
}

.home .row .content{
    flex: 1 1 40rem;
    text-align: center;
}

.home .row .image{
    flex: 1 1 40rem;
}

.home .row .image img{
    width: 100%;
}

.home .row .content h3{
    margin-bottom: 1rem;
    font-size: 10rem;
    color: var(--white);
    line-height: 1;
}

.home .row .content h3 span{
    color: var(--green);
}

.btn{
    display: inline-block;
    margin-top: 1rem;
    border-radius: 5rem;
    background-color: var(--light-bg);
    cursor: pointer;
    color: var(--white);
    font-size: 1.8rem;
    padding: 1rem 3rem;
}

.btn:hover{
    background-color:  var(--white);
    color: var(--green);
}

.count .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap: 1.5rem;
    align-items: flex-start;
}

.count .box-container .box{
    background-color:var(--light-bg);
    border-radius: .5rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5.5rem;
    transition: .5s linear;
}

.count .box-container .box:hover{
    box-shadow: 5px 5px 5px var(--green);
}

.count .box-container .box i{
    font-size: 5rem;
    color: var(--green);
}

.count .box-container .box .content h3{
    font-size: 2rem;
    color:  var(--white);
    margin-bottom: .5rem;
}

.count .box-container .box .content p{
    font-size: 1.6rem;
    color: var(--light-white);
}

.about .row{
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.about .row .image{
    flex: 1 1 40rem;
}

.about .row .image img{
    width: 100%;
}

.about .row .content{
    text-align: center;
    flex: 1 1 40rem;
}

.about .row .content h3{
    font-size: 3rem;
    color: var(--white);
}

.about .row .content p{
    padding: 1rem 0;
    line-height: 2;
    font-size: 1.6rem;
    color: var(--light-white);
}

.heading{
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 4rem;
    color: var(--white);
    text-transform: uppercase;
}

.heading span{
    color: var(--green);
}

.courses .slide{
    width: 30rem;
    background-color: var(--light-bg);
    border-radius: 5rem;
    text-align: center;
    margin-bottom: 4rem;
    padding: 2rem;
}

.courses .slide img{
    height: 25rem;
    width: 100%;
} 

.courses .slide h3{
    margin: 1.5rem 0;
    font-size: 2rem;
    color: var(--white);
}

.courses .slide p{
    line-height: 2;
    font-size: 1.6rem;
    color: var(--light-white);
}

.swiper-pagination-bulleSt{
    background-color: var(--white);
}

.swiper-pagination-bullet-active{
    background-color: var(--green);
}

.teachers .slide{
    position: relative;
    width: 40rem;
    overflow: hidden;
    margin-bottom: 4rem;
}

.teachers .slide img{
    height: 55rem;
    width: 100%;
    object-fit: cover;
    border: .5rem;
    border-radius: 5rem;
}

.teachers .slide h3{
    margin: 1.5rem;
    font-size: 2rem;
    color: var(--white);
    text-align: center;
}

.teachers .slide .share{
    position: absolute;
    top: 1rem; left: -10rem;
}

.teachers .slide:hover .share{
    left: 2em;
}

.teachers .slide .share a{
    display: block;
    margin-top: 1rem;
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    border-radius: .5rem;
    background-color: var(--white);
    color: var(--black);
    text-align: center;
    font-size: 2rem;
}

.teachers .slide .share a:hover{
    background-color: var(--green);
    color: var(--white);
}

.reviews-slider .slide{
    width: 35rem;
    border-radius: .5rem;
    background-color: var(--light-bg);
    padding: 2rem;
    margin-bottom: 4rem;
}

.reviews-slider .slide p{
    line-height: 2;
    font-size: 1.6rem;
    color: var(--light-white);
}

.reviews-slider .slide .user{
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.reviews-slider .slide .user img{
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    object-fit: cover;
}

.reviews-slider .slide .user h3{
    font-size: 2rem;
    color: var(--white);
    margin-bottom: .5rem;
}

.reviews-slider .slide .user .stars i{
    font-size: 1.5rem;
    color: var(--green);
}

.contact .row{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.contact .row .image{
    flex: 1 1 40rem;
}

.contact .row .image img{
    width: 100%;
}

.contact .row form{
    flex: 1 1 40rem;
}

.contact .row form .box{
    width: 100%;
    margin: 1rem;
    margin-bottom: 2rem;
    border-radius: .5rem;
    background-color: var(--light-bg);
    font-size: 1.8rem;
    color: var(--white);
    padding: 1.4rem;
    text-transform: none;
}

.contact .row form span{
    font-size: 1.6rem;
    color: var(--light-white);
    margin-left: .5rem;
    cursor: pointer;
}

.radio{
    display: flex;
    margin-top: 1rem;
}

.contact .row form .radio #female{
    margin-left: 2rem;
    margin-bottom: 1rem;
} 

.contact .row form .radio #male{
    margin-left: 1rem;
    margin-bottom: 1rem;
} 

label main{
    margin-left: .5rem;
    color: var(--light-white);
    font-size: 1.6rem;
}

.contact .row form .radio input{
    appearance: none;
    height: 2rem;
    width: 2rem;
    background-color: var(--light-white);
    cursor: pointer;
}

.contact .row form .radio input:checked{
    background-color: var(--green);
    border-radius: 5rem;
}


.contact .row form .radio #female:checked ~label [fpr="male"]{
    color: var(--green);
}
.contact .row form .radio #female:checked ~label [fpr="female"]{
    color: var(--green);
}

footer{
    background-color: var(--light-bg);
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer span{
    font-size: 1.6rem;
    text-transform: uppercase;
    color: var(--light-white);
}
    

/******HOME*/









/*media queries*/

@media(max-width:991px){
    html{
        font-size: 55%;
    }

    .home .row .content h3{
        font-size: 8rem;
    }
}


@media(max-width:768px){
    #menu-btn{
        display: inline-block;
    }
    
    #menu-btn.fa-times{
        transform: rotate(180deg);
    }

    .header .flex .navbar{
        position: absolute;
        top: 99%; left: 0; right: 0;
        border-top: .1rem solid var(--light-white);
        border-bottom: .1rem solid var(--light-white);
        background-color: var(--light-bg);
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }

    .header .flex .navbar.active{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    
    .header .flex .navbar a{
        display: block;
        margin: 2rem;
    }

    .home .row .content h3{
        font-size: 5rem;
    }

    .count .box-container .box:hover{
        box-shadow: 0px 0px 0px;
        zoom: 100%;
    }
    .about .row .image img{
        display: none;
    }

    .about .row .content{
        border-top: 1px solid var(--white);
        border-bottom: 1px solid var(--white);
        padding: 1rem;
    }
}


@media(max-width:450px){
    html{
        font-size: 50%;
    }
    .heading{
        font-size: 3rem;
    }
}
