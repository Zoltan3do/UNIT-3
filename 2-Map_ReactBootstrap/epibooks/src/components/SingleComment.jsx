import { ListGroupItem } from "react-bootstrap";

const SingleComment = (props) => {
    return (
        <ListGroupItem>
            {props.commento.rate} - {props.commento.comment}
        </ListGroupItem>
    )
}
export default SingleComment;