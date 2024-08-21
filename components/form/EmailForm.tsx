'use client';

import { sendEmailAction } from '@/utils/actions';
import { useRef, useState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema, FormFields } from '@/utils/schemas';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const EmailForm = () => {
  const [phoneInput, setPhoneInput] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, formAction] = useFormState(sendEmailAction, { message: '' });

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

  const submitForm = (data: FormFields, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    setIsLoading(true);
    return formRef.current?.requestSubmit();
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={form.handleSubmit(submitForm)}
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
                  <Input placeholder='' {...field} />
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
                  <Input placeholder='' {...field} />
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
                  <Input placeholder='' {...field} />
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
                  <Input placeholder='' {...field} />
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <button
          className='border-2 border-black w-full py-2 transition-colors hover:bg-black hover:text-white font-sourceCodePro disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-black'
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </Form>
  );
};
export default EmailForm;
