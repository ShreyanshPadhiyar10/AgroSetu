'use client'
import React, { useState } from 'react'
import InputField from '../UI/Inputs/TextInput'
import TextInput from '../UI/Inputs/TextInput'
import PasswordInput from '../UI/Inputs/PasswordInput'
import RoleComponent from './RoleComponent'
import Button from '../UI/Buttons/Button'
import Link from 'next/link'

const roles = [
  {
    id: "farmer",
    icon: "fa fa-tractor",
    title: "Farmer",
    description: "Sell your produce directly to consumers"
  },
  {
    id: "consumer",
    icon: "fa fa-shopping-basket",
    title: "Consumer",
    description: "Buy fresh produce from local farmers"
  },
];

function Signup() {
  const [selectedRole, setSelectedRole] = useState("farmer");

  return (
    <>
      <div className='pt-5 mb-10'>
        <h1 className='text-3xl font-bold'>Create your account</h1>
        <p className='mt-3 opacity-65 tracking-wide'>Join our community to access all features</p>
      </div>
      <div>
        <TextInput
          label={"First Name"}
          placeholder={"Enter your first name"}>
        </TextInput>
        <TextInput
          label={"Last Name"}
          placeholder={"Enter your last name"}>
        </TextInput>
        <TextInput
          label={"Email or Phone"}
          placeholder={"Enter your email or phone number"}>
        </TextInput>
        <PasswordInput
          label={"Password"}
          placeholder={"Create a strong password"}>
        </PasswordInput>
      </div>
      <div className='mt-6'>
        <div className='mb-6'>
          <p>Select your role</p>
        </div>
        <div className='flex gap-x-3'>
          {roles.map((role) => (
            <RoleComponent
              key={role.id}
              iconClass={role.icon}
              title={role.title}
              description={role.description}
              isSelected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>
        <div className='mt-10'>
          <Button type='success' className={"!w-full mb-7"}>Sign Up</Button>
          <Link href={"/login"} className='mt-7 text-center text-lightGreen'>
            <p>Already have an account? Sign In</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Signup
