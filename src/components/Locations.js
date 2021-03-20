// IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import './Locations.css';

/**
 * Description: Function serves as an autocomplete component for destination fields.
 * 
 * @param {*} props 
 * @returns An input field that autocompletes a user's input
 */
function Auto(props) {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    /**
     * Function loads in hook to avoid empty errors and initialize component.
     * 
     * @param {*} e event
     */
    function noSearch(e) {
        e.preventDefault()
        async function fetchInitialList() {
            setSearch("")
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": "42a5ad4309msh0f7539296c11895p172628jsn1bac294685a3",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                }
            }
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=-/", reqOptions)
            response = await response.json()
            setOptions(response.Places.map(place => {
                return { 
                    value: place.CityId, 
                    display: place.PlaceName
                     }
            }))
        }
        fetchInitialList()
    }

    /**
     * Function calls to the API to return a list of places based
     * on the user's input.
     * 
     * @param {*} e event- key typed
     */
    function handleSearch(e) {
        let value = e.target.value
        if (!value) {
            noSearch(e)
        } else {
            e.preventDefault()
            setSearch(value)
            async function fetchPlaces() {
                const reqOptions = {
                    method: 'GET',
                    headers: {
                        "x-rapidapi-key": "42a5ad4309msh0f7539296c11895p172628jsn1bac294685a3",
                        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    }
                }
                let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({ query: value }), reqOptions)
                response = await response.json()
                setOptions(response.Places.map(place => {
                    let idCode
                    if (place.CityId === "-sky"){
                        idCode = place.PlaceId
                    } else {
                        idCode = place.CityId
                    }
                    return { 
                        value: idCode, 
                        display: place.PlaceName 
                    }
                }))
            }
            fetchPlaces()
        }

    }

    /**
     * Function returns the value of the input field to be used in
     * SearchBox.js.
     * 
     * @returns input field
     */
    const sendCity = () => {
        return (
            search
        );
    };

    /**
     * Function setup to handle outside click.
     */
    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    /**
     * Const hides the autosuggest field if mouse is clicked outside the container.
     * 
     * @param {*} event mouse click
     */
    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    /**
     * Const updates input field to selected option.
     * 
     * @param {*} place place selected form menu
     */
    const updateSearch = place => {
        props.onChange(place.value)
        setSearch(place.display)
        sendCity(place.value)
        setDisplay(false)
    };


    /**
     * Returns custom autocomplete component consisting of an input and option container.
     */
    return (
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            {/* Search box for user */}
            <input
                id="auto"
                autocomplete="off"
                onClick={() => setDisplay(!display)}
                placeholder="Type to search"
                value={search}
                onChange={e => handleSearch(e)}
                onLoad={noSearch}
            />
            {display && (
                <div className="autoContainer">
                    {options.map(place =>
                        <option
                            key={place.value}
                            value={place.display}
                            onClick={() => updateSearch(place)}
                            required>
                            {place.display}
                        </option>)}
                </div>
            )}
        </div>
    );

};

// Default export statement
export default Auto;
