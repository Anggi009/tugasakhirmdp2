import styled from "styled-components";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

// const HomeSearch = styled.div`
// border-radius: 9px;
//   width: 100%;
//   height: 3.6375rem;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//       -ms-flex-align: center;
//           align-items: center;
//   background-color: '#fcf8f8';
//   -webkit-box-shadow: 0px 0px 6px 0.1px rgba(0, 0, 0, 0.75);
//           box-shadow: ${(props) => props.back};
//   &:hover{
//     -webkit-box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.75);
//             box-shadow: ${(props) => props.backhov};

//   }

// `;

// const HomeSearchInput = styled.input`
//   border: 0;
//   outline: none;
//   margin-left: 1.4rem;
//   font-size: 1rem;
//   font-weight: 400;
//   color: #1a2328;
//   background: #fcf8f8 !important;
// `;

function StyledInput(props){
  return(
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {m:1, width: '500',maxWidth: '100%' },
      }}
      noValidate
      autoComplete="off"
      >
<div>
        <TextField id="outlined-search" label={props.placehld} onInput={props.Input} type="search" />
</div>

</Box>
    // <HomeSearch backhov={props.back1} back={props.back2}>
    //     <HomeSearchInput type='text' 
		// 				onInput={props.Input}
		// 				placeholder={props.placehld}/>
    // </HomeSearch>
  

  )
}


export default StyledInput