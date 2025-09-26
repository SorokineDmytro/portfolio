import React from 'react'
import SelectButton from './SelectButton'

const OPTIONS = ["FrontEnd", "BackEnd", "Autres"];

const Selector = ({ active, onSelect }) => {
  return (
    <div className='w-full flex gap-6 md:justify-evenly my-5'>
      {OPTIONS.map((option) => (
        <SelectButton
          key={option}
          name={option}
          isActive={active === option}
          onClick={() => onSelect(option)}
        />
      ))}
    </div>
  )
}

export default Selector
