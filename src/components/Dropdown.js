import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";

   
const Dropdown = ({title}) => {
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
     <Menu
        animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
        }}
        open={openMenu}
        handler={setOpenMenu}
        allowHover
      >
        <MenuHandler>
          <Button>{title}</Button>
        </MenuHandler>
        <MenuList>
        { title === "Products" &&
        <>
            <MenuItem>
                <a href="https://www.gardspecialists.com/">
                GARD Specialists Co Inc.
                </a>
            </MenuItem>
            <MenuItem>Quarterly Catalog</MenuItem>
        </>
        }
        { title === "Services" &&
        <>
            <MenuItem>Supply Room Inventory Management</MenuItem>
            <MenuItem>Storage Solutions & Labeling</MenuItem>
            <MenuItem>Tool Supply & Maintenance </MenuItem>
        </>
        }
        </MenuList>
      </Menu>
    );
  }

  export default Dropdown