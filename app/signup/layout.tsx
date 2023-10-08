import BuilderLeftBar from '@/components/signup/BuilderLeftBar'
import BuilderRightBar from '@/components/signup/BuilderRightBar'
import CreateLoginBar from '@/components/signup/CreateLoginBar'
import MainLoginContent from '@/components/signup/MainLoginContent'
import { Stack, Grid, Typography, Button } from '@mui/material'

const SignupLayout = ({ children }: { children: any }) => {
  return (
    <div>
      <Stack direction="column">
        <CreateLoginBar />
        <Stack direction="row" sx={{ background: '#F2F4F5' }}>
          <BuilderLeftBar />
          <MainLoginContent />
          <BuilderRightBar />
        </Stack>
      </Stack>
    </div>
  )
}

export default SignupLayout
