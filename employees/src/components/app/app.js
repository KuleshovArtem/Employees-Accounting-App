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
                {name: 'Петров Иван', salary: 900, increase: false, rise: true, id: 1},
                {name: 'Чернов Карл', salary: 1500, increase: true, rise: false, id: 2},
                {name: 'Блок Эдуард', salary: 700, increase: false, rise: false, id: 3}
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
            rise: false,
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

    onToggleIncrease = (id) => {
        //this.setState(({data}) => {
            // Объемный вариант но понятный
            // const index = data.findIndex(item => item.id === id);

            // const old = data[index];
            // const newItem = {...old, increase: !old.increase}
            // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1) ]

            // return {
            //     data: newArr
            // }
        //})

        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
        console.log(`increase id ${id}`)
    }

    onToggleRise = (id) => {
        console.log(`rise id ${id}`)
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
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
    
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;