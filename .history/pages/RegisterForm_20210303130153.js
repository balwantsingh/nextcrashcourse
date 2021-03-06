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
                <label className="text-sm font-bold" htmlFor="email">Email Address</label><br />
                <input
                className="border border-gray-300 shadow px-5 py-2 w-96"
                onChange={formik.handleChange}
                values={formik.values.email}
                onBlur={formik.errors.handleBlur}
                id='email'
                name='email' /><br />
                {formik.touched.email && formik.errors.email ? <div className='text-red-600 text-xs mt-2'>{formik.errors.email}</div>: null}<br />
                
                <label className="text-sm font-bold" htmlFor="password">Password</label><br />
                <input
                className="border border-gray-300 shadow px-5 py-2 w-96"
                onChange={formik.handleChange}
                type='password'
                values={formik.values.password}
                onBlur={formik.errors.handleBlur}
                id='password'
                name='password' /><br />
                {formik.touched.password && formik.errors.password ? <div className='text-red-600 text-xs mt-2'>{formik.errors.password}</div>: null}<br />

                <label className="text-sm font-bold" htmlFor="repassword">Password again</label><br />
                <input
                className="border border-gray-300 shadow px-5 py-2 w-96"
                onChange={formik.handleChange}
                type='password'
                values={formik.values.repassword}
                onBlur={formik.errors.handleBlur}
                id='repassword' name='repassword' /><br />
                {formik.touched.repassword &&formik.errors.repassword ? <div className='text-red-600 text-xs mt-2'>{formik.errors.repassword}</div>: null}<br />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm