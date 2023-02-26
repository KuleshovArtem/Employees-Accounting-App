import AppInfo from '../app-info/app-info'; 
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css'; 

const data = [
    {name: 'Петров Иван', salary: 900, increase: false},
    {name: 'Чернов Карл', salary: 1500, increase: true },
    {name: 'Блок Эдуард', salary: 700, increase: false}
];


function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>
    );
}

export default App;