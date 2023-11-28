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

function EducationButtons({add,remove}) {
  return (
    <div className='edu-buttons'>
  <button className='edu-add'>Add</button>
  <button className='edu-remove'>Remove</button>
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

function EducationDetails ({degree, schoolName, location, startDate, endDate, onChange}) {
  return (
    <form className='education-details' onSubmit={(e)=> {e.preventDefault()}}>
      <h3>Educations</h3>
      <InputSet type='text' id='degree' labelText='Degree' placeholder='Enter degree or field of study' value={degree} onChange={onChange} data-key='degree'></InputSet>
      <InputSet type='text' id='school-name' labelText='School' placeholder='Enter university or school name' value={schoolName} onChange={onChange} data-key='schoolName' recommended></InputSet>
      <InputSet type='text' id='location' labelText='Location' placeholder='Enter location' value={location} onChange={onChange} data-key='location' recommended></InputSet>
      <div className='date-group'>
      <InputSet type='text' id='start-date' labelText='Start Date' placeholder='Enter start date' value={startDate} onChange={onChange} data-key='startDate' recommended></InputSet>
      <InputSet type='text' id='end-date' labelText='End Date' placeholder='Enter end date' value={endDate} onChange={onChange} data-key='endDate' recommended></InputSet>
      <EducationButtons/>
      </div>
    </form>
  )
}

function App() {
  const [personalInfo, setPersonalInfo] = useState('');
  const [educationInfo, setEducationInfo] = useState('');
  function handleInfoChange(e) {
    const {key} = e.target.dataset;
    if (e.target.parentElement.parentElement.className === 'personal-details') {
      setPersonalInfo({...personalInfo, [key]:e.target.value})
    }
    else if (e.target.parentElement.parentElement.className || e.target.parentElement.parentElement.parentElement.className  === 'education-details') {
      setEducationInfo({...educationInfo, [key]:e.target.value})
    ;}
    console.log(personalInfo)
    console.log(educationInfo)
  }
  
  return (
    <>
<PersonalDetails fullName={personalInfo.fullName} phoneNum={personalInfo.phoneNum} email={personalInfo.email} address={personalInfo.address} onChange={handleInfoChange}></PersonalDetails>
<EducationDetails degree={educationInfo.degree} schoolName={educationInfo.schoolName} location={educationInfo.location} startDate={educationInfo.startDate} endDate={educationInfo.endDate} onChange={handleInfoChange}></EducationDetails>
    </>
  )
}

export default App
