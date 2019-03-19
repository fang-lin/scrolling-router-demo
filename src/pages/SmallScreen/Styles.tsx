import styled from "styled-components";

const PageWrapper = styled.div`
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    overflow: hidden;
    box-shadow: 0px 10px 30px rgba(0,0,0,.2);
`;
const ContextWapper = styled("div")`
    position: absolute;
    top: 80px;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    overflow: scroll;
`;

export {
    PageWrapper,
    ContextWapper
}