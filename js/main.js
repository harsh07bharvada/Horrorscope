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

      var arr = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];

      

      //SCROLL-ANIMATIONS

      var controller = new ScrollMagic.Controller();
      var t1 = new TimelineMax();
      t1.from(".zodiac-img",0.5,{ ease: Power4.easeOut,x:"-=100"},0)
      .from(".white-box",1.2,{ease: Power4.easeOut,width:0,},"-=0.1")
      .to(".zodiac-name-text",0.5,{ease: Power4.easeOut,opacity:1})
      .to(".month-text",0.5,{ease: Power4.easeOut,opacity:1})
      .to(".data-box",0.5,{ease: Power4.easeOut,opacity:1})
      ;
      var scene = new ScrollMagic.Scene({
        triggerElement:".each-zodiac"
      })
      .setTween(t1)
      .addIndicators(true)
      .addTo(controller);


      //STATIC DATA SETTING FUNCTION

      




  });