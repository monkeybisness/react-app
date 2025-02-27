import styled from 'styled-components';

export const SortButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  background: none;
  border: none;
  margin: 0 5px;
  padding: 5px 10px;
  transition: 0.2s;
  border-radius: 5px;
  
  ${({ active }) => active && `
    background: #ddd;
  `}

  &:hover {
    background: #ccc;
  }
`;
