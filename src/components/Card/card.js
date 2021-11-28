import React from 'react'
import styled from 'styled-components'
import Button from '../element/button'



const Container = styled.div`
background-color: #fafafa;
border-radius: 10px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
color: #B3B8CD;
position: auto;
width: 95%;
margin: auto;
margin-top: 70px;
min-height: 400px;
@media screen and (max-width: 500px) {
}

&:hover{
  box-shadow: 0px 20px 30px -20px rgba(0,0,0,0.75);
  width: 98%;
  background-color: white;
  
`
const Image = styled.img`
  border-radius : 10px;
  padding: 1px;
  width: 100%;
  height: 10%;
  min-height: 200px;
  max-height: 200px;
  }

`
const Title = styled.h1`
  font-size: x-large;
  font-weight: bold;
  margin: 1rem;
  color: #404040;
  text-align: center;
`


const Rowcard = styled.div
`
    display: table;
    width: 300px;
    table-layout: auto;
    border-spacing: 0px;
    margin-left: auto;
    margin-right: auto;
    
    
    
`

const ColumnCard = styled.div
`
    display: table-cell;
    text-align: center;
    
    
`

const Desc = styled.h3`
  margin-left : 10px;
  color:Black;
  font-size:16px;
  text-align: left;
  font-weight: lighter;
  line-height: 1.5;
`



function CardInfo(props){
    return(
    
			<div>
      <Rowcard>
				<div>
        <ColumnCard>
        <Container>
        <Image src={props.src}/><br/>
        <Title>
				{props.tit}
        </Title>
				<div >
        <Desc>
           <div>
            <li><a>{props.li1}: {props.pop}</a><br/></li>
            <li><a>{props.li2}: {props.reg}</a><br/></li>
            <li><a>{props.li3}: {props.cap}</a></li>
        </div>
        </Desc>
        <Button as="a" href={props.but} backgnd={props.backgnd1} backhov={props.backhov1}>
          {props.butname}
        </Button>
				</div>
        </Container>
        </ColumnCard>
        </div>
      </Rowcard>
      </div>
		



    )
}


export default CardInfo

