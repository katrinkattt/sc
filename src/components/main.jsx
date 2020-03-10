import React from 'react';
import Toolbar from './toolbar';
import CustomerType from './CustomerType';
import CategoryProj from './CategoryProj';
// import ListProj from './listProj';

export default class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            // selectedCategoryIndex: 0
            categories: []
        }

        // var displayViev = true

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
                    "projectTypes": [1, 2],
                    "color": "#45ab12"
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
                    <div className="second__c" style={{ display: this.state.categories.length > 0 ? "none" : "block" }}>
                        <div className="title_container">Bыберете решение для</div>
                        <div className="cards__b">
                            <div>
                                {
                                    this.projectTypes.map(type => {
                                        return (
                                            <CustomerType
                                                name={type.name}
                                                onClick={() => {
                                                    this.setState({
                                                        categories: this.projectCategories.filter(pc => {
                                                            return pc.projectTypes.indexOf(type.id) !== -1
                                                        })
                                                    })
                                                }}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: this.state.categories.length === 0 ? "none" : "block" }}>
                    <CategoryProj
                        categories={this.state.categories}
                    />
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




// arr={this.projectTypes}
// state={this.projectCategories}
// setState={this.setState}
// tId={type.id}
// categ={this.state.categories}


// style={{ display: (this.setState.displayViev !== false ? 'block' : 'none') }}


// {
//     this.state.categories.map(category => {
//         return (
//             <div>
//                 <CategoryProj
//                     name={category.name}
//                 />
//             </div>
//         )
//     })
// }