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