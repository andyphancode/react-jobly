import React from "react";
import "./JobCard.css";
import { Card, CardTitle, CardBody, CardText, CardSubtitle } from "reactstrap";

/**
 * 
 * Job Card component showing details of given job.
 * 
 */



function JobCard({ id, title, salary, equity, companyName }) {
    return (
        <Card className="JobCard my-3">
            <CardBody>
                <CardTitle tag="h4" className="CardTitle">{title}</CardTitle>
                <CardSubtitle>{companyName}</CardSubtitle>
                <CardText>
                    Salary: {salaryConverter(salary)}
                    <br></br>
                    Equity: {equityConverter(equity)}%
                </CardText>
            </CardBody>
        </Card>
    )
};

function equityConverter (equity) {
    return parseFloat(equity*100).toFixed(2);
};

function salaryConverter (salary) {
    return Number(salary).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};

export default JobCard;