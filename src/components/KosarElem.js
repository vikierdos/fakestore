import React from 'react'

export default function KosarElem(props) {
  return (
    <div className='row'>
      <div className='col-lg-2'>
        <img src={props.elem.image} alt={props.elem.description} className='w-100'/>
      </div>
      <div className='col-lg-6'>
        <h5>{props.elem.title}</h5>
      </div>
      <div className='col-lg-2'>
        ${props.elem.price}
      </div>
      <button className='col-lg-2 w-25'>Törlés</button>
    </div>
  )
}
