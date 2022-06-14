type Props = {
  onClick: () => void;
  disabled?: boolean;
};

/**
 * 編集ボタン
 * @returns
 */
export const EditButton: React.FC<Props> = ({ disabled = false, onClick }) => (
  <button
    aria-label='編集ボタン'
    className='
        flex p-2.5 bg-yellow-500 rounded-xl text-white
        hover:rounded-3xl hover:bg-yellow-600 
        disabled:bg-gray-400 disabled:hover:rounded-xl disabled:hover:bg-gray-400
        transition-all duration-300'
    disabled={disabled}
    onClick={onClick}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth='2'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
      />
    </svg>
  </button>
);
