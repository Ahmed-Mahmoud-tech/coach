import React from 'react';
import './RightSideBar.scss';
import Button from '../../Dependances/Button/Button'

function RightSideBar() {
    return (
        <aside>
            <div className='calculator'>
                <span>Calories Calculator</span>
            </div>
            <div className='progress'>
                <span>My Progress</span>
                <div className='chart'>
                    Chart
                </div>
            </div>
            <table className='meals'>
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
            <div>
                <Button buttonName='All Plans' />
            </div>
            
            
        </aside>
    )
}

export default RightSideBar
