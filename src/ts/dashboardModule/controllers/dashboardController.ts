namespace DashboardModule {

    export class DashboardController {
        static controllerName = 'DashboardController';
        static $inject = [
            'DashboardService'
        ];

        public chartData: IChartData;

        constructor(
            private dashboardService: DashboardService
        ) {
            this.init();
        }

        private init() {
            this.dashboardService.getDataToCharts().then((result) => {
                this.chartData = this.dashboardService.convertToChartData(result);
            });
        }
    }
}