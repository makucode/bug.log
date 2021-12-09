import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountForm from "../../components/dashboard/account/AccountForm";
import DeletePopup from "../../components/dashboard/account/DeletePopup";
import Container from "../../components/dashboard/Container";
import Popup from "../../components/dashboard/Popup";
import { fetchUser } from "../../store/auth";
import styles from "../../styles/views/dashboard/Account.module.scss";

const Account = () => {
    const auth = useSelector((state) => state.auth);
    const [deletionRequest, setDeletionRequest] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);

    const isPending = auth.user.role === "pending";

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(auth.user._id));
    }, [dispatch]);

    return (
        <div className={styles.Account}>
            {changePassword && (
                <Popup isOpen={setChangePassword}>
                    <AccountForm
                        popup={setChangePassword}
                        prop="password"
                        userId={auth.user._id}
                    />
                </Popup>
            )}
            {changeEmail && (
                <Popup isOpen={setChangeEmail}>
                    <AccountForm
                        popup={setChangeEmail}
                        prop="email"
                        userId={auth.user._id}
                    />
                </Popup>
            )}
            {deletionRequest && (
                <DeletePopup
                    id={auth.user._id}
                    setOpen={setDeletionRequest}
                    open={deletionRequest}
                />
            )}
            <Container>
                <div className="ContainerHeading">
                    <h2>
                        My Account{" "}
                        <span className={styles.AccountId}>
                            (User-ID: {auth.user._id})
                        </span>
                    </h2>
                    {!isPending && (
                        <span className="ContainerHeadingInfo">
                            Registered on{" "}
                            <span>{auth.user.registrationDate}</span>
                        </span>
                    )}
                </div>
                <div className={styles.AccountContent}>
                    <div className={styles.AccountLeft}>
                        <div className={styles.AccountCol}>
                            <h4>First Name</h4>
                            <span>{auth.user.firstName}</span>
                        </div>
                        <div className={styles.AccountCol}>
                            <h4>Last Name</h4>
                            <span>{auth.user.lastName}</span>
                        </div>
                        {!isPending && (
                            <div className={styles.AccountCol}>
                                <h4>Email</h4>
                                <div className={styles.AccountColContent}>
                                    <span className={styles.AccountMail}>
                                        {auth.user.email}
                                    </span>
                                    <button
                                        onClick={() => setChangeEmail(true)}
                                    >
                                        Change Email
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className={styles.AccountCol}>
                            <h4>Role</h4>
                            <span>{auth.user.role}</span>
                        </div>
                    </div>
                    <div className={styles.AccountRight}>
                        {!isPending && (
                            <>
                                <button
                                    className={styles.AccountChangePassword}
                                    onClick={() => {
                                        setChangePassword(true);
                                    }}
                                >
                                    Change Password
                                </button>
                                <button
                                    className="ButtonAlert"
                                    onClick={() => setDeletionRequest(true)}
                                >
                                    Delete Account
                                </button>
                            </>
                        )}

                        <div className={styles.AccountAdminContact}>
                            Admin: makucode@gmail.com
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Account;
