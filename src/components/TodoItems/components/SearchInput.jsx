import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const SearchInput = ({ value, setValue }) => {
  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  return <Input type="text" value={value} onChange={onInputChange} placeholder="Поиск..." />;
};
