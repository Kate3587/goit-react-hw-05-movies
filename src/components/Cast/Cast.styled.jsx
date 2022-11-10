import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 10px;
  row-gap: 30px;

  padding: 20px;
  background-color: #3f54ef86;
  border-radius: 6px;
  overflow: hidden;
`;

export const MessageTitle = styled.h2`
   margin: 0 auto;
  padding: 20px;
  background-color: #2a272788;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
  color: rgb(226, 221, 221);
`;

