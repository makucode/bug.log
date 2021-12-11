import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { updateProject } from "../../store/projects";
import Container from "./Container";
import styles from "../../styles/dashboard/MemberForm.module.scss";

const AddMemberForm = ({ popup, projectId, memberList }) => {
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);
    const users = useSelector((state) => state.entities.users.users);
    const [members, setMembers] = useState(memberList);

    const options = users.map((user) => ({
        value: user._id,
        label: `${user.firstName} ${user.lastName}`,
    }));

    const animatedComponents = makeAnimated();

    const handleAddMember = (e) => {
        e.preventDefault();
        dispatch(
            updateProject(projectId, {
                members,
            })
        );
        popup(false);
    };

    const handleMultiChange = (selected) => {
        setMembers(selected.map((user) => user.value));
    };

    return (
        <div className={styles.MemberForm}>
            <div className={styles.MemberFormWrapper}>
                <Container>
                    <div className="ContainerHeading">
                        <h2>Project Members</h2>
                        <div
                            className="ContainerClose"
                            onClick={() => popup(false)}
                        ></div>
                    </div>
                    <form onSubmit={handleAddMember}>
                        {(auth.user.role === "admin" ||
                            auth.user.role === "manager") && (
                            <>
                                <div className={styles.TicketFormMulti}>
                                    <h4 className={styles.TicketFormLabel}>
                                        Assign project to
                                    </h4>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={members.map((user) => ({
                                            value: user._id,
                                            label: user.title,
                                        }))}
                                        isMulti
                                        options={options}
                                        onChange={handleMultiChange}
                                        styles={{
                                            container: (provided, state) => ({
                                                ...provided,
                                                color: "#3d516f",
                                            }),
                                            control: (provided, state) => ({
                                                ...provided,
                                                backgroundColor: "#f0f2f9",
                                                color: "#adb5bd",
                                                border: "none",
                                                boxShadow: "none",
                                                borderRadius: "7px",
                                                outline: "none",
                                            }),
                                        }}
                                    />
                                </div>
                                <button type="submit">Update</button>
                            </>
                        )}
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default AddMemberForm;
