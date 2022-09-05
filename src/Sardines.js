import { Link } from "react-router-dom";

/** Sardines component: 
 * 
 * props: none
 * state: none
 * events: none
 * 
 * VendingMachine -> Sardines
 */

function Sardines () {
  return( <>
    <h1 className="Sardines">Sardines</h1>
    <Link to="/">Go Back</Link>
    </>
    )
  }

export default Sardines