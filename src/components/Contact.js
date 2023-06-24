import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'
import { t } from 'i18next'

const Contact = () => {
  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <Typography>{t('contactpage')}</Typography>
    </Box>
  )
}

export default Contact
