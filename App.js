//import React,{useState} from 'react'

// const App = () => {
//     const [count,setCount] = useState(0);
//     const [randomValue,setRandomValue] = useState()
//     const image = "https://media.istockphoto.com/vectors/cute-white-robot-character-vector-vector-id1187576166?k=20&m=1187576166&s=612x612&w=0&h=q-REVReHr8QRzKQ_TRWGU7KTP6OBIgGh-zlg91-S-j0=";
//     const [value,setValue] = useState(58)
//     const [userEnterdData,setUserEnterdData] = useState({userData:''})
//     const {userData} =userEnterdData;
//     const onChangeHandler = e =>{
//       e.preventDefault();
//       setUserEnterdData([e.target.value])
//     }
    
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick = {()=>setCount(count+1)}>INC</button>
//         <button onClick={()=>setCount(count-1)}>DEC</button><br />
//         <button onClick={()=>setRandomValue([Math.ceil(Math.random()*100)])}>Random data printer</button>
//         <input type='text' value={randomValue} style={{marginBottom:"20px"}}/><br />
//         <div>
//             <center>
                 
                 
                 

// //             </center>
// //         </div>
       
        
//     </div>
//   )
// }
 //export default App;
 //....................props concept.............//
// import React from "react";
// import './App.css';
// import {books} from './books';
// import Book from './Book';
// import {App} from './test';
// //booklist main component
// const BookList =()=>{
//   return(
//     <div>
//       <center>
//       <h1>BookList</h1>
//       </center>
      
//       <section>
//         {books.map((book,index)=>{
//           const {img,title,author,info,prise} = book;
          
//           return(
//           <div>
//             <Book book={book}></Book>
            
//             </div>
            
            
//           );
//           })}
       
//       </section>
//       <center><App/></center>
      
//     </div>
//   );
// }
// export default BookList;

//......................book component.................//
// import React from 'react'
// import {arrayValues} from './Array';
// import './App.css'
// const App = () => {
//   const [people,setPeople] = React.useState(arrayValues);
//   const removeItem = (id)=>{
//     console.log(id);
//     let removeResult = people.filter((person)=>person.id !== id);
//     setPeople(removeResult);
//   }
//   const a = ()=>{

//   }
//   return (
//     <div>
//       {people.map((values)=>{
//         const {id,name,age,role} = values;
//       return(
//         <div>
//           <ol type='a'>
//           <li>{name}</li>
//           <li>{age}</li>
//           <li>{role}</li>
//           <button className="btn" onClick={()=>removeItem(id)}>remove</button>
        
//           </ol>
          

//         </div>
//       )
//       })}
      
//     </div>
//   )
// }

// export default App;
// const x = 10;

// const arr = ()=>{
    
//     console.log(x)
// }
// arr()
// arr()
// arr()
// let y = 10 ;
// let z = 20;
// console.log(y);
// console.log(z);
//...................var....................//


//1.********doubt****************//

// console.log(c)
// console.log(b);
// // console.log(b());
// var b = function(){
//    var b = 20;
//    return b;
// }
// console.log(b());


//...............const............

// const a =10;
// const a= 20;


// console.log(a);
// var a = "teja";
// var d = 20;
//     var d= 40;
//     let c = 50;
//     c=80;
// console.log(greeting(this));
// function greeting(){
    
    
//     return c;
// }
//.........***destructure functions doubt***...........//
// import React from 'react';

//  const App = ()=>{
//     const [data ,setData]= React.useState([
            //   {name: "sam"},
                // {name: "karan"}
            //]
//         name:"sam",
//         age: 20,
//         role:"developer"
//     });
// data.map
// data.forEach
// for (employee in data) {
    // const {name, age, role} = employee;
//}
// for (i = 0; i < data.length; i++) {
    // data[i]
// }

//     const {name,age,role} = data;
//     const obj = {
//         name:'karan',
//         age:40,
//         role:"designer"
//     }
//     const {name,age,role} = obj;
//     return(
    // {data.map(employee => (
    //     {employee.name} 
    // ))}
//         <div>
//             {name}<br/>
//             {age}<br/>
//             {role}<br/>
//             {name}

//         </div>
//     );
// }
// export default App;

// import React from 'react'

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }
//............spread operator.....//
// export default App;
// const data = [12,5,6,"sam"]
// const data2 = [...data,"x",'y','z']
// console.log(data);
// console.log(data2);
// console.log(data2.unshift("random"));
// const res1 = [10,20,30,40]
// const res2 = res1;
// console.log(res1);
// console.log(res2);
// console.log(res2.push("worked"));

// import React,{useEffect} from "react";

// const App = () => {
//     const [size,setSize] = React.useState(window.innerWidth);
//     const checkSize = ()=>{
//         setSize(window.innerWidth);
//     }
//     window.addEventListener("resize",checkSize)
//     useEffect(()=>{
//         console.log("hello world")
//         return () =>{console.log("cleanup")
//         window.removeEventListener("resize",checkSize)}
        
//     });
    
//   return (
//     <div>
//         {size}<br/>
     
//     </div>
//   )
// const [git ,setGit] = React.useState([])
// const url = "https://api.github.com/users";
// const fetchedGitResults  = async()=>{
//     const response  = await fetch(url);
//     const JsonData = await response.json();
//     setGit(JsonData);
// }
// useEffect(()=>{
//     fetchedGitResults();
// },[])


// return(
//     <div>
//         <h1>Account Users</h1>
//     {git.map((user)=>{
//         const {id,login,avatar_url,html_url} = user;
//         return<li key={id}>
//             <img src={avatar_url} alt={login} style={{width:"50px",height:"50px",borderRadius:"25px"}}/>
//             <p>{html_url}</p>
//             <p>{login}</p>
//         </li>
//     })}
//     </div>
// );
// }

// export default App;
// import { style } from '@mui/system';
// import React from 'react'

// const App = () => {
//     const [data,setData] = React.useState([]);
  
//   return (
//     <div>
//         {data}<br/>
//         <button onClick={()=>{setData((prevState) =>{return prevState+1})}}>INC</button>
//         <button onClick={()=>setData(0)}>RESET</button>
//         <button onClick={()=>setData((prevState)=>{return prevState-1})}>DEC</button>
//     </div>
//   );
// }

// export default App;
//...............................doubt..................multiple returns...................................//
// import React,{useEffect} from 'react'
// import './App.css'
// const App = () => {
//     const [isLoading, setIsLoading] = React.useState(true);
//     const [isError, setIsError] = React.useState(true);
//     const [user,setUser] = React.useState("default");
//     const img = "https://www.istockphoto.com/resources/images/PhotoFTLP/P3_MARCH_iStock_1370456058.jpg";
//     const url = 'https://api.github.com/users/QuincyLarson';

// useEffect(()=>{
//     fetch(url)
//     .then((res)=>res.json())
//     .then((user)=>{
//         const {login} = user;
//         setUser(login);
//         setIsLoading(false);
//         console.log(user);
//     })
//     .catch((err)=>console.log(err));

// },[])

// if(isLoading){
//   return (    
//     <div>
//         <h1>loading...</h1>
//         <h1>{user.login}</h1>
//         <img src={img} className ="img2"/>
//     </div>
//   );
//     }

// if (isError){

//   return (
//   <div>
//       <h1>Error...</h1>
//       <img src={img} className ="img2"/>
//   </div>);

// }
// }

// export default App;

// import React from 'react'

// const App = () => {
//     const [text,setText]=React.useState('');
//     const [isError,setIsError] = React.useState(false);

//   return (
//     <div>
//         <h1>{text || 'john doe'}</h1>
//       <button onClick={()=>setIsError(!isError)}>Togglex Error</button>
//       {isError && <h1>Error..</h1>}
//       {isError ? <p>there is an error</p>:<p>there is no error</p>}
//     </div>
//   )
// }

// export default App;
// import React,{useEffect} from 'react'
// import './App.css'


// const App = () => {
//     const [show,setShow] = React.useState(false);
//   return (
//     <div>
//         <button className='btn' onClick={()=>setShow(!show)}>show/hide</button>
//         {/* {show ? <ShowHide/>:null} */}
//         {show && <ShowHide/>}
//     </div>
//   )
// }

// export default App;
// const ShowHide = () => {
//     const [size,setSize] = React.useState(window.innerWidth);
//     const checkSize = ()=>{
//         setSize(window.innerWidth);
//     }
// useEffect(()=>{
// window.addEventListener('resize',checkSize);
// return ()=>
// {
//     window.removeEventListener('resize',checkSize);
// }
// },[])
//   return (
//     <div>
      
//       <h1>window</h1>
//       <p>size:{size}</p>
//     </div>
//   )
// }
//..........................forms........................................//

// import React,{useState} from 'react'

