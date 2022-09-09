$('.owl-one').owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    padding: 60,
    items: 4,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsiveClass:true,
    dots: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        }
  }
})

$('.owl-two').owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    padding: 30,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
    }
})

function changeTab(event, tabId){
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}
