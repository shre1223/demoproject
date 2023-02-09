import { Formik } from 'formik';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { registerFormSchema } from '../utils/formSchema';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const AccountForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }
  const setSuccess = () => toast("Successfully created user!");
  const setError = () => toast("User already exists!");
  const onSubmit = (data) => {
    var config = {
      method: 'post',
      url: 'http://localhost:3000/user',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*'
      // },
      data: data
    };

    axios(config).then((response) => {
      if (response.status === 201) {
        setSuccess()
        setTimeout(() => {
          navigate("/login")
        }, 6000);
      }
    }).catch(err => {
      if (err.response.data.status === 500  && err.response.data.message === "User already exist!") {
        setError()
      }
    })
  };
  // message={errorMessage} type="success"
  return (
    <>
      <ToastContainer />
      <nav className="reg-navbar">
        <div className="navbar-items">
          <h2>Registration</h2>
        </div>
      </nav>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={registerFormSchema}
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
              <Form.Group className="mb-3">
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
                  Submit
                </Button>
                <p className="mt-2">
                  Already have account? <Link to="/login">Login</Link>
                </p>

              </Form.Group>
            </Form>
          )
        }}
      </Formik>
    </>
  );
};

export default AccountForm;