import React, { useState } from "react";
import "./SearchBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Input, Label, Button, InputGroup } from 'reactstrap';



/** 
 * 
 * Resuable search bar component for Jobs and Companies. Takes a search function and utilizes it through parent function.
 * 
 */

function SearchBar({ searchFor }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        searchFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    return (
        <div className="SearchBar">
            <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Label className="visually-hidden" for="searchBar">Search</Label>
                        <Input
                            className=""
                            bsSize='lg'
                            id="searchBar"
                            name="searchBar"
                            placeholder="Enter search term..."
                            type="search"
                            value={searchTerm}
                            onChange={handleChange}
                        /> 
                        <Button>Search</Button>                        
                    </InputGroup>
            </Form>
        </div>

    )

}

export default SearchBar;