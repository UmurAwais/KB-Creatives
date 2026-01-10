import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '', 
  icon = true,
  customIcon = null,
  onClick,
  ...props 
}) => {
  const baseStyles = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const combinedClasses = `${baseStyles} ${className}`

  const iconElement = customIcon ? (
    <span className="btn-icon">{customIcon}</span>
  ) : icon && (
    <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {children}
        {iconElement}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
      {iconElement}
    </button>
  )
}

export default Button
