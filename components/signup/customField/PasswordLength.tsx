import { TextField, Stack, Typography, Box } from '@mui/material'
const PasswordLength = () => {
  const generateStrength = [...Array(4)]
  return (
    <Stack direction="column" spacing="6px" sx={{ width: '100%' }}>
      <Typography
        sx={{
          color: '#475467',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
        }}
      >
        Password strength
      </Typography>

      <Stack direction="row" spacing="12px">
        {generateStrength.map((_, index) => (
          <Box
            sx={{
              height: '8px',
              width: '25%',
              backgroundColor: '#F2F4F7',
              borderRadius: '4px',
            }}
            key={index}
          ></Box>
        ))}
      </Stack>
    </Stack>
  )
}
export default PasswordLength
