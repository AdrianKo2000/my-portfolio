import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-8 text-center text-tealBlue dark:text-lightBlue border-t border-tealBlue/20 dark:border-lightBlue/20">
      <p>&copy; {new Date().getFullYear()} Adrian. All rights reserved.</p>
    </footer>
  )
}

export default Footer