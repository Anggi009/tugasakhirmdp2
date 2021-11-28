import { BackHome } from './utils';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./CovidData.css";

const CovidData = (props) => {
const [, setTrack] = useState({});
const [country, setCountry] = useState("");
const [cases, setCases] = useState("");
const [recovered, setRecovered] = useState("");
const [deaths, setDeaths] = useState("");
const [todayCases, setTodayCases] = useState("");
const [deathCases, setDeathCases] = useState("");
const [recoveredCases, setRecoveredCases] = useState("");


useEffect(() => {
	const fetchData = async () => {
		let CovidDatum = await axios.get(
			`https://disease.sh/v3/covid-19/countries/${props.match.params.alpha2Code}`
		);


		setTrack(CovidDatum.data);
		setCountry(CovidDatum.data.country);
	    setCases(CovidDatum.data.cases);
	    setRecovered(CovidDatum.data.recovered);
	    setDeaths(CovidDatum.data.deaths);
	    setTodayCases(CovidDatum.data.todayCases);
	    setDeathCases(CovidDatum.data.todayDeaths);
	    setRecoveredCases(CovidDatum.data.todayRecovered);


	};

	fetchData();
}, [props.match.params.name]);



return (
	<div className="covidData">
	<BackHome history={props.history} />
	<h2>DATA COVID-19</h2>

	{/* Showing the details of the country */}
	<div className="covidData__country__info">
		<p>Nama Negara : {country} </p>

		<p>Kasus : {cases}</p>

		<p>Kematian : {deaths}</p>

		<p>Sembuh : {recovered}</p>

		<p>Kasus Hari ini : {todayCases}</p>

		<p>Kematian Hari ini : {deathCases}</p>

		<p>Penyembuhan Hari ini : {recoveredCases}</p>
	</div>
	</div>
);
}

export default CovidData;
