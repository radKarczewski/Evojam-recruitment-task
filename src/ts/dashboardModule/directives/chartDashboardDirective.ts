namespace DashboardModule {

    export interface IChartDataScope extends angular.IScope {
        chartData: IChartTypeData;
    }

    export interface IChartDataAttributes extends angular.IScope {
        chartType: 'line'|'bar';
    }

    export class ChartDashboardDirective implements ng.IDirective {

        public restrict = "E";
        public templateUrl = '/ts/dashboardModule/views/chartDirective.html';

        public scope = {
            'chartData': '='
        };

        private chartHelper: ChartHelper;

        constructor() {
            this.chartHelper = new ChartHelper();
        }

        public link = (scope: IChartDataScope, element, attributes: IChartDataAttributes): void => {
            scope['chartOptions'] = this.chartHelper.getOptionsByType(attributes.chartType);
        }
    }

    export var ChartDashboardDirectiveFactory = () => {
        return new ChartDashboardDirective();
    }

    ChartDashboardDirectiveFactory.$inject = [];
}