import React, { useEffect } from 'react'
import { useState } from 'react'


const Name = () => {
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');

  const Names = e => {
    setName(e.target.value);
  }
  const Names2 = e => {
    setName2(e.target.value);
}
  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input value = {name} onChange={Names} placeholder="이름을 입력해주세요" />
      <input value = {name2} onChange={Names2} placeholder="닉네임을 입력해주세요" />
      <p>이름 {name}</p> 
      <p>닉네임 {name2}</p>
    </div>
  )
}

export default Name
