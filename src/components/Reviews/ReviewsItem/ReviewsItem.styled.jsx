import styled from "styled-components";

export const ReviewItemWrap = styled.li`
  padding: 15px;
  border-radius: 6px;

  &:not(:last-child){
  margin-bottom: 20px;
}
`;
export const ReviewCard = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;
export const ReviewCardThumb = styled.div`
  width: 75px;
`;
export const UserText = styled.p`
   margin-bottom: 5px;
`;

export const UserRating = styled.p`
  color: #1504ff;
`;

export const ReviewContent = styled.div`
  margin-bottom: 10px;
`;

export const ReviewLink = styled.a`
  display: inline-flex;
  align-items: flex-end;
  gap: 10px ;
  padding: 10px;

  text-decoration: none;
  color:inherit;
  vertical-align:bottom;

  border: 1px solid #c8c1f996;
  border-radius: 10px;
  transition: color linear 200ms, border-color linear 200ms ;

  &:hover,
  &:focus{
  color:red;
  border-color:red;
}
`;

export const ReviewData = styled.p`
    display: block;
  text-align: end;
  font-style: italic;
  font-weight: 700;
  color: #9a9696ac;
`;
