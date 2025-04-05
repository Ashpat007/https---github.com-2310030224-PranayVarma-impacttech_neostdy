"use client"

import React from 'react'

function SideBar() {
    const MenuList=[
        {
            name:'Dashboard',
            icon:LayoutDashboard,
            path:'/dashboard'
        },
        {
            name:'Upgrade',
            icon:Shield,
            path:'/dashboard/upgrade'
        },
        {
            name:'Profile',
            icon:UserCircle,
            path:'/dashboard/profile'
        }
    ]
    const path=usePathname();
  return (
    <div className='h-screen shadow-md p-5'>
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
            <h2 className="font-bold text-lg"></h2>
        </div>


        <div className='mt-10'>
            <Button className="w-full-">+ Create </Button>


            <div className='mt-5'>
                {MenuList.map((menu,index)=>{
                    <div key={index} className={`flex gap-4 items-center p-3 hower:bg-slat-200 rounded-lg cursor-pointer mt-3 ${path==menu.path && 'bg-slate-200'}`}>
                         <menu.icon/>
                         <h2>{menu.name}</h2>
                    </div>
                })}
            </div>
        </div>
        <div className='border p-4 bg-slate-100 rounded-lg absolute bottom-10 w-[80%]'>
            <h2 className='text-lg mb-2'>Available Points :</h2>
            <Progress value={30}/>
            <h2 className='text-sm'>2 Out of 5 points used </h2>
            <Link href={'/dashboard/upgrade'} className='text-primary text-xs mt-3'>Upgrade to create further</Link>
        </div>

    </div>
  )
}

export default SideBar