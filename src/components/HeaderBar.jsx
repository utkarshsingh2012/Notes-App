import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';



const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 60px;
  box-shadow: inset 0 -1px 0 0 #dadca0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  marginRight: 25px;
`

const HeaderBar = ({open, handleDrawer}) => {

  const logo = 'https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png';

  return(
    <Header open={open}>
        <Toolbar>
          <IconButton

            onClick={handleDrawer}
            edge="start"
            sx={{marginRight: '20px',}}
          >
            <MenuIcon />
          </IconButton>
            <img src={logo} alt="logo" style={{width: 30,  marginRight: 15}}/>
          
          <Heading >Singh's Keep</Heading>
        </Toolbar>
      </Header>
  )
}

export default HeaderBar