import { Button, Divider, Stack, Typography } from '@mui/material'

import NormalTextField from './customField/NormalTextField'
import PasswordLength from './customField/PasswordLength'
import SocialContent from './builder/SocialContent'
import GoogleLogin from './customField/GoogleLogin'

const MainLoginContent = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '690px',
      }}
    >
      <Stack
        direction="column"
        spacing={4}
        alignItems="center"
        sx={{
          padding: '49px 41px',
          borderRadius: 1,
          boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14);',
          background: '#fff',
          width: '440px',
        }}
      >
        <Stack direction="column" spacing={1.5} alignItems="center">
          <Typography
            sx={{
              fontSize: '30px',
              fontFamily: 'Inter',
              fontWeight: 600,
              lineHeight: '38px',
            }}
          >
            Sign up
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 400,
              lineHeight: '24px',
              color: '#475467',
            }}
          >
            Sign up in less than a minute.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing="20px"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <NormalTextField label="Name*" placeholder="Enter your name" />
          <NormalTextField label="Email*" placeholder="Enter your email" />
          <NormalTextField
            label="Password*"
            isPassword
            placeholder="Enter your password"
          />
        </Stack>
        <PasswordLength />
        <Button
          sx={{
            width: '100%',
            backgroundColor: '#7F56D9',
            borderRadius: 1,
            padding: '10px 18px',
          }}
          variant="contained"
        >
          <Typography
            sx={{
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              fontFamily: 'Inter',
            }}
          >
            Get started
          </Typography>
        </Button>
        <Stack sx={{ width: '100%' }}>
          <GoogleLogin />
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography
            sx={{
              color: '#475467',
              fontSize: '14px',
              fontWeight: 400,
              fontFamily: 'Inter',
            }}
          >
            Already have an account?
          </Typography>
          <Typography
            sx={{
              color: '#6941C6',
              fontSize: '14px',
              fontWeight: 400,
              fontFamily: 'Inter',
            }}
          >
            Log in
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography
            sx={{
              color: '#98A2B3',
              fontSize: '7px',
              fontWeight: 700,
              lineHeight: '20px',
              letterSpacing: '2.1px',
              fontFamily: 'Inter',
            }}
          >
            POWERED BY -
          </Typography>
          <Typography
            sx={{
              color: '#6941C6',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: 'Inter',
            }}
          >
            ProductPath
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MainLoginContent
