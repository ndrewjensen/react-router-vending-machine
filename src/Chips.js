import { Link } from "react-router-dom";

/** Chips component: 
 * 
 * props: none
 * state: none
 * events: none
 * 
 * VendingMachine -> Chips
 */

function Chips () {
  return( <>
    <h1 className="Chips">Chips</h1>
    <Link to="/">Go Back</Link>
    </>
    )
  }

export default Chips