import React, { useState } from 'react'

export const Form: React.FC = () => {
  const [content, setContent] = useState('')

  const handleChange = (event: any) => {
    switch (event.target.name) {
      case 'content':
        setContent(event.target.value)
        break
      default:
        console.log('key not found')
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(content)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          name="content"
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  )
}
