import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Paper from '@mui/material/Paper'

import Header from './components/Header'
import MyContainer from './components/MyContainer'
import About from './components/About'
//import Contact from './components/Contact'

const App = () => {
  return (
    <Suspense fallback={<p>Loading Translations ...</p>}>
      <Router>
        <Paper style={{ height: '100vh' }}>
          <Header />
          <Routes>
            <Route exact path='/' element={<MyContainer />} />
            <Route path={'/about'} element={<About />} />
            {/* <Route path={'/contact'} element={<Contact />} /> */}
          </Routes>
        </Paper>
      </Router>
    </Suspense>
  )
}

export default App
