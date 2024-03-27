import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

/**
 * 
 *  Company card to show quick details about company. Rendered for each card in CompanyList.
 * 
 */

function CompanyCard({ handle, name, description, logoUrl }) {
    // logoUrl appears to be invalid as of currently, not sure why
    return (
        <Link className="CompanyCard" to={`/companies/${handle}`}>
            <Card className="my-3">
                <CardBody>
                    <CardTitle tag="h4" className="CardTitle">{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Link>
    )
}

export default CompanyCard;