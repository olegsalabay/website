import React, { FC } from 'react'
import './page-main.scss'
import AppHeader from '../../components/app-header'
import Article from '../../components/article'
import CreateArticleForm from '../../forms/create-article-form'

const PageMain: FC = () => {

  //articles requests

  return (
    <div className='page-main'>
      <div className='page-main__content'>
        <Article />
        <Article />
      </div>

      <footer>
        <CreateArticleForm />
      </footer>
    </div>
  )
}

export default PageMain