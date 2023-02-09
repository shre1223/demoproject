import { Formik } from "formik";
import {useDispatch} from "react-redux"
import * as Yup from "yup";
import { loginSchema } from "../utils/formSchema";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Loginform() {
  const navigate = useNavigate();
  const setSuccess = () => toast("Successfully logged in!");
  const setError = () => toast("Incorrect email or password");
  //const dispatch = useDispatch();

  //  dispatch(login({
  //   email : email,
  //   password : password,
  //  }))

   
  const onSubmit = (data) => {
    var config = {
      method: 'post',
      url: 'http://localhost:3000/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.status === 201) {
        setSuccess()
        setTimeout(() => {
          navigate("/dashboard", { state: response.data.data.data })
        }, 3000);
      }
    })
      .catch(err => {
        if (err.response.data.status === 400) {
          setError()
        }
      });

  };

  return (
    <>
      <ToastContainer />
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (

            <div className="login">
              <div className="form">
                {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                <form noValidate onSubmit={handleSubmit}>
                  <span>Login</span>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter email id"
                    className="form-control inp_text"
                    id="email"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.email && touched.email && errors.email}
                  </p>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password"
                    className="form-control"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                  {/* Click on submit button to submit the form */}
                  <button type="submit">Login</button>
                  <p className="mt-2">
                    Don't have account?</p><p><Link to="/register">Signup</Link>
                  </p>
                </form>
              </div>
            </div>
          )
        }}
      </Formik>
    </>
  );
}

export default Loginform;