import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody
,CardTitle} from 'reactstrap';

class Dishdetail extends Component{
   

    renderDish(dish){
        if(dish!=null)
           return(
               <Card>
                   <CardImg top src={dish.image} alt={dish.name}/>
                   <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                   </CardBody>
               </Card>
           );
        else{
            return(
                <div></div>
            );
        }   
    }

    renderComments(dish){
        if(dish!=null){
            const element=dish.comments.map((comment)=>{
                return(
                    <li key={comment.id}>
                        <div>{comment.comment}</div><br/>
                        <div>
                            <span>--{comment.author}</span>
                            <span>{new Intl.DateTimeFormat('en-US',{year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</span>
                        </div><br/>
                    </li>
                );
            });
            return(
                <div>
                    <h3>Comments</h3>
                    <ul className="list-unstyled">{element}</ul>
                </div>
            );
        }

        else{
            return(
                <div></div>
            )
        }
           
    }

    render(){
        console.log(this.props.dish);
        
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-7 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default Dishdetail;
