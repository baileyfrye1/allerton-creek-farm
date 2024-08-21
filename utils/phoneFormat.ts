import { Dispatch, SetStateAction } from 'react';

export const formatPhoneNumber = (
  value: string,
  setPhoneInput: Dispatch<SetStateAction<string | undefined>>,
) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return setPhoneInput(phoneNumber);
  if (phoneNumberLength < 7) {
    return setPhoneInput(
      `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`,
    );
  }
  return setPhoneInput(
    `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6,
    )}-${phoneNumber.slice(6, 10)}`,
  );
};
