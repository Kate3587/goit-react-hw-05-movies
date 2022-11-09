.text {
  position: relative;
  order: 1;
}
.goBackLink {
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
}

.goBackLink:hover,
.goBackLink:focus {
  color: red;
  border-color: red;
}

.iconBack {
  color: inherit;
}
.mainTitle {
  max-width: 500px;
  font-size: 32px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
}
.description {
  padding: 10px;
  background-color: #2a272788;
  border-radius: 6px;
  overflow: hidden;
  min-height: 200px;
}

.overview {
  min-width: 600px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: white;
}

.companies {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 20px;
}