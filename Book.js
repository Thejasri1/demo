const Book = (props)=>{
    const {img,title,author,info,prise} = props.book;
    return(
      
         <div className="flexing">
          <img src={img} style={{height:'200px',width:"150px"}}/>
       
          <div>
            <h1>{title}</h1>
            <h5>{author}</h5>
            <p>{info} <a href="#" className="learn"> learn more</a></p>
            <h4 style={{color:"red"}}>{prise}</h4>
            <button className="btn">Buy</button>
          </div>
  
        </div>
  
      
    );
  }
  export default Book;