import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//css link here

export default function Breadcrumb(props) {

    const [crumbs, setCrumbs] = useState()

    useEffect(() => {
        props.routes.forEach((route) => {
            if(route.path === props.match.path){
                setCrumbs(props.routes.slice(0, (props.routes.indexOf(route) + 1)))
            }
        })
    },[props.match.path, props.routes])

    console.log(crumbs)
    return (
        <div>
            
        </div>
    )
}
