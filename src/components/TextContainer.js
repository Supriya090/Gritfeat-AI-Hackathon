import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
color: black;
text-align: center;
margin: 2rem 3rem;
`
const TextContainer = (props) => {
  return <>
 <div className="container">
  <Heading>{props.message}</Heading>

 </div>
  </>;
};

export default TextContainer;
