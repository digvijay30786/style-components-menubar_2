import "./styles.css";
import ToolBar from "./components/toolBar";
import { DrawerItem } from "./components/DrawerItem";
import styled from "styled-components";

export default function App() {
  const SiteName = styled.div`
    background-color: #0f295c;
    display: flex;
    color: white;
    padding: 10px;
  `;

  const MenuName = styled.div`
    display: flex;
    column-gap: 20px;
    color: white;
  `;

  return (
    <ToolBar>
      <SiteName>
        <DrawerItem label="SITENAME" />
      </SiteName>
      <MenuName>
        <DrawerItem label="About Us"></DrawerItem>
        <DrawerItem label="Prices"></DrawerItem>
        <DrawerItem label="Start Page"></DrawerItem>
        <DrawerItem label="offer"></DrawerItem>
        <DrawerItem label="Contact"></DrawerItem>
      </MenuName>
    </ToolBar>
  );
}
