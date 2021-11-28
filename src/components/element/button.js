import styled, { css } from 'styled-components';

export default styled.button`
  
  display: inline-block;
  color: White;
  font-size: 16px;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: block;
  text-decoration: none;
  background-color: ${(props) => props.backgnd};

&:hover{
  background-color: ${(props) => props.backhov};
  color: White;
}

`;
