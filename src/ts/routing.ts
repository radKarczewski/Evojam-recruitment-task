namespace EvojamApp {

    export interface IRoutes {
        [name: string]: IRouteConfig
    }

    export interface IRouteConfig {
        name: string;
        templateUrl: string;
        controllerName: string;
        controllerAs: string;
        urlParams?: string[];
    }

    export class States {
        static Dashboard: IRouteConfig = {
            name: 'dashboard',
            templateUrl: '/ts/dashboardmodule/views/dashboard.html',
            controllerName: DashboardModule.DashboardController.controllerName,
            controllerAs: 'vm'
        };
    }

    export class Routing {
        static $inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider, $locationProvider: ng.ILocationProvider) {
            $urlRouterProvider.otherwise('dashboard');

            let routes = States;
            let keys = Object.keys(routes);

            for (let i = 0, len = keys.length; i < len; i++) {
                let key: string = keys[i];
                let route: IRouteConfig = routes[key];
                let url: string = '/';

                if (route.name !== 'jobs') {
                    url += EvojamApp.Routing.stateNameToDashName(route.name);
                }

                if (route.urlParams && route.urlParams.length > 0) {
                    for (let i = 0, len = route.urlParams.length; i < len; i++) {
                        url += `/:${route.urlParams[i]}`;
                    }
                }

                $stateProvider.state(route.name, {
                    url: url,
                    templateUrl: route.templateUrl,
                    controller: route.controllerName,
                    controllerAs: route.controllerAs
                });
            }

            $locationProvider.html5Mode({enabled: true, requireBase: false});
        }

        static stateNameToDashName = (str: string): string => {
            let allLink: string[] = str.split('_');

            let upperToHyphenLower = (match: string): string => {
                return '-' + match.toLowerCase();
            };
            for (let i: number = 0; i < allLink.length; i++) {
                allLink[i] = allLink[i].replace(/[A-Z]/g, upperToHyphenLower);
            }
            return allLink.join('/').replace(/([a-z])([A-Z])/g, '$1/$2').toLowerCase();
        }
    }
}