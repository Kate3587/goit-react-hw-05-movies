.preview {
  display: flex;
}

.picture {
  order: 2;
}

.thumb {
  width: 300px;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 auto 20px;
}

.tag {
  text-align: center;
  font-size: 20px;
}

.links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.linkItem {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 6px;
  transition: border-color linear 200ms, color linear 200ms;
  color: white;
}

.linkItem:hover,
.linkItem:focus {
  border-color: red;
  color: red
}

.learnMore {
  display: block;
  padding: 10px 5px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: inherit;
}