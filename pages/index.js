import Layout from "../components/Layout"
import productos from '../components/mockup/productos.json';
import React , { useState , useEffect } from "react";
import style from '../styles/home.module.css';
import Image from "next/future/image";
import dolar from '../public/img/dolar.png';
import Monedas from "../components/monedas";




export default function Home() {

  const [producto,setProducto]= useState([]);
  


 




const elegirCategoria = (e)=>{
   const nuevo = productos.filter( item => item.categoria === e.target.value);
   setProducto(nuevo);
}

useEffect(()=>{

  setProducto(productos);


},[])




    
   
  
  const irMayor = () => {
     const irMas = [...producto].sort((a,b)=>{
    if(a.precio > b.precio){
      return -1;
    }
    if(a.precio < b.precio){
      return 1;
    }
    return 0;
  })
 
  setProducto(irMas);
  
  }

 




const irMenor = () => {
  const irMin = [...producto].sort((a,b)=>{
    if(a.precio < b.precio){
      return -1;
    }
    if(a.precio > b.precio){
      return 1;
    }
    return 0;
  })

  setProducto(irMin);
  
}

 
  


  return (
    <Layout
    title="Welcome Store"
    description="Tienda de productos electronicos"
    >
      <Monedas/>

   <div className="w-full h-auto pb-6 flex flex-col">
    <h2 className="text-3xl uppercase text-center mt-5">Tienda de productos electronicos</h2>
    <div className={style.container_button}>
    <button onClick={irMayor} className=" bg-orange-600 mb-2 w-1/2 m-auto text-white uppercase rounded-md p-2 active:bg-slate-400 lg:w-40 ">Mayor a Menor</button>
      <button onClick={irMenor} className="bg-orange-600 mb-2 w-1/2 m-auto text-white uppercase rounded-md p-2 active:bg-slate-400 lg:w-40">Menor a Mayor</button>
      <button onClick={()=>{setProducto(productos)}} className="bg-orange-600 mb-2 w-1/2 m-auto text-white uppercase rounded-md p-2 active:bg-slate-400 lg:w-24">Todos</button>
      <select className="mt-28 border-2" onChange={elegirCategoria}>
        <option>Seleccione un producto</option>
        <option value="auriculares">Auriculares</option>
        <option value="tablet">Tablet's</option>
        <option value="notebook">Notebooks</option>
        <option value="pc">Pc of / gamer</option>
      </select>
    </div>
    
    <div className="w-3/4 flex flex-wrap h-auto justify-around m-auto mt-6">
      {producto.map( item => {
        return(
          <>
            
          <div className="container_card shadow-md" key={item.id}>
            <div className="container_price flex justify-center ">
            
              <button className={style.btn_comprar}><Image src={dolar} alt="dolar" className={style.imagen}/>Comprar</button>
              
            </div>
             <h2 className="text-xl text-center mb-5">{item.nombre}</h2>
             <img className="w-36 h-36 m-auto" src={item.imagen} alt={item.nombre}/>
             <h3 className="text-center">Precio : $ {item.precio}</h3>
          </div>
          
          </>
        )
      })}

    </div>
</div>

    </Layout>
  )
}
