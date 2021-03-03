import Head from 'next/head'
const RegisterForm = () => {
    return (
        <div>
        <Head>
        <title>Register Form Formik</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
            <h1>Register</h1>
            <form>
                <label htmlFor="email">Email Address</label>
                <input id='email' name='email' />
                <label htmlFor="password">Password</label>
                <input id='password' name='password' />
                <label htmlFor="repassword">Password again</label>
                <input id='repassword' name='repassword' />
            </form>
        </div>
    )
}

export default RegisterForm