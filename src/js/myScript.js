$(document).ready(function(){
    
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.zag');
    elements.each((i,el) => {
        observer.observe(el);
    });
   

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
};
    
    $(window).scroll(function() {	
$('.jump').each(function(){
var imagePos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if (imagePos < topOfWindow+600) {
$(this).addClass("animate__animated animate__bounce");
}
});	
});
    
    $(window).scroll(function() {	
$('.turn').each(function(){
var imagePos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if (imagePos < topOfWindow+600) {
$(this).addClass("animate__animated animate__jackInTheBox");
}
});	
});

     $(window).scroll(function() {	
$('.exit-left').each(function(){
var imagePos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if (imagePos < topOfWindow+700) {
$(this).addClass("animate__animated animate__lightSpeedInLeft");
}
});	
});

    $(window).scroll(function() {	
$('.exit-rigth').each(function(){
var imagePos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if (imagePos < topOfWindow+600) {
$(this).addClass("animate__animated animate__lightSpeedInRight");
}
});	
});
   
     $(window).scroll(function() {	
$('.appearance').each(function(){
var imagePos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if (imagePos < topOfWindow+600) {
$(this).addClass("animate__animated animate__rollIn");
}
});	
});
    
     $(window).scroll(function() {	
$('.counter1').each(function(){
var imagePos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if (imagePos < topOfWindow+800) {
$(this).addClass("animate__animated animate__rollIn");
}
});	
});
    
    $(window).scroll(function() {	
$('.counter2').each(function(){
var imagePos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if (imagePos < topOfWindow+800) {
$(this).addClass("animate__animated animate__rotateInUpRight");
}
});	
});
   
    $(window).scroll(function() {	
$('.spawn').each(function(){
var imagePos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if (imagePos < topOfWindow+800) {
$(this).addClass("animate__animated animate__fadeIn");
}
});	
});
    
    $(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
    
    var SelectType,
        SelectPrice,
        SelectDiz,
        SelectAdapt,
        sum = 0,
        siteType = {
            "1-й тип сайта": {200: "Сайт-Визитка"},
            "2-й тип сайта": {300: "Корпоративный сайт"},
            "3-й тип сайта": {400: "Cайт-каталог"},
        },
        siteDiz = {
            "1-й вариант дизайна": {300: "Минимализм"},
            "2-й вариант дизайна": {400: "Ретро"},
            "3-й вариант дизайна": {600: "Рисованный"},
        },
        siteAdapt = {
            "1-й вид адаптации": {0: "Неадаптируемый"},
            "2-й вид адаптации": {1000: "Адаптируемый"},
        }
        
    function insertSiteType(){
        var html ='',
            type,
            price;
        for (type in siteType){
            for(price in siteType[type]){
                html += '<option data-type="'+ type +'" data-price="' + price + '">' + type + ' --> ' + siteType[type][price] + ' ' +  price + ' руб.</option>'
            }
        }
        $('#SiteType').append(html);
    };
    
    $('#SiteType').change(function(){
        changeType();
    });

    function changeType(){
        sum = SelectType = 0;
        SelectPrice = $('#SiteType option').filter(':selected').data('price');
        recalc();
        }
    
    
    function insertSiteDiz(){
        var html ='',
            diz,
            price;
        for (diz in siteDiz){
            for(price in siteDiz[diz]){
                html += '<option data-diz="'+ diz +'" data-price="' + price + '">' + diz + ' --> ' + siteDiz[diz][price] + ' ' +  price + ' руб.</option>'
            }
        }
        $('#DizSite').append(html);
    }
    
    $('#DizSite').change(function(){
        changeDiz();
    });

    function changeDiz(){
        sum = SelectDiz = 0;
        SelectDiz = $('#DizSite option').filter(':selected').data('price');
        recalc();
        
    }
    
    function insertSiteAdapt(){
        var html ='',
            adapt,
            price;
        for (adapt in siteAdapt){
            for(price in siteAdapt[adapt]){
                html += '<option data-adapt="'+ adapt +'" data-price="' + price + '">' + adapt + ' --> ' + siteAdapt[adapt][price] + ' ' +  price + ' руб.</option>'
            }
        }
        $('#AdaptSite').append(html);
    }
    
    $('#AdaptSite').change(function(){
        changeAdapt();
    });

    function changeAdapt(){
        sum = SelectAdapt = 0;
        SelectAdapt = $('#AdaptSite option').filter(':selected').data('price');
        recalc();
        
    }
    
    function isNumeric(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    
    function recalc(){
        SelectPrice = isNumeric(SelectPrice) ? SelectPrice : 0;
        SelectDiz = isNumeric(SelectDiz) ? SelectDiz : 0;
        SelectAdapt = isNumeric(SelectAdapt) ? SelectAdapt : 0;
        sum = SelectPrice + SelectDiz + SelectAdapt;
        changeTable();
        }
    
    function changeTable(){
        $('#sum').text(sum);
    }
    
    console.log(sum);
    
    insertSiteAdapt();
    insertSiteType();
    insertSiteDiz();
});

$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		stagePadding:30,
		onTranslated: animateImgFunc,
		onChanged: animateImgClear
	});

	//Добавляем класс с анимацией изображения
	function animateImgFunc() {
		$(".owl-carousel .active .inner-testimonial img").addClass("animated zoomIn full-opacity");
	}

	//Удаляем класс с анимацией изображения
	function animateImgClear() {
		$(".owl-carousel .active .inner-testimonial img").removeClass("animated zoomIn full-opacity");
	}
});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 100 + "px"});
});

