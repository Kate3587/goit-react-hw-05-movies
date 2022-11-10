import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #221f1f;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -.2px;
  line-height: 60px;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  box-sizing: border-box;
`

export const HeaderList = styled.ul`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  gap: 20px;
  list-style: none;
`
export const HeaderLink = styled.li`
  text-decoration: none;
  color:white;

  &:hover,
  &:focus{
    color: #2200ff;
  }
`