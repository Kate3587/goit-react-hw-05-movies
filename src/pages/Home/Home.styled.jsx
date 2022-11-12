import styled from "styled-components";

export const HomeSection = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px 10px;
`;
export const HomeTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: rgba(205, 224, 238, 0.905);
  margin-bottom: 20px; 
`;
export const HomeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px,1fr));
  gap: 30px;
  justify-content: center;

  padding: 10px;
  list-style: none;
  overflow: hidden;
`;
export const HomeCard = styled.li`
  border-radius: 6px;
  overflow: hidden;
  &:hover{
    transition: scale, 200ms;
    scale: 1.03;
  }
`;
export const HomeCardLink = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  transition: color 200ms;

  &:hover,
  &:focus{
  color: #847cf476;
}
`;

export const Overlay = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: linear-gradient(0.40turn, #71707b 70%, #0e19af); */
  
  opacity: 0.4;
  transition: opacity, 200ms;
  
  /* &:hover,
  &:focus{
  opacity: 0;
    } */
    
`;

export const Wrapp = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
`;

export const HomeFilmName = styled.p`
  margin-top: 15px;
  font-size: 20px;
  color: #c9c2f3b8
  
  &:hover,
  &:focus{
    color: #ffffff;
  }
`;
