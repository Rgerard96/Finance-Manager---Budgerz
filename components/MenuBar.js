import { CogIcon, HomeIcon } from '@heroicons/react/solid'
import React from 'react'

export default function MenuBar() {
  return (
    <div className='bg-gray-200 rounded-lg p-5 border-t sm:border-none flex sm:flex-col justify-around sm:justify-start sm:space-y-10'>
     <div className=''>
         <HomeIcon className='w-6 text-gray-400'/>
     </div>
     <div className=''>
         <HomeIcon className='w-6 text-gray-400'/>
     </div>
     <div className=''>
         <HomeIcon className='w-6 text-gray-400'/>
     </div>
     <div className=''>
         <HomeIcon className='w-6 text-gray-400'/>
     </div>
     <div className=''>
         <CogIcon className='w-6 text-gray-400'/>
     </div>
    </div>
  )
}
