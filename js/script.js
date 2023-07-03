/*header section starts*/

let menuButton = document.getElementById('menu_btn')
let svgs = document.querySelectorAll('#menu_btn svg')
let menu = document.querySelector('.global-nav__menu')

let menuBoolean = false

menuButton.addEventListener('click', () => {
    if(menuBoolean == false) {
        menuBoolean = true;
        svgs[0].style.display = 'none';
        svgs[1].style.display = 'inline-block'
    } else {
        svgs[0].style.display = 'inline-block';
        svgs[1].style.display = 'none';
        
        menuBoolean = false;
    }
    menu.classList.toggle('global-nav__menu--active')
})

/*this is for furniture dropdown icon position */
let firstNavItem = document.getElementsByClassName('global-nav__primary-link')[0]
firstNavItem.style.width = '111px'
firstNavItem.style.display = 'inline-block'
/*furniture dropdown icon position ends*/
/**About us */

let aboutUs = document.getElementsByClassName('global-nav__primary-link')[2]
aboutUs.style.width = '99px'
aboutUs.style.display = 'inline-block'

/*this is for slider*/
let slide = document.querySelector('.global-nav')
console.log(slide)
let counter = 0;

const slideChanger = () => {  
    /*slider-pagination__circle manipulation*/
    let circles = document.querySelectorAll('.slider-pagination__circle')

    if(counter === 0) {
    circles[1].style.backgroundColor = 'snow'
    circles[2].style.backgroundColor = 'snow'
    slide.style.backgroundImage = `url('./images/image 11.png')`
    circles[counter].style.backgroundColor = '#f79489'
    counter++
    } else if (counter === 1) {
        circles[0].style.backgroundColor = 'snow'
        circles[2].style.backgroundColor = 'snow'
        slide.style.backgroundImage = `url('./images/image 3.png')`
        circles[counter].style.backgroundColor = '#f79489'
        counter++
    } else if (counter === 2) {
        circles[0].style.backgroundColor = 'snow'
        circles[1].style.backgroundColor = 'snow'
        slide.style.backgroundImage = `url('./images/Mask Group.png')`
        circles[counter].style.backgroundColor = '#f79489'
        counter = 0
    }

}
setInterval(slideChanger, 1999)
/**slider ends */
/*header section ends*/

/*Main section starts*/
/*Main-left-wing starts*/
let plusClick = document.querySelectorAll(".span-collapse")
let mainLeftParagraphs = document.querySelectorAll('.main-left-collapse__paragraph')
plusClick.forEach((plusButton, index) => {
    plusButton.addEventListener('click', ()=>{
        mainLeftParagraphs[index].classList.toggle('main-left-collapse__paragraph--active')
        console.log('plus click')
    })
})
/*Main-left-wing ends*/
/*Main section ends*/

/*products-section starts*/
const products = [
    {
        name: "Product",
        image: './images/image.png',
        category: "Category",
        rating: 5,
        price: 795.000
    },
    {
        name: "Product",
        image: './images/image1.png',
        category: "Category",
        rating: 5,
        price: 595.000
    },
    {
        name: "Product",
        image: './images/image2.png',
        category: "Category",
        rating: 5,
        price: "2.555.000"
    },
    {
        name: "Product",
        image: './images/image3.png',
        category: "Category",
        rating: 5,
        price: "1.500.000"
    }
]

let productsSection = document.querySelector('.products-section')
products.forEach((item, index) => {
    productsSection.innerHTML += `<div class='product${index} product--active'><img class='product__image' src=${item.image} alt='product'/>
        <h3 class='product__name'>${item.name}</h3>
        <h4 class='product__category'>${item.category}</h4>
        <div class='rating'>
            <img class='rating-star rating-product${index}' src='./images/starActive.png'/>
            <img class='rating-star rating-product${index}' src='./images/starActive.png'/>
            <img class='rating-star rating-product${index}' src='./images/starActive.png'/>
            <img class='rating-star rating-product${index}' src='./images/starActive.png'/>
            <img class='rating-star rating-product${index}' src='./images/starActive.png'/>
        </div>
        <p class='product__price'>IDR ${item.price}</p>
    </div>`
})
/*5 Star Rating division starts*/
let ratingStarsProduct0 = [...document.getElementsByClassName('rating-product0')]
let ratingStarsProduct1 = [...document.getElementsByClassName('rating-product1')]
let ratingStarsProduct2 = [...document.getElementsByClassName('rating-product2')]
let ratingStarsProduct3 = [...document.getElementsByClassName('rating-product3')]

const executeRating = stars => {
    const starActive = 'images/starActive.png'
    const starInActive = 'images/starInActive.png'

    const starsLength = stars.length
    let i

    stars.map(star => {
        star.addEventListener('click', () => {
            i = stars.indexOf(star)

            if (star.getAttribute('src') === starInActive) {
                for (i; i >= 0; --i) {
                    stars[i].setAttribute('src', starActive)
                }
            } else {
                for (i; i < starsLength; ++i) {
                    stars[i].setAttribute('src', starInActive)
                }
            }
        })     

    })
}
executeRating(ratingStarsProduct0)
executeRating(ratingStarsProduct1)
executeRating(ratingStarsProduct2)
executeRating(ratingStarsProduct3)
/*5 Star Rating division ends*/
/*products-section ends*/

/*Feedback section starts*/
const comments = [
    {
        heading: 'Best planning service',
        paragraph:'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so\
            helpful and friendly and went above and beyond to help me configure my perfect walk in wardrobe room.',
        author: 'John Doe',
        image: './images/avatar-1.png',
        job: 'Project manager at cupalo'
    },
    {
        heading: 'Flexible and reliable',
        paragraph:'Terrific work from beginning to end can work any angle\
            from minimal help to complete project handling professional without a doubt! Love!',
        author: 'Woods Moniq',
        image: './images/avatar-2.png',
        job: 'Freelancer'
    },
    {
        heading: 'solution innovative',
        paragraph:'I loved working with Daria shady rhymes for about 2 years and highly recommend anyone looking\
            for an interior designer agency who brings creativity but designs something that fits YOU and your style.',
        author: 'Denis Rara',
        image: './images/avatar-3.png',
        job: 'Architect at BPPLU'
    },
]
let commentsSection = document.querySelector(".feedback-section")
comments.forEach((comment, index) => {
    commentsSection.innerHTML += `<div class="feedback-section__comment${index}">
        <h3 class="feedback-section__comment-heading">${comment.heading}</h3>
        <p class="feedback-section__comment-paragraph">${comment.paragraph}</p>
        <div class="feedback-section__author">
            <img class="feedback-section__author-image" src="${comment.image}"/>
            <div class="feedback-section__author-info">
                <h4 class="feedback-section__author-name">${comment.author}</h4>
                <p class="feedback-section__author-job">${comment.job}</p>
            </div>
        </div
    </div>`
})