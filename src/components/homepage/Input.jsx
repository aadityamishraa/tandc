import { React, useState } from 'react'
import send from '../../assests/sendIcon.svg';
import syncBtn from '../../assests/syncIcon.svg';
import '../../App.css';

const Input = ({ setInputValue, setInitialui, responseGenerate }) => {
  const [input, setInput] = useState('');
  const handleSendClick = () => {
    setInputValue(input);
    setInitialui(false);
    responseGenerate(input, setInput);
    setInput('');
  };
  return (
    <>
      
    </>
  )
}

export default Input;
