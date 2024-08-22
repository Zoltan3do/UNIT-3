import { Component } from "react";
import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
    render() {
        return (
            <ListGroup>
                {this.props.comments.map((c) => {
                    return (
                        <SingleComment commento={c} key={c.elementId}/>
                    )
                })}
            </ListGroup>
        )
    }
}
export default CommentList;