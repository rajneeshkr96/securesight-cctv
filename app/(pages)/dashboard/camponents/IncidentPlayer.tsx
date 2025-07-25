import { CalendarDays, Disc, EllipsisVertical } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MoreCam = ({cam}:{cam:string})=>{
    return(
        <div>
            <div className='w-52 h-36 border rounded-xl overflow-hidden'>
                <div className='flex gap-x-2 justify-between items-center p-1 bg-background font-medium'>
                <span>{cam}</span>
                <EllipsisVertical size={16} />
                </div>
                <Image
                    src={"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt='thumbnail'
                    width={400}
                    height={400}
                    className='w-full'
                />

            </div>
        </div>
    )
}

const IncidentPlayer = () => {
    const thumbnail = ["camera - 2","camera - 3"]
  return (
        <div className='w-[55%] rounded-lg overflow-hidden relative'>
            <div className='flex gap-x-2 justify-center items-center p-1 absolute top-3 left-2 rounded-sm bg-background'>
                <CalendarDays size={16} />
                <span>11/07/2025 - 29:45:60</span>
            </div>
            <div className='flex gap-x-2 justify-center items-center p-1 absolute bottom-3 left-2 rounded-sm bg-background'>
                <Disc className='text-red-600' size={16} />
                <span>Camera - 01</span>
            </div>

            {/* video  */}
            <video className='w-full h-full ' src="/sample_video.mp4"></video>
            <div className='absolute right-3 bottom-2 flex px-2 py-3  gap-x-2'>
                {thumbnail.map((val,index)=><MoreCam key={index} cam={val}/>)}
            </div>
        </div>
  )
}

export default IncidentPlayer
