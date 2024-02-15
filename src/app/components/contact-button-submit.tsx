import React from 'react'
import { useFormStatus } from 'react-dom';
import { SiMinutemailer } from 'react-icons/si'

export default function ContactButtonSubmit() {
    const {pending} = useFormStatus();

  return (
    <button type='submit' className='group flex items-center justify-center gap-2 h-[2rem] w-[8rem] bg-[#181818] text-[#fff] rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-[#140000] disabled: scale-100 disabled:bg-opacity-55'
    disabled={pending}
    >
        {
            pending ? <div className='h-5 w-5 animate-spin rouded-full border-b-2 border-[#fff]'></div> : (
               <>Contact{" "}<SiMinutemailer className='text-xs opacity-80 tranistion-all group-hover:translate-x-2 group-hover:-translate-y-1' />
               </> 
            )
        }
                    
                   </button>
  )
}
