import { Link } from "react-router-dom"
export const Vue = () => {
    return (
      <div>
        <p>Vue.js is an open-source model view viewmodel front end JavaScript
            framework for building user interfaces and single-page applications.</p>
            <center>
            <img src='https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg?size=626&ext=jpg&ga=GA1.2.210192211.1646721286' style={{height:"200px",width:"200px"}}/>
            <br/>
            <Link to="/"><button className='btn'>Back to home </button></Link>
          <Link to="/ReactPage"><button className='btn'>Back to react </button></Link>
          <Link to="/Angular"><button className='btn'>Back to Angular </button></Link>
    
            </center>
      </div>
    )
  }