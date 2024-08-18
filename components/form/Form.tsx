import { sendEmailAction } from '@/utils/actions';
import FormInput from './FormInput';
import { useRef } from 'react';

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        sendEmailAction(formData);
        ref.current?.reset();
      }}
    >
      <div className='flex gap-4 mb-4'>
        <FormInput
          className='basis-1/2 mb-0'
          name='first'
          label='first name'
          type='text'
        />
        <FormInput
          className='basis-1/2 mb-0'
          name='last'
          label='last name'
          type='text'
        />
      </div>
      <FormInput name='phone' label='phone' type='tel' />
      <FormInput name='email' label='email' type='email' />
      <FormInput
        name='desc'
        label='Please use the space below to list all of the items you would
                  like sharpened.'
        type='email'
        placeholder='Ex: One 7in ceramic knife and one 5in smooth edge kitchen knife'
        inputType='textarea'
      />
      <button className='border-2 border-black w-full py-2 transition-colors hover:bg-black hover:text-white'>
        Submit
      </button>
    </form>
  );
};
export default Form;
