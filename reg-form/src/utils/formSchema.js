import * as Yup from 'yup';

export const passwordrules =
    'required: lower; required: upper; required: digit; required: [!#$%&*?@^]; minlength: 8;';


export const loginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required!').email('Email is invalid'),
    password: Yup.string().required('Password is required!'),

});


export const firstNameSchema = Yup.string()
    .required('First name is required')
    .min(1, 'First name must be at least 1 character');


export const lastNameSchema = Yup.string()
    .required('Last name is required')
    .min(1, 'Last name must be at least 1 character');


export const passwordSchema = Yup.string()
    .required('Required')
    .min(8, 'Must be at least 8 characters long');


export const passwordConfirmationSchema = Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords should match"

    )

})

export const emailSchema = Yup.string()
    .required('Email is required!')
    .email('Email is invalid');


export const urlSchema = Yup.string()
    .matches(
        /((http|https):\/\/)[a-z0-9-]+(\.[a-z0-9-]+)+([\/?].*)?/,
        'Enter correct url!'

    )

export const registerFormSchema = Yup.object().shape({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email : emailSchema.required('Required'),
    password : passwordSchema   
});

export const editformSchema = Yup.object().shape({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email : emailSchema.required('Required'),
    password : passwordSchema   
});