import React, { useState, useEffect, useReducer } from 'react';
import axios from "axios";
import { Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { Formik } from 'formik';
import { editformSchema } from '../utils/formSchema';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const EditForm = ({ user, show, onClose, setShowProfile, setShowEditForm }) => {
  const navigate = useNavigate();
  let { email } = useParams();
  const initialValues = {
    firstname: user?.firstname,
    lastname: user?.lastname,
    email: user?.email,
    password: user?.password
  }

  const onSubmit = (data) => {
    var config = {
      method: 'put',
      url: `http://localhost:3000/user/${email}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.status === 200) {
        setShowEditForm(false)
        setShowProfile(true)
        navigate(`/profile/${user.email}`)
      }

    })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <>
      <Modal
        backdrop="static"
        show={show}
        fullscreen={'sm-down'}
        keyboard={false}
        centered
        onHide={onClose}
        contentClassName="medium-width"
      >
        <Modal.Header closeButton>
          <h3>Edit Form</h3>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={editformSchema}
            enableReinitialize
          >
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              resetForm,
              values,
              touched,
              errors,
            }) => {
              console.log(errors)
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3 nb-3">
                    <Row>
                      <Col sm={12} md={6}>
                        <Form.Label htmlFor="first_name" >
                          First Name
                          <span className="text-danger"> *</span>
                        </Form.Label>
                        <Form.Control
                          value={values.firstname}
                          id="firstname"
                          name="firstname"
                          type="text"
                          className="mb-4"
                          placeholder="First Name"
                          onChange={handleChange}
                          isValid={touched.firstname && !errors.firstname}
                          isInvalid={touched.firstname && !!errors.firstname}
                        />
                        <Form.Control.Feedback type="invalid">
                          <>{errors.firstname}</>
                        </Form.Control.Feedback>
                      </Col>

                      <Col sm={12} md={6}>
                        <Form.Label htmlFor="lastname">
                          Last Name <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          value={values.lastname}
                          id="lastname"
                          name="lastname"
                          type="text"
                          className="mb-4"
                          placeholder="LastName"
                          onChange={handleChange}
                          isValid={touched.lastname && !errors.lastname}
                          isInvalid={touched.lastname && !!errors.lastname}
                        />
                        <Form.Control.Feedback type="invalid">
                          <>{errors.lastname}</>
                        </Form.Control.Feedback>
                      </Col>

                      <Col sm={12} md={6}>
                        <Form.Label htmlFor="email">
                          E-mail <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          value={values.email}
                          id="email"
                          name="email"
                          type="text"
                          className="mb-4 EmailClass"
                          placeholder="Email"
                          onChange={handleChange}
                          isValid={touched.email && !errors.email}
                          isInvalid={touched.email && !!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          <>{errors.email}</>
                        </Form.Control.Feedback>
                      </Col>

                      <Col sm={12} md={6}>
                        <Form.Label htmlFor="password">
                          Password <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          value={values.password}
                          id="password"
                          name="password"
                          type="text"
                          className="mb-4"
                          placeholder="Password"
                          onChange={handleChange}
                          isValid={touched.password && !errors.password}
                          isInvalid={touched.password && !!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          <>{errors.password}</>
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>

                  </Form.Group>
                </Form>
              )
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );

};

export default EditForm;





