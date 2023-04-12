import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [query, setQuery] = React.useState('Fujianto')
  const [toggleTheme, setToggleTheme] = React.useState('light')
  const [toggleContent, settoggleContent] = React.useState(true)
  const themeStyle = {
    backgroundColor: toggleTheme === 'light' ? '#fff' : '#000',
    color: toggleTheme === 'light' ? '#000' : '#ccc'
  }

  const slowFunction = (str) => {
    for (let i = 0; i <= 1000000000; i++) {}
    console.log('Slow function called')
    return `Hello ${str.toUpperCase()}`
  }

  const doGreeting = React.useMemo(() => {
    return slowFunction(query)
  }, [query])

  // const doGreeting = slowFunction(query)

  const changeTheme = () => {
    setToggleTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const showHideContent = () => {
    settoggleContent(prev => !prev)
  }

  const doSearch = (e) => {
    setQuery(e.target.value)
  }

  React.useEffect(() => {
    console.log('Change Theme rerender')
  }, [toggleTheme])
  
  React.useEffect(() => {
    console.log('Toggle content rerender ===>')
  }, [toggleContent])

  return (
    <div style={themeStyle}>
      <Link to="/about">About</Link>
      <h1>Home Page</h1>

      <input type="text" onChange={(e) => doSearch(e)} value={query} />
      <br />
      <button onClick={changeTheme}>Toggle Theme</button>
      <button onClick={showHideContent}>Toggle Content</button>

      {
        toggleContent &&
        <div>
          <h2>{doGreeting}</h2>
        </div>
      }
    </div>
  )
}
