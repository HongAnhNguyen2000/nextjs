import { Stack, Typography, Button, Box } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import NorthIcon from '@mui/icons-material/North'
import { sessionChart, userChart } from '@/assets'
import Image from 'next/image'

const SmallChart = ({
  title,
  amount,
  increasePercent,
}: {
  title: string
  amount: string
  increasePercent: string
}) => {
  const getChartByType = () => {
    switch (title) {
      default:
        return userChart
      case 'Sessions':
        return sessionChart
    }
  }
  const isSessionsType = title === 'Sessions'
  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        background: 'white',
        borderRadius: '12px',
        boxShadow:
          '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        padding: 3,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography
          sx={{
            fontSize: 16,
            fontFamily: 'Inter',
            fontWeight: 600,
            lineHeight: '24px',
          }}
        >
          {title}
        </Typography>
        <Button>
          <MoreVertIcon />
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Stack direction="column" spacing={2}>
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '36px',
              fontWeight: 600,
              lineHeight: '44px',
            }}
          >
            {amount}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              sx={{
                color: isSessionsType ? '#F04438' : '#067647',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              <NorthIcon
                sx={{
                  color: isSessionsType ? '#F04438' : '#17B26A',
                  fontSize: '14px',
                }}
              />
              {increasePercent}
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>vs last month</Typography>
          </Stack>
        </Stack>
        <Box>
          <Image
            src={getChartByType()}
            alt=""
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </Box>
      </Stack>
    </Stack>
  )
}

export default SmallChart
