
//instead of src="url" set images to data-img="url"
const images = document.querySelectorAll("[data-img]");

//assigns source url "aka" loading image
function preloadImage(img){
    const src = img.getAttribute("data-img");
    if(!src){
        return;
    }
    img.src = src;
}

//this dictates when image is loaded this case 500px,
//means that image will load when scrolling is just below our point of view
//this can vary depending on css min-width and height of [data-img]
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 500px 0px"
};

//create's an observer on the page
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            //removes observer when image is loaded in
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

//assigns each image an observer
images.forEach(image => {
    imgObserver.observe(image);
});