import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Paper from '@mui/material/Paper'

import Header from './components/Header'
import MyContainer from './components/MyContainer'
import About from './components/About'
//import Contact from './components/Contact'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation('common')
  return (
    <Suspense fallback={<p>Loading Translations ...</p>}>
      <Router>
        <Paper style={{ height: '100vh' }}>
          <Header />
          <Routes>
            <Route exact path='/' element={<MyContainer />} />
            <Route path={'/' + t('about.name')} element={<About />} />
            {/* <Route path={'/contact'} element={<Contact />} /> */}
          </Routes>
        </Paper>
      </Router>
    </Suspense>
  )
}

export default App
