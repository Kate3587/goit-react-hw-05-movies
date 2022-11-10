import styled from "styled-components";

export const DescriptionText = styled.div`
   position: relative;
    order: 1;
`;
export const ExitLink = styled.div`
   position: absolute;
  right: 10px;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 10px;

  text-decoration: none;
  color: white;

  border: 1px solid white;
  border-radius: 6px;

  transition: border-color linear 200ms, color linear 200ms;

  &:hover,
  &:focus{
    color: #fcf8f8;
  border-color: #ff0000;
  }
`;

export const DescriptionTitle = styled.h2`
   max-width: 500px;
  font-size: 32px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
`;

export const DescriptionTextWrapp = styled.div`
   padding: 10px;
  background-color: #0f023c7b;
  border-radius: 6px;
  overflow: hidden;
  min-height: 200px;
`

export const DescriptionOverview = styled.p`
   min-width: 600px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: white;
`;

export const DescriptionCompanyList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 20px;
`;


