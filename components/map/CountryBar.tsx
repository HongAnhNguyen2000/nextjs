import { USicon } from '@/assets'
import {
  Stack,
  Grid,
  Typography,
  Button,
  LinearProgress,
  Box,
  LinearProgressProps,
} from '@mui/material'

import Image from 'next/image'

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: number }
) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            height: 10,
            borderRadius: 5,
            width: '224px',
            backgroundColor: '#EAECF0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#1ED760',
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35, paddingLeft: 1.5 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

const CountryBar = ({
  title,
  icon,
  value,
}: {
  title: string
  icon: string
  value: number
}) => {
  return (
    <Stack direction="row" spacing={2} sx={{ alignSelf: 'stretch' }}>
      <Image src={icon} alt="" />
      <Stack direction="column">
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
          }}
        >
          {title}
        </Typography>
        <LinearProgressWithLabel value={value} />
      </Stack>
    </Stack>
  )
}

export default CountryBar
