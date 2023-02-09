import { Formik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { registerFormSchema } from '../utils/formSchema';
import axios from "axios";
import { useEffect, useState } from 'react';
import UserCard from './user_card';

function GetAllUsers() {

    const [users, setUsers] = useState([]);
    useEffect(() => {

        var url = "http://localhost:3000/users"

        axios.get(url, {
            responseType: 'json'
        }).then(response => {
            if (response.status == 200) {
                setUsers(response.data.data.data)

            }

        },)

    });
    return (
        <>
            <br></br>
            {
                users.map((user) =>
                    < UserCard firstname={user.firstname} lastname={user.lastname} desc={user.email} />
                )
            }

        </>
    );
};

export default GetAllUsers;