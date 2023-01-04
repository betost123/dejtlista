import * as React from "react";

interface Props {
  color?: string;
}

export const CheckboxIcon: React.FunctionComponent<Props> = ({
  color = "white",
}) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='24' height='24' rx='3' fill='#6E26FC' />
    <rect x='1' y='1' width='22' height='22' rx='2.5' fill='grey' />
    <path
      d='M18.2863 7.28613L9.64342 15.929L5.71484 12.0004'
      stroke='grey'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
