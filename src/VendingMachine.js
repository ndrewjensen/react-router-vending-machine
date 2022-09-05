import { Link } from "react-router-dom";

function VendingMachine () {
  return (<>
  <h1>Vending Machine</h1>
  <ul>
    <li><Link to="/soda">Soda</Link></li>
    <li><Link to="/chip">Chips</Link></li>
    <li><Link to="/sardine">Sardines</Link></li>
  </ul>
  </>
)
}

export default VendingMachine