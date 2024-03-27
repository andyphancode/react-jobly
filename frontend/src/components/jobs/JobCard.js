import React, { useContext, useState, useEffect } from "react";
import "./JobCard.css";
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle } from "reactstrap";
import UserContext from "../UserContext";

/**
 * 
 * Job Card component showing details of given job.
 * 
 */



function JobCard({ id, title, salary, equity, companyName }) {

    const { hasAppliedToJob, apply } = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(function updateApplied() {
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    async function handleApply(evt) {
        evt.preventDefault();
        if(!hasAppliedToJob(id)) {
            apply(id);
            setApplied(true);            
        }
    }

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
                <Button 
                    color="primary"
                    onClick={handleApply}
                    disabled={applied}
                >
                    {applied ? "Applied" : "Apply"}
                </Button>
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