import styled from "styled-components";

export const PreviewWrapp = styled.div`
  display: flex;
`;

export const PreviewPicture = styled.div`
  order: 2;
  margin-right: auto;
  margin-left: auto;
`;

export const PictureThumb = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto 20px;
 
`;

export const PictureTag = styled.p`
  text-align: center;
  font-size: 20px;
`;
export const PictureLink = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;
export const PictureLinkItem = styled.li`
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  transition: border-color linear 200ms, color linear 200ms;
  color: ffffffc1;

  &:hover,
  &:focus {
    border-color: #1404ed;
    color: #1302f7
  }
`;

export const MoreLinkItem = styled.div`
  display: block;
  padding: 10px 5px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: #ffffffc1;

 =
`;
