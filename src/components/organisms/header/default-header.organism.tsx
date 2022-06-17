type Props = {
  isMenuOpen: boolean;
  menuButtonClickHandling: () => void;
};

export const DefaultHeader: React.FC<Props> = ({ isMenuOpen, menuButtonClickHandling }) => (
  <div className='bg-gray-500'>
    <header className='container mx-auto overflow-y-hidden text-white'>
      <div className='flex items-center justify-between py-2'>
        <h1 className='text-2xl font-semibold'>Mon.app</h1>
        <div className='h-6 md:hidden'>
          <button aria-label='menu-button' onClick={menuButtonClickHandling}>
            <svg className='w-6 h-6 fill-current' viewBox='0 0 24 24'>
              <path
                className={isMenuOpen ? 'invisible' : 'visible'}
                d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z'
              />
              <path
                className={isMenuOpen ? 'visible' : 'invisible'}
                d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={isMenuOpen ? 'block' : 'hidden md:block'}>
        <ul className='md:flex md:justify-end'>
          <li className='cursor-pointer'>
            <a className='block px-8 py-2 my-4 rounded hover:bg-gray-600'>HRとは</a>
          </li>
          <li className='cursor-pointer'>
            <a className='block px-8 py-2 my-4 rounded hover:bg-gray-600'>機能一覧</a>
          </li>
          <li className='cursor-pointer'>
            <a className='block px-8 py-2 my-4 rounded hover:bg-gray-600'>料金プラン</a>
          </li>
          <li className='cursor-pointer'>
            <a className='block px-8 py-2 my-4 rounded hover:bg-gray-600'>お知らせ</a>
          </li>
          <li className='cursor-pointer'>
            <a href='#' className='block px-8 py-2 my-4 bg-orange-700 rounded-full hover:bg-orange-500'>
              お問い合わせ
            </a>
          </li>
        </ul>
      </div>
    </header>
  </div>
);
