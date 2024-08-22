'use client';

import { useFormStatus } from 'react-dom';
import { TailSpin } from 'react-loader-spinner';

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className='border-2 border-black w-full py-2 transition-colors hover:bg-black hover:text-white font-sourceCodePro disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-black flex items-center justify-center'
      disabled={pending}
      type='submit'
    >
      {pending ? (
        <>
          <TailSpin
            wrapperClass='!inline-block pr-4'
            height='24'
            width='24'
            color='#000'
          />{' '}
          Submitting
        </>
      ) : (
        'Submit'
      )}
    </button>
  );
};
export default FormButton;
