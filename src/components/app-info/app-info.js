import "./app-info.css";

const AppInfo = ({ employeesAllLength, employeesIncreaseLength }) => {

  return (
    <div className="app-info">
      <h1>Accounting of employees in company</h1>
      <h2>Total number of employees: {employeesAllLength}</h2>
      <h2>The award will be given to: {employeesIncreaseLength}</h2>
    </div>
  )
}

export default AppInfo;