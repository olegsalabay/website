import React, { FC } from 'react'
import './article.scss'

interface ArticleProps {
  author?: string;
  description?: string;
  text?: string;
}

const text1 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quam nobis
exercitationem! Magnam beatae expedita itaque inventore ipsa,
minus provident atque asperiores dolor voluptate iure laborum a natus voluptas voluptatum.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
exercitationem! Magnam beatae expedita itaque inventore ipsa,
minus provident atque asperiores dolor voluptate iure laborum.`

interface ShowMoreTextProps {
  text: string;
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({text}) => {

  const show = text.length > 80

  return (
    <p className='btn-more-content'>{show && 'Show more text'}</p>
  )
}

const Article: React.FC<ArticleProps> = ({
  author = 'Arthor Castel',
  description = 'Decription: How to construct interesting dialogs',
  text = text1
}) => {



  return (
    <div className='article'>
    <h3>Author: <p>{ author}</p></h3>
    <h5>Decription: { description }</h5>
    <p>
      { text }
      <ShowMoreText text={text} />
    </p>
  </div>
  )
}

export default Article