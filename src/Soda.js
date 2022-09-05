import { Link } from "react-router-dom";

/** Soda component: 
 * 
 * props: none
 * state: none
 * events: none
 * 
 * VendingMachine -> Soda
 */

function Soda () {
  return( <>
  <h1 className="Soda">Soda</h1>
  <Link to="/">Go Back</Link>
  </>
  )
}

export default Soda