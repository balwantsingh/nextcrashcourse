
import Nav from '../components/Nav'
import Header from '../components/Header'
import styles from '../styles/Layout.module.css'
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout