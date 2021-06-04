import React from 'react';
import CopyMapValue from './CopyMapValue';
import './App.css';

class MapFunction extends React.Component {
    //State without Constructor
    state = {
        users: [
            {id: 1, name: "bilal", clas: "A"},
            {id: 2, name: "jav", clas: "A"},
            {id: 3, name: "nie", clas: "C"}
        ]
    };

    render() {
        const number = this.props.num; //Accecing array when calling class //[1, 2, 4, 6, 8, 3,];
        const value = [12, 45, 87, 52, 10, 4];
        const newNumber = number.map((number) => {
            return <li key={number}>{number}</li>
        });

        const userData = this.state.users.map((users) => {
            return <p>{users.id} {users.name} {users.clas} </p>
        });
        return (
            <div>
                <div style={{display: "flex", borderTop: "1px solid rgba(173, 173, 173, 0.35)", marginTop: "10px"}}>
                    <ul style={{width: "30%"}}>
                        {newNumber}
                        <li>{number[2]}</li>
                    </ul>
                    <ul style={{width: "30%"}}>
                        {
                            value.map((value) => {
                                return <li key={value}>{value}</li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    {userData}
                </div>
                {
                    this.state.users.map((users) => {
                        return (
                            <CopyMapValue key={users.id} value={users.id} name={users.name} clas={users.clas} />
                        )
                    })
                }
            </div>
        )
    }
}

export default MapFunction