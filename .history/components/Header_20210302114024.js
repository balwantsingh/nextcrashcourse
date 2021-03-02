import headerStypes from '../styles/Header.module.css'

const Header = () => {
    const x = 5
    return (
        <div>
        <h1 className='title'>
        <span>WebDev</span> News
        </h1>
        <style jsx>
            {`
            .title {
               color: ${x > 3 ? 'red'} 
            }`}
        </style>
        </div>
    )
}

export default Header