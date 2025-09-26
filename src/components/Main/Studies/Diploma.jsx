import React from 'react'

const Diploma = ({ name, university, year }) => {
  return (
    <article className="group my-5 gap-6 w-full max-h-40 hover:max-h-fit border border-red-200 rounded-2xl p-5">
        <p className="my-5 text-2xl md:text-3xl leading-8 bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">{name}</p>
        <p className="my-5 text-xl md:text-2xl leading-8 max-h-0 opacity-0 overflow-hidden transition-all duration-800 ease-in-out group-hover:max-h-fit group-hover:opacity-100">{university}</p>
        <p className="my-5 text-xl md:text-2xl leading-8 max-h-0 opacity-0 overflow-hidden transition-all duration-1500 ease-in-out group-hover:max-h-fit group-hover:opacity-100">{year}</p>
      </article>
  )
}

export default Diploma
