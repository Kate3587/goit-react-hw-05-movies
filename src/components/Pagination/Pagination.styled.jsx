import styled from "styled-components";

export const PaginationWrapp = styled.div`
  text-align: center;
`;

export const PaginationList = styled.ul`
  display: inline-block;
  background-color: #817d7d88;
  border-radius: 6px;
  overflow: hidden;
`;

export const PaginationListItem = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 40px;
`;

export const PaginationBtn = styled.button`
  padding: 5px;
  width: 100%;
  height: 100%;

  color: white;
  font-size: 18px;

  background-color: transparent;
  border: none;
  transition: background-color linear 200ms;
`;

export const Active = styled.button`
   padding: 5px;
  width: 100%;
  height: 100%;

  color: white;
  font-size: 18px;

  background-color: transparent;
  border: none;
  transition: background-color linear 200ms;
  background-color: #a19c9c88;
`





// .active{
//   padding: 5px;
//   width: 100%;
//   height: 100%;

//   color: white;
//   font-size: 18px;

//   background-color: transparent;
//   border: none;
//   transition: background-color linear 200ms;
//   background-color: #a19c9c88;
// }


// .button:hover,
// .button:focus {
//   background-color: #a19c9c88;
//   cursor: pointer;
// }