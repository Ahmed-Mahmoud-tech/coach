import React from 'react'
import './Training.scss'
function Training() {
    return (
        <table className='training'>
                <thead>
                    <th>position</th>
                    <th>sets</th>
                    <th>reps</th>
                    <th>weight</th>
                    <th>check</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Reverse Grip Bench Press</td>
                        <td>4 sets </td>
                        <td>8-10 reps</td>
                        <td>12/16/18/20</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>Barbell Bicep Curl </td>
                        <td>4 sets </td>
                        <td>8-10 reps</td>
                        <td>12/16/18/20</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>Skull crushers </td>
                        <td>3 sets </td>
                        <td>8-10 reps</td>
                        <td>16/18/20</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>Hammer curls </td>
                        <td>4 sets </td>
                        <td>10-12 reps</td>
                        <td>12/16/18/20</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>Rope cable tricep extension</td>
                        <td>3 sets </td>
                        <td>10-12 reps</td>
                        <td>12/16/18</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>Preacher curl</td>
                        <td>3 sets </td>
                        <td>10-12 reps</td>
                        <td>12/16/18</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                </tbody>

            </table>
    )
}

export default Training
