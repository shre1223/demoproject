import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import EditForm from "./edit_form";

function Profile() {
    const [user, setUser] = useState(null);
    const [show, setShowProfile] = useState(true);
    const [showEditForm, setShowEditForm] = useState(false);
    let { email } = useParams();
    const onEditClick = () => {
        setShowProfile(false)
        setShowEditForm(true)
    }
    const onCloseEditForm = () => {
        setShowEditForm(false)
        setShowProfile(true)
    }

    const onClose = () => {
        setShowProfile(false)
    }

    useEffect(() => {
        var config = {
            method: 'get',
            url: `http://localhost:3000/user/${email}`,
            headers: {}
        };

        axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            if (response.status === 200) {
                setUser(response.data.data.data)
            }
        })
            .catch(err => {
                console.log();
            });

    }, [showEditForm]);

    return (
        <>
            {
                showEditForm &&
                <EditForm
                    show={showEditForm}
                    onClose={onCloseEditForm}
                    setShowProfile={setShowProfile}
                    setShowEditForm={setShowEditForm}
                    user={user}
                />
            }
            <Modal
                backdrop="static"
                show={show}
                fullscreen={'sm-down'}
                keyboard={false}
                centered
                onHide={onClose}
                contentClassName="medium-width"
            >
                <Modal.Body>
                    <div className="profile-card">
                        {/* <img src="wel_img.jpeg" alt="John" style="width:100%"/> */}
                        <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" className="card-img-top" alt="...srdgfyjhgku" width="50" height="50" />
                        <h1>{user?.firstname} {user?.lastname}</h1>
                        <p class="title">{user?.email}</p>
                        <p>Nagpur</p>
                        <button className="editbtn" onClick={onEditClick}>
                            Edit
                        </button>
                    </div >
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Profile;