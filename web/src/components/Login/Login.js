import React, { useEffect, useState } from 'react'
import { Form } from '@unform/web'
import Input from './input'
import { useHistory } from 'react-router-dom'
import { MdRemoveRedEye } from 'react-icons/md'
// import api from '../services/api'
import { Link } from 'react-router-dom'

export default function Login() {
  const history = useHistory()
  function handleSubmit(data) {
    history.push('/home')

    // const email = data.email
    // const senha = data.senha
    // api.get('users').then(usuarios=>{
    //   var emails = []
    //   var senhas = []

    //   for(let usuario of usuarios.data){
    //     emails.push(usuario.email)
    //     senhas.push(usuario.password)
    //   }
    // if (emails.indexOf(email)=== -1){ //5
    //   alert('email não cadastrado')
    // }else{
    //   if(senhas[emails.indexOf(email)]===senha){ 
    //     alert('entrou')
    //     for (let a of usuarios.data){
    //       if(a.email===email){
    //         localStorage.setItem('user_id', JSON.stringify(a.id))
    //       }
    //     }

    //     //redirecionar para a pg inicial
        // history.push('/index')

    //   }else{
    //     alert('Senha incorreta')
    //   }
    // }
    // })
  }

  return (
    <>

      <div className="Logo-Educanauta">
        <img src={process.env.PUBLIC_URL + "/assets/Logo.png"}></img>
      </div>
      <div className="login-form">
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Matrícula" type="email" name="email" />
          <div className="div-pass-inp">
            <Input placeholder="Senha" type="password" name="senha" className="pass-inp" />
            <button className="show-pass">
                <MdRemoveRedEye  style={{color: "#000040"}} size={24} />
              </button><br />
          </div>
          <p className="rec-pass">Esqueceu sua senha ?</p>

          <button type="submit" >
            <Link style={{color: "#fff"}} to={'Home'}>ENTRAR</Link>
            </button>
        </Form>
        {/* <Link to="Cadastro">Cadastre-se</Link> */}


      </div>
    </>
  )
}

