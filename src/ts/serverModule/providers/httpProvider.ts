namespace ServerModule {
    export class HttpProvider {
        static providerName = 'HttpProvider';

        constructor(
            private $http: ng.IHttpService,
            private serverConfig: IConfig
        ){

        }

        public get<T>(url: string): ng.IHttpPromise<T> {
            return this.$http.get(this.serverConfig.host + url);
        }
    }
}