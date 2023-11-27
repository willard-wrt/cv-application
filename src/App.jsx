import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function InputSet({'data-key': dataKey, id, value, type, labelText, onChange, optional, placeholder, recommended}) {
return (
  <div className='input-group'>
    <label htmlFor={id}>
      <span className='label-text'>{labelText}</span>
      {optional && <span className='optional-text'>optional</span>}
      {recommended && <span className='recommended-text'></span>}
    </label>
    {type ==='textarea' ? (
      <textarea id={id} value={value} onChange={onChange} placeholder={placeholder} data-key={dataKey}></textarea>
    ) : (<input type={type} value={value} id={id} onChange={onChange} placeholder={placeholder} data-key={dataKey}>
    </input>)
    }
  </div>
)
}

function PersonalDetails ({fullName, phoneNum, email, address, onChange}) {
  return (
    <form className='personal-details'>
      <h3>Personal Details</h3>
      <InputSet type='text' id='full-name' labelText='Full Name' placeholder='First and last name' value={fullName} onChange={onChange} data-key='fullName'></InputSet>
      <InputSet type='tel' id='phone-num' labelText='Phone Number' placeholder='Enter phone number' value={phoneNum} onChange={onChange} data-key='phoneNum' recommended></InputSet>
      <InputSet type='email' id='email' labelText='Email' placeholder='Enter email' value={email} onChange={onChange} data-key='email' recommended></InputSet>
      <InputSet type='text' id='address' labelText='Address' placeholder='Enter address' value={address} onChange={onChange} data-key='address' recommended></InputSet>
    </form>
  )
}

function App() {
  const [personalInfo, setPersonalInfo] = useState('');
  function handleInfoChange(e) {
    const key = e.target.dataset;
    console.log(key);
    setPersonalInfo({...personalInfo, [key]:e.target.value})
  }
  return (
    <>
<PersonalDetails fullName={personalInfo.fullName} phoneNum={personalInfo.phoneNum} email={personalInfo.email} address={personalInfo.address} onChange={handleInfoChange}></PersonalDetails>
    </>
  )
}

export default App
