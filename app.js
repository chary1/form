// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/error');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        .state('error', {
            // we'll get to this in a bit   
            url:'/error',
            templateUrl: '404.html'    
        })

        .state('login', {
            // we'll get to this in a bit   
            url:'/login',
            templateUrl: 'login.html',
            controller:'loginController'    
        })

        .state('form', {
            // we'll get to this in a bit   
            url:'/form',
            templateUrl: 'form.html',
            controller:'formController'    
        })

        

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit   
            url:'/about',
            templateUrl: 'about.html',
            controller:'aboutController'    
        });

});


routerApp.run(['$rootScope','$state','$transitions', function($rootScope, $state, $transitions) {
    $rootScope.username = localStorage.getItem('username') ? localStorage.getItem('username') : null;
         $transitions.onSuccess({}, function($transition){
            if($rootScope.username && $transition.$to() && $transition.$to().name == "login"){
                localStorage.removeItem('username');
                $rootScope.username = null;
                // $state.go('login');
            }
            if(!$rootScope.username && $transition.$to() && $transition.$to().name != "login"){
                $state.go('login');
            }
    });    // $rootScope.$on('$stateChangeStart', 
    //     function(event, toState, toParams, fromState, fromParams){ 
    //     // do something
    //     console.log($rootScope.username);


    

    //     // if(!$rootScope.username && toState && toState.name == "login"){
    //     //     // debugger
    //     //    return;
    //     // }
    //     // if(!$rootScope.username && toState && toState.name != "login"){
    //     //    $state.go('login');
    //     //    // return true;
    //     // }
    //     if($rootScope.username && toState && toState.name == "login"){
    //         localStorage.removeItem('username');
    //         $rootScope.username = null;
    //         $state.go('login');
    //     }
    //     if(!$rootScope.username && toState && toState.name != "login"){
    //         $state.go('login');
    //     }
    //     // if($rootScope.username && toState && toState.name != "login"){
    //     //    // $state.go('login');
    //     //    return true;
    //     // }
    // });
}])

