namespace DashboardModule {

    export interface IChartDataScope extends angular.IScope {
        chartData: IChartTypeData;
        dashboardType: 'revenue'|'installations';
        title: string;
        rightSection: IRightSection;
    }

    export interface IRightSection {
        value: string|number;
        description: string;
        buttonText: string;
        buttonAction: Function
    }

    export interface IChartDataAttributes extends angular.IScope {
        chartType: 'line'|'bar';
    }

    export class ChartDashboardDirective implements ng.IDirective {

        public restrict = "E";
        public templateUrl = '/ts/dashboardModule/views/chartDirective.html';

        public scope = {
            'chartData': '=',
            'dashboardType': '=',
            'title': '=',
            'rightSection': '='
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