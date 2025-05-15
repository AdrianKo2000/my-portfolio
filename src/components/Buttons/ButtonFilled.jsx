import React from 'react'

const ButtonFilled = ({children}) => {
  return (
    <button className={`relative border rounded-full px-16 py-4 hover:border-tealBlue hover:dark:border-lightBlue hover:text-tealBlue hover:dark:text-lightBlue after:absolute hover:after:-left-full after:top-0 after:z-[1] after:h-full after:w-full after:rounded-full after:duration-300 border-lightGray text-white shadow-tealBlue after:left-0 after:bg-tealBlue dark:bg-gray-900 dark:border-gray-900 dark:text-gray-900 dark:shadow-lightBlue after:dark:bg-lightBlue overflow-hidden`}>
      <p className="z-10 relative text-xl">{children}</p>
    </button>
  )
}

export default ButtonFilled