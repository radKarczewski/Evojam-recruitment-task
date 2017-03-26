
angular.module('evojamApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMaterial', 'ui.router', 'nvd3', 'AppModule', 'ServerModule', 'DashboardModule'])
    .config(EvojamApp.Routing);