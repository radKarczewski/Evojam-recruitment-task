namespace ServerModule {

    let config: IConfig = {
        host: "http://127.0.0.1:8282/ts/"
    };


    let createHttpProvider = ($http, serverConfig) => {
        return new HttpProvider($http, serverConfig);
    }
    createHttpProvider.$inject = ["$http", "ServerConfig"];



    angular.module("ServerModule", [])
        .constant("ServerConfig", config)
        .factory(HttpProvider.providerName, createHttpProvider);







    export interface IConfig {
        host: string;
    }

    export class ApiMethod {
        static Dashboard = {
            StatisticData: 'data.json'
        }
    }

    export interface StatisticDto {
        price: number;
        date: number;
        type: StatisticTypeEnum
    }

    export enum StatisticTypeEnum {
        NetComp = 0,
        AnalyzedHR = 1,
        QuestionRight = 2
    }
}