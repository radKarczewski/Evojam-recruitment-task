namespace DashboardModule {
    export class StatisticModel extends AppModule.BaseModel<ServerModule.StatisticDto> implements ServerModule.StatisticDto {
        public price: number;
        public date: number;
        public type: ServerModule.StatisticTypeEnum;

        constructor(data?: ServerModule.StatisticDto) {
            super(data);
        }
    }
}