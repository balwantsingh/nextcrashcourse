import Head from 'next/head'
import {useFormik} from 'formik'
const RegisterForm = () => {
    const validate = values => {
        const errors = {}

        if(!values.email) {
            errors.email = 'Required'

        } else if(values.email.length <4) {
            errors.email = 'Must be 5 charancter or more'
        }

        if(!values.password) {
            errors.password = 'Required'
        } else if(values.password.length < 8) {
            errors.password = 'Must be 8 charancter or more'
        } else if(values.password === '12345678') {
            errors.password = 'Must not be 12345678 !!!'
        }

        if(!values.repassword) {
            errors.repassword = 'Required'
        } else if(values.repassword !== values.password) {
            errors.repassword = 'Second password doesn\'t match'
        }

        return errors
    }
    
    const formik = useFormik ({
        initialValues:{
            email:'',
            password:'',
            repassword:''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <div>
        <Head>
        <title>Register Form Formik</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input onChange={formik.handleChange} values={formik.values.email} id='email' name='email' />
                <label htmlFor="password">Password</label>
                <input onChange={formik.handleChange} type='password' values={formik.values.password} id='password' name='password' />
                <label htmlFor="repassword">Password again</label>
                <input onChange={formik.handleChange} type='password' values={formik.values.repassword} id='repassword' name='repassword' />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm