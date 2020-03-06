import React, { Component } from 'react';

import Button from './button';
import CategoryProj from './CategoryProj';
import Main from './main';

export default class BizMun extends Component {

    render() {
        return (
            <div className="small-block">
                <Button text={this.props.name}
                onClick={()=> {
                    // alert(this.props.state)
                    this.displayWiev = 'strg'
                    alert(this.displayWiev)
                    return(
                         <CategoryProj  state={this.props.state} />
                    )
                }
            }
                 />
            </div>
        )
    }
}








// import React, {Component} from 'react';
// import Button from './button';

// export default class BizMun extends Component{
//     constructor(props){
//         super(props)
//         this.initialState = {
//             btn: [
//                 {
//                     text: "Бизнес",
//                     link: "#biz"
//                 },
//                 {
//                     text: "Муниципалитет",
//                     link: '#munz'
//                 }
//             ]
//         }
//     }

//     render(){
//         return(
//             <div className="">
//                 <nav aria-label="breadcrumb">
//                     <ol class="breadcrumb">
//                         <li class="breadcrumb-item"><a href="#df">Главная</a></li>
//                         <li class="breadcrumb-item active" aria-current="page">Направления</li>
//                     </ol>
//                 </nav>
//                 <div className="second__c">
//                     <div className="title_container">Bыберете решение для</div>
//                     <div className="cards__b">
//                         <div className="big-block">
//                             {
//                                 this.initialState.btn.map((c, id) =>
//                                     <div className="small-block" id={"card__"+id}
//                                     key={id}
//                                 >
//                             <Button onClick={()=>{ }} text={c.text} link={c.link} />
//                                 </div>
//                                 )
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
