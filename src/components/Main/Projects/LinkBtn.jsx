import React from 'react'

const LinkBtn = ({src, text}) => {
  return (
    <a
        href={src}
        target="_blank"
        className="group relative block w-full md:w-fit md:px-15 my-5 p-3 rounded-full border border-red-200 md:m-auto text-center text-lg overflow-hidden lg:flex lg:m-auto"
      >
        <span className="relative md:text-2xl z-10 bg-gradient-to-r from-orange-200 to-pink-300 inline-block bg-clip-text text-transparent transition-colors duration-300 ease-in-out group-hover:text-black group-hover:bg-none">
          {text}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-gradient-to-r from-orange-200 to-pink-300"
        />
      </a>
  )
}

export default LinkBtn
