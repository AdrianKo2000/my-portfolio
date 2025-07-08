import React from "react";
import Button from "../../components/Buttons/Button";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32">
      <h2 className="text-4xl font-bold mb-8 text-tealBlue dark:text-lightBlue">Contact Me</h2>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-900 dark:text-lightGray text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-tealBlue dark:text-lightBlue border border-gray-200 dark:border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:border-tealBlue dark:focus:border-lightBlue" id="grid-first-name" type="text" placeholder="Jane" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-900 dark:text-lightGray text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-tealBlue dark:text-lightBlue border border-gray-200 dark:border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:border-tealBlue dark:focus:border-lightBlue" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-900 dark:text-lightGray text-xs font-bold mb-2" htmlFor="grid-password">
              E-mail
            </label>
            <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-tealBlue dark:text-lightBlue border border-gray-200 dark:border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:border-tealBlue dark:focus:border-lightBlue" id="email" type="email" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-900 dark:text-lightGray text-xs font-bold mb-2" htmlFor="grid-password">
              Message
            </label>
            <textarea className=" no-resize appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-tealBlue dark:text-lightBlue border border-gray-200 dark:border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:border-tealBlue dark:focus:border-lightBlue h-48 resize-none" id="message"></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <Button>Send</Button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contact;