import styled from "styled-components";

export const AttributeList = styled.ul`
    margin-bottom: 40px;
`;
export const AttributeListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: baseline;

  &:not(:last-child){
  margin-bottom: 20px;
}
`;
export const ItemName = styled.p`
  color:rgb(226, 221, 221);
  font-size: 20px;  
`;
export const ItemProperty = styled.p`
  font-size: 16px;
  color: rgb(170, 167, 167);
`;
