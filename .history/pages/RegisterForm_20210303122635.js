import Head from 'next/head'
import {useFormik} from 'formik'
const RegisterForm = () => {
    const formik = useFormik ({
        initialValues:{
            email:'',
            password:'',
            repassword:''
        },
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