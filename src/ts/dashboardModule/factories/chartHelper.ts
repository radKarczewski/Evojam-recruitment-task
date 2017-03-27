namespace DashboardModule {
    export class ChartHelper {

        constructor() {

        }

        public getOptionsByType(type: string) {
            switch(type) {
                case 'line':
                    return this.lineOptions();
                case 'bar':
                    return this.barOptions();
                default:
                    console.error('Wrong chart type!');
            }
        }

        private lineOptions() {
            let baseOptions = this.baseOptions();

            baseOptions.chart.type = 'lineChart';
            baseOptions.chart['useInteractiveGuideline'] = true;

            return baseOptions;
        }

        private barOptions() {
            let baseOptions = this.baseOptions();

            baseOptions.chart.type = 'multiBarChart';
            baseOptions.chart['clipEdge'] = true;
            baseOptions.chart['stacked'] = false;

            return baseOptions;
        }

        private baseOptions() {
            return {
                chart: {
                    type: "",
                    height: 250,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 45,
                        left: 45
                    },
                    duration: 500,
                    xAxis: {
                        tickFormat: (d: number) =>{
                            return `Week ${d}`;
                        }
                    }
                }
            };
        }
    }
}