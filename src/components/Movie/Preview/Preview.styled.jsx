export const PreviewWrapp = styled.div`
  display: flex;
`;

export const PreviewPicture = styled.div`
  order: 2;
`;

export const PictureThumb = styled.div`
   width: 300px;
  border-radius: 6px;
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
  border-radius: 6px;
  transition: border-color linear 200ms, color linear 200ms;
  color: white;

  &:hover,
  &:focus {
    border-color: red;
    color: red
  }
`;

export const MoreLinkItem = styled.div`
  display: block;
  padding: 10px 5px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: inherit;
`;
