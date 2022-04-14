import Features from "../components/Features";
import styled from "styled-components";



const Container = styled.div`
    min-height: 100vh;
    background: #000d1a;
`;

const About = () => {
    return (
        <Container>
            <Features />
        </Container>
    );
}

export default About;