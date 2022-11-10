@keyframes visible{
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

export const FormForSearch = styled.form`
  display: flex;
  justify-content: center;
`;
export const FormWrapper = styled.div`
  position: relative;
`;
export const FormInput = styled.input`
    height: 40px;

  font-size: 24px;
  color: white;
  background: transparent;

  border: none;
  outline: none;
  border-bottom: 4px solid #817d7d88;
  transition: border-color linear 200ms;

  &:focus{
    border-color: red}
  &:hover{
  border-color: red}

  &::placeholder{
 transition: color linear 200ms
}

  &:focus::placeholder{
  color:red;
}
  &:hover::placeholder{
  color:red;
}
`;

export const FormBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-left: 10px;
  padding: 0 10px;

  font-size: 24px;
  color: white;

  background-color: #817d7d88;
  border:none;
  border-radius:2px;

  transform: translateX(calc(100% + 10px));
  transition: transform linear 100ms, background-color linear 200ms;

  animation: visible 1000ms;
  animation-direction: alternate;

  &:hover,
  &:focus{
  cursor: pointer;
  background-color:#a19c9c88;
  transform: scale(1.02) translateX(calc(100% + 10px));
}
`;

