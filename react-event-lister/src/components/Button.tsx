import React from 'react'
interface Props {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button className='btn btn-primary' onClick={onClick}>{children}</button>
  )
}

export default Button
