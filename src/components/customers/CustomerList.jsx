import { useEffect, useState } from "react"
import { User } from "../users/User.jsx"
import { getNonStaffUsers } from "../../services/userServices.jsx"
import "./Customer.css"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then((customerArray) => {
          setCustomers(customerArray)
        })
    }, [])

    return (
      <div className="customers">
        {customers.map((customerObj) => {
          return <User user={customerObj} />
        })}
      </div>
    )
}