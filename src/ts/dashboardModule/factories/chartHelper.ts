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
            return {
                "chart": {
                    "type": "lineWithFocusChart",
                    "height": 450,
                    "margin": {
                        "top": 20,
                        "right": 20,
                        "bottom": 60,
                        "left": 40
                    },
                    "duration": 500,
                    "useInteractiveGuideline": true,
                    "xAxis": {
                        "axisLabel": "X Axis"
                    },
                    "x2Axis": {},
                    "yAxis": {
                        "axisLabel": "Y Axis",
                        "rotateYLabel": false
                    },
                    "y2Axis": {},
                    "zoom": false
                }
            };
        }

        private barOptions() {
            return {
                "chart": {
                    "type": "multiBarChart",
                    "height": 450,
                    "margin": {
                        "top": 20,
                        "right": 20,
                        "bottom": 45,
                        "left": 45
                    },
                    "clipEdge": true,
                    "duration": 500,
                    "stacked": false,
                    "xAxis": {
                        "axisLabel": "Time (ms)",
                        "showMaxMin": false
                    },
                    "yAxis": {
                        "axisLabel": "Y Axis",
                        "axisLabelDistance": -20
                    }
                }
            };
        }

        private baseOptions() {

        }
    }
}