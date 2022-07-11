import React from "react";
import {Outlet, useNavigate} from "react-router-dom"

function LayoutBack() {
    const navigae = useNavigate()
    return (
        <div>
            <button onClick={() => navigae(-1)}>Назад</button>
            <Outlet/>
        </div>
    )
}
export default LayoutBack
