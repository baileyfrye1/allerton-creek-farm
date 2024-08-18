import { cn } from '@/lib/utils';

type FormInputProps = {
  name: string;
  type: string;
  inputType?: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

const FormInput = ({
  name,
  type,
  label,
  placeholder,
  className,
  inputType,
}: FormInputProps) => {
  return (
    <div className={cn('mb-4', className)}>
      <label
        htmlFor={name}
        className='block font-sourceCodePro mb-1 capitalize'
      >
        {label || name}
      </label>
      {inputType === 'textarea' ? (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          className='bg-[#FAFAFA] border-[#A9A9A9] border w-full p-[.625rem] h-[6.25rem]'
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={cn(
            'bg-[#FAFAFA] border-[#A9A9A9] border w-full p-[.625rem]',
            className,
          )}
        />
      )}
    </div>
  );
};
export default FormInput;
