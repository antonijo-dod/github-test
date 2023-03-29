import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div`
  color: white;
  background-color: #1a1a1a;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  height: 60px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Flex>
          <div onClick={() => navigate("/")}>GPServ</div>
          <div>Add new claim</div>
        </Flex>
        <div>
          <Flex>
            <div>Your claims</div>
            <div>Add a cleam</div>
          </Flex>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
