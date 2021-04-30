;(function($){

    var popo = {
        btn: 0,
        init:function(){
            this.scrollEventFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
            this.modal3dGalleryFn();

        },

        scrollEventFn:function(){

            var scrollOld = 0;
            var scrollNew = 0;
            var $win   =$(window);
            var $header   =$('#header');
            var result    = null;
            var that = this;

            

            function scrollFn(){

                scrollNew = $win.scrollTop();              

                var scr = function(){
                    result = scrollOld - scrollNew > 0 ? 'UP' : 'DOWN' ;
                    // console.log('old',scrollOld);
                    // console.log('new',scrollNew);
                    // console.log('old-new',scrollOld-scrollNew);                   
                    
                }
                scr();

                if( $win.scrollTop() == 0 ){
                    $header.removeClass('addHide');
                    $header.removeClass('addShow');
                }
                else{
                    if(result == 'UP' ){
                        
                        if(that.btn == 1){                            
                            $header.removeClass('addShow');
                            $header.addClass('addHide');
                        }
                        else{ 
                            $header.removeClass('addHide');
                            $header.addClass('addShow');
                        }
                        
                    }

                    if(result == 'DOWN' ){                       

                        if(that.btn == 1){
                            $header.removeClass('addHide');
                            $header.addClass('addShow');
                        }
                        else{
                            $header.removeClass('addShow');
                            $header.addClass('addHide');
                        }
                    }
                }
                scrollOld = scrollNew ;
             
                        
            }



            $win.scroll(function(){
                scrollFn();
            });

        },

        headerFn:function(){

            var $window     = $(window);
            var $mainBtn    = $('#header .main-btn');
            var $mainBtn1   = $('#header .main-btn1');
            var $mainBtn4   = $('#header .main-btn4');
            var $subBtn     = $('#header .sub-btn');
            var $subSubBtn  = $('#header .sub-sub-btn');

            var $sub       = $ ('#header .sub');
            var $subSub    = $ ('#header .sub-sub');
            var $subSubsub = $ ('#header .sub-sub-sub');

            var $navUlLi   = $('#header #nav > ul > li');

            var $iconBtn   = $('#header .icon-btn');
            var $icon      = $('#header .icon');
            var $iconSub   = $('#header #aside > ul >li');
            //var $iconSub   = $('#aside > ul');


            var $mobileBtn = $('#header .mobile-btn');
            var $nav       = $('#header #nav '); 
            var mobile     = 0; 
            var pc         = 0; 
            var $bar        = $('#header .bar');
            var $bg1        = $('#header .bg');
            var $bg2        = $('#header .bg2');
            var $bg3        = $('#header .bg3');
            var $bg4        = $('#header .bg4');



            function pcEventFn(){             
                

                $sub.stop().hide();


                $mainBtn.on({
                    mouseenter:function(){
                        $(this).next().stop().show();
                        //$bg.stop().show();
                        //$bg2.stop().show();
                    }
                });

                $navUlLi.on({
                    mouseleave:function(){
                        $sub.stop().hide();
                        //$bg.stop().hide();
                        //$bg2.stop().hide();
                    }
                });


                $mainBtn1.on({
                    mouseenter:function(){
                        $(this).next().stop().show();
                        $bg1.stop().show();
                        $bg2.stop().show();
                        $bg3.stop().hide();
                        $bg4.stop().hide();
                        
                    }
                });

                $navUlLi.on({
                    mouseleave:function(){
                        $sub.stop().hide();
                        $bg1.stop().hide();
                        $bg2.stop().hide();
                    }
                });

                $mainBtn4.on({
                    mouseenter:function(){
                        $(this).next().stop().show();
                        $bg3.stop().show();
                        $bg4.stop().show();
                    }
                });

                $navUlLi.on({
                    mouseleave:function(){
                        $sub.stop().hide();
                        $bg3.stop().hide();
                        $bg4.stop().hide();
                    }
                });


                $subBtn.on({
                    mouseenter:function(){
                        $subSub.stop().hide();
                        $(this).next().stop().show();
                    }                    
                });
                $navUlLi.on({
                    mouseleave:function(){
                        $subSub.stop().hide();
                    }
                });

                $subSubBtn.on({
                   mouseenter:function(){
                    $subSubsub.stop().hide();
                    $(this).next().stop().show();
                   }
                });

                $subSub.on({
                    mouseleave:function(){
                        $subSubsub.stop().hide();
                    }
                });


                $iconBtn.on({
                    mouseenter:function(){                        
                        $(this).next().stop().show();
                    }
                });

                // $iconSub.on({
                //     mouseleave:function(){
                //         $icon.stop().hide();
                //     }
                // });

                $iconSub.on({
                    mouseleave:function(){
                        $icon.stop().hide();
                    }
                });
               

            }
           

            function mobileEventFn(){  

                $sub.stop().hide();
                $subSub.stop().hide();
                $subSubsub.stop().hide(); 
                //$nav.stop().hide(); 
                $bar.removeClass('addHam');           
                //$nav.stop().slideUp(0); 
                //$iconSub.stop().hide();

                $mainBtn.off('mouseenter');
                $iconBtn.off('mouseenter');
                $navUlLi.off('mouseleave');
                $subBtn.off('mouseenter');
                $navUlLi.off('mouseleave');
                $subSubBtn.off('mouseenter');
                $subSub.off('mouseleave');
                $iconSub.off('mouseleave');

            } 
     


            

            function pcMobileFn(){
                if($window.innerWidth()>980){
                    pc=1;
                    mobile=0;
                    pcEventFn();
                }
                else{
                    pc=0;
                    mobile=1;
                    mobileEventFn();                 
                }
            }            
            setTimeout(pcMobileFn,100); 


            $window.resize(function(){
                pcMobileFn();             
            }); 


       

            $mainBtn.on({
                click:function(event){
                    event.preventDefault(); 
                    $nav.stop().slideToggle(300);                  
                    $sub.stop().slideUp(300);
                    $(this).next().stop().slideToggle(300);  
                                   
                }
            });

            $subBtn.on({
                click:function(event){
                    event.preventDefault();                   
                    $subSub.stop().slideUp(300);
                    $(this).next().stop().slideToggle(300);                   
                }
            });


            $subSubBtn.on({
                click:function(event){
                    event.preventDefault();                   
                    $subSubsub.stop().slideUp(300);
                    $(this).next().stop().slideToggle(300);                   
                }
            });

            

            $iconBtn.on({
                click:function(event){
                    event.preventDefault();
                    $icon.stop().slideUp(300);                    
                    $(this).next().stop().slideToggle(300);                   
                }
            });




            $mobileBtn.on({
                click:function(event){
                    event.preventDefault();
                    $bar.toggleClass('addHam');
                    $nav.stop().slideToggle(300);
                }
            });
            
        },

        section1Fn:function(){


            var $window        = $(window);
            var $winW          = $(window).width();
            var $winH          = $(window).height();

           
            var $slideWrap     = $('#section1 .slide-wrap');
            var $slideView     = $('#section1 .slide-view');
            var $slide         = $('#section1 .slide');
            var $slideW        = $('#section1 .slide').innerWidth();
            var $slideH        = $slideW*0.606060606;
            //var $slideH2       = $slideW*0.367840252;


            var cnt            = 0;
            var n              = $('#section1 .slide').length-2;
            var h              = $('#section1 .text-slide').length-2;
            
            
            var $textSlideWrap = $('#section1 .text-slide-wrap');
            var $textSlideW    = $('#section1 .text-slide').innerWidth();
            var $textSlideH    = $textSlideW * 0.682170543;
            var $textSlide     = $('#section1 .text-slide');
            
            
            
            var $nextBtn       = $('#section1 .next-btn');
            var $prevBtn       = $('#section1 .prev-btn');
            var $pageBtn       = $('#section1 .page-btn');

            var setId  = null;

           

            function resizeFn(){

                if($slideW < 660){
                    $winW = $(window).width();
                    $slideH  = $slideW*0.606060606;
                    $slide.css({width:$winW,height:$slideH});
                }

                else{
                    $winW = $(window).width();
                    $slide.css({width:$winW/* ,height:$slideH */});
    
                }

                //console.log(window.orientation);
                if(window.orientation == 0 || window.orientation ==180){
                    //$section1H     = $('#section1 .slide-wrap').innerHeight();
                    $winH = $(window).height();
                }
                else if(window.orientation == 90 || window.orientation == -90){
                    if($winW>980){
                        //$section1H     = $('#section1 .slide-wrap').innerHeight();
                        $winH = $(window).height();
                    }
                    else{
                        $winH = 600; 
                    }       
                    
                }              

                mainSlideFn();

            }
            setTimeout(resizeFn,100);

            $window.resize(function(){
                setTimeout(resizeFn,100);
            });





            // function mainNextSlideFn(){
            //     $slide.css({zIndex:1});
            //     $slide.eq(cnt==0 ? 2 : cnt-1).css({zIndex:2});
            //     $slide.eq(cnt==3 ? 4 : cnt-1).css({zIndex:3});
            //     $slide.eq(cnt).css({zIndex:4}).stop().animate({left:-$winW*cnt},0).animate({left:-$winW*cnt},600,'easeInOutExpo'); 
            //     //console.log('main',cnt);

            //     pageBtnFn();
            // }
            
            // function mainPrevSlideFn(){
            //     $slide.css({zIndex:1}).animate({left:-$winW*cnt},0);
            //     $slide.eq(cnt==2 ? 1 : cnt+1).css({zIndex:2});
            //     $slide.eq(cnt==3 ? 2 :cnt+1 ).css({zIndex:3});
            //     $slide.eq(cnt==0 ? 3 :cnt+1).css({zIndex:4}).stop().animate({left:-$winW*cnt},600).animate({left:-$winW*cnt},0); 
            //     //console.log('main-prev',cnt);  
            //     pageBtnFn();              
            // }

            // function nextSlideCountFn(){
            //     //alert(cnt);
            //     console.log('next',cnt);
            //     cnt++;
            //     if(cnt>3){cnt=0}
            //     mainNextSlideFn();
            // }

            // function prevSlideCountFn(){
            //     //alert(cnt);
            //     console.log('prev',cnt);
            //     cnt--;
            //     if(cnt<0){cnt=3}
            //     mainPrevSlideFn();
            // }



            function mainSlideFn(){
                //console.log('main',cnt);
                $slideWrap.stop().animate({left:-$winW*cnt},600,'easeInOutExpo',function(){
                    if(cnt>n-1){cnt=0}
                    if(cnt<0){cnt=n-1}
                    $slideWrap.stop().animate({left:-$winW*cnt},0);                    
                });

                /*
                $textBg.stop().animate({top:-$textBgH*cnt},800,'easeInOutExpo',function(){
                    //console.log('textSlideWrap',cnt);
                    if(cnt>n){cnt=0}
                    if(cnt<0){cnt=n}
                    $textBg.stop().animate({top:-$textBgH*cnt},0);
                });
                */
               
                
                $textSlideWrap.stop().animate({top:-$textSlideH*cnt},800,'easeInOutExpo',function(){
                    //console.log('textSlideWrap',cnt);
                    if(cnt>h-1){cnt=0}
                    if(cnt<0){cnt=h-1}
                    $textSlideWrap.stop().animate({top:-$textSlideH*cnt},0);
                });
                

                pageBtnFn();

            }




            function nextSlideCountFn(){
                //alert(cnt);
                //console.log('next',cnt);
                cnt++;
                //if(cnt>3){cnt=0}
                //mainNextSlideFn();
                mainSlideFn();
            }

            function prevSlideCountFn(){
                //alert(cnt);
                //console.log('prev',cnt);
                cnt--;
                //if(cnt<0){cnt=3}
                //mainPrevSlideFn();
                mainSlideFn();
            }



            $nextBtn.on({
                click:function(){  
                    if( !$slideWrap.is(':animated' )){
                        nextSlideCountFn(); 
                    }                  
                                     
                }
            });

            $prevBtn.on({
                click:function(){
                    if( !$slideWrap.is(':animated' )){
                        prevSlideCountFn();
                    }                    
                }
            });


            function pageBtnFn(){
                $pageBtn.removeClass('addPage');
                $pageBtn.eq(cnt>n-1?0:cnt).addClass('addPage');
            }
            pageBtnFn();

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(){                        
                        if(cnt<idx){
                            cnt=idx;
                            mainSlideFn();
                        }
                        if(cnt>idx){
                            cnt=idx;
                            mainSlideFn();
                        }
                    }
                });
            });


            
            function autoTimerFn(){
                setId = setInterval(nextSlideCountFn,3000);

            }
            autoTimerFn();



            var touchStart  = 0;
            var touchEnd    = 0;
            var mouseDown   = 0;    
            var touchYstart = 0;
            var touchYend   = 0;


            $slideView.on({
                mousedown:function(e){
                    e.preventDefault();
                    touchStart  =e.pageX;
                    touchYstart = e.pageY;
                    //touchSwipeFn();                   
                },
                touchstart:function(e){
                    e.preventDefault();            
                    touchStart=e.originalEvent.changedTouches[0].pageX;
                    touchYstart=e.originalEvent.changedTouches[0].pageY;

                },
                mouseup:function(e){
                    e.preventDefault();                    
                    touchEnd=e.pageX;
                    touchYend = e.pageY;
                    touchSwipeFn();                    
                    if(touchYstart-touchYend < -50 ){ 
                        console.log('touchYstart-touchYend',touchYstart-touchYend);
                        $('html,body').stop().animate({scrollTop:0},1000);
                    }
                    if(touchYstart-touchYend > 50 ){ 
                        console.log('touchYstart-touchYend2',touchYstart-touchYend);
                        $('html,body').stop().animate({scrollTop:$('#section3').offset().top},1000);
                    }                    
                },
                touchend:function(e){
                    e.preventDefault();
                    touchEnd = e.originalEvent.changedTouches[0].pageX;
                    touchYend = e.originalEvent.changedTouches[0].pageY;
                    touchSwipeFn();

                    
                    if(touchYstart-touchYend < -50 ){ 
                        $('html,body').stop().animate({scrollTop:0},1000);
                    }
                    if(touchYstart-touchYend > 50 ){ 
                        $('html,body').stop().animate({scrollTop:$('#section3').offset().top},1000);
                    }
                    //return false; //다음에 실행할거없다 끝났다
                },
                mouseleave:function(e){ //이전 슬라이드 안먹음
                    if(mouseDown==1){
                        mouseDown = 0;
                        touchEnd=e.pageX;                        
                        touchSwipeFn();
                    }
                }
            });



            function touchSwipeFn(){
                //console.log('start',touchStart);
                //console.log('end',touchEnd);
                //console.log('start-end',touchStart-touchEnd);

                if(touchStart > touchEnd){
                    nextSlideCountFn();
                }
                if(touchStart < touchEnd){
                    prevSlideCountFn();
                }
            }
            touchSwipeFn();

        },

        section2Fn:function(){


    


        },

        section3Fn:function(){

            var text = $('#section3 .back-text');
            var img  = $('#section3 .juice-content');
            var t = 0;

            function fadeInFn(){
                text.stop().animate({opacity:1},600,'easeInExpo',function(){
                    img.stop().animate({opacity:1},700);
                });
            }
           

            $(window).scroll(function(){
                if($(this).scrollTop()==0){
                    t=0;
                    text.stop().animate({opacity:0},0);
                    img.stop().animate({opacity:0},0);
                }
                if($(this).scrollTop() > 300){
                    if(t==0){
                        t=1;
                        fadeInFn();
                    }

                }
            });


        },

        section4Fn:function(){

            var col = $('#section4 li');
            var t = 0;

            function fadeInFn(){
                col.eq(0).stop().animate({opacity:1},600,'easeInExpo',function(){
                    col.eq(1).stop().animate({opacity:1},600,'easeInExpo',function(){
                        col.eq(2).stop().animate({opacity:1},600);
                    });
                });
            }
           

            $(window).scroll(function(){
                if($(this).scrollTop()==0){
                    t=0;
                    col.stop().animate({opacity:0},0);
                }
                if($(this).scrollTop() > 300){
                    if(t==0){
                        t=1;
                        fadeInFn();
                    }

                }
            });

        },

        section5Fn:function(){

        },

        section6Fn:function(){

        },

        section7Fn:function(){


            var $modalGallery = $('#modalGallery');
            var $galleryBtn   = $('#section7 .btn');
            var $container    = $('#modalGallery .container');
            var n = 17;
            
           $galleryBtn.each(function(){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        //alert('');
                        $modalGallery.stop().fadeIn(600);
                        $('html').addClass('addModal');
                        
                    }
                });
           });

 
            $container.on({
                click:function(){
                    n++;
                    if(n>19){
                        n=17;
                    }
                    $container.css({'background-image': 'url(../img/single-project-page-01-img' + n +'.jpg)' });

                }
            });




            //모달창 닫기
            $modalGallery.on({
                click:function(e){
                    e.preventDefault();
                    $modalGallery.stop().fadeOut(300);
                    $('html').removeClass('addModal');
                }
            });

            $container.on({
                click:function(event){
                    event.stopPropagation();
                }
            });


            
            var $section7 = $('#section7');
            var $section7Top = $ ('#section7').offset().top-400;
            var t = 0;

            function scrollFn(){
                $section7.addClass('addAni');
            }
           

            $(window).scroll(function(){
                if($(this).scrollTop()==0){
                    t=0;
                    $section7.removeClass('addAni');
                }
                if($(this).scrollTop() >= $section7Top ){
                    if(t==0){
                        t=1;
                        scrollFn();
                    }

                }
            });



        },

        section8Fn:function(){

            var $rightBox = $('#section8 .right-box');
            var $leftBox  = $('#section8 .left-box');
            var $slideBox = $('#section8 .slide');

            var $rightBoxW = $('#section8 .right-box').innerWidth();
            var $leftBoxW  = $('#section8 .left-box').innerWidth();
            var $slideBoxW = $('#section8 .slide').innerWidth();
            var $h2        = $('#section8 .right-box h2');
            var $p         = $('#section8 .right-box p');

            var rightBoxH  = $rightBoxW * 1.208639142;
            var leftBoxH   = $leftBoxW * 0.517983019;
            var slideBoxH   = $slideBoxW * 0.517983019;

            var h2Size     = $rightBoxW * 0.068950063;
            var pSize      = $rightBoxW * 0.031546895;

            
            var $slideWrap = $('#section8 .slide-wrap');
            var $slideView = $('#section8 .slide-view');
            var $slide     = $('#section8 .slide');
            var $btn       = $('#section8 .btn');
            var cnt        = 0;

            
            function mainNextSlideFn(){
               
                $slide.css({ zIndex:1 }); 
                $slide.eq(cnt==0 ? 2 : cnt-1).css({ zIndex:2 }); 
                $slide.eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},1000); 
            }

            function mainPrevSlideFn(){
                $slide.css({ zIndex:1 }).animate({opacity:1},0);
                 $slide.eq(cnt).css({ zIndex:2 });
                 $slide.eq(cnt==2 ? 0 : cnt+1).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},1000);
            }


            function nextSlideFn(){
                cnt++;
                if(cnt>2){cnt=0;}
                mainNextSlideFn(); 
            }

            function prevSlideFn(){
                cnt--;
                if(cnt<0){cnt=2;}
                mainPrevSlideFn();
            }

       

            $slideView.swipe({
                swipeLeft:function(e){ 
                    //alert('');
                    e.preventDefault();
                    if(!$slide.is(':animated')){
                        nextSlideFn();
                    }                   
                },
                swipeRight:function(e){ 
                    e.preventDefault();
                    if(!$slide.is(':animated')){
                        prevSlideFn();
                    }                    
                }
            });

            function autoTimerFn(){
                setId = setInterval(nextSlideFn,4000);

            }
            autoTimerFn();


            function resizeFn(){

                $rightBoxW = $('#section8 .right-box').innerWidth();
                $leftBoxW = $('#section8 .left-box').innerWidth();
                $slideBoxW = $('#section8 .slide').innerWidth();
                rightBoxH  = $rightBoxW * 1.208639142;
                leftBoxH   = $leftBoxW * 0.517983019;
                slideBoxH   = $slideBoxW * 0.517983019;

                h2Size     = $rightBoxW * 0.068950063;
                pSize      = $rightBoxW * 0.031546895;

                $rightBox.css({height:rightBoxH});
                $leftBox.css({height:leftBoxH});
                $slideBox.css({height:slideBoxH});
                $h2.css({fontSize:h2Size});
                $p.css({fontSize:pSize});

            }

            $(window).resize(function(){
                resizeFn();
            });

            setTimeout(resizeFn,100);




        },

        section9Fn:function(){



                var galBtn       = $('#section9 .gal-btn');
                var galWrapUl    = $('#section9 #gallery-wrap > ul');
                var galWrapUlLi  = $('#section9 #gallery-wrap > ul > li');
                var n            = $('#section9 #gallery-wrap > ul > li').length; 
                var galContent   = $('#section9 .gallery-content');
    
                var winW         = $(window).innerWidth();
                var winH         = $(window).innerHeight();
                var cols         = 4; 
                var imgW         = winW / cols;
                var imgHRate     = 0.775; 
                var imgH         = imgW*imgHRate; 
                var rows         = Math.ceil(n/cols); 
                var btnNum       = 0; 
                
    
                var hide         = [];
                var show         = [];
                var k = -1; 
    

                
                var col = $('#section9 .nav2-wrap li.col');
                var $section9Top = $('#section9').offset().top-500;
                var t = 0;

                function fadeInFn(){
                    col.eq(0).stop().animate({opacity:1},200,'easeInExpo',function(){
                        col.eq(1).stop().animate({opacity:1},200,'easeInExpo',function(){
                            col.eq(2).stop().animate({opacity:1},200,'easeInExpo',function(){
                                col.eq(3).stop().animate({opacity:1},200,'easeInExpo',function(){
                                    col.eq(4).stop().animate({opacity:1},200,);
                                });
                            });
                        });
                    });
                }
            

                $(window).scroll(function(){
                    if($(this).scrollTop()==0){
                        t=0;
                        col.stop().animate({opacity:0},0);
                    }
                    if($(this).scrollTop() >= $section9Top){
                        if(t==0){
                            t=1;
                            fadeInFn();
                        }

                    }
                });
                



                // var $nav2Li  = $('#section9 #nav2 > ul > li');
                // var $nav2LiW = $('#section9 #nav2 > ul > li').innerWidth();
                // var $nav2LiHRate = $nav2LiW * 1.022727273;
                // var $nav2H = $nav2LiW*$nav2LiHRate;


    
    
                //1.반응형 갤러리 함수
                function responseGalleryFn(){
                    winW         = $(window).innerWidth()+11; 
                    if(winW > 1200){
                        cols = 4;
                    }
                    else if(winW > 980){
                        cols = 3;
                    }
                    else if(winW > 680){
                        cols = 2;
                    }
                    else {
                        cols = 1;
                    }
                    imgW = winW / cols; 
                    imgH = imgW*imgHRate; 
                    
    
    
    
    
                    if( btnNum == 0 ){
                        hide = [];
                        show = [0,1,2,3,4,5,6,7];  
                    }
    
    
                    else if( btnNum == 1 ){ 
    
                        hide = [1,5];
    
                        show = [0,2,3,4,6,7];
                   
                    }
    
    
                    else if( btnNum == 2 ){ 
    
                        hide = [1,3,4,7];
                        show = [0,2,5,6];
                   
                        
    
    
                    }                
                    else if( btnNum == 3 ){ 
    
                        
                        hide = [0,2,3,5];
                        show = [1,4,6,7];
                      
    
    
                    }
    
    
                    else if( btnNum == 4 ){ 
                        hide = [2,4];
                        show = [0,1,3,5,6,7];
                      
                    } //버튼 끝
    


                    n = show.length; //보이는 거
                    rows = Math.ceil(n/cols);   
                    // ul 전체박스에 적용
                    galWrapUl.css({ width:(winW), height: imgH*rows });  
                    galWrapUlLi.css({ width: imgW, height: imgH });
                    galContent.removeClass('addZoom');
    
    
                    //hide
                    $.each(hide,function(idx){
                        galWrapUlLi.eq(hide[idx]).stop().hide();
                    });
    
                    //show
                    k=-1;
                    for(var i=0;i<rows; i++){
                        for(var j=0;j<cols; j++){
                            k++;
                            if(k>=n){
                                break;
                            }
                            else {
                                galWrapUlLi.eq(show[k]).stop().show().animate({ left:imgW*j, top:imgH*i},300);                                        
                            }
                        }
                    }
    
                    //zoom addClass 
                    $.each(show,function(idx){
                        galContent.eq(show[idx]).addClass('addZoom');
                    });                               
                }
                
                responseGalleryFn();               
                setTimeout(responseGalleryFn,100);
    
                $(window).resize(function(){                

                    responseGalleryFn();        
                    //navResizeFn();           
                    setTimeout(responseGalleryFn,100);
                });

               /*  function navResizeFn(){
                    if($winW <= 1320){
                        $nav2LiW = $('#section9 #nav2 > ul > li').innerWidth();
                        $nav2Li.css({width:$nav2LiW,height:$nav2H});
                        
                    }
                   
                } */

                
                //갤러리 버튼 클릭 이벤트    
                galBtn.each(function(idx){ // responseGalleryFn 호출
                    $(this).on({
                        click:function(){
                            btnNum = idx;
                            responseGalleryFn();
                            galBtn.removeClass('addNav'); 
                            $(this).addClass('addNav'); 
                        }
                    });
                });
    
    
    
            
    

        },

        section10Fn:function(){

            var $modal3dGallery = $('#modal3dGallery');
            var $container      = $('#modal3dGallery .container');
            var $arrowBtn       = $('#section10 .arrow-btn');

            $arrowBtn.each(function(){
                $(this).on({
                    click:function(event){
                        event.preventDefault();
                        //$modal3dGallery.stop().fadeIn(600);
                        $modal3dGallery.addClass('addShow');
                        $('html').addClass('addModal');
                    }
                });
            });

            $modal3dGallery.on({
                click:function(event){
                    event.stopPropagation();
                    //$modal3dGallery.stop().fadeOut(600);
                    $modal3dGallery.removeClass('addShow');
                    $('html').removeClass('addModal');
                    
                }
            });

            $container.on({
                click:function(event){
                    event.stopPropagation();
                }
            });


        },

        footerFn:function(){

        },

        modal3dGalleryFn:function(){


            var $winW = $(window).innerWidth();
            var $winH = $(window).innerHeight();

            var $prevBtn   = $('#modal3dGallery .prev-btn');
            var $nextBtn   = $('#modal3dGallery .next-btn');            
            
            var $slideWrap = $('#modal3dGallery .slide-wrap');
            var $slide     = $('#modal3dGallery .slide');
            var slideW     = $('#modal3dGallery .slide').innerWidth();


            var cnt = 0;
            var n   = $('#modal3dGallery .slide').length;
            
            var angle = 360/n;
            
            
            


            var $slideWrap         = $('#modal3dGallery .slide-wrap');
            var $slideWrapW        = $('#modal3dGallery .slide-wrap').innerWidth();
            var $slideH            = $('#modal3dGallery .slide').innerHeight();
            var $wrap              = $('#modal3dGallery .wrap').innerWidth();
            var $wrapH             = $('#modal3dGallery .wrap').innerHeight();

       
            var $w = 0.375 * $wrap;
            var $h = $w *0.5;
            //$slideWrap.css({width:$w, height:$h});
            var tz = 0;            
            tz = Math.round( (slideW/2) / Math.tan( Math.PI / n ) ); 

            // var $w2 = 0.1875 * $wrap;
            // var $h2 = $w2 *0.5;

            // var tz2 = 0;
            // tz2 = Math.round( ($w2/2) / Math.tan( Math.PI / n ) ); 


            function mainSlideFn(){
                
                
                $slide.stop().animate({opacity:.5},0);
                $slide.find('.slide-content').css({transform:'scale(1)'});
                $slideWrap.css({transform: `perspective(${tz*1.3}px) translateZ(${-tz}px) rotateY( ${-angle*cnt}deg) ` });
                //$slideWrap.css({transform: `perspective(${tz2*1.3}px) translateZ(${-tz2}px) rotateY( ${-angle*cnt}deg) ` });


                $slide.eq(cnt%n).stop().animate({opacity:1},1000,function(){
                    $(this).find('.slide-content').css({/* transform:'scale(1.2)', */transition:'all 1s'});
                });                  
                
            }


            function nextSlideFn(){                
                cnt++;
                mainSlideFn();
            }

            function prevSlideFn(){
                cnt--;
                mainSlideFn();                
            }

            $prevBtn.on({
                click:function(){
                    prevSlideFn();
                }
            });

            $nextBtn.on({
                click:function(){
                    nextSlideFn();
                }
            });           

                   


            function resizeFn(){

                $winW = $(window).innerWidth();
                //$winH = $(window).innerHeight();
                //$wrapH              = $('#modal3dGallery .wrap').innerHeight();      

                //$slideWrapW        = $('#modal3dGallery .slide-wrap').innerWidth();
                //$slideH            = $('#modal3dGallery .slide').innerHeight();
                $wrap              = $('#modal3dGallery .wrap').innerWidth();            
                slideW = $('#modal3dGallery .slide').width();

                $w = 0.375 * $wrap;
                $h = $w *0.5;                
                $slideWrap.css({width:$w, height:$h});

                tz = 0;            
                tz = Math.round( (slideW/2) / Math.tan( Math.PI / n ) ); 



                    $slide.eq(0).css({transform:`rotateY(calc(180deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(1).css({transform:`rotateY(calc(210deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(2).css({transform:`rotateY(calc(240deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(3).css({transform:`rotateY(calc(270deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(4).css({transform:`rotateY(calc(300deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(5).css({transform:`rotateY(calc(330deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(6).css({transform:`rotateY(calc(0deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(7).css({transform:`rotateY(calc(30deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(8).css({transform:`rotateY(calc(60deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(9).css({transform:`rotateY(calc(90deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(10).css({transform:`rotateY(calc(120deg)) translateZ(${-tz}px) scale(1)`});
                    $slide.eq(11).css({transform:`rotateY(calc(150deg)) translateZ(${-tz}px) scale(1)`});
                
                // $w2 = 0.1875 * $wrap;
                // $h2 = $w2 *0.5;
                // $slideWrap.css({width:$w2, height:$h2});

                // tz2 = 0;
                // tz2 = Math.round( ($w2/2) / Math.tan( Math.PI / n ) ); 
    

                // $slideWrap.css({transform: `perspective(${tz*1.3}px) translateZ(${-tz}px) rotateY( ${-angle*cnt}deg) ` }); //600
                //$slideWrap.css({transform: `perspective(${560*1.3}px) translateZ(${-560}px) rotateY( ${-angle*cnt}deg) ` }); //300
                //$slideWrap.css({transform: `perspective(${tz2*1.3}px) translateZ(${-tz2}px) rotateY( ${-angle*cnt}deg) ` }); //300

                console.log('w',$w);
                console.log('h',$h);
                console.log('tz',tz);






                // if( $winW < 1420){

                //     //$winW              = $(window).innerWidth();
                //     $slideWrapW        = $('#modal3dGallery .slide-wrap').innerWidth();
                //     $slideH            = $('#modal3dGallery .slide').innerHeight();

                //     $wrap   = $('#modal3dGallery .wrap').innerWidth();
                //     $w = 0.375 * $wrap;
                //     $h = $w *0.5;    
                //     $slideWrap.css({width:$w, height:$h});

                //     tz2 =  -1088;
                //     tz2 = Math.round( ($w/2) / Math.tan( Math.PI / n ) ); 


                //     //console.log('w',$w);
                //     //console.log('h',$h);
                //     //console.log('tz2',tz2);

                //     $slideWrap.css({transform: `perspective(${tz2*1.3}px) translateZ(${-tz2}px) rotateY( ${-angle*cnt}deg) ` });
                                 
                // }
                // else{
                //      $slideWrap.css({transform: `perspective(${tz*1.3}px) translateZ(${-tz}px) rotateY( ${-angle*cnt}deg) ` });
                // }
                
                mainSlideFn();          
                        
            }
         

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn,10);
            


        }

    }

    popo.init();

})(jQuery);