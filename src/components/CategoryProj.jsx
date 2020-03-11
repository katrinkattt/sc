import React, { Component } from 'react';
import svetf from '../media/svetofor.jpg';

export default class CategoryProj extends Component {

    render() {
        return (
            <div className="mainChoise">
                <div className="second__c">
                    <div className="title_container">Bыберете категории</div>
                    <div className="cards__b">
                        <div className="big-block">
                            {
                                this.props.categories.map(category => {
                                    return (
                                        <div
                                            onClick={()=>{
                                                this.setState({
                                                    projects: this.props.projects.filter(pc =>{
                                                        return pc.props.name.indexOf(category.name) !== -1
                                                    })
                                                })

                                            }
                                        }
                                        className="small-block categor__card"
                                            style={{ background: category.color }}
                                        >
                                            <a href="#goo"><div className="category__text">{category.name}</div>
                                            </a>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                    <div className="choise_category">
                        <div class="jumbotron inCategory">
                            <img className="img__prj" src={svetf} alt="" srcset="" />
                            <p className="lead">category</p>
                            <p className="lead__txt">vibranay category</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}














// import React, {Component} from 'react';
// import Button from './button';

// export default class CategoryProj extends Component{
//     constructor(props){
//         super(props)
//             this.initialState = {
//                 circle:[
//                     {
//                         color:'#46a7f9',
//                         text: "город",
//                         link: "#город"
//                     },
//                     {
//                         color:'#ff8800',
//                         text:  "автоматизация",
//                         link: "#город"
//                     },
//                     {
//                         color:'#9a08fc',
//                         text: "дороги",
//                         link: "#город"
//                     },
//                     {
//                         color:'#a7fc08',
//                         text: "экология",
//                         link: "#город"
//                     },
//                     {
//                         color:'red',
//                         text: "жкх",
//                         link: "#город"
//                     },
//                     {
//                         color: '#164cfd',
//                         text: "университет",
//                         link: "#город"
//                     },

//                 ]
//             }
//         }

//     render(){
//         return(
//         <div className="mainChoise">
//             <nav aria-label="breadcrumb">
//                 <ol class="breadcrumb">
//                     <li class="breadcrumb-item"><a href="#main">Главная</a></li>
//                     <li class="breadcrumb-item"><a href="#napr">Направления</a></li>
//                     <li class="breadcrumb-item active" aria-current="page">Категории</li>
//                 </ol>
//             </nav>
//             <div className="second__c">
//                     <div className="title_container">Bыберете категории</div>
//                     <div className="cards__b">
//                         <div className="big-block">
//                             {
//                                 this.initialState.circle.map((curr, id) =>
//                                     <div href={curr.link} className="small-block categor__card" id={"card__"+id}
//                                     key={id}
//                                     style={{background:curr.color}}
//                                     >
//                                         <a href="#goo"><div className="category__text">{curr.text}</div>
//                                         </a>
//                                 </div>
//                                 )
//                             }
//                         </div>
//                     </div>
//                 </div>
//                 <div className="coiseCateg">
//                     <Button text="показать"/>
//                 </div>
//         </div>
//         )
//     }
// }







