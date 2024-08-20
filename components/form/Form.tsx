'use client';

import { sendEmailAction } from '@/utils/actions';
import FormInput from './FormInput';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const Form = () => {
  const [phoneInput, setPhoneInput] = useState<string>();
  const ref = useRef<HTMLFormElement>(null);

  async function clientAction(formData: FormData) {
    const result = await sendEmailAction(formData);
    if (result?.error) {
      toast.error(result.error);
      return;
    } else {
      toast.success('Thank you for submitting! We will contact you shortly.');
      ref.current?.reset();
    }
  }

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6,
    )}-${phoneNumber.slice(6, 10)}`;
  };

  return (
    <form ref={ref} action={clientAction}>
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
      <FormInput
        name='phone'
        label='phone'
        type='tel'
        onChange={formatPhoneNumber}
      />
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
