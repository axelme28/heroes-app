import React from 'react'
import PropTypes from 'prop-types'

import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
    isauthenticated,
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        component={(props) =>
            isauthenticated ? (
                <Redirect to="/" />
            ) : (
                <Component {...props} />
            )
        }
    />
)

PublicRoute.propTypes = {
    isauthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}
