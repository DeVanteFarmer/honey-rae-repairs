import { useEffect, useState } from "react"
import { User } from "../../components/users/User.jsx"
import "./Employees.css"
import { getStaffUsers } from "../../services/staffUserServices.jsx"


export const EmployeeList = () => {
    const [staffCustomers, setStaffCustomers] = useState([])

    useEffect(() => {
        getStaffUsers().then((customerArray) => {
          setStaffCustomers(customerArray)
        })
    }, [])

    return (
      <div className="customers">
        {staffCustomers.map((customerObj) => {
          return <User user={customerObj} />
        })}
      </div>
    )
}