namespace DashboardModule {

    export class DashboardController {
        static controllerName = 'DashboardController';
        static $inject = [
            'DashboardService'
        ];

        constructor(
            private dashboardService: DashboardService
        ) {
            this.init();
        }

        private init() {
            this.dashboardService.getDataToCharts().then((result) => {
                console.log(result);
            });
        }
    }
}