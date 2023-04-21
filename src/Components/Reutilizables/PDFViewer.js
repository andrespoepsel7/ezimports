import React, {useState} from 'react'
// Loader
import Loader from './Loader'
// Logo
import logo from '../../Assets/Element 30 NO BG.png'
//Storage
import { Storage } from 'aws-amplify'
// pDF Dependencies
import {Viewer, Worker} from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
// Swal 
import Swal from 'sweetalert2'


export default function PDFViewer() {

    // State para cargar
    const [loading, setLoading] = useState(false)

    // Para el pdf
    const [pdf, setPdf] = useState(null)
    const [nombrePdf, setNombrePdf] = useState(null)

    // Constante que indica que solo se pueden subir pdfs
    const fileType = ['application/pdf']

    // Funciones
    // Para subir el pdf
    const handleChange = (e) => {
        setLoading(true)
        let selectedFile = e.target.files[0]
        // Si existe y es pdf
        if(selectedFile){
            if(selectedFile && fileType.includes(selectedFile.type)){
                setNombrePdf(e.target.files[0].name)
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPdf(e.target.result)
                }
                console.log('Pdf elegido correctamente')
            }else{
                setPdf(null)
                console.log("Error al elegir pdf")
                Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                }).fire({
                    icon:'error',
                    title:'Solo se aceptan archivos PDF!',
                    text:"Volver a intentar o elegir otro archivo!"
                })
            }
        }else{
            console.log("Debe elegir un archivo")
            setPdf(null)
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            }).fire({
                icon:'error',
                title:'Error!',
                text:"Debe seleccionar un archivo!"
            })
        }
        
        setLoading(false)
    }

    // Función para poder subir un archivo a la base de datos en storage
    const uploadFile = async() => {

        if(pdf && nombrePdf){
            setLoading(true)
            const response = await Storage.put(`pdf/${nombrePdf}`, pdf)
            console.log(response)
            setLoading(false)
        }else{
            console.log("No se selecciono un archivo")
        }

    }

    const handleViewFile = () => {
        console.log(nombrePdf)
    }

  return (
    <div className='flex w-[100%] h-[100%] justify-center'>
        {/* Versión WEB */}    
        <div className='hidden sm:flex flex-col w-[100%] px-[12%] py-[60px]'>
            {loading ?
                <Loader/>
                :
                <div className='relative flex flex-col h-full bg-white py-[30px] px-[30px] rounded-[35px] border-4 border-amber-400'>

                    <img src={logo} alt="logo" className='absolute top-0 left-0 w-[110px] mt-5 ml-5' />
                    <div className='flex items-center justify-center'>
                        <p className='font-bold text-[35px] mt-5 text-amber-400'>Visualizador de PDFs</p>
                    </div>
                    {/* Botones de prueba */}
                    <button onClick={uploadFile}>Subir archivo</button>
                    <button onClick={handleViewFile}>Ver archivo</button>
                    <div className='flex items-center justify-center my-[50px]'>
                        <label 
                            htmlFor='input'
                        >
                            <div className='flex flex-row bg-white py-1 px-3 rounded-lg items-center'>
                                <p className='bg-violet-950 py-1 px-3 text-white rounded-full hover:bg-violet-900'>Seleccionar archivo</p>
                                {pdf ?
                                    <p className='ml-3 font-extrabold'>{nombrePdf}</p>
                                    :
                                    <p className='ml-3'>Ningún archivo seccionado.</p>
                                }
                            </div>
                        </label>
                        <input 
                            type="file" 
                            name='file' 
                            id='input'
                            onChange={handleChange}
                            className='hidden'
                            
                        />
                    </div>   
                    
                    <div className='flex justify-center items-center w-full h-full p-2 bg-slate-100 rounded-lg border-2 border-violet-950'>
                        <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                            {
                                pdf && <>
                                    <Viewer fileUrl={pdf}/>
                                </>
                            }
                            {
                                !pdf && <p className='text-[30px] text-violet-950 font-extrabold'>NO HAY PDF</p>
                            }
                        </Worker>
                    </div>
                </div>
            }
        </div>
        {/* Versión MÓVIL */}
        <div className='flex flex-col mx-0 sm:hidden'>
            Versión disponible solo en escritorio.
        </div>
        
    </div>
  )
}
