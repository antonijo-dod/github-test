import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

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
  gap: 16px;
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
            <Button variant="primary">Your claims</Button>
            <Button>Add a cleam</Button>
          </Flex>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
