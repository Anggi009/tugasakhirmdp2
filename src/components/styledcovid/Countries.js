import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Country } from '.';
import StyledInput from '../element/textinput';
import axios from 'axios';


const StyledCovid = () => {
	const [countries, setCountries] = useState([]);
	const [input, setInput] = useState('');
	

	useEffect(() => {
		const fetchData = async () => {
			let axiosCountries = await axios.get(
				'https://restcountries.com/v2/all'
			);

			let filterData = axiosCountries.data.filter((country) => {
				return country.name !== 'United States Minor Outlying Islands';
			});


			filterData.sort((a, b) => {
				return a - b;
			});
			setCountries((countries) => countries.concat(filterData));
		};


			fetchData();
		
	}, []);

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	return (
		<div className='home' >
			<div className='home__row stack'>
				<StyledInput Input={handleInput} placehld='Cari Semua Negara' />
				
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

export default StyledCovid;
