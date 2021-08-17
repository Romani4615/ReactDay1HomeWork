import React, { Component } from 'react'

export default class Students extends Component {
    render() {
        const s = this.props.student;
        return (
        <tr>
            <td>{s.first_name}</td>
            <td>{s.last_name}</td>
            <td>{s.id}</td>
        </tr>
        )
    }
}

