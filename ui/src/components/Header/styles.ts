import styled from 'styled-components';

export const Header = styled.header`
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  height: 100px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Button = styled.header`
  padding: ${({ theme }) => theme.spacing.sm};
  width: 120px;
  height: 48px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.sm};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;