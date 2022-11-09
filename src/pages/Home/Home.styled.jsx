.films{
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px 10px;
}
.mainTitle{
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;  
}
.gallery{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  gap: 30px;
  justify-content: center;

  padding: 10px;
  list-style: none;
  overflow: hidden;
}
.card{
  border-radius: 6px;
  overflow: hidden;
}

.link{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  transition: color 200ms;
  
}
.link:hover,.link:focus{
  color:red;
}

.overlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0.30turn, #2a2727 70%, #221f1f);
  opacity: 0.4;
  transition: opacity, 200ms;
}

.overlay:hover{
  opacity: 0;
}
.thumb{
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}

.filmName{
  margin-top: 15px;
  font-size: 20px;
}