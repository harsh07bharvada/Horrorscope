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

      arr.forEach((item, index) =>{

        var section_str = "."+item + "-section-";
        var link_str = "."+item+"-link";
        $(link_str).click(function(e){

          
          e.preventDefault();
	
          var position = $("."+item + "-section").offset().top;

          $("body, html").animate({
            scrollTop: position
          } ,500,/* speed */ 
          );
        })


        var controller = new ScrollMagic.Controller();
        var t1 = new TimelineMax();
        t1.from(section_str+"zodiac-img",0.5,{ ease: Power4.easeOut,x:"-=100"},0)
        .from(section_str+"white-box",1.2,{ease: Power4.easeOut,width:0,},"-=0.1")
        .to(section_str+"zodiac-name-text",0.5,{ease: Power4.easeOut,opacity:1})
        .to(section_str+"month-text",0.5,{ease: Power4.easeOut,opacity:1})
        .to(section_str+"data-box",0.5,{ease: Power4.easeOut,opacity:1})
        ;
        var scene = new ScrollMagic.Scene({
          triggerElement:section_str+"each-zodiac"
        })
        .setTween(t1)
        .addTo(controller); 


        });               
      

      //SCROLL-ANIMATIONS

      


      //STATIC DATA SETTING FUNCTION

      




  });