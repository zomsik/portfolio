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
  box-shadow: 3px 3px 20px gray;
  border-bottom-left-radius: 60px;
  background-color: rgba(28, 32, 90, 1);
  background-image: linear-gradient(166deg, rgba(24, 179, 235, 1) 0%, rgba(52, 107, 115, 1) 25%, rgba(16, 181, 134, 1) 50%, rgba(0, 132, 158, 1) 75%, rgba(58, 98, 214, 1) 100%);



  margin: auto;
	top: 0;
	right:0;

  


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