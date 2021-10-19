import styled from "@emotion/styled";

export const List = styled.ul`
  list-style-type: circle;
  margin-left: 20px;
`;

export const ListItem = styled.li`
  margin-top: 8px;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 4px;
  margin-left: 8px;

  font-size: 14px;

  background-color: #ebba7f;
  border: 1px solid #ebba7f;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #f7ce9d;
    border-color: #f8cd98;
  }
`;
