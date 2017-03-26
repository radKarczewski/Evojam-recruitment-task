namespace AppModule {
    export abstract class BaseModel<T> {

        constructor(data: T) {
            if (data) {
                this.setData(data);
            }
        }

        protected setData(data: T) {
            let keys = Object.keys(data);
            for (let i = 0, len = keys.length; i < len; i++) {
                let key = keys[i];

                if (typeof data[key] !== "function") {
                    this[key] = data[key];
                }
            }
        }
    }
}