'use client'
import { microIcon } from '@/assets'
import {
  Stack,
  Switch,
  Typography,
  Grid,
  Button,
  SwitchProps,
} from '@mui/material'
import Image from 'next/image'
import { styled } from '@mui/material/styles'

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#7F56D9',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))
const IntegrateField = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        height: '40px',
        borderRadius: '8px',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        padding: '6px',
        border: '1px solid #D0D5DD',
        width: '256px',
      }}
    >
      <Stack direction="row" alignItems="center">
        <Image src={microIcon} alt="" />
        <Typography
          sx={{
            fontSize: '14px',
            color: '#101828',
            fontWeight: 500,
            lineHeight: '20px',
          }}
        >
          Microsoft
        </Typography>
      </Stack>
      <IOSSwitch defaultChecked />
    </Stack>
  )
}

export default IntegrateField
