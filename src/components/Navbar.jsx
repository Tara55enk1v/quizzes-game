import { Link } from "react-router-dom"

const Navbar =()=>{
      return (
            <div>
                  <Link to="/">QuizzSettings</Link>
                  <Link to="/quizzquestions">QuizzQuestions</Link>
                  <Link to="/finalview">Final view</Link>
            </div>
      )
}

export default Navbar;