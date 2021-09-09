import React from 'react'; 

import { NavLink } from "react-router-dom";
import { Button} from 'react-bootstrap'; 

function BackButton() {
    return (
        <Button className="d-flex justify-content-center m-2" 
            variant="light">
                <NavLink className="text-decoration-none text-dark" 
                    to="/product"> 
                        Continue Shopping 
                </NavLink> 
        </Button> 
    )
}

export default BackButton;
