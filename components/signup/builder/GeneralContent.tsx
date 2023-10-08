import { Stack, Typography } from '@mui/material'
import { PlusPurpleIcon, purpleNote } from '@/assets'
import Image from 'next/image'

const contentGeneral = ['Your logo', 'Title and description']
const GeneralContent = () => {
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
          GENERAL
        </Typography>
        <Image
          src={PlusPurpleIcon}
          alt=""
          style={{ width: '30px', height: '30px' }}
        />
      </Stack>
      <Stack direction="column" spacing={1.5}>
        {contentGeneral.map((item: string, index) => (
          <Stack direction="row" spacing={1} alignItems="center" key={index}>
            <Image
              src={purpleNote}
              alt=""
              style={{ width: '30px', height: '30px' }}
            />
            <Typography
              sx={{ color: '#37424D', fontSize: '16px', fontWeight: 400 }}
            >
              {item}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
export default GeneralContent
