import React from 'react'
import {Route, useHistory} from 'react-router-dom'
import Authentication from './Authentication'


function ProtectedRoute({component:Component, ...rest}) {
    const history = useHistory();

    return (
        <Route {...rest} render={
            (props) =>{
                if(Authentication.isAuthenticated() === true)
                {
                    return <Component {...props}/>
                }
                else
                {
                    history.push("/")
                }
            }
        }/>
    )
}

export default ProtectedRoute
