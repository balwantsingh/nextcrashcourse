import ArticleList from "./ArticleList"

import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({article}) => {
    return (
        <>
         <Link href="/article/[id]" as={`/article/${article.id}`}>

         </Link>   
        </>
    )
}

export default ArticleItem