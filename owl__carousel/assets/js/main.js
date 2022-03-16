var  owl = $('#service').owlCarousel({
    items:1,
    loop:true,
    dots:true,
    singleItem:false,
    navigation:true,
    center:true,
    lazyLoad:false,
    stagePadding:20,
    rtl:false,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',

    responsive : {
        0: {
            items:1
        },

        600: {
            items:3,

        },
        1000:{
            items:5
        }
    }
    
});


$('#previous').click(function(){
    owl.trigger('prev.owl.carousel', [500]);
});

$('#next').click(function(){
    owl.trigger('next.owl.carousel', [500]);
});