import React, { Component } from 'react';
import Button from './button';

export default class Bm extends React.Component {



    render() {
        return (
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
                                this.props.arr.map((c, id) =>
                                    <div className="small-block"
                                    >
                                        <Button onClick={() => { }} text={c.text} link={c.link} />
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
