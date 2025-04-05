"use client"

import React from 'react'

function WelcomeBanner() {

    const {user}=useUser();
  return (
    <div className='p-5 bg-primary w-full text-white rounded-lg flex items-center gap-6'>
        <Image src/>
        <div>
            <h2 className='font-bold text-3xl'>Hi, {user?.fullName}</h2>
            <p>Welcome Back its time to dive in and start learning a new course</p>
        </div>
    </div>
  )
}

export default WelcomeBanner