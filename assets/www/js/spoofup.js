   $(document).ready(function(){
	   
      $('.my-carousel').slick({
          slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000
      });
	  
	    $('.my-tvf-div').slick({
           lazyLoad: 'ondemand',
			  slidesToShow: 3,
			  slidesToScroll: 1
      });
	  
    });