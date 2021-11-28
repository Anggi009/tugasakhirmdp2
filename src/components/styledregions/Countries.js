import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { FilterDropdown } from './utils';
import { Country } from '.';
import StyledInput from '../element/textinput';
import axios from 'axios';


const StyledRegion = (props) => {
	const [countries, setCountries] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			let axiosCountries = await axios.get(
				`https://restcountries.com/v2/region/${props.match.params.regioncode}`
			);

			let filterData = axiosCountries.data.filter((country) => {
				return country.name
			});


			const newSortedArray = [...filterData].sort((a, b) => {
				return a - b;
				
			});
			setCountries((countries) => countries.concat(newSortedArray));
		};

			fetchData();
	}, [props.match.params.regioncode]);

	const handleInput = (e) => {
		setInput(e.target.value);
	};


	return (
		<div className='home'>
			<div className='home__row stack'>
				<StyledInput Input={handleInput} placehld={"Cari Negara "+props.match.params.regioncode} />
			</div>

		
			<Fade>
				<div className='countries'>
					{countries
						.filter(
							(country) =>
								input === '' ||
								country.name.toLowerCase().includes(input.toLowerCase()) ||
								country.region.toLowerCase().includes(input.toLowerCase())
						)
						.map((country) => (
							<Country
								flag={country.flag}
								name={country.name}
								population={country.population}
								region={
									country.region === 'Americas'
										? country.region.slice(0, -1)
										: country.region
								}
								capital={country.capital}
							/>
						))}
				</div>
			</Fade>
		</div>
	);
};

export default StyledRegion;
