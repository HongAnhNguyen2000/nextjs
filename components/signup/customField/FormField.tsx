import { Stack, TextField, Typography, Grid, Button } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import { ggIcon } from '@/assets'
import GoogleLogin from './GoogleLogin'
const FormField = ({ label, type }: { label: string; type?: string }) => {
  return (
    <Stack direction="column" spacing={1}>
      <Typography
        sx={{
          color: '#344054',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        {label}
      </Typography>

      <Grid container direction="row" spacing={1.5} alignItems="center">
        <Grid item xs={9} sx={{ padding: '0 !important' }}>
          {type === 'social' ? (
            <GoogleLogin />
          ) : (
            <TextField
              label=""
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiInputBase-root': {
                  height: '44px',
                },
              }}
            />
          )}
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ paddingTop: '0 !important', display: 'inline-flex' }}
        >
          <DragIndicatorIcon sx={{ color: '#657786', paddingRight: '15px' }} />

          <CloseIcon sx={{ color: '#657786', paddingRight: '15px' }} />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default FormField
