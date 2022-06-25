import React, {useEffect, useRef} from "react";
import {bearStore} from "./bear-store";


export const CounterSimpleComponent = () => {
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current += 1;
    })
    const bearStoreCount = bearStore(state => state.bears);
    return (
        <>
            <div>Renders: {renderCount.current}</div>
            <div>{bearStoreCount}</div>
        </>
    )
}