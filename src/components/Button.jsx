import React from "react";
import Link from '@docusaurus/Link';


const Button = ({ children, href }) => {
    return (
        <div className="d-flex justify-content-center">
            <Link
                className="btn btn-primary btn-lg"
                to={href}>
                {children}
            </Link>
        </div>
    );
};

export default Button
