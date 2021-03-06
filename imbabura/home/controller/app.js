var app = angular.module('dcapp');
app.controller('reproductor-ctl', function($scope, $interval, service, ultimasnoticias) {
    // Titulo cancion
    var titulo_cancion = function() {
        service.titulocancion().then(function(d) {
            $scope.titulo_cancion = d;
        });
    }
    titulo_cancion();
    $interval(titulo_cancion, 5000);

    // programacion
    var programacion = function() {
        service.reproductorprograma().get().$promise.then(function(d) {
        	$scope.programa = d.respuesta[1];
        });
    }
    programacion();
    $interval(programacion, 5000);
    // fecha actual
    var fechaactual = function() {
        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
        var f = new Date();
        var fecha = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
        $scope.fecha_actual = fecha;
    }
    fechaactual();
    $interval(fechaactual, 5000);
    // generando hora actual
    var horaactual = function() {
        var Digital = new Date()
        var hours = Digital.getHours()
        var minutes = Digital.getMinutes()
        var seconds = Digital.getSeconds()
        var dn = "AM"
        if (hours > 12) {
            dn = "PM"
            hours = hours - 12
        }
        if (hours == 0)
            hours = 12
        if (minutes <= 9)
            minutes = "0" + minutes
        if (seconds <= 9)
            seconds = "0" + seconds
        hora = hours + ":" + minutes + ":" + seconds + " " + dn;
        $('#element-fechahora').html(hora);
    }
    $interval(horaactual, 500);  
});

app.controller('MainCtrlinit', function($scope, $interval, service, ultimasnoticias) {

    // reproductor
    var audio = new Audio('http://186.33.168.251:8000/stream.aac');
    // audio.play();

    $scope.mplayer = function(data){
        audio.pause();
        // var audio = 
        var url = data.url.split('=');
        $scope.theBestVideo1 = '-UV0QGLmYys';
    }

    function AdminController($scope) {
        $scope.setMaster = function(obj, $event) {
            console.log($event.target);
        }
    }
    $scope.clickplay = function() {
        audio.play();
        $('.img-play').addClass('zoomOut animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).addClass('hidden').removeClass('zoomOut animated');

            $('.img-stop').removeClass('hidden').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('fadeIn animated');
            });
        });

        $('#btn_play').addClass('zoomOut animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).addClass('hidden').removeClass('zoomOut animated');

            $('#btn_pause').removeClass('hidden').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('fadeIn animated');
            });
        });
    };

    $scope.clickplay1 = function() {
        audio.pause();
        $('#btn_pause').addClass('zoomOut animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).addClass('hidden').removeClass('zoomOut animated');

            $('#btn_play').removeClass('hidden').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('fadeIn animated');
            });
        });
        $('.img-stop').addClass('zoomOut animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).addClass('hidden').removeClass('zoomOut animated');
            $('.img-play').removeClass('hidden').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('fadeIn animated');
            });
        });
    };

    $scope.clickpause = function() {
        audio.pause();
        $('.img-stop').addClass('zoomOut animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).addClass('hidden').removeClass('zoomOut animated');
            $('.img-play').removeClass('hidden').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('fadeIn animated');
            });
        });
        $('#btn_pause').addClass('zoomOut animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).addClass('hidden').removeClass('zoomOut animated');

            $('#btn_play').removeClass('hidden').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('fadeIn animated');
            });
        });
    };

    $scope.clickpause1 = function() {
        audio.play();
        $('#btn_play').addClass('zoomOut animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).addClass('hidden').removeClass('zoomOut animated');

            $('#btn_pause').removeClass('hidden').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('fadeIn animated');
            });
        });
        $('.img-play').addClass('zoomOut animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).addClass('hidden').removeClass('zoomOut animated');

            $('.img-stop').removeClass('hidden').addClass('fadeIn animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('fadeIn animated');
            });
        });
    };
    // $interval("countUp()", 1000);

    // zona reproductor
    $scope.items2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //Owl carousel
    //-----------------------------------------------
    // if ($('.owl-carousel').length>0) {
        $(".owl-carousel").owlCarousel({
            singleItem: true,
            autoPlay: false,
            navigation: true,
            pagination: true
        });
        $(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
            singleItem: true,
            autoPlay: 5000,
            navigation: true,
            pagination: true
        });
        $(".owl-carousel.content-slider-with-large-controls-autoplay").owlCarousel({
            singleItem: true,
            autoPlay: 5000,
            navigation: true,
            pagination: true
        });
    // };
});
var varx = 0;
app.controller('MainCtrl', function($scope, service) {
    //Owl carousel
        $(".owl-carousel.carousel").owlCarousel({
                items: 4,
                pagination: false,
                navigation: true,
                navigationText: false
            });
            $(".owl-carousel.carousel-autoplay").owlCarousel({
                items: 4,
                autoPlay: 5000,
                pagination: false,
                navigation: true,
                navigationText: false
            });
            $(".owl-carousel.clients").owlCarousel({
                items: 6,
                autoPlay: true,
                pagination: false,
                itemsDesktopSmall: [992,4],
                itemsTablet: [768,4],
                itemsMobile: [479,3]
            });
            $(".owl-carousel.content-slider").owlCarousel({
                singleItem: true,
                autoPlay: 5000,
                navigation: false,
                navigationText: false,
                pagination: false
            });
            $(".owl-carousel.content-slider-with-controls").owlCarousel({
                singleItem: true,
                autoPlay: false,
                navigation: true,
                pagination: true
            });
            $(".owl-carousel.content-slider-with-large-controls").owlCarousel({
                singleItem: true,
                autoPlay: false,
                navigation: true,
                pagination: true
            });
            $(".owl-carousel.content-slider-with-controls-autoplay").owlCarousel({
                singleItem: true,
                autoPlay: 5000,
                navigation: true,
                pagination: true
            });
            $(".owl-carousel.content-slider-with-large-controls-autoplay").owlCarousel({
                singleItem: true,
                autoPlay: 5000,
                navigation: true,
                pagination: true
            });
            $(".owl-carousel.content-slider-with-controls-autoplay-hover-stop").owlCarousel({
                singleItem: true,
                autoPlay: 5000,
                navigation: true,
                pagination: true,
                stopOnHover: true
            });
    // 
    service.gettop().get().$promise.then(function(d) {
        $scope.gettopten = d.respuesta;
    });


    
    if (varx==0) {
        // $('#m-publi').modal('show');
        varx = 1;
    }
	service.videosemanal().get().$promise.then(function(data) {
		$scope.videosemanal = data.respuesta;
		// video semanal
    	$scope.theBestVideo = data.respuesta.url;
    });

	

    ! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
	}(document, "script", "twitter-wjs");

    $scope.$on('$routeChangeStart', function() {
        $.fn.fullpage.destroy('all');
    });

    $('#fullpage').fullpage({
        'verticalCentered': false,
        navigation: true
    });

    //Scroll totop
    //-----------------------------------------------
    // if($(this).scrollTop() != 0) {
    // 	$(".scrollToTop").fadeIn();
    // } else {
    // 	$(".scrollToTop").fadeOut();
    // }
    $(".owl-carousel.content-slider").owlCarousel({
        singleItem: true,
        autoPlay: 5000,
        navigation: false,
        navigationText: false,
        pagination: false
    });
    $(".owl-carousel.carousel-autoplay").owlCarousel({
        items: 4,
        autoPlay: 5000,
        pagination: false,
        navigation: true,
        navigationText: false
    });
    $('.owl-carousel').on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
    // Animations
    //-----------------------------------------------
    $("[data-animation-effect]").each(function() {
        if (Modernizr.csstransitions) {
            var waypoints = $(this).waypoint(function(direction) {
                var appearDelay = $(this.element).attr("data-effect-delay"),
                    animatedObject = $(this.element);
                setTimeout(function() {
                    animatedObject.addClass('animated object-visible ' + animatedObject.attr("data-animation-effect"));
                }, appearDelay);
                this.destroy();
            }, {
                offset: '90%'
            });
        } else {
            $(this).addClass('object-visible');
        }
    });

    // Magnific popup
    //-----------------------------------------------
    if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
        $(".popup-img").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            }
        });
        $(".popup-img-single").magnificPopup({
            type: "image",
            gallery: {
                enabled: false,
            }
        });
        $('.popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            preloader: false,
            fixedContentPos: false
        });
    };

    $('.slider-banner-container .slider-banner-fullwidth').show().revolution({
        delay: 8000,
        startwidth: 1140,
        startheight: 450,

        navigationArrows: "solo",

        navigationStyle: "preview2",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 0,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 0,
        soloArrowRightVOffset: 0,

        fullWidth: "on",

        spinner: "spinner2",

        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        onHoverStop: "off",

        shuffle: "off",

        autoHeight: "off",
        forceFullWidth: "off",

        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0
    });

    $(".scrollToTop").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
    });
    //el script del facebook 
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

});

app.controller('imba-corp-Ctrl', function($scope, $routeSegment) {
    // Animations
    //-----------------------------------------------
    if ($("[data-animation-effect]").length > 0) {
        $("[data-animation-effect]").each(function() {
            if (Modernizr.csstransitions) {
                var waypoints = $(this).waypoint(function(direction) {
                    var appearDelay = $(this.element).attr("data-effect-delay"),
                        animatedObject = $(this.element);
                    setTimeout(function() {
                        animatedObject.addClass('animated object-visible ' + animatedObject.attr("data-animation-effect"));
                    }, appearDelay);
                    this.destroy();
                }, {
                    offset: '90%'
                });
            } else {
                $(this).addClass('object-visible');
            }
        });
    };
    var id_param = $routeSegment.$routeParams.id;
    console.log(id_param);
});