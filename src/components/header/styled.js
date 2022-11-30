import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.4rem;
  justify-content: space-around;
  flex-direction: row;
  border-bottom: 0.1rem solid ${(props) => props.theme.cinza};
  @media (max-width: 800px) {
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }
`;

export const Github = styled.img`
  margin-right: 5px;
  max-height: 14px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  h4 {
    margin-top: 0.7rem;
    padding: 0.9rem;
    :hover {
      padding: 0.3rem;
      border-bottom: 0.1rem solid ${(props) => props.theme.amarelo};
    }
  }
`;

export const Logo = styled.img`
  width: 8rem;
  margin-right: 3rem;
  @media (max-width: 800px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Entrar = styled.button`
  text-align: center;
  background: ${(props) => props.theme.cinza};
`;
