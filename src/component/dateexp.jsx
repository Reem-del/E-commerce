import React from 'react'
import { useState } from 'react'

export default function DateExp() {
    const [day,setDay]=useState('')
    const [month,setMonth]=useState('')
    const [year,setYear]=useState('')

    const days=Array.from({length:31},(_,i)=>i+1)
    const months=Array.from({length:12},(_,i)=>i+1)
    const years=Array.from({length:50},(_,i)=>new Date().getFullYear() - i)
   
    const handleDayChange=(e)=>setDay(e.target.value)
    const  handleMonthChange=(e)=>setMonth(e.target.value)
    const handleYearChange=(e)=>setYear(e.target.value)
    return (
        <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
        <label htmlFor='day'>Day</label>
        <select id='day' className='bg-[#d6d3d1]' value={day} onChange={handleDayChange}>
        {days.map(d=><option  value={d}>{d}</option>)}
        </select>
            
        </div>

        <div className='flex flex-col'>
        <label htmlFor='month'>Month</label>
        <select id='month' value={month} className='bg-[#d6d3d1]' onChange={handleMonthChange}>
        {months.map(m=><option value={m}>{m}</option>)}
        </select>
            
        </div>

        <div className='flex flex-col'>
        <label htmlFor='year'>Year</label>
        <select id='year' value={year} className='bg-[#d6d3d1]' onChange={handleYearChange}>
        {years.map(y=><option value={y}>{y}</option>)}
        </select>
            
        </div>
        </div>
    )
}

