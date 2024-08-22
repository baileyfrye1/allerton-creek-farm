'use client';

import { sendEmailAction } from '@/utils/actions';
import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema, FormFields } from '@/utils/schemas';
import { toast } from 'react-toastify';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { formatPhoneNumber } from '@/utils/phoneFormat';
import { useFormState } from 'react-dom';
import FormButton from './FormButton';

const EmailForm = () => {
  const [phoneInput, setPhoneInput] = useState<string | undefined>('');
  const emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';

  const [state, formAction] = useFormState(sendEmailAction, {
    message: '',
  });

  const defaultValues = {
    first: '',
    last: '',
    phone: '',
    email: '',
    desc: '',
    ...(state?.fields ?? {}),
  };

  const form = useForm<FormFields>({
    resolver: zodResolver(emailSchema),
    defaultValues,
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message !== '' && !state.issues) {
      toast.success(state.message);
    } else if (state.issues) {
      const errorMessages = state.issues.map((issue) => issue);
      toast.error(errorMessages.join('. '));
    }
  }, [state]);

  console.log(phoneInput);

  // const submitForm = (data: FormFields, event?: React.BaseSyntheticEvent) => {
  //   setIsLoading(true);
  //   return formRef.current?.submit();
  // };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        // onSubmit={form.handleSubmit(submitForm)}
      >
        <div className='flex gap-4 mb-4'>
          <FormField
            control={form.control}
            name='first'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>
                  First Name
                  <span className='text-destructive align-super'>*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='last'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>
                  Last Name
                  <span className='text-destructive align-super'>*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mb-4'>
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>
                  Phone Number
                  <span className='text-destructive align-super'>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    onInput={(e) =>
                      formatPhoneNumber(e.currentTarget.value, setPhoneInput)
                    }
                    placeholder=''
                    {...field}
                    value={phoneInput}
                    type='tel'
                    required
                    pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mb-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>
                  Email<span className='text-destructive align-super'>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=''
                    {...field}
                    type='email'
                    required
                    // pattern={emailPattern}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mb-4'>
          <FormField
            control={form.control}
            name='desc'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>
                  Please use the space below to list all of the items you would
                  like sharpened
                  <span className='text-destructive align-super'>*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Ex: One 7in ceramic knife and one 5in smooth edge kitchen knife'
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormButton />
      </form>
    </Form>
  );
};
export default EmailForm;
