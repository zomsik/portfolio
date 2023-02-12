import styled from "styled-components";

export const NavbarContainer = styled.nav`
  min-width: 30%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
	position: fixed;
	display: flex;
	justify-content: space-between;
	padding: 0.7rem 2rem;
	overflow: hidden;
	z-index: 10;
  border-radius: 60px;
  box-shadow: 3px 3px 20px #ff3352;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: rgba(172, 89, 252, 1);
  background-image: linear-gradient(167deg, rgba(172, 89, 252, 1) 0%, rgba(41, 53, 86, 1) 33%, rgba(30, 25, 35, 1) 66%, rgba(37, 2, 57, 1) 90%);
	margin: auto;
	top: 10px;
	right:10px;

  


  @media (min-width: 600px) {
    height: 40px;
  }
  @media (max-width: 600px) {
    min-width: 3%;

    height: ${(props) => (props.extendNavbar ? "25%" : "7%")};
  }
`;



export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLink = styled.a`
  color: white;
  font-size: x-large;
  text-decoration: none;
  font-size: 24px;
  margin: 10px;
  margin-top: 0.5vh;
  width: 100%;
  
  

  @media (max-width: 599px) {
    display: none;
  }

  &:hover {
    transition: 0.5s;
    color: orange;
    cursor: pointer;
  }


`;



export const NavbarLinkExtended = styled.a`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  &:hover {
    transition: 0.5s;
    color: orange;
  }
`;


export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  right: 0;
  
  @media (min-width: 600px) {
    display: none;
  }



`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    display: none;
  }
`;