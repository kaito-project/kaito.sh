import React from "react";
import Link from '@docusaurus/Link';



const Button = ({ children, href }) => {
    return (
        <div className="col col--2 margin-horiz--sm float-right">
            <Link
                className="btn btn-primary-lg"
                to={href}>
                {children}
            </Link>
        </div>
    );
};

export default Button
