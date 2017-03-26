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

        public static convertToModel(data: ServerModule.StatisticDto[]) {
            let statisticsModels: StatisticModel[] = [];

            for (let i = 0, len = data.length; i < len; i++) {
                statisticsModels.push(new StatisticModel(data[i]));
            }

            return statisticsModels;
        }

        public getDataToCharts(): ng.IPromise<StatisticModel[]> {
            return this.httpProvider.get<ServerModule.StatisticDto[]>(ServerModule.ApiMethod.Dashboard.StatisticData).then((result) => {
                return DashboardService.convertToModel(result.data);
            });
        }
    }

}