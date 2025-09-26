import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visiteFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("handle visited country clicked", country.name.common);
    // visitedCountries.push(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    // console.log("Flag need to be added", flag);
    const newVisitedFlags = [...visiteFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h3>Total Countries Visited: {visitedCountries.length}</h3>
      <h3>Total Flags Visited: {visiteFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
