import * as React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

const Header = () => {
  const { t, i18n } = useTranslation('common')
  const handleTranslation = (event) => {
    if (event) event.preventDefault()

    const id = event.target.id

    i18n.changeLanguage(id)
  }
  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { sx: 'flex' } }}>
          <Button sx={{ color: '#fff' }} component={Link} to='/'>
            {t('home.name')}
          </Button>
          <Button sx={{ color: '#fff' }} component={Link} to={'/about'}>
            {t('about.name')}
          </Button>
          {/*  <Button sx={{ color: '#fff' }} component={Link} to={'/contact'}>
              {t('contact.name')}
            </Button> */}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Button color='inherit' id='fi' onClick={handleTranslation}>
            FI
          </Button>
          <Button color='inherit' id='en' onClick={handleTranslation}>
            EN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
