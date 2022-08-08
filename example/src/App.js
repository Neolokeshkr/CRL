import React from 'react'
import { ExampleComponent, Container, FormatMsg } from 'test-ui-lib'
import 'test-ui-lib/dist/index.css'

const App = () => {
  return (
    <div>
        <ExampleComponent text="Create React Library Example 😄" />
        <Container />
        <FormatMsg />
    </div>
  )
}

export default App
