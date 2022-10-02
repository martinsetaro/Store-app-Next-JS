import Image from "next/future/image";
import dolar from '../public/img/dolar.png';
import React, {useState} from "react";

export default function monedas() {

    const [agregar,setAgregar] = useState(0);

const agregar_monedas = () =>{

    setAgregar(agregar + 5000);
}


  return (
   
    <div className="w-1/2 m-auto h-24 shadow-md flex justify-center items-center gap-3 rounded-md">
        
        <Image src={dolar} alt="monedas" className="w-10 h-10"/><h2 className="text-2xl">Monedas <span>${agregar}</span></h2>
        <button onClick={agregar_monedas} className="text-4xl rounded-full bg-orange-500 w-10 h-10 text-white hover:bg-slate-400 ">+</button>
    </div>
    
  )
}
