import styled from 'styled-components';

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;