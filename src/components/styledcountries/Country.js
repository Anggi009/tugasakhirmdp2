import CardInfo from "../Card/card";

const Country = ({ flag, name, population, region, capital }) => {
	return (
    
    <div>
      <CardInfo li1='Populasi' li2='Region' li3='Ibukota' pop={population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} but={'/country/' + name} butname='Klik Untuk Detail' backgnd1='#525252' backhov1='#000000' tit={name} reg={region} cap={capital} src={flag}/>
    </div>
    
	);
};

export default Country;
