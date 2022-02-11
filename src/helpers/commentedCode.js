// import { useEffect, useState } from "react";
// import styled from 'styled-components'
// import axios from 'axios'

// function App() {
//   const [clicks,setClick] = useState(0)
//   const [value, setValue] = useState('')
//   const axiosCliente = axios.create({
//     baseURL:'http://rickandmortyapi.com'
//   }) 
//   const getInfoFromAPI = async ()=>{
//     const response = await axios.post('/characters',{asd})
//     console.log(response.data);

//   useEffect(()=>{
//     console.log('El componente App se montó');
//     // setClick(clicks+1)
//   return ()=>{
//     console.log('El componente App se desmontó');
//   }
// }
//   ,[])
//   useEffect(()=>{
//     console.log('El componente App se montó');
//     // setClick(clicks+1)
//   return ()=>{
//     console.log('El componente App se desmontó');
//   }
// }
//   ,[value])

//   const handleClick = ()=>{
//     setClick(clicks+1)
//   }
//   const handleKeyUp = (e)=>{
//     setValue(e.target.value)
//   }

//   return (
//     <>
//     <p>{clicks}</p>
//     <p>Hola Mundo</p>
//     <input type="text" onKeyUp={(e)=>handleKeyUp(e)}/>
//     <button onClick={()=>handleClick()}>click</button>
//     </>
//   );
// }

// export default App;



  // const [values, setValues] = useState({
  //   name:'',
  //   lastname:'',
  //   comment:''
  // })

  // const handleKeyUp = (e)=>{
  //   console.log(e.target.value);
  //   setValues({
  //     ...values,
  //     [e.target.name]:e.target.value
  //   })
  //   // sendInfoToBackend(values);
  // }

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log(e.target.elements);
  // }

  // const handleClick = ()=>{
  //   sendInfoToBackend(values)
  // }

  // const ParrafoDivertido = styled.p`
  // background-color:${props=> props.color};
  // color: yellow;
  // font-size:45px;
  // `
  // const ParrafoDivertidoActualizado = styled(ParrafoDivertido)`
  // border: 5px solid green;
  // `





// <form onSubmit={handleSubmit}>
    //   <label htmlFor="name">Nombre</label>
    //   <input type="text" name="name" id='name'onKeyUp={(e)=>handleKeyUp(e)}/>
    //   <br />
    //   <label htmlFor="lastname">Apellido</label>
    //   <input type="text" name="lastname" id='lastname'onKeyUp={(e)=>handleKeyUp(e)}/>
    //   <br />
    //   <label htmlFor="Comentario">Comentario</label>
    //   <input type="text" name="comment" id='comment'onKeyUp={(e)=>handleKeyUp(e)}/>
    //   <br />
    //   <button type="submit" onClick={(e)=>handleClick(e)}>Enviar</button>
    // </form>

  //   return (
  //     <>
  //       <ParrafoDivertido color='blue'>Hola</ParrafoDivertido>
  //       <ParrafoDivertidoActualizado> Hola Mundo</ParrafoDivertidoActualizado>
  //     </>
  //   );
  // }