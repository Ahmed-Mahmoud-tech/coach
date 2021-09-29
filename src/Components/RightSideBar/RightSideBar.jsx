import React from 'react';
import './RightSideBar.scss';
import Button from '../../Dependances/Button/Button'
import DeitPlanTable from '../DeitPlanTable/DeitPlanTable';
import Training from '../TrainingTable/Training';

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
            <DeitPlanTable />
            <Training />
        
            
            <div>
                <Button buttonName='All Plans' />
            </div>
            
            
        </aside>
    )
}

export default RightSideBar
