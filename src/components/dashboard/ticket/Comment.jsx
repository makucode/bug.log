import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../../store/comments";
import styles from "../../../styles/dashboard/ticket/Comment.module.scss";

const Comment = ({ comment }) => {
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteComment(comment._id));
    };

    return (
        <div className={styles.Comment}>
            <div className={styles.CommentHeading}>
                <span className={styles.CommentAuthor}>
                    {comment.authorName}
                </span>
                {user._id === comment.author && (
                    <div
                        className={styles.CommentDelete}
                        onClick={handleDelete}
                    ></div>
                )}
            </div>
            <p className={styles.CommentComment}>{comment.comment}</p>
            <div className={styles.CommentInfo}>
                <span>{comment.addedAtDate}</span>
                <span className={styles.CommentInfoDivider}>|</span>
                <span>{comment.addedAtTime}</span>
            </div>
        </div>
    );
};

export default Comment;
