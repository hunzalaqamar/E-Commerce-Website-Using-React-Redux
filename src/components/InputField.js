import React from 'react'
import {Form} from 'react-bootstrap'

function InputField({ClassName, Id, Type, PlaceHolder, ChangeHandler}) {
    return ( 
            <Form>
            <Form.Group className={ClassName} controlId={Id}>
            <Form.Control type={Type} placeholder={PlaceHolder} onChange={ChangeHandler}/>
            </Form.Group>
            </Form>
    )
}
export default InputField