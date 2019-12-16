
$(document).ready(function(){
    

  $(".stagger").hover(
    function() {
       TweenLite.to($(this), 0.3, {scale:1.1});
    },
    function() {
       TweenLite.to($(this), 0.15, {scale:1});  
    }
 );

  
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
              //dots: '#dots',
              itemWidth: 150,
              duration: 0.25
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              //dots: '#dots',
              itemWidth: 150,
              duration: 0.25
            }
          }
        ]
      });

        var cont = new ScrollMagic.Controller();
        var main = new TimelineMax();
        main.from(".black-box",1.7,{ ease: Power4.easeOut,width:0},0)
        .from(".main-heading-box",1.7,{ease: Power4.easeOut,width:0,},0)
        .to(".main-heading-text",1.7,{ease: Power4.easeOut,opacity:1,},1)
        .from(".main-heading-text",1.0,{ease: Power4.easeOut,y:20},1)
        .to(".sub-heading-text",0.5,{ease: Power4.easeOut,opacity:1},2)
        .from(".sub-heading-text",0.9,{ease: Power4.easeOut,y:20},2)
        .to(".slider",0.1,{ease: Power4.easeOut,opacity:1},2)
        .staggerFrom(".stagger",0.8, {opacity:0, stagger:0.2, x:"-=25"},2)
        ;
        var scene1 = new ScrollMagic.Scene({
          triggerElement:"body"
        })
        .setTween(main)
        .addTo(cont); 
        

      var arr = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];

      arr.forEach((item, index) =>{

            var section_str = "."+item + "-section-";
            var link_str = "."+item+"-link";
            var month_text = item+"-section-month-text";
            var content_text = item + "-section-data-box span";

            fetch('https://api-horroscope.herokuapp.com/graphql', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ query: '{ zodiac (sign_name : "'+item+'"){ sign_name , date_range , good_traits{ trait }, bad_traits{ trait },famous_people{ name } } }' }),
            })
            .then(res => res.json())
            .then(res => {
              console.log(res.data.zodiac.good_traits);
              var mainContentData = mainContentSetting(res.data.zodiac.good_traits,res.data.zodiac.bad_traits,res.data.zodiac.famous_people);
              $("."+month_text).html(res.data.zodiac.date_range);
              $("."+content_text).html(mainContentData);
            });

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
            t1.from(section_str+"zodiac-img",0.7,{ ease: Power4.easeOut,x:"-=100"},0)
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
      
//DATA SETTING FUNCTIONS

      var mainContentSetting = (good_traits,bad_traits,famous_people) =>{
        
        var returnStr = "You are ";
        good_traits.forEach((item,index)=>{

          if(index != good_traits.length-1)
          {
            returnStr+= item.trait + ", ";
          }
          else{
            returnStr+= item.trait +" but ";
          }
           
        });
        bad_traits.forEach((item,index)=>{

          if(index != bad_traits.length-1)
          {
            returnStr+= item.trait + ", ";
          }
          else{
            returnStr+= item.trait +". You share your zodiac birthday with " ;
          }
           
        });
        famous_people.forEach((item,index)=>{

          if(index != famous_people.length-1)
          {
            returnStr+= item.name + ", ";
          }
          else{
            returnStr+= item.name +"." ;
          }
           
        });

        console.log(returnStr);
        return returnStr;

      }

      




  });