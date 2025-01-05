import React, { HtmlHTMLAttributes } from 'react';

interface ButtonProps {
  label: string;
}

const index = ({ label, ...props }: ButtonProps & HtmlHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{label}</button>;
};

export default index;
