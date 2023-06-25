import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { useTranslation } from 'react-i18next'
//import MyHOC from './MyHOC'

/* const Component = (props) => {
  return <div>Hello {props.name}!</div>
} */

const MyContainer = (props) => {
  const { t } = useTranslation('common')
  //const wrappedWithName = MyHOC(Component, { name: 'Kalle' })
  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <Typography>{t('frontpage.name')}.</Typography>
      {/* <Typography>{t('home.name')}</Typography>
      {wrappedWithName} */}
    </Box>
  )
}

export default MyContainer
