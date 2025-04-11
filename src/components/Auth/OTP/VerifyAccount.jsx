import React from 'react'
import OtpInput from './OtpInput'
import Button from '../../UI/Buttons/Button'
import DescriptionCard from '../../UI/DescriptionSection/DescriptionCard'

function VerifyAccount() {
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'>Verify Your Account</h1>
        <p className='mt-3 opacity-65 tracking-wide'>We've sent a verification code to your email/phone</p>
      </div>
      <div className='w-full mt-9'>
        <DescriptionCard 
          title={"Enter Verification Code"}
          description={"Check your inbox for a 6-digit code and enter it below"}
          iconClass={"fa-solid fa-user-shield"}
          className="w-full"
        />
      </div>
      <div className='max-w-full mt-7'>
        <OtpInput/>
      </div>
      <div className='mt-16'>
        <p>Didn't receive a code?</p>
        <p className='mt-4 text-lightGreen cursor-pointer'>Resend Code</p>
        <Button type='success' className={"mt-9 w-full"}>Verify Account</Button>
        <p className='mt-5 text-lightGreen text-center'>Change Email/Phone</p>
      </div>
    </>
  )
}

export default VerifyAccount
