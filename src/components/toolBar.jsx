import styled from "styled-components";
export default function ToolBar({ children }) {
  const MenuBar = styled.div`
    width: 100%;
    height: 80px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 30px;
  `;

  return <MenuBar>{children}</MenuBar>;
}
