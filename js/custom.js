$(function () {
    $("img.lazy").lazyload();
    $('#slider_big').owlCarousel({
        items:1,
        lazyLoad : true,
        nav: true,
        dots: false,
        navText: ['','']
    });
    $('.vertical-slider').each(function(){
        var $verticalSlider = $(this);
        $verticalSlider.owlCarousel({
            items: 1,
            lazyLoad : true,
            nav: $verticalSlider.find('.item').length > 1 ? true : false,
            dots: false,
            navText: ['', '']
        });
    });
    $('.multiSlider').owlCarousel({
        items: 1,
        lazyLoad : true,
        nav: true,
        dots: false,
        navText: ['', '']
    });
    $('#projects_slider').owlCarousel({
        items : 3,
        lazyLoad : true,
        slideBy: 3,
        nav: true,
        dots: false,
        navText: ['', '']
    });
    $('#team_slider').owlCarousel({
        items : 4,
        lazyLoad : true,
        slideBy: 4,
        nav: true,
        dots: false,
        navText: ['', '']
    });
    $('#department_slider').owlCarousel({
        items : 3,     
        loop:true,
        lazyLoad : true,     
        nav: true,
        dots: false,
        navText: ['', ''],
        onChanged: function(event){
            if(event.item.count > 0){             
                var activeIndex = event.item.index+1;            
                $(event.target).find('.item').removeClass('current');
                $(event.target).find('.owl-item:eq('+activeIndex+')').find('.item').addClass('current');
            }
            
        }
    });
    $('#video_slider').owlCarousel({
        items : 1,
        lazyLoad : true,       
        video:true,
        nav: true,
        dots: false,       
        navText: ['', '']
    });
    $('#letter_slider').owlCarousel({
        items : 1,
        lazyLoad : true,       
        nav: true,
        dots: false,
        navText: ['', '']
    });
    $('#flamp_slider').owlCarousel({
        items : 1,
        lazyLoad : true,
        nav: true,
        dots: false,
        navText: ['', '']
    });
    $('.faq-wrap .question-wrap .question').on('click',function(){
        var $this = $(this);
        var $question = $this.parent();
        var $answer = $question.find('.answer');
        var closed = $question.hasClass('closed');
        if(closed){           
            $('.faq-wrap .question-wrap:not(.closed) .answer').not($answer).each(function(){
                var $this = $(this);

                $this.slideUp(undefined, function(){
                    $this.parent().addClass('closed');
                });
            });           
            $answer.slideDown(undefined, function(){
                $question.removeClass('closed');
            });
            return false;
        }
        $answer.slideUp(undefined, function(){
            $question.addClass('closed');
        });
        return false;
    });
    $('.fancybox').fancybox();
});