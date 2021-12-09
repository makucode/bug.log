import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import Popup from "../Popup";
import { deleteUser } from "../../../store/users";
import styles from "../../../styles/dashboard/account/DeletePopup.module.scss";
import useOutsideClick from "../../../hooks/useOutsideClick";

const DeletePopup = ({ id, open, setOpen }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, setOpen);

    const handleDelete = () => {
        dispatch(deleteUser(id));
        dispatch({ type: "auth/logout" });
        navigate("/");
    };

    return (
        <Popup isOpen={open}>
            <div className={styles.DeletePopup}>
                <div className={styles.DeletePopupWrapper} ref={wrapperRef}>
                    <Container>
                        <div className="ContainerHeading">
                            <h2>Delete Account?</h2>
                            <div
                                className="ContainerClose"
                                onClick={() => setOpen(false)}
                            ></div>
                        </div>
                        <div className={styles.DeletePopupContent}>
                            <button
                                className={styles.DeletePopupButton}
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="ButtonAlert"
                                onClick={handleDelete}
                            >
                                Confirm
                            </button>
                        </div>
                    </Container>
                </div>
            </div>
        </Popup>
    );
};

export default DeletePopup;
