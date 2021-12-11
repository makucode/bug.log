import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../store/users";
import styles from "../../../styles/dashboard/account/AccountForm.module.scss";
import Container from "../Container";

const AccountForm = ({ popup, prop }) => {
    const user = useSelector((state) => state.auth.user);
    const [detail, setDetail] = useState("");
    const [confirmDetail, setConfirmDetail] = useState("");
    const [error, setError] = useState();

    const desc = prop[0].toUpperCase() + prop.substring(1);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            if (prop === "password")
                dispatch(updateUser(user._id, { password: detail }));
            else if (prop === "email")
                dispatch(updateUser(user._id, { email: detail }));
            return popup(false);
        }

        setError(desc + "s do not match.");
    };

    const validate = () => {
        if (detail === confirmDetail) return true;
        return false;
    };

    return (
        <div className={styles.AccountForm}>
            <div className={styles.AccountFormWrapper}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Change {desc}</h2>
                        <div
                            className="ContainerClose"
                            onClick={() => popup(false)}
                        ></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor={desc}>{desc}</label>
                        <input
                            required
                            name={desc}
                            id={desc}
                            type="text"
                            placeholder={"Enter new " + desc}
                            onChange={(e) => setDetail(e.target.value)}
                            value={detail}
                        />
                        <label htmlFor={"confirm" + desc}>Confirm {desc}</label>
                        <input
                            required
                            name={"confirm" + desc}
                            id={"confirm" + desc}
                            type="text"
                            placeholder={"Confirm " + desc}
                            onChange={(e) => setConfirmDetail(e.target.value)}
                            value={confirmDetail}
                        />
                        {error && (
                            <span className={styles.FormAlert}>{error}</span>
                        )}
                        <button>Update</button>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default AccountForm;
