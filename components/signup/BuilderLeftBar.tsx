import { Divider, Stack } from '@mui/material'
import GeneralContent from './builder/GeneralContent'
import FormContent from './builder/FormContent'
import SocialContent from './builder/SocialContent'
const BuilderLeftBar = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        background: 'white',
        width: '382px',
        padding: '55px 30px ',
      }}
    >
      <GeneralContent />
      <Divider sx={{ padding: '0px 31px' }} />
      <FormContent />
      <Divider sx={{ padding: '0px 31px' }} />
      <SocialContent />
    </Stack>
  )
}

export default BuilderLeftBar
