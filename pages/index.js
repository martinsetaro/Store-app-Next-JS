import Layout from "../components/Layout"
import productos from '../components/mockup/productos.json';
import React , { useState , useEffect } from "react";


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
   <div className="w-full h-auto pb-6 flex flex-col">
    <h2 className="text-3xl uppercase text-center">Tienda de productos electronicos</h2>
    <div className="flex justify-center gap-6 mt-5">
      <button onClick={irMayor} className="bg-orange-600 text-white uppercase rounded-md p-2 active:bg-slate-400">Mayor a Menor</button>
      <button onClick={irMenor} className="bg-orange-600 text-white uppercase rounded-md p-2 active:bg-slate-400">Menor a Mayor</button>
      <button onClick={()=>{setProducto(productos)}} className="bg-orange-600 text-white uppercase rounded-md p-2 active:bg-slate-400">Todos</button>
      <select onChange={elegirCategoria}>
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
          <div className="w-48 h-auto p-3 shadow-md rounded-md mb-8" key={item.id}>
             <h2 className="text-xl text-center mb-5">{item.nombre}</h2>
             <img className="w-36 h-36" src={item.imagen} alt={item.nombre}/>
             <h3 className="text-center">Precio : $ {item.precio}</h3>
          </div>
        )
      })}

    </div>
</div>

    </Layout>
  )
}
