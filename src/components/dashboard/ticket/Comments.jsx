import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/dashboard/ticket/Comments.module.scss";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ ticketId, projectId }) => {
    const comments = useSelector((state) => state.entities.comments.comments)
        .filter((comment) => comment.ticket === ticketId)
        .reverse();

    return (
        <div className={styles.Comments}>
            {comments.length > 0 && (
                <div className={styles.CommentsComments}>
                    {comments.map((comment) => (
                        <Comment key={comment._id} comment={comment} />
                    ))}
                </div>
            )}
            <CommentForm ticketId={ticketId} projectId={projectId} />
        </div>
    );
};

export default Comments;
