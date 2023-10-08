import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { PlusPurpleIcon } from '@/assets'
import FormField from '../customField/FormField'
import IntegrateField from '../customField/IntegrateField'
const FormContent = () => {
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
          FORMS
        </Typography>
        <Image
          src={PlusPurpleIcon}
          alt=""
          style={{ width: '30px', height: '30px' }}
        />
      </Stack>
      <FormField label="Name" />
      <IntegrateField />
      <Stack sx={{ paddingTop: '52px' }}>
        <FormField label="Password" />
      </Stack>
    </Stack>
  )
}
export default FormContent
