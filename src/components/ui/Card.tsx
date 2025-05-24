import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  hoverable?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  className = '',
  children,
  onClick,
  hoverable = false,
  shadow = 'md',
}) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };

  const hoverClass = hoverable
    ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1'
    : '';

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden ${shadowClasses[shadow]} ${hoverClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`p-4 border-b border-gray-100 ${className}`}>{children}</div>;
};

export const CardBody: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`p-4 border-t border-gray-100 ${className}`}>{children}</div>;
};

export default Card;