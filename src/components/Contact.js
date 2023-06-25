import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'
import { t } from 'i18next'
//import i18n from '../utils/i18n'

const Contact = () => {
  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <Typography>{t('contact')}</Typography>
    </Box>
  )
}

export default Contact
