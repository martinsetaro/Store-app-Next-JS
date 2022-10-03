import Image from "next/future/image";
import dolar from '../public/img/dolar.png';
import React, {useEffect, useState} from "react";
import { useContext } from "react";
import {contexto} from "../components/AppContext";

import Swal from 'sweetalert2'



export default function monedas() {


  const{monedas,sumarMonedas} = useContext(contexto);
  
    
 const agregarMonedas = (e) =>{
e.preventDefault();
Swal.fire({
  title:"Agregastes +5000",
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000
})
sumarMonedas(5000);

 }



  return (
   
    <div className="w-1/2 m-auto h-24 shadow-md flex justify-center items-center gap-3 rounded-md">
        
        <Image src={dolar} alt="monedas" className="w-10 h-10"/><h2 className="text-2xl">Monedas <span>${monedas}</span></h2>
        <button onClick={agregarMonedas} className="text-4xl rounded-full bg-orange-500 w-10 h-10 text-white hover:bg-slate-400 ">+</button>
       
    </div>
    
  )
}
