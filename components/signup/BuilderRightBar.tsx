import { Divider, Stack, Typography } from '@mui/material'
import GeneralContent from './builder/GeneralContent'
import FormContent from './builder/FormContent'
import SocialContent from './builder/SocialContent'
const BuilderRightBar = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        background: 'white',
        width: '367px',
        padding: '46px 35px ',
      }}
    >
      <Stack direction="column" spacing="23px">
        <Typography
          sx={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Open sans' }}
        >
          Selected form
        </Typography>
        <Typography
          sx={{
            color: '#657786',
            fontSize: '16px',
            fontWeight: 400,
            fontFamily: 'Open sans',
          }}
        >
          No form selected yet
        </Typography>
      </Stack>
    </Stack>
  )
}

export default BuilderRightBar
