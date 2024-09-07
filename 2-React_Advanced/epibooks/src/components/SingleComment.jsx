import { ListGroupItem } from "react-bootstrap";

const SingleComment = (props) => {
    return (
        <ListGroupItem data-testid="commentino">
            {props.commento.rate} - {props.commento.comment}
        </ListGroupItem>
    )
}
export default SingleComment;