
angular.module('evojamApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMaterial', 'ui.router', 'AppModule', 'ServerModule', 'DashboardModule'])
    .config(EvojamApp.Routing);