
// swiper API data input 

const apiKeySwiper = "&apiKey=1423e6422183485b87593f339a8afa9e";
const endpointURLSwiper = "https://newsapi.org/v2/everything?";
const parametersSwiper = "q=";
const sourcesSwiper = "sources=";
const domainsSwiper = "domains=";
const topHeadlineSwiper = "top-headlines?"
const pageSizeSwiper = "&pageSize=60";
const pageSwiper = "&page=1"
const swiperWraper = document.getElementById('swiper-wrapper');

let swiperApi = (item) => {

    console.log(item);


    // imageNull = () => {
    //     if (item.urlToImage == null) {
    //         return `../media/people_on_train.jpg`;
    //     } else {
    //         return item.urlToImage;
    //     }
    // }
    let dispalaySwiper = (item) => {
        swiperWraper.innerHTML += `
        <div class="swiper-slide" id="swiper_item">
            <img src="${item.urlToImage}" alt="landingpage.png">
        <h6>trending Now</h6>
        <p>${item.title}</p>
    </div>
        `
    }

    item.forEach(dispalaySwiper);

}

// --------------------------------- swiper
let swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    centeredSlides: true,
    speed: 2000,
    // loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// swiper 
$.ajax({
    type: "GET",
    url: endpointURLSwiper + parametersSwiper + "people" + "&page=1" + "&pageSize=8" + pageSizeSwiper + apiKeySwiper,
    success: (data) => {
        // console.log(data);
        // push API data into these functions 
        swiperApi(data.articles);

    },
    error: (error) => {
        console.log(error)
    }
})