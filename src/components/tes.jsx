import React, { Component } from 'react';

export default class Tes extends Component{

    render(){
        return (
            <div className="second__c">
                <div className="title_container">Bыберете категории</div>
                <div className="cards__b">
                    <div className="big-block">
                        {
                            this.props.arr.map(type =>{
                                return(
                                <div className="small-block categor__card"
                                    style={{ background: type.color }}
                                >
                                    <a href="#goo"><div className="category__text">{type.name}</div>
                                    </a>
                                </div>
                                )}
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}


