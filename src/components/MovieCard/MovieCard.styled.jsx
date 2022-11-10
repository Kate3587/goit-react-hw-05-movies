export const MovieCardItem = styled.li`
  padding: 10px;
  background-color: #2a272788;
  border-radius: 6px;
  overflow: hidden;

  &:not(:last-child) {
  margin-bottom: 15px;
}
`;

export const MovieCardItemLink = styled.div`
  display: flex;
  gap: 15px;
  text-decoration: none;
  color: #fff;

  &:hover .thumb,
  &:focus .thumb{
  transform: scale(1.01);
}
`;

export const MovieCardImgThumb = styled.div`
  width: 100px;
  flex-shrink: 0;
  transition: transform linear 200ms;
`;

export const MovieCardTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  transition: color linear 200ms;
`;

export const MovieCardText = styled.p`
  &:not(:last-child){
  margin-bottom: 10px;
}
`


// .link:hover .subtitle,
// .link:focus .subtitle {
//   color:red;
// }


