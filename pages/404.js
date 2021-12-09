import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Title = styled.h1(({ theme: { colors } }) => css`
  font-size: 64px;
  color: ${colors.primary};
  text-align: center;
  
  span.message {
    display: block;
    color: ${colors.lightText};
    font-size: 20px;
    font-weight: 400;
  }
`);

const PageNotFound = () => {
  return(
    <Container>
      <Title>
        Page Not Found
        <span className="message">Ohh i guess this place is empty.</span>
      </Title>
    </Container>
  )
}

export default PageNotFound;