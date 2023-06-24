import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { t } from 'i18next'

const MyContainer = () => {
  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <Typography>{t('frontpage')}.</Typography>
      <Typography>{t('home')}</Typography>
    </Box>
  )
}

export default MyContainer
