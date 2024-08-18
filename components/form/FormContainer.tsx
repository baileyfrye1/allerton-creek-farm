'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

type actionFunction = (
  prevState: any,
  formData: FormData,
) => Promise<{ message: string }>;

const intialState = {
  message: '',
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, intialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
