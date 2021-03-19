// IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import './Locations.css';

/**
 * Description: 
 * 
 * @param {*} props 
 * @returns An input field that autocompletes a user's input
 */
function Auto(props) {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    function noSearch(e) {
        e.preventDefault()
        console.log("peee");
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
            console.log(response)
            response = await response.json()
            console.log(response.Places)
            setOptions(response.Places.map(place => {
                return { 
                    value: place.CityId, 
                    display: place.PlaceName
                     }
            }))
        }
        fetchInitialList()
    }

    function handleSearch(e) {
        console.log(e)
        console.log(e.value)
        console.log(e.target.value)
        let value = e.target.value
        console.log(e.target.value = "-")
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
                console.log(response)
                response = await response.json()
                console.log(response.Places)
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

    const sendCity = () => {
        console.log({ search })
        return (
            search
        );
    };


    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    const updateSearch = place => {
        props.onChange(place.value)
        setSearch(place.display)
        sendCity(place.value)
        setDisplay(false)
    };


    return (
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
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

export default Auto;
