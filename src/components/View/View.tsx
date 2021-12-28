import React from "react";
import s from "./View.module.css"

type ViewPropsType = {
    value: number
    maxValue: number
    message: string
}

const View = ({value, maxValue, message}: ViewPropsType) => {
    return (
        <>
            {/*<div className={value !== maxValue ? s.defColor : s.redText}>*/}
            {/*    { message ? message : value}*/}
            {/*</div>*/}
            {message && <div className={s.redText}>{message}</div>}
            {!message && <div className={value !== maxValue ? s.defColor : s.redText}>{value}</div>}
        </>
    )
}

export default View