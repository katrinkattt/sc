import React from 'react';
import Toolbar from './toolbar';
import BizMun from './bizMun';
import CategoryProj from './CategoryProj';
// import ListProj from './listProj';

export default class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            // selectedCategoryIndex: 0
            categories: []
        }
        this.setState = {
            "current": "block",
            "activ": "none"
        }
        var displayWiev = ''

        this.projectTypes =
            [
                {
                    "id": 1,
                    "name": "Для бизнеса"
                },
                {
                    "id": 2,
                    "name": "Для не бизнеса"
                }
            ];

        this.projectCategories =
            [
                {
                    "id": 11,
                    "name": "С/Х",
                    "projectTypes": [1, 2]
                },
                {
                    "id": 12,
                    "name": "Транспорт",
                    "projectTypes": [1]
                },
                {
                    "id": 3,
                    "name": "жкх",
                    "projectTypes": [2]
                },
                {
                    "id": 4,
                    "name": "дороги",
                    "projectTypes": [1, 2]
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
            <div className="content">
                <Toolbar />
                <div className="container " >
                    <div className="second__c" style={{ display: this.displayWiev !== '' ? 'block' : 'none' }}>
                        <div className="title_container">Bыберете решение для</div>
                        <div className="cards__b">
                            {/* <div style={{ display: this.state.categories.length > 0 ? "none" : "block" }}> */}
                            {
                                this.projectTypes.map(type => {
                                    return (
                                        <BizMun
                                            name={type.name}
                                            arr={this.projectTypes}
                                            state={this.projectCategories}
                                        // onClick={() => {
                                        //     alert('is work')
                                        //     this.setState({
                                        //         categories: this.projectCategories.filter(pc => {
                                        //             return pc.projectTypes.indexOf(type.id) !== -1

                                        //         })
                                        //     })
                                        // }}
                                        />
                                    )
                                })
                            }
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.state.categories.map(category => {
                            return (
                                <div>
                                    <CategoryProj
                                        name={category.name}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

                {/* <div>
                        {this.data[this.state.selectedCategoryIndex].name}
                        {
                            this.data[this.state.selectedCategoryIndex].categories.map(elem => {
                                return <div>{elem.name}</div>
                            })
                        }
                    </div>

                    <div>
                        <button onClick={() => { this.setState({ selectedCategoryIndex: 0 }) }}>prev</button>
                        <button onClick={() => { this.setState({ selectedCategoryIndex: 1 }) }}>next</button>
                    </div> */}

            </div>

        )
    }

}

// export default function Main(props){

//     const data = JSON.parse( 
//     [
//         {
//             "id": 1,
//             "name": "Для бизнеса",
//             "categories": [
//                 {
//                     "id": 1,
//                     "name": "С/Х"
//                 },
//                 {
//                     "id": 2,
//                     "name": "ИТС"
//                 }
//             ]
//         },
//         {
//             "id": 1,
//             "name": "Для не бизнеса",
//             "categories": [
//                 {
//                     "id": 3,
//                     "name": "Тест"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Тест2"
//                 }
//             ]
//         }
//     ]);

//     return(
//         <div className="content">
//             <Toolbar />
//             <div className="container">





//                 {/* <BizMun/> */}
//                 {/* <CategoryProj /> */}
//                 <ListProj />
//             </div>
//         </div>
//     )
// }
