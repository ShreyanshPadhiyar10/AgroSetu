import React from 'react'
import TextInput from '../../UI/Inputs/TextInput'
import TextareaInput from '../../UI/Inputs/TextareaInput'
import DescriptionCard from '../../UI/DescriptionSection/DescriptionCard'
import FileUploader from '../Register/FileUploader'

function FarmerRegister() {
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'>Farmer Onboarding</h1>
        <p className='text-xl text-gray-650 font-bold mt-5'>Farm Information</p>
      </div>
      <div className='mt-5'>
        <TextInput
          label={"Farm Name"}
          placeholder={"Enter your farm name"} />
        <TextInput
          label={"Farm Address"}
          placeholder={"Enter your farm address"} />
        <TextareaInput
          label={"Farm Description"}
          placeholder={"Describe your farm, products, and farming practices"} />
      </div>
      <div className='mt-5'>
        <div>
          <h1 className='text-xl text-gray-650 font-bold mt-5'>Document Upload</h1>
        </div>
        <div className='mt-4'>
          <DescriptionCard
            title={"Required Documents"}
            description={"Please upload the following documents to verify your farm business"}
            iconClass={"fa-regular fa-file-lines !px-4"}
            className="w-full"
          />
        </div>
        <div className='mt-5'>
          <FileUploader />
        </div>
      </div>
    </>
  )
}

export default FarmerRegister