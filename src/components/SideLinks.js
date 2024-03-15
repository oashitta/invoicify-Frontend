import React from 'react'
import { Link } from 'react-router-dom'

const SideLinks = () => {
  return (
    <ul className="list-group custom-list-group border-0">
      <li
        className="list-group-item list-group-item-action custom-list-group-item"
        aria-current="true"
      >
        <Link to="/invoices" className="custom-link">
          Invoices
        </Link>
      </li>
      <li className="list-group-item list-group-item-action">
        <Link to="/estimates" className="custom-link">
          Estimates
        </Link>
      </li>
      <li className="list-group-item list-group-item-action">
        <Link to="/quotes" className="custom-link">
          Quotes
        </Link>
      </li>
      <li className="list-group-item list-group-item-action">
        <Link to="/bills" className="custom-link">
          Bills
        </Link>
      </li>
      <li className="list-group-item list-group-item-action">
        <Link to="/reports" className="custom-link">
          Reporting
        </Link>
      </li>
    </ul>
  )
}

export default SideLinks
