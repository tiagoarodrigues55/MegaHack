import React, { useEffect, useState } from 'react'
import {Form} from '@unform/web'
import Input from '../Login/input'
import { useHistory} from 'react-router-dom'
// import api from '../services/api'


export default function Cadastro(){
  const history = useHistory()
  function handleSubmit(data){
    // if(data.senha === data.confirmSenha){
    //   //confirmação da matricula
    //   api.get('users').then(us=>{
    //     var emails =[]
    //     var nometimes =[]
    //     for (let i of us.data){
    //       emails.push(i.email)
    //       nometimes.push(i.nometime)
    //     }
    //     if (emails.indexOf(data.email)===-1){
    //       if (nometimes.indexOf(data.nomeTime)===-1){
    //       const usuario = {
    //         nome: data.nome,
    //         nomeTime: data.nomeTime,
    //         email: data.email,
    //         matricula: data.matricula,
    //         senha: data.senha
    //       }
    //       api.post('users', {
    //         name: usuario.nome,
    //         nometime: usuario.nomeTime,
    //         email: usuario.email,
    //         password: usuario.senha,
    //         vivacoins: 100,
    //         ultimapontuação: 0,
    //         pontos: 0,
    //         matricula: usuario.matricula
    //       }).then(()=>{
    //       alert('cadastrou!')
    //       api.get('users').then(us=>{
    //         for(let a of us.data){
    //           if(a.email===usuario.email){
    //             localStorage.setItem('user_id', JSON.stringify(a.id))
    //             history.push('/index')

    //           }  
    //         }
    //       })

    //       }).catch(err=>console.log(err))
    //     }else{
    //       alert('Esse nome do time já está sendo usado')
    //     }
    //     }else{
    //       alert('Esse email já está sendo usado')
    //     }
        
    //   }).catch(err=>console.log(err))
    //   //enviar para pg principal

    // }else {
    //   alert('A senha deve ser igual a confirmação')

    // }
    
  }

    return (
      <div>
        <Form onSubmit={handleSubmit}>
        <Input placeholder="Nome Completo" name="nome"/>
        <Input placeholder="email" type="email" name="email"/>
        <Input placeholder="senha" type="password" name="senha"/>
        <Input placeholder="Confirmar Senha" type="password" name="confirmSenha"/>
        <button type="submit" >Enviar</button>
        </Form>
      </div>
    )
  }