// const App = () => {
//     const [name,setName] = useState('');
//     const [email,setEmail] = useState('');
//     const [age,setAge] = useState('');
//     const [people,setPeople] = useState([]);

//     const onSubmitHandler =(e)=>{
//         e.preventDefault();
//         if (name && email && age){
//             const person = {id: new Date().getTime().toString(),age, name, email};
//             setPeople((people)=>{
//                 return[...people,person];
               
//             });
//             setName('')
//             setEmail('');
//             setAge('');
//         }
//         else {
//             console.log('empty values');
//         }
//     }
//   return (
//     <div>
//         <form onSubmit={onSubmitHandler}>
//             <center>
            
//             <h1>Forms</h1>
//             <label htmlFor='username'>Name:</label>
//             <input type="text" id="username" name="name" value={name} onChange={(e)=> setName(e.target.value)}/><br />
     
//             <label htmlFor='email'>email:</label>
//             <input type="text" id='email' name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/><br/>

//             <label htmlFor='age'>age:</label>
//             <input type="text" id='age' name="age" value={age} onChange={(e)=> setAge(e.target.value)}/>
//             </center>
//             <center>
//             <input type="submit"/> 
//             {people.map((person,index)=>{
//                 const {id,age,name,email} = person;
//                 return(
//                     <div key={id} style={{ display:"flex",color:"black",backgroundColor:"pink",padding:"5px"}}> 
                    
//                    <p style={{paddingRight:"10px"}}>{age}</p>
//                     <p style={{paddingRight:"10px"}}>{name}</p>
//                     <p style={{paddingRight:"10px"}}>{email}</p>
                                                                       
  
//                     </div>
//                 );
//             })}
//             </center>
           
            
//         </form>
      
//     </div>
//   )
// }

// export default App
//...................................useRef......................................//
// import React,{useRef,useEffect} from 'react'
// import './App.css'

// const App = () => {
//     const data = useRef('');
//    const  onSubmitHandler = (e)=>{
//         e.preventDefault();
//         console.log(data.current.value);
//         data.current.focus();
//    }
 
//   return (
//     <div>
//     <center>
//         <form onSubmit={onSubmitHandler}>
            
//     <input type="text" ref={data}/>
//       <button className='btn'>submit</button>
   
//     </form>
//     </center>
//     </div>
//   )
// }

// export default App;
// const data = "teja";
// const result = `my name is ${data}`
// console.log(result);
//...............................useContext................................
// import React,{createContext,useState} from 'react'
// import ComponentA from './ComponentA'
// import ComponentB from './ComponentB'

// export const store = createContext();
// const App = () => {
//     const [data,setData] = useState(0);
//   return (
//     <div>
//         <store.Provider value={[data,setData]}>
//             <ComponentA />
//             <ComponentB />
//         </store.Provider>
//         <button onClick={()=>setData((prevValue)=> prevValue+1)}>Inc</button>
//         <button onClick={()=>setData((prevValue)=> prevValue-1)}>Dec</button>
//     </div>
//   )
// }

// export default App
//...................................counter with state..................
// import React from 'react'

// const App = () => {
// const [count,setCount] = React.useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount((prevValue)=> prevValue+1)}>Inc</button>
//       <button onClick={()=>setCount(0)}>Reset</button>
//       <button onClick={()=>setCount((prevValue)=> prevValue-1)}>Dec</button>
//     </div>
//   )
// }
//......................................useReducer............................

// export default App
// import React from 'react'

// const App = () => {
//   const initialState  = {count:0}
// function reducer(state,action){
//   switch(action.type){
//     case 'increment':
//       return {count: state.count+1}
//     case 'decrement':
//       return {count:state.count-1}
//     default:
//       throw new Error()
//   }
// }
// const [state, dispatch] =React.useReducer(reducer, initialState)
// return(
// <div>
//   count:{state.count}<br/>
//   <button onClick={()=>dispatch({type:'increment'})}>+</button>
//   <button onClick={()=>dispatch({type:'decrement'})}>-</button>
// </div>
// );
// }

// export default App

// import React from 'react'
// // import {postsList} from './PostList'
// const App = () => {
//   return (
//     <div>
//       {postsList.map((post)=>{
//         return (<div>
//           <li>{post.id}</li>
//           <li>{post.content}</li>
//           <li>{post.user}</li>
//           </div>);
//       })}
//       <postsList id={postsList.id} content={postsList.content} user={postsList.user}/>
      
//     </div>
//   )
// }

// export default App

// const postsList = [
//   {
//     id: 1,
//     content: "The world will be out of the pandemic soon",
//     user: "Lola Lilly",
//   },
//   {
//     id: 2,
//     content: "I'm really exited I'm getting married soon",
//     user: "Rebecca Smith",
//   },
//   {
//     id: 3,
//     content: "What is your take on this pandemic",
//     user: "John Doe",
//   },
//   {
//     id: 4,
//     content: "Is the world really coming to an end",
//     user: "David Mark",
//   },
// ];
//.......................................proptypes...............................
// import React from 'react'
// import PropTypes from 'prop-types'
// import DemoComponent from './DemoComponent'
// import { propTypes } from 'react-bootstrap/esm/Image'
// const App = () => {
//   return (
//     <div>
//       <DemoComponent name="sam" age="23" img="https://t3.ftcdn.net/jpg/03/53/13/68/240_F_353136834_lrdp02rDitJRgmT23LSuNiunqs0HuSmW.jpg"/>
//       <DemoComponent name="karan" age="20" img="https://t3.ftcdn.net/jpg/02/71/98/34/240_F_271983494_a0cGPE7eV30hIWQdR4YZX6or48PAb9V1.jpg"/>
//     </div>
//   )
// }
// DemoComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,

// }

// export default App
//..................................routing............................
// import React from 'react'
// import './App.css'
// import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
// import {Vue} from './Vue'
// import { Data } from './Demo'
// const App = () => {
//   return (
//     <div>
//       <Router>
//         <div className='header'>
//         <nav>
//           <div className='nav'>
            
//         <Link to='/' style={{paddingLeft:"10px"}}>Home</Link>
//         <Link to='/ReactPage' style={{paddingLeft:"10px"}}>React</Link>
//         <Link to='/Angular' style={{paddingLeft:"10px"}}>Angular</Link>
//         <Link to='/Vue' style={{paddingLeft:"10px"}}>Vue</Link>
        
//         </div>
//       </nav>
//       </div>
 
//       <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path='ReactPage' element={<ReactPage/>}/>
//       <Route path="Angular" element={<Angular/>}/>
//       <Route path="Vue" element={<Vue/>}/>
//       </Routes>
   
//       </Router>
      
//     </div>
//   )
// }

// export default App


// const Home =()=>{
//   return(
//     <div>
//      {Data.map((person)=>{
//        const {albumId,id,title,url,thumbnailUrl} = person ;
//        return (
//          <div><h1>{id}</h1>
//        <h1>{title}</h1>
//        <img src={url} style ={{height:"100px",width:"200px"}} />
//       <p>{thumbnailUrl}</p>
//        </div>
//        );
//      })}
    
//     </div>
//   )
// }

// const Angular = () => {
//   return (
//     <div>
//       <p>AngularJS was a JavaScript-based open-source front-end web framework for developing single-page applications. 
//           It was maintained mainly by Google and a ...</p>
//           <center>
//           <img src='https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg?t=st=1647422353~exp=1647422953~hmac=22ff6baf568197a2803b2deb97afd076e9295f2dcc0830f192a74ba8b4653e8b&w=2000' style={{height:"200px",width:"200px"}}/>
//           <br/>
//           <Link to="/"><button className='btn'>Back to home </button></Link>
//         <Link to="/ReactPage"><button className='btn'>Back to react </button></Link>
//         <Link to="/Vue"><button className='btn'>Back to vue </button></Link>
//           </center>
//     </div>
//   )
// }

// const ReactPage = () => {
//   return (
//     <div>
//       <p>React is a JavaScript library for building user interfaces. 
//         React is used to build single-page applications. 
//         React allows us to create reusable UI ..</p>
//         <center>
//         <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png' style={{height:"200px",width:"200px"}}/>
//         <br/>
//         <Link to="/"><button className='btn'>Back to home </button></Link>
  
//         <Link to="/Angular"><button className='btn'>Back to Angular </button></Link>
//         <Link to="/Vue"><button className='btn'>Back to vue </button></Link>
//         </center>
//     </div>
//   )
// }

// 
// import React,{useEffect} from 'react'
// import axios from 'axios'

