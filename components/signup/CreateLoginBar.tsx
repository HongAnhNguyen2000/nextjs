import { Stack, Breadcrumbs, Button, Typography } from '@mui/material'
import GetAppIcon from '@mui/icons-material/GetApp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
const CreateLoginBar = () => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      sx={{
        paddingLeft: '35px',
        paddingRight: '30px',
        height: '80px',
        boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.15)',
        borderBottom: '1px solid #ced0d2',
        backgroundColor: 'white',
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Typography
          sx={{ color: '#8696A4', fontSize: '14px', fontWeight: 400 }}
        >
          Signup Builder
        </Typography>
        <Typography
          sx={{ color: '#37424D', fontSize: '14px', fontWeight: 400 }}
        >
          Simple Sign-up
        </Typography>
      </Breadcrumbs>
      <Stack direction="row" spacing={1.5}>
        <Button
          variant="text"
          startIcon={<GetAppIcon style={{ fill: '#7F56D9' }} />}
        >
          <Typography
            sx={{
              color: '#475467',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px',
              textTransform: 'none',
            }}
          >
            Save as draft
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#98A2B3;', borderRadius: '6px' }}
          endIcon={<ArrowForwardIosIcon />}
        >
          <Typography
            sx={{
              textTransform: 'none',
            }}
          >
            Next
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#7F56D9;', borderRadius: '8px' }}
          startIcon={<CheckIcon />}
        >
          <Typography
            sx={{
              textTransform: 'none',
            }}
          >
            Publish now
          </Typography>
        </Button>
        <Button>
          <CloseIcon style={{ fill: '#657786' }} />
        </Button>
      </Stack>
    </Stack>
  )
}
export default CreateLoginBar
