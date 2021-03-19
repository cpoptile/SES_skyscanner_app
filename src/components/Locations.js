import React, { useEffect, useState, useRef } from 'react';
import './Locations.css';

function Auto(props) {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    function noSearch(e) {
        e.preventDefault()
        async function fetchInitialList() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": "42a5ad4309msh0f7539296c11895p172628jsn1bac294685a3",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            let response = fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=-/", reqOptions)
            response = await response.data.json()
            console.log(response.Places)
            setOptions(response)
        }
        fetchInitialList()

    }

    function handleSearch(e) {
        e.preventDefault()
        let value = e.target.value
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
            console.log(value)
            console.log(response)
            response = await response.json()
            console.log(response.Places)
            setOptions(response.Places.map(place => {
                return {value: place.CityId, display: place.PlaceName }
            }))
        }
        fetchPlaces()
    }

    const sendCity = () => {
        console.log({search})
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
        props.onChange(place)
        setSearch(place)
        sendCity(place)
        console.log(place)
        setDisplay(false)
    };


    return (
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            <input
                id="auto"
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
                        value={props.value}
                        onClick={() => updateSearch(place.value)}
                        >
                        {place.display}
                      </option>)}
                </div>
            )}
        </div>
    );

};

export default Auto;
