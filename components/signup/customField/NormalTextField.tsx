import { TextField, Stack, Typography, InputAdornment } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const NormalTextField = ({
  label,
  placeholder,
  isPassword,
}: {
  label: string
  placeholder: string
  isPassword?: boolean
}) => {
  return (
    <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
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
      {isPassword ? (
        <TextField
          label=""
          variant="outlined"
          placeholder={placeholder}
          fullWidth
          sx={{
            '& .MuiInputBase-root': {
              height: '44px',
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon sx={{ fill: '#98A2B3', fontSize: '16px' }} />
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <TextField
          label=""
          variant="outlined"
          placeholder={placeholder}
          fullWidth
          sx={{
            '& .MuiInputBase-root': {
              height: '44px',
            },
          }}
        />
      )}
    </Stack>
  )
}

export default NormalTextField
