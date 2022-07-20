import React from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Dmytro', salary: '1000', increase: true, promotion: true, id: 1},
        {name: 'Alex', salary: '2000', increase: false, promotion: false, id: 2},
        {name: 'Olha', salary: '900', increase: false, promotion: false, id: 3},
      ],
      str: '',
      filter: ''
    }
    this.maxId = this.state.data.length + 1;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(obj => obj.id !== id)
      }
    });
  }

  addItem = (name, salary) => {
    if (name.length >= 3) {
      const newItem = { 
        name, 
        salary: salary ? salary : 0,
        increase: false,
        promotion: false,
        id: this.maxId++
      }
      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
      });
    }
  }

  onToggleIncrease = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      }) 
    }));
  }

  onTogglePromotion = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, promotion: !item.promotion}
        }
        return item;
      }) 
    }));
  }

  searchEmp = (items, str) => {
    if (str.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(str) > -1;
    });
  }

  onUpdateSearch = (str) => {
    this.setState({str});
  }

  filterPosts = (items, filter) => {
    switch (filter) {
      case 'promotion': 
        return items.filter(item => item.promotion);
      case 'salarySize':
        return items.filter(item => +item.salary.match(/\d/g).join('') >= 1000);
      case 'avart': 
        return items.filter(item => item.increase);
      default :
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState(({filter}));
  }

  onNewSalary = (value, id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, salary: value}
        }
        return item;
      }) 
    }));
  }

  render() {

    const {data, str, filter} = this.state;
    const visibleDate  = this.filterPosts(this.searchEmp(data, str), filter);

    return (
      <div className="app">
          <AppInfo 
            employeesAllLength={data.length}
            employeesIncreaseLength={data.filter(item => item.increase).length}/>
  
          <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList 
            data={visibleDate}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onTogglePromotion={this.onTogglePromotion}
            onNewSalary={this.onNewSalary}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;