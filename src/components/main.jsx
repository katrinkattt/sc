import React from 'react';
import Toolbar from './toolbar';
import BizMun from './bizMun';
import CategoryProj  from './CategoryProj';

export default function Main(props){
    return(
        <div className="content">
            <Toolbar />
            <div className="container">
                <CategoryProj />
            </div>
        </div>
    )
}