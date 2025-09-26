import React from 'react'

const Title = ({ text }) => {
  return (
    <h2 className="mb-10 lg:mb-20 w-full text-center text-3xl md:text-5xl bg-gradient-to-r from-orange-300 to-violet-300 inline-block text-transparent bg-clip-text">
        {text}
      </h2>
  )
}

export default Title
