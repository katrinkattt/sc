import React, { Component } from 'react';
import Button from './button';
import CategoryProj from './CategoryProj';
// import Main from './main';

export default class CustomerType extends Component {

    render() {
        return (
            <div className="small-block">
                <Button text={this.props.name}
                    // onClick={() => {
                    //     this.props.onClick()
                    // }}
                    onClick={this.props.onClick}
                />
            </div>
        )
    }
}