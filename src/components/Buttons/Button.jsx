

const Button = ({children}) => {
  return (
    <button className={`relative border rounded-full px-16 py-4 border-tealBlue dark:border-lightBlue text-tealBlue dark:text-lightBlue bg-transparent after:absolute after:-left-full after:top-0 after:z-[1] after:h-full after:w-full after:rounded-full after:duration-300 hover:border-lightGray hover:text-white hover:shadow-tealBlue hover:after:left-0 hover:after:bg-tealBlue dark:bg-gray-900 hover:dark:border-gray-900 hover:dark:text-gray-900 hover:dark:shadow-lightBlue hover:after:dark:bg-lightBlue overflow-hidden`}>
      <p className="z-10 relative text-xl">{children}</p>
    </button>
  )
}

export default Button