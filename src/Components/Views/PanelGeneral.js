import React from 'react'
// Navigation
import { useNavigate } from 'react-router-dom'

export default function PanelGeneral() {
  // Navigation
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex flex-col'>
        <p 
          className='text-amber-400 underline cursor-pointer'
          onClick={()=> navigate('/pdf_viewer')}
        >
          Visualizador de PDFs
        </p>
      </div>
    </div>
  )
}
