import React, { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
//import Dishdetail from './DishDetailComponents';
class Menu extends Component {
    

   
 /*renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }*/

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card 
                  onClick={()=>this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
     /*   renderComments(dish){
        if(this.state.selectedDish!=null){
           var comments = this.state.selectedDish.comments.map((comment)=>{
            return(
             <li key={comment.id}>
                 <div>{comment.comment}</div><br/>
                 <div>
                     <span>--{comment.author}</span>
                     <span>{comment.date}</span>
                 </div><br/>
             </li>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">{comments}</ul>
            </div>
        )
       }
      
       else{
         comments = [];
       }
    }*/
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
               
            </div>
        );
    }
}

export default Menu
 