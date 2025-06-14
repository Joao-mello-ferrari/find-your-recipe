import React from 'react';
import { Input as StyledInput } from './styles';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ value, onChange, onEnter, placeholder }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  };

  return (
    <StyledInput
      type="text"
      placeholder={placeholder || "Type ingredients like garlic, broccoli..."}
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};
