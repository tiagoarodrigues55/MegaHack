import React, {useEffect, useRef} from 'react'
import { useField } from '@unform/core'
import styled from 'styled-components'



export default function Input({name, ...rest}) {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue} = useField(name)
  // const fieldName = useField(name).fieldName
  // const registerField = useField(name).registerField
  // const defaultValue = useField(name).defaultValue

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  },[fieldName, registerField])
    return (
      <div>
        <input ref={inputRef} defaultValue={defaultValue} {...rest}/>
      </div>
    )
  }

