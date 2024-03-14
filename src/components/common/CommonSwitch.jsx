import React from 'react';
import { Switch } from 'antd';

function SwitchToggle({status}) {
    // const onChange = (checked) => {
    //     console.log(`switch to ${checked}`);
    // };
    return (
        <div>
            <Switch  style={{pointerEvents:"none", backgroundColor: status === true ? '#16DBCC' : '#DFEAF2'}}  checked={status}/>
        </div>
    )
}

export default SwitchToggle
