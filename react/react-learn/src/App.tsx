import React from 'react'
import { useState, memo, useImperativeHandle } from 'react'
import ForWordComp from './components/forwordComp'
function App() {
  return (
    <div>
      <h3>组件通信</h3>
      <ForWordComp />
    </div>
  )
}

export default App