// const App = () => {
//   const [result,setResult] = React.useState([]);
//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>setResult(res.data))
//   },[]);
//   return (
//     <div>
//       random Data
//       {result.map((user)=><div><li key={user.id}>{user.title}</li></div>)}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import './App.css'
// const App = () => {
//   return (
//     <div style={{backgroundColor:"pink",width:"100vw" ,height:"100vh",padding:"200px"}}>
//       <div style={{backgroundColor:"white",borderRadius:"5px",padding:"10px",width:"500px"}}>
//         <center>
//         <p>5 birthdays today</p>
//         <h1>List Component</h1> 
//         {birthdayData.map((person)=>{
//           const {id,name,age,image} = person;
//           return (
//             <div key={id}>
//                 <img src={image} style={{width:"80px",height:"80px",borderRadius:"50px"}} alt={name}/>
//                 <div className='flexing '>
//                 <p>{name}</p>
//                 <p>{age}</p>
//                 </div>
                
//             </div>
//           )
//         })}
//         <button onClick={()=>console.log("clicked")} style={{width:"150px",backgroundColor:"pink",border:"1px pink",padding:"5px"}}>Clear All</button>
//         </center>

//       </div>
      
//     </div>
//   )
// }

// export default App
// const birthdayData = [
//   {
//     id:1,
//     name:"sam",
//     age:20,
//     image:"https://t3.ftcdn.net/jpg/03/53/13/68/240_F_353136834_lrdp02rDitJRgmT23LSuNiunqs0HuSmW.jpg"
//   },
//   {
//     id:2,
//     name:"Anna",
//     age:25,
//     image:"https://t3.ftcdn.net/jpg/02/71/98/34/240_F_271983494_a0cGPE7eV30hIWQdR4YZX6or48PAb9V1.jpg"
//   },
//   {
//     id:3,
//     name:"priya",
//     age:34,
//     image:"https://t4.ftcdn.net/jpg/04/88/34/11/240_F_488341122_JY181Wvfiyc3DKBPxfj6keQcyl5mYXd4.jpg"
//   },
//   {
//     id:4,
//     name:"sanath",
//     age:22,
//     image:"https://t4.ftcdn.net/jpg/00/65/54/01/240_F_65540119_XVOZEPUyzgbrn7VLoHqOZVskulWpwHKK.jpg"
//   },
//   {
//     id:5,
//     name:"kiya",
//     age:40,
//     image:"https://t4.ftcdn.net/jpg/01/28/59/29/240_F_128592966_29xyEGBXWlL1hs9mJhz3xmGsNoq5VOMO.jpg"
//   },
// ];
// import axios from 'axios';
// import React from 'react'

// const App = () => {
//     const [data,setData] = React.useState({
//         name:"tejasri",
//         age:20,
//         contact:7995260912
//     });
//     const onSubmitHandler = (e) =>{
//         e.preventDefault();
//         axios.post('https://jsonplaceholder.typicode.com/posts',data).then((res)=>console.log(res.data)).catch(((err) => console.log(err)));
//     }
//     const [dataEdit,setDataEdit] = React.useState({

//     }) 
    
//   return (
//     <div>
//       <center>
//           <form onSubmit={onSubmitHandler}>
//               <button>Add</button>
              
//           </form>
              
         
//           {/* <form onSubmit={submitDelete}>
//           <button>Delete</button>
              
//           </form> */}
//       </center>
//     </div>
//   )
// }

// export default App
import React from 'react'
import './App.css'
import { button } from 'bootstrap'

const App = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 order-4 border p-3 bg-light" style={{backgroundColor:"white"}}>
      <h1>Jeff Bezos
</h1><br/>
      <img src='https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg' style={{height:"200px",width:"190px",marginBottom:"10px"}}/>
      <p>
      Jeffrey Preston Bezos (/ˈbeɪzoʊs/ BAY-zohss;[1] né Jorgensen; born January 12, 1964) is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut.[2][3] He is the founder and executive chairman of Amazon, where he previously served as the president and CEO. With a net worth of around US$177 billion as of March 2022, Bezos is the second-wealthiest person in the world according to both Bloomberg's Billionaires Index and Forbes.[4][5] 
      Born in Albuquerque and raised in Houston and Miami, Bezos graduated from Princeton University in 1986. He holds a degree in electrical engineering and computer science. He worked on Wall Street in a variety of related fields from 1986 to early 1994. Bezos founded Amazon in late 1994, on a cross-country road trip from New York City to Seattle. The company began as an online bookstore and has since expanded to a wide variety of other e-commerce products and services, including video and audio streaming, cloud computing, and artificial intelligence. It is currently the world's largest online sales company, the largest Internet company by revenue, and the world's largest provider of virtual assistants[6] and cloud infrastructure services through its Amazon Web Services branch.
      </p><br/>
      <button className='btn btn-primary'>more</button>
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 order-3  border bg-light" style={{backgroundColor:"white"}}>
      <h1>Elon Musk</h1><br/>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/440px-Elon_Musk_Royal_Society_%28crop2%29.jpg'  style={{height:"200px",width:"190px",marginBottom:"10px"}}/>
      <p>
      Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. With an estimated net worth of around US$245 billion as of March 2022,[3] Musk is the wealthiest person in the world according to both the Bloomberg Billionaires Index and the Forbes real-time billionaires list.[4][5]

Musk was born to a Canadian mother and South African father, and raised in Pretoria, South Africa. He briefly attended the University of Pretoria before moving to Canada at age 17 to avoid conscription. He was enrolled at Queen's University and transferred to the University of Pennsylvania two years later, where he received a bachelor's degree in economics and physics. He moved to California in 1995 to attend Stanford University but decided instead to pursue a business career, co-founding the web software company Zip2 with his brother Kimbal. The startup was acquired by Compaq for $307 million in 1999. The same year, Musk co-founded online bank X.com, which merged with Confinity in 2000 to form PayPal. The company was bought by eBay in 2002 for $1.5 billion.
      </p><br/>
      
      <button className='btn btn-primary'>more</button><br/>
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 order-2  border bg-light" style={{backgroundColor:"white"}}>
      <h1>Mark Zuckerberg
</h1><br/>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/440px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg' style={{height:"200px",width:"190px",marginBottom:"10px"}}/>
      <p>
      Mark Elliot Zuckerberg (/ˈzʌkərbɜːrɡ/; born May 14, 1984) is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding the social media website Facebook and its parent company Meta Platforms (formerly, Facebook, Inc.), of which he is the chairman, chief executive officer, and controlling shareholder.[1][2]

Zuckerberg attended Harvard University, where he launched Facebook in February 2004 with his roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes. Originally launched to select college campuses, the site expanded rapidly and eventually beyond colleges, reaching one billion users by 2012. Zuckerberg took the company public in May 2012 with majority shares. In 2007, at age 23, he became the world's youngest self-made billionaire. As of March 2022, Zuckerberg's net worth was $74.5 billion according to the Forbes' Real Time Billionaires.

Since 2008, Time magazine has named Zuckerberg among the 100 most influential people in the world as a part of its Person of the Year award, which he was recognized with in 2010.[3][4][5] In December 2016, Zuckerberg was ranked 10th on Forbes list of The World's Most Powerful People. 
      </p><br/>
      <button className='btn btn-primary'>more</button>
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 order-1 border bg-light" style={{backgroundColor:"white"}}>
      <h1>TATA</h1><br/>
      <img src='data:image/jpeg;base64,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' style={{height:"200px",width:"190px",marginBottom:"10px"}}/>
      <p>
      Priya lost her parents when she was a child and the will decree that her huge wealth would go to an orphanage if something bad happened to her by someone in line to inherit the property after her, before her 21st birthday. Her father's younger brother Ramanathan has cleverly positioned himself as an affectionate uncle to his niece Priya. Priya grows up in Ooty with her wealthy maternal grandparents and uncle.

Here enter two petty thieves: Raja and Ranjith, of Coimbatore who makes small robberies to live. One day they rob a bank to end their life of misery and theft. Ramanathan is also inside the bank and is impressed by their bravery. But their plan fails and they are arrested. Ramanathan bails them out and offers them the assignment to kill Priya as she is about to be 21. The duo rejects this offer and attempts another burglary at night at a financier's house, only to find the financier dead. Ramanathan takes their photo with the dead body and knife and blackmails them into working with him.


On the birthday, Priya's grandfather eat the cake himself to save Priya, but Raja is framed by Ramanathan and he is sent out. Raja returns immediately and kidnaps Priya and a fight ensues after a chase. Raja is shot and Ramanathan reveals his plans to Priya. And when he is about to kill her the injured Raja returns and saves Priya. Ramanathan is given an ultimatum that if he returns to Ooty city, he will be killed and is let to the forest. Raja and Priya then live together with Ranjith as their new house manager.
      </p><br/>
      <button className='btn btn-primary'>more</button>
    </div>
    </div>
<div className='box'>
 <div className='Block1'>
     <h1 className='p-4'>box1</h1>
 </div>
 <div className='Block2'>
 <h1 className='p-4'>box2</h1>
     </div>
     <div className='Block3'>
     <h1 className='p-4'>box3</h1>
     </div>
</div>

</div>
  )
}

export default App
