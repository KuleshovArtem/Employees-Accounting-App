import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

         
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Петров Иван', salary: 900, increase: false, id: 1},
                {name: 'Чернов Карл', salary: 1500, increase: true, id: 2},
                {name: 'Блок Эдуард', salary: 700, increase: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id)=> {
        this.setState(({data}) => {

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {   
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        console.log(newItem);
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
        console.log(name);
        console.log(salary);
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
    
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;