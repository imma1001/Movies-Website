import React from 'react'

export default function InputComm(props) {
  const { label, name, id, placeholder, value, onChange, type, componentType } = props
  return (
    <div>
        <label>{label}</label>
        <input
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        type={type}
        componentType={componentType}
        onChange={onChange}
        />

    </div>
  )
}
