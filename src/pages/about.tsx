import Image from 'next/image';

const About = () => (
  <div className='w-full h-screen p-3 bg-gray-600'>
    <div className='flex flex-col h-full overflow-hidden bg-white shadow-xl rounded-xl'>
      {/* Navbar */}
      <div className='flex items-center justify-between px-5 py-1 border-b'>
        {/* Icon */}
        <span className='py-2'>
          <svg
            id='Layer_1'
            data-name='Layer 1'
            height='35'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 105.01 122.88'
          >
            <path
              className='fill-gray-600'
              fillRule='evenodd'
              d='M.59,97C-.88,102.74.45,109.21,4,114.77c4.54-23.64,32.37-13.59,18.08,8.11,12.37-1,19.05-10.55,18.79-22.31-.12-5.54,0-8.55.87-11.07a13.16,13.16,0,0,1,1.67-3.21,11.5,11.5,0,0,1-.91-4.42v-.29a11.73,11.73,0,0,1,1.2-5l-7.43-7.23-2.06,2.73a53.12,53.12,0,0,1-6.66,6.63,18.68,18.68,0,0,1-4.59,2.07C13,84.19,3.65,85.11.59,97Zm58.16-21-44-42.84-6-1.06a3.65,3.65,0,0,1-1.9-1l-5.11-5a3.65,3.65,0,0,1-.07-5.15l6.17-6.23a3.64,3.64,0,0,1,5.14,0l4.53,4.49a3.58,3.58,0,0,1,1,1.83l2,7.31L64,70.79l4.43-4.46a.7.7,0,0,1,1,0l2.89,2.86a.7.7,0,0,1,.21.45c.12.89.19,1.61.26,2.22.15,1.49.23,2.24.5,2.5s1,.3,2.45.4h0c.62,0,1.37.1,2.37.2a.67.67,0,0,1,.43.2l22.22,22.4A11.49,11.49,0,0,1,104.44,110a11.87,11.87,0,0,1-2.59,4.42,11,11,0,0,1-4.22,2.85c-3.75,1.39-8.44.66-12.87-3.81L63.53,92a.76.76,0,0,1-.21-.44c-.18-1.21-.29-2.19-.38-3-.19-1.61-.29-2.45-.61-2.76s-1.26-.37-3.14-.43c-.65,0-1.41,0-2.3-.09a.7.7,0,0,1-.46-.2l-2.84-2.81a.71.71,0,0,1,0-1l5.17-5.22ZM70.29,90.64a1.76,1.76,0,0,1,0-2.5,1.78,1.78,0,0,1,2.51,0L92,107.6a1.77,1.77,0,0,1-2.5,2.52L70.29,90.64Zm5.28-5.34a1.77,1.77,0,0,1,2.49-2.52l19.25,19.48a1.77,1.77,0,1,1-2.49,2.52L75.57,85.3ZM67,55.36l5.94-7.77c7.15-9.71,25.79-4,30.36-21.75,1.46-5.7.13-12.16-3.39-17.73C95.37,31.75,67.55,21.7,81.84,0,69.47,1,62.79,10.55,63.05,22.31c.12,5.16,1.57,9.37-3.32,15.91L54,45.83,64.5,56.06a11.47,11.47,0,0,1,2.5-.7Z'
            />
          </svg>
        </span>
        {/* Profile */}
        <div className='flex items-center space-x-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-8 h-8 stroke-slate-400 '
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
            />
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
          </svg>
          <button className='flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-400 rounded-full'>
            M
          </button>
        </div>
      </div>
      {/* body */}
      <div className='flex h-full'>
        {/* slidebar 1 */}
        <div className='w-64 h-full px-5 pt-10 border-r'>
          <p className='text-xs font-medium text-gray-400'>MAIN</p>
          {/* menu-item */}
          <div className='group mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 cursor-pointer flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 mr-4 stroke-slate-400 group-hover:stroke-blue-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
            Dashboard
          </div>

          <p className='mt-8 text-xs font-medium text-gray-400'>APPLICATIONS</p>
          <div className='mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 mr-4 stroke-slate-400 group-hover:stroke-blue-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            Calender
          </div>
          <div className='mt-4 py-1.5 text-sm font-medium  text-blue-500 group cursor-pointer flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 mr-4 stroke-blue-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
              />
            </svg>
            Messages
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
