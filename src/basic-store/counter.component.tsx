import React, {useEffect, useRef} from "react";
import {bearStore} from "./bear-store";


export const CounterComponent = () => {
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current += 1;
    })
    const bearStoreCount = bearStore(state => state.bears);
    const incBearCount = bearStore(state => state.increasePopulation)
    return (
        <>
            <div>Renders: {renderCount.current}</div>
            <div>{bearStoreCount}</div>
            <button onClick={() => {
                bearStore.setState((prev) => ({
                        bears: prev.bears + 1
                    }
                ))
            }}>Inc
            </button>
        </>
    )
}