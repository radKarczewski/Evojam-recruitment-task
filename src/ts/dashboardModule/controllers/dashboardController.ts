namespace DashboardModule {

    export class DashboardController {
        static controllerName = 'DashboardController';
        static $inject = [
            'DashboardService'
        ];

        public chartData: IChartData;

        public rightSectionLine: IRightSection;
        public rightSectionBar: IRightSection;

        constructor(
            private dashboardService: DashboardService
        ) {
            this.init();
        }

        private init() {
            this.dashboardService.getDataToCharts().then((result) => {
                this.chartData = this.dashboardService.convertToChartData(result);

                this.rightSectionLine.value = (Math.round(this.chartData.lineTotalValue * 100) / 100).toString().replace(".", ",");
                this.rightSectionBar.value = this.chartData.barTotalCount;
            });

            this.rightSectionLine = {
                value: '',
                description: 'Revenue Stream',
                buttonText: 'Revenue Analysis',
                buttonAction: () => {
                    console.log('Revenue Analysis');
                }
            };

            this.rightSectionBar = {
                value: '',
                description: 'Installations',
                buttonText: 'View Installations',
                buttonAction: () => {
                    console.log('View Installations');
                }
            };
        }
    }
}