import styled from "styled-components";

export const MovieCardItem = styled.li`
  flex-basis: calc((100% - 20px * 2) / 2);
  padding: 20px;
  background-color: #161a3f86;
  border-radius: 6px;
  overflow: hidden;

  

  &:not(:last-child) {
  margin-bottom: 15px;
  }
`;
export const MovieCardWrap = styled.div`
  display: flex;
  justify-content: baseline;

`;

export const MovieCardItemLink = styled.div`
  display: inline-flex;
  gap: 15px;
  text-decoration: none;
  color: #b29efa8e;

  &:hover,
  &:focus{
  transform: scale(1.01);
}
`;

export const MovieCardImgThumb = styled.img`

  width: 150px;
  flex-shrink: 0;
  transition: transform linear 200ms;
  box-shadow: -1px 0px 21px -7px rgba(253, 253, 253, 0.96);
`;

export const MovieCardTitle = styled.p`

  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  transition: color linear 200ms;
  color: #eaeafeb9;
`;

export const MovieCardText = styled.p`
  color#c2c2ffb8b9;
  &:not(:last-child){
  margin-bottom: 10px;
}
`;



