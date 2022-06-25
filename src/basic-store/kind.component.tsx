import React, {useEffect, useRef} from "react";
import {bearStore} from "./bear-store";


export const KindComponent = () => {
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current += 1;
    })
    const bearStoreKind= bearStore(state => state.kind);
    const changeKind = bearStore(state => state.changeKind)
    return (
        <>
            <div>Renders: {renderCount.current}</div>
            <div>{bearStoreKind}</div>
            <button onClick={() => {
                changeKind('european')
            }}>Change kind</button>
        </>
    )
}