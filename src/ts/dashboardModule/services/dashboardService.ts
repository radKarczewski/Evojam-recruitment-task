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

        // public static convertToModel(data: ServerModule.StatisticDto[]) {
        //     let statisticsModels: StatisticModel[] = [];
        //
        //     for (let i = 0, len = data.length; i < len; i++) {
        //         statisticsModels.push(new StatisticModel(data[i]));
        //     }
        //
        //     return statisticsModels;
        // }

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
                bar: []
            };

            for (let i = 0, len = statisticsData.length; i < len; i++) {
                let statModel: StatisticModel = statisticsData[i];

                let weekChartValueLine: IChartValue = this.getWeekChartValue(chartData.line, statModel);
                let weekChartValueBar: IChartValue = this.getWeekChartValue(chartData.bar, statModel);

                weekChartValueLine.x += statModel.price;
                weekChartValueBar.x += 1;
            }

            return chartData;
        }





        private getWeekChartValue(chartTypeData: IChartTypeData[], statModel: StatisticModel) {
            let weekChartValue: IChartValue = this.findWeekChartValueInData(chartTypeData, statModel);

            if (weekChartValue === null) {
                chartTypeData.push(this.createChartTypeObj(statModel.type, statModel.getWeekNumber()));
                weekChartValue = chartTypeData[0].values[0];
            }

            return weekChartValue;
        }

        private findWeekChartValueInData(chartTypeValues: IChartTypeData[], statModel: StatisticModel): IChartValue {
            for (let i = 0, len = chartTypeValues.length; i < len; i++) {
                let chartType: IChartTypeData = chartTypeValues[i];

                if (chartType.key === statModel.type) {
                    return this.getChartValueFromValues(chartType.values, statModel.getWeekNumber());
                }
            }

            return null;
        }

        private getChartValueFromValues(values: IChartValue[], weekNumber: number): IChartValue {
            for (let i = 0, len = values.length; i < len; i++) {
                if (values[i].y === weekNumber) {
                    return values[i];
                }
            }

            values.push({
                x: 0,
                y: weekNumber
            });

            return values[values.length -1];
        }

        private createChartTypeObj(type: ServerModule.StatisticTypeEnum, weekNumber: number): IChartTypeData {
            return <IChartTypeData>{
                key: type,
                values: [{
                    x: 0,
                    y: weekNumber
                }]
            }
        }
    }





    export interface IChartData {
        line: IChartTypeData[];
        bar: IChartTypeData[];
    }

    export interface IChartTypeData {
        key: ServerModule.StatisticTypeEnum;
        values: IChartValue[]
    }

    export interface IChartValue {
        x: number;
        y: string|number;
    }
}