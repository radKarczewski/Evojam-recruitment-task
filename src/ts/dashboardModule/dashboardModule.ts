namespace DashboardModule {

    angular.module('DashboardModule', [])
        .controller(DashboardController.controllerName, DashboardController)
        .service(DashboardService.serviceName, DashboardService);

}