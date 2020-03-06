import React from 'react';
import Tes from './tes';



export default class Main extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            // selectedCategoryIndex: 0
            categories: []
        }

        this.projectTypes =
            [
                {
                    "id": 1,
                    "name": "Для бизнеса",
                    'color': "#000",
                },
                {
                    "id": 2,
                    "name": "Для не бизнеса",
                    "color": "#5478af"
                },
                {
                    "id": 2,
                    "name": "Для не бизнеса",
                    "color": "#5478af"
                }
            ];

        this.projects = [
            {
                title: 'Система синхронизация табло обратного отчета времени на светофорных объектах г. Тюмени',
                text: 'Веб-сервис предназначен для контроля работоспособности и управления комплексами устройств системы синхронизации табло обратного отсчёта времени на светофорных объектах с АСД г. Тюмень.',
                categories: [1, 2]
            },
            {
                title: 'Система мониторинга климата в складских и производственных помещениях',
                text: 'Система мониторинга климата в складских и производственных помещениях',
                categories: [1]
            },
            {
                title: 'Cистемма мониторинга работоспособноси и управления сетью табло',
                text: 'табло предназначенно для отображения текущего времени прибытия общественного транспорта',
                categories: [3, 4]
            }
        ]
    }

    render() {
        return (
            <Tes arr={this.projectTypes} />
        )
    }

}