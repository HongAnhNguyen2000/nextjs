import SmallChart from '@/components/SmallChart'
import CountryBar from '@/components/map/CountryBar'
import CustomMap from '@/components/map/CustomMap'
import { Stack, Grid, Typography, Button } from '@mui/material'
import { AUicon, CAicon, GBicon, INicon, USicon } from '@/assets'
import ColumnChart from '@/components/chart/ColumnChart'
import PieChart from '@/components/chart/PieChart'

const cityArray = [
  {
    country: 'United States',
    city: 'Washington',
    image: USicon,
    latitude: 36.2087,
    longitude: -104.8307,
    value: 50,
  },
  {
    country: 'India',
    city: 'Beijing',
    image: INicon,
    latitude: 14.2087,
    longitude: -279.8307,
    value: 30,
  },

  {
    country: 'United Kingdom',
    city: 'London',
    image: GBicon,
    latitude: 56.2087,
    longitude: -244.8307,
    value: 20,
  },
  {
    country: 'China',
    city: 'Beijing',
    image: AUicon,
    latitude: 26.2087,
    longitude: -264.8307,
    value: 10,
  },
  {
    country: 'Canada',
    city: 'Ottawa',
    image: CAicon,
    latitude: 54.0194,
    longitude: -102.4108,
    value: 10,
  },
]

const DocsLayout = ({ children }) => {
  return (
    <div>
      <Stack
        style={{
          background: '#F2F4F5',
          height: '1200px',
          width: '100%',
          boxSizing: 'border-box',
          padding: '24px 32px',
        }}
        spacing={3}
      >
        <h1>docs</h1>
        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid item xs={4} sx={{ paddingLeft: '0 !important' }}>
            <SmallChart title="Users" amount="20.8k" increasePercent="12%" />
          </Grid>
          <Grid item xs={4}>
            <SmallChart title="Sessions" amount="26.4k" increasePercent="2%" />
          </Grid>
          <Grid item xs={4}>
            <SmallChart
              title="Session duration"
              amount="3m 52s"
              increasePercent="2%"
            />
          </Grid>
        </Grid>
        <Stack
          direction="column"
          spacing={2.5}
          sx={{
            borderRadius: '12px',
            boxShadow:
              '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
            padding: 3,
            background: 'white',
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '28px' }}
            >
              Active users right now
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '8px',
                border: '1px solid var(--gray-300, #D0D5DD)',
                background: 'var(--base-white, #FFF)',
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              }}
            >
              <Typography sx={{ textTransform: 'none', color: '#344054' }}>
                Real time report
              </Typography>
            </Button>
          </Stack>
          <Grid container justifyContent="space-between">
            <Grid item xs={8}>
              <CustomMap cities={cityArray} />
            </Grid>
            <Grid item xs={4} paddingLeft={8}>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: '36px',
                  fontWeight: 600,
                  lineHeight: '44px',
                  paddingBottom: 1.5,
                }}
              >
                10.8k
              </Typography>
              <Stack direction="column" spacing={1.5}>
                {cityArray.map((item, index) => (
                  <CountryBar
                    title={item.country}
                    icon={item.image}
                    key={index}
                    value={item.value}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        <Stack
          direction="column"
          spacing={2.5}
          sx={{
            borderRadius: '12px',
            boxShadow:
              '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
            padding: 3,
            background: 'white',
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '28px' }}
            >
              How do you acquire users ?
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '8px',
                border: '1px solid var(--gray-300, #D0D5DD)',
                background: 'var(--base-white, #FFF)',
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              }}
            >
              <Typography sx={{ textTransform: 'none', color: '#344054' }}>
                Location report
              </Typography>
            </Button>
          </Stack>
          <Grid container justifyContent="space-between">
            <Grid item xs={8}>
              <ColumnChart />
            </Grid>
            <Grid item xs={4} paddingLeft={8}>
              <PieChart />
            </Grid>
          </Grid>
        </Stack>
        {children}
      </Stack>
    </div>
  )
}

export default DocsLayout
