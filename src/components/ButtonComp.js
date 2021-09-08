import React from 'react'
import {Button} from 'react-bootstrap'

function ButtonComp({Variant, Type, Text, loginHandler}) {
    return (
        <Button variant={Variant} type={Type} onClick={loginHandler}>{Text}</Button>
    )
}

export default ButtonComp
