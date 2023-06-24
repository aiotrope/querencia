import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { t } from 'i18next'
import MyHOC from './MyHOC'

const Component = (props) => {
  return <div>Hello {props.name}!</div>
}

const MyContainer = () => {
  const wrappedWithName = MyHOC(Component, { name: 'Kalle' })
  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <Typography>{t('frontpage')}.</Typography>
      <Typography>{t('home')}</Typography>
      {wrappedWithName}
    </Box>
  )
}

export default MyContainer
