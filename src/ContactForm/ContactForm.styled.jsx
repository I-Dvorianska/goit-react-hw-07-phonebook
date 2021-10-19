import styled from "@emotion/styled";

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  margin-left: 40px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 4px;
  margin-top: 4px;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 4px;
  margin-top: 8px;

  font-size: 14px;

  background-color: #f7ce9d;
  border: 1px solid #f8cd98;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #ebba7f;
    border-color: #ebba7f;
  }
`;
