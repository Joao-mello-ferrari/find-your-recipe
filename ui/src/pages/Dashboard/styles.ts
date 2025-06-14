import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 2440px;
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  background-color: ${({ theme }) => theme.colors.background};
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const RecepiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary} transparent;
`;

export const RecipeCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
  overflow: hidden;
`;

export const DetailsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};

  & > div {
    cursor: pointer;
    display: inline;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;