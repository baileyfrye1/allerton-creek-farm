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
import { FormFields } from '@/utils/schemas';
import { UseFormReturn } from 'react-hook-form';
import { useFormStatus } from 'react-dom';

const FormContent = ({ form }: { form: UseFormReturn<FormFields> }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <div className='flex gap-4 mb-4'>
        <FormField
          control={form.control}
          name='first'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>First Name</FormLabel>
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
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name='phone'
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder='' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder='' {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='desc'
        render={({ field }) => (
          <FormItem className='w-full mb-4'>
            <FormLabel>
              Please use the space below to list all of the items you would like
              sharpened
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
      <button
        className='border-2 border-black w-full py-2 transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent disabled:hover:text-black'
        disabled={pending}
      >
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </>
  );
};
export default FormContent;
