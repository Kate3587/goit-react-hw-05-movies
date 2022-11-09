.item{
  padding: 10px;
  border: 2px solid rgb(170, 167, 167);
  border-radius: 6px;
}

.item:not(:last-child){
  margin-bottom: 20px;
}

.userCard{
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.thumb{
  width: 75px;
}
.userText{
  margin-bottom: 5px;
}
.rating{
  color: rgba(255, 0, 0, 0.567);
}

.reviewContent{
  margin-bottom: 10px;
}
.link{
  display: inline-flex;
  align-items: flex-end;
  gap: 10px ;
  padding: 10px;

  text-decoration: none;
  color:inherit;
  vertical-align:bottom;

  border: 2px solid rgb(170, 167, 167);
  border-radius: 6px;
  transition: color linear 200ms, border-color linear 200ms ;
}

.data{
  display: block;
  text-align: end;
  font-style: italic;
  font-weight: 700;
  color: rgba(255, 0, 0, 0.567);
}
.link:hover,.link:focus{
  color:red;
  border-color:red;
}

.icon{
width: 20px;
height: 20px;
}