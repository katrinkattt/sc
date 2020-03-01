import React, {Component} from 'react';
import Button from './button';

export default class BizMun extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: [
                "Бизнес",
                "Муниципалитет",
            ],
            link: [
                "#biz",
                '#munz'
            ]
        }
    }

    render(){
        return(
            <div className="">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#df">Главная</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Направления</li>
                    </ol>
                </nav>
                <div className="second__c">
                    <div className="title_container">Bыберете решение для</div>
                    <div className="cards__b">
                        <div className="big-block">
                            {
                                this.state.text.map((text, id) =>
                                    <div className="small-block" id={"card__"+id}
                                    key={id}
                                >
                                    <Button text={text} link={this.state.link[id]} />
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
