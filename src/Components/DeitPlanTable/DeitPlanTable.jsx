import React from 'react'
import './DeitPlanTable.scss'

function DeitPlanTable() {
    return (
        <table className='deit-plan'>
        <thead>
            <th>meal name</th>
            <th>ingredients</th>
            <th>time</th>
            <th>check</th>
        </thead>
        <tbody>
            <tr>
                <td>breakfast</td> 
                <td>oats + milk + 1ts honey</td>                      
                <td>7am</td>                      
                <td><input type="checkbox" /> </td>                      
            </tr>
            <tr>
                <td>snack</td>
                <td>20g almond</td> 
                <td>11am</td>
                <td><input type="checkbox" /></td>
            </tr>
            <tr>
                <td>main meal</td>
                <td>200g checken breast + 100g rice + salad</td>
                <td>3pm</td>
                <td><input type="checkbox" /></td>
            </tr>
            <tr>
                <td>dinner</td>
                <td>2 toast + 100g coatage chease</td>
                <td>7pm</td>
                <td><input type="checkbox" /></td>
            </tr>
        </tbody>
    </table>
    )
}

export default DeitPlanTable
