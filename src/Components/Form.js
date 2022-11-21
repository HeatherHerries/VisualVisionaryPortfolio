import React from 'react'
import '../Styles/Form.css'

function Form({type, placeholder, value, cols, rows}) {
  return (
    <div>
      <form action="">
        <textarea type={type} placeholder={placeholder} value={value} cols={cols} rows={rows}></textarea>
      </form>
    </div>
  )
}

export default Form
