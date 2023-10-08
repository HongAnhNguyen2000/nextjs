import { Stack, Typography } from '@mui/material'
import { PlusPurpleIcon } from '@/assets'
import Image from 'next/image'
import FormField from '../customField/FormField'
const SocialContent = () => {
  return (
    <Stack direction="column" spacing={1.5} paddingBottom="30px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          sx={{
            fontFamily: 'Open Sans',
            fontSize: '18px',
            fontWeight: 700,
            color: '#B2BFCA',
          }}
        >
          SOCIAL LOGINS
        </Typography>
        <Image
          src={PlusPurpleIcon}
          alt=""
          style={{ width: '30px', height: '30px' }}
        />
      </Stack>
      <FormField label="Password" type="social" />
    </Stack>
  )
}

export default SocialContent
