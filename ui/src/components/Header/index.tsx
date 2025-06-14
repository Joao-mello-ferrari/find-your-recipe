import React from 'react';
import { Header as StyledHeader, TextContainer, Button } from './styles';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, setIsDark }) => {
  return (
    <StyledHeader>
      <TextContainer>
        <h2>Recipe Finder</h2>
        <p>Find recipes based on ingredients you have at home</p>
      </TextContainer>
      
      <Button onClick={() => setIsDark(!isDark)}>
        Toogle theme
      </Button>
    </StyledHeader>
  );
};
