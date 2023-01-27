import styled from 'styled-components';
import React from 'react';


const TextContainer = styled.div`
    text-align: center;
    padding: 2rem 1.5rem;
    margin: 3rem 1rem   ;
    `;
const TextHeading = styled.h1`
    padding-bottom:1rem;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 2.5 rem;
    `;
const Text = styled.p`
    font-size:1.15rem;
    `;

const IntroContainer = () => {

    return <>
        <div className="fluid-container my-2">
            <TextContainer>
                <TextHeading>Cervical Cancer Classification</TextHeading>
                <Text>Upload the cervix image and determine the type of cervix. It acts at the foundation of cervical cancer detection.</Text>
            </TextContainer>

        </div>
    </>;
};

export default IntroContainer;
