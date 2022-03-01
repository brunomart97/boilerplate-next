import styled from 'styled-components'

export const Wrapper = styled.main`
  color: #000;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 20rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
`

export const LinkContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Link = styled.a`
  margin: 1rem;
  text-decoration: none;
`

export const LinkBox = styled.div`
  width: 20rem;
  height: 7rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 5px;

  &:hover {
    border-color: #000;
  }
`
