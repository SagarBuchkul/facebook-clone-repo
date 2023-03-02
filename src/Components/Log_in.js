/*
  This Log_in requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from '@heroicons/react/20/solid'
import facebook_img from '../Images/facebook_img.svg';

export default function Log_in() {
  return (
    <>
      {/*
        This Log_in requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}

      <div className='sm:flex max-sm:flex-none bg-slate-200 pb-40'>

        <div class="ml-24 mt-6 mb-0 pb-0 sm:px-6 lg:px-8">
            <img class="sm:mt-40 mr-14 mb-0 max-sm:ml-20 mt-8 max-sm:mb-0 w-72" src={facebook_img} alt="" />
            <p className='sm:text-2xl ml-7 max-sm:ml-4 w-auto text-lg'>Facebook helps you connect and share</p>
            <p className='sm:text-2xl mr-24 pl-1 max-sm:ml-4 w-auto text-lg'>with the people in your life.</p>
        </div>

        <div className="ml-24 mt-36 flex min-h-full items-center justify-center pt-0 pb-8 px-4 sm:px-6 lg:px-8 w-96 bg-white rounded-lg max-sm:w-auto mb-0 max-sm:mt-6 max-sm:ml-4 mr-3">
          <div className="w-full max-w-md space-y-8">
            
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />

              <div className="-space-y-px rounded-md shadow-sm">

                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 mt-3 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                
              </div>


              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span> */}
                  Log in
                </button>
              </div>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div> */}

                <div className="text-sm ml-20">
                  <a href="#" className="from-neutral-200 text-indigo-600 hover:text-indigo-500 hover:underline">
                     Forgotten password?
                  </a>
                </div>
              </div>


              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Create New Account
                </button>
              </div>


            </form>

          </div>
        </div> 

      </div>

      {/* <div className='bg-slate-300 absolute bottom-12 right-64 '>
      <h1>Create a Page for a celebrity, brand or business.</h1>
      </div> */}

      <div className='bg-slate-200 absolute bottom-36 right-72'>
        <p>
          <a href='#' className='text-black font-bold hover:underline mr-2'>
            Create a Page
          </a>

           for a celebrity, brand or business.
        </p>
      </div>


    </>
  )
}