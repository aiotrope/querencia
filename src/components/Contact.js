import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
//import i18n from '../utils/i18n'

const Contact = () => {
  const { t } = useTranslation('common')
  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <Typography>{t('contact.name')}</Typography>
    </Box>
  )
}

export default Contact
