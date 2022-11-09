.paginator{
  text-align: center;
}

.list{
  display: inline-block;
  background-color: #817d7d88;
  border-radius: 6px;
  overflow: hidden;
}

.item{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: 40px;

}

.button{
  padding: 5px;
  width: 100%;
  height: 100%;

  color: white;
  font-size: 18px;

  background-color: transparent;
  border: none;
  transition: background-color linear 200ms;
}

.active{
  padding: 5px;
  width: 100%;
  height: 100%;

  color: white;
  font-size: 18px;

  background-color: transparent;
  border: none;
  transition: background-color linear 200ms;
  background-color: #a19c9c88;
}


.button:hover,
.button:focus {
  background-color: #a19c9c88;
  cursor: pointer;
}