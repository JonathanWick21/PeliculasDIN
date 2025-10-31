import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function InterpretePeli10(props) {
  const {foto, nombre, esNota10} = props;
  return (
    <>
      <div className='background-white interprete_card p-4 rounded-lg shadow-md flex flex-col items-center max-w-[320px] mx-auto'>
        <div className='h-[350px] w-full overflow-hidden'>
          <img src={foto} alt={nombre} class="w-full rounded-md mb-3 object-cover"/>
        </div>
        <div class='pt-5'>
          <h2 class="pb-3 text_medium_bold ${esNota10 ? 'text-red-600' : 'text-black-500'}">{nombre}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  )
}

export default InterpretePeli10
