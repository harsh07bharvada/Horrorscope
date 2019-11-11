$(document).ready(function(){
    
  //GLIDER 
    new Glider(document.querySelector('.glider'), {
        // Mobile-first defaults
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable:true,
        scrollLock: true,
        
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 'auto',
              slidesToScroll: 'auto',
              dots: '#dots',
              itemWidth: 150,
              duration: 0.25
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              dots: '#dots',
              itemWidth: 150,
              duration: 0.25
            }
          }
        ]
      });

      //SCROLL-ANIMATIONS

      // var t1 = new TimelineMax();
      // const controller = new ScrollMagic.Controller();

      // t1
      // .to(".aries-img",0.5,{
      //   margin:0, ease: Power4.easeOut

      // })
      // .to(".aries-img-upper-wrapper",0.5,{
      //   justifyContent: "flex-center", ease: Power4.easeOut
      // })
      // .to(".aries-white-box",0.5,{
      //   margin:0, ease: Power4.easeOut

      // });

      // const scene = new ScrollMagic.Scene({
      //   triggerElement:".each-zodiac",
       
      // })
      // .setPin(".each-zodiac")
      // .setTween(t1)
      // .addTo(controller);

      // function updatePercentage(){
      //   t1.progress();
      //   console.log('hello');
      // }



  });