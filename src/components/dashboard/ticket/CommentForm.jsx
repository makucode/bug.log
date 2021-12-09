import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../../store/comments";
import styles from "../../../styles/dashboard/ticket/CommentForm.module.scss";

const CommentForm = ({ ticketId, projectId }) => {
    const [newComment, setNewComment] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createComment({
                comment: newComment,
                ticket: ticketId,
                project: projectId,
            })
        );
        setNewComment("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.CommentForm}>
            <input
                type="text"
                required
                placeholder="Enter a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">Comment</button>
        </form>
    );
};

export default CommentForm;
