import { Component } from 'react';

import './employees-list-item.css';


class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            raising: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase             
        }))
    }

    onRaising = () => {
        this.setState(({raising}) => ({
            raising: !raising
        }))
    }
    render () {
        const {name, salary} = this.props;
        const {increase, raising} = this.state;

        let classNames = "list-group-item d-flex justify-content-between"
        if(increase) {
            classNames += ' increase';
        }
        if(raising) {
            classNames += " like";
        }

        return (
            <li className={classNames}>
                <span onClick={this.onRaising} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={this.onIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;