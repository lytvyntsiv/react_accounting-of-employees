import React from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value  
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: ''
    })
  }

  render() {
      const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form
          className="add-form d-flex"
          onSubmit = {this.onSubmit}>
          <input type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
            name="name"
            value={name} 
            onChange={this.onValueChange}/>
          <input type="number"
            className="form-control new-post-label"
            placeholder="Salary in $ ?"
            name="salary"
            step={100}
            value={salary} 
            onChange={this.onValueChange}/>

          <button type="submit"
            className="btn btn-outline-light"
            >Add</button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;