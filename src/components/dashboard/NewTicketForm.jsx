import React from "react";
import Container from "./Container";
import styles from "../../styles/dashboard/NewTicketForm.module.scss";

const NewTicketForm = () => {
    const handleTicketSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.NewTicketForm}>
            <div className={styles.NewTicketFormWrapper}>
                <Container>
                    <form>

                        <input type="text" />
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default NewTicketForm;
