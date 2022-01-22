import { Breadcrumbs } from '@material-ui/core'
import { Link } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React from 'react'
import ShippingForm from './ShippingForm'

export default function FormBreadcrumbs(){


    const handleClick = () => {
        alert('clicked')
    }

    return(
        <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/orderDetails"
           
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
    )
}