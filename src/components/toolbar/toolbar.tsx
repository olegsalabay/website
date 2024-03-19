import React, { FC } from 'react'
import './toolbar.scss'

interface ToolbarProps {
  buttons: string[]
}

const toolbarProps: ToolbarProps = {
  buttons: ['home', 'log in', 'play']
}

const Toolbar: FC = () => {

  const list = toolbarProps.buttons.map((el) => <li className='toolbar-button' key={el}>{el}</li>)

  console.log(list)

  return (
    <div className='toolbar'>
      <h2>Toolbar</h2>
      <ul>
        { list }
      </ul>
    </div>
  )
}

export default Toolbar