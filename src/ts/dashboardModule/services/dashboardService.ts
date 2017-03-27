namespace DashboardModule {

    export class DashboardService {
        static serviceName = 'DashboardService';
        static $inject = [
            '$q',
            'HttpProvider'
        ];

        constructor(
            private $q: ng.IQService,
            private httpProvider: ServerModule.HttpProvider
        ) {

        }

        public getDataToCharts(): ng.IPromise<StatisticModel[]> {
            return this.httpProvider.get<ServerModule.StatisticDto[]>(ServerModule.ApiMethod.Dashboard.StatisticData).then((result) => {
                return result.data.map((statisticDto: ServerModule.StatisticDto) => {
                    return new StatisticModel(statisticDto);
                });
            });
        }

        public convertToChartData(statisticsData: StatisticModel[]): IChartData {
            let chartData: IChartData = {
                line: [],
                bar: [],
                lineTotalValue: 0,
                barTotalCount: 0
            };

            for (let i = 0, len = statisticsData.length; i < len; i++) {
                let statModel: StatisticModel = statisticsData[i];

                let weekChartValueLine: IChartValue = this.getWeekChartValue(chartData.line, statModel);
                let weekChartValueBar: IChartValue = this.getWeekChartValue(chartData.bar, statModel);

                weekChartValueLine.y = Math.round((statModel.price + weekChartValueLine.y) * 100) / 100;
                weekChartValueBar.y += 1;

                chartData.lineTotalValue += statModel.price;
                chartData.barTotalCount += 1;
            }

            return chartData;
        }





        private getWeekChartValue(chartTypeData: IChartTypeData[], statModel: StatisticModel) {
            let weekChartValue: IChartValue = this.findWeekChartValueInData(chartTypeData, statModel);

            if (weekChartValue === null) {
                let chartTypeObj: IChartTypeData = this.createChartTypeObj(statModel.type, statModel.getWeekNumber());
                chartTypeData.push(chartTypeObj);
                weekChartValue = chartTypeObj.values[0];
            }

            return weekChartValue;
        }

        private findWeekChartValueInData(chartTypeValues: IChartTypeData[], statModel: StatisticModel): IChartValue {
            for (let i = 0, len = chartTypeValues.length; i < len; i++) {
                let chartType: IChartTypeData = chartTypeValues[i];

                if (chartType.key === ServerModule.StatisticTypeTranslateEnum[statModel.type]) {
                    return this.getChartValueFromValues(chartType.values, statModel.getWeekNumber());
                }
            }

            return null;
        }

        private getChartValueFromValues(values: IChartValue[], weekNumber: number): IChartValue {
            for (let i = 0, len = values.length; i < len; i++) {
                if (values[i].x === weekNumber) {
                    return values[i];
                }
            }

            values.push({
                x: weekNumber,
                y: 0
            });

            return values[values.length -1];
        }

        private createChartTypeObj(type: ServerModule.StatisticTypeEnum, weekNumber: number): IChartTypeData {
            return <IChartTypeData>{
                key: ServerModule.StatisticTypeTranslateEnum[type],
                values: [{
                    x: weekNumber,
                    y: 0
                }]
            }
        }
    }





    export interface IChartData {
        line: IChartTypeData[];
        bar: IChartTypeData[];
        lineTotalValue: number;
        barTotalCount: number;
    }

    export interface IChartTypeData {
        key: string;
        values: IChartValue[]
    }

    export interface IChartValue {
        x: number;
        y: number;
    }
}