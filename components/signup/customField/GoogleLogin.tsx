import { Stack, TextField, Typography, Grid, Button } from '@mui/material'
import Image from 'next/image'
import { ggIcon } from '@/assets'
const GoogleLogin = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1.5}
      sx={{
        height: '30px',
        borderRadius: '8px',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        padding: '6px',
        border: '1px solid #D0D5DD',
      }}
    >
      <Image src={ggIcon} alt="" />
      <Typography
        sx={{
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 600,
          fontFamily: 'Inter',
          color: '#344054',
        }}
      >
        Sign up with Google
      </Typography>
    </Stack>
  )
}
export default GoogleLogin
