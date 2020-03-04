import React, {Component} from 'react';
import one from '../media/cartinka.jpg';
import svetf from '../media/svetofor.jpg';
import sklad from '../media/sklad.jpg';
import favor from '../media/bookmark-outline.png';
import send from '../media/share-outline.png';

export default class ListProj extends Component{
    constructor(props){
        super(props)
            this.initialState={
                catalog:[
                    {
                        image: svetf,
                        title:'Система синхронизация табло обратного отчета времени на светофорных объектах г. Тюмени',
                        text: 'Веб-сервис предназначен для контроля работоспособности и управления комплексами устройств системы синхронизации табло обратного отсчёта времени на светофорных объектах с АСД г. Тюмень.'
                    },
                    {
                        image: sklad,
                        title: 'Система мониторинга климата в складских и производственных помещениях',
                        text: 'Система мониторинга климата в складских и производственных помещениях'
                    },
                    {
                        image: one,
                        title: 'Cистемма мониторинга работоспособноси и управления сетью табло',
                        text: 'табло предназначенно для отображения текущего времени прибытия общественного транспорта'
                    }
                ]
        }
    }
    render(){
        return(
            <div className="listProj_main">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#main">Главная</a></li>
                        <li class="breadcrumb-item"><a href="#napr">Направления</a></li>
                        <li class="breadcrumb-item"><a href="#napr">Категории</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Список проектов</li>
                    </ol>
                </nav>
                <div className="title_container">Каталог решений</div>
                    <div className="cards__b">
                    <div className="big-block">
                        {
                            this.initialState.catalog.map((current, id) =>
                                <div class="jumbotron">
                                    <img className="img__prj" src={current.image} alt="" srcset=""/>
                                    <p className="lead">{current.title}</p>
                                    <p className="lead__txt">{current.text}</p>
                                    <div className="fav">
                                        <a href="#fav">
                                        <img src={favor} alt="" srcset=""/>
                                        </a>
                                        <a href="#send">
                                            <img src={send} alt="" srcset=""/>
                                        </a>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
