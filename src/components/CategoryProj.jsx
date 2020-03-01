import React, {Component} from 'react';
import Button from './button';

export default class CategoryProj extends Component{
    constructor(props){
        super(props)
            this.state = {
                color: [
                    '#46a7f9',
                    '#ff8800',
                    '#9a08fc',
                    '#a7fc08',
                    'red',
                    '#164cfd'
                ],
                text: [
                    "город",
                    "автоматизация",
                    "дороги",
                    "экология",
                    "жкх",
                    "университет"
                ],
                link: [
                    "#город",
                    "#автоматизация",
                    "#дороги",
                    "#экология",
                    "#жкх",
                    "#университет"
                ]
            }
        }

    render(){
        return(
        <div className="mainChoise">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#main">Главная</a></li>
                    <li class="breadcrumb-item"><a href="#napr">Направления</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Категории</li>
                </ol>
            </nav>
            <div className="second__c">
                    <div className="title_container">Bыберете категории</div>
                    <div className="cards__b">
                        <div className="big-block">
                            {
                                this.state.color.map((color, id) =>
                                    <div href={this.state.link[id]} className="small-block categor__card" id={"card__"+id}
                                    key={id}
                                    style={{background:color}}
                                    >
                                        <a href="#goo"><div className="category__text">{this.state.text[id]}</div>
                                        </a>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="coiseCateg">
                    <Button text="показать"/>
                </div>
        </div>
        )
    }
}






