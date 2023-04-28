import './App.css';
import React, {useEffect, useState} from 'react';







function App() {

  const [nutri,setNutri] = useState([]);
  useEffect(() =>{

    function loadApi() {
  let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
      .then((result)=> result.json())
      .then((json) =>{
        setNutri(json);
        
      })
    }
    loadApi();
   
  })
  
  return (
    
    <div className='container' >
     <header>
      <strong>React Nutri</strong>
     </header>
     {nutri.map((item)=>{
      return(
        <article key={item.id} className='post'>
          <strong className='title'>
           {item.titulo}
           <img src={item.capa} alt={item.titulo} className='capa' />
           <p className='subTitulo'>
            
            {item.subtitulo}
           </p>
           <a className='botao'>Acessar</a>
          </strong>
        </article>
      )
     })}
    </div>
  );
}

export default App;
