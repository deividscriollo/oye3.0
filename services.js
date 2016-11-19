
// servicios
var api_server='http://localhost:8000/';
var servidor_home = 'http://192.168.0.110/api-admin-oyefm/public/';
app.factory('service', function($http, $resource){
    var service = {        
        async: function() {
                var promise = $http({
                    url:"app.php", 
                    method: 'POST',
                    data: {methods: 'info'}
                }).then(function (response) {
                return response.data;
            });
            return promise;
        },
        general: function(typeservices){
                var promise = $http.post("app.php", {methods: typeservices}).then(function (response) {
                return response.data;
            });
            return promise;
        },
        general: function(typeservices, url, data){
                var promise = $http.post(url, {methods: typeservices, data}).then(function (response) {
                return response.data;
            });
            return promise;
        },
        reproductorprograma: function(){
             return $resource(servidor_home+'programaactual', {}
            , {
                get: {
                    method: 'GET', isArray: false
                }
            });
        },
        titulocancion: function(){
            var promise = $http.get('http://186.33.168.251:8000/').then(function (response) {
                var data = response.data;
                var data = $(data).find('.yellowkeys').html();
                var data = $(data).find('tr');
                var cancion = $(data[1]).text().split(':');
                return cancion[1];
            });
            return promise;
        },
        videosemanal: function(){
            return $resource(servidor_home+'videosemanal', {}, {
                get: {
                    method: 'GET', isArray: false
                }
            });
        },
        gettop: function(){
            return $resource(servidor_home+'gettop10', {}, {
                get: {
                    method: 'GET', isArray: false
                }
            });
        },
    };
    return service;
});
//  var servidor='http://192.168.1.31:8000/';
    var servidor='http://localhost:8000/';
// var servidor = 'http://192.168.1.31/api-admin-oyefm/public/ultimas-noticias/'
// recursos
app.factory('noticias',function($resource){
    return $resource(servidor+'noticias/:id',{id: "@id"});
});
app.factory('deportes',function($resource){
    return $resource(servidor+'deportes/:id',{id: "@id"});
});
app.factory('curiosidades',function($resource){
    return $resource(servidor+'curiosidades/:id',{id: "@id"});
});
app.factory('farandula',function($resource){
    return $resource(servidor+'farandula/:id',{id: "@id"});
});
app.factory('ultimasnoticias',function($resource){
    return $resource('http://192.168.0.110:8000/noticias/:id',{id: "@id"});
});


// // reproductor

// setInterval(function(){
//         var horario = new Date();
//         var hora = horario.getHours();
//         var minutos = horario.getMinutes();
//         if (minutos < 10) {
//             minutos = '0' + minutos
//         }
//         var acumulador;
//         $.ajax({
//             url: 'assets/method/app.php/app.php',
//             data: {
//                 time: 
//             },
//             type: 'POST',
//             dataType: 'json',
//             success: function(data) {
//                 if (data[0] == 0) {
//                     $('#lbl_titulo-x').text('OyeFm, DJ');
//                 } else {
//                     $('#lbl_titulo-x').text(data[1]+',');
//                 }
//             }
//         });

//         $.ajax({
//             url: 'http://173.244.209.219:8025/',
//             success: function(data) {
//                 var x = data.replace(/img/g, "div");
//                 var data = $(x).find('.streamdata');
//                 var sum = $(data[8]).text().split(':');
//                 if (sum[0] == 'Sorry, service not available. Try again later.') {
//                     $('.lbl_sub_titulo').text('Oye, lo que te gusta');
//                 } else {
//                     $('.lbl_sub_titulo').text(sum[1]);
//                 }
//             }
//         });
//     }, 4000);