import React, { useState } from "react";
import { Input } from 'antd';
import { SelectComponent } from '../../components/Selectcomponent/SelectComponent'

export const Content = () => {

    return (
        <div>
            <div style={{}}>
                <p>Tên phòng</p>
                <input type="text" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <p>Tầng</p>
                    <input type="text" />
                </div>
                <SelectComponent />
            </div>
        </div>
    )
}
export default Content