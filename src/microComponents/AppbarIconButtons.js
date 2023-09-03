import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { purple, grey, blue} from '@mui/material/colors';


const colorHue = false? 900: 300;
const buttonBg = grey[colorHue];
const buttonColor = false? grey[colorHue-500] : grey[colorHue+500];

const colorHueHover = 200;
const buttonBgHover = blue[colorHueHover];
const buttonColorHover = blue[colorHueHover +600]


const BootstrapButton = styled(IconButton)(({ theme }) => ({
  boxShadow: 'none',
  color: buttonColor ,
  backgroundColor: buttonBg ,
  borderColor: buttonBg ,
  '&:hover': {
    color: buttonColorHover,
    backgroundColor: buttonBgHover ,
    borderColor: buttonBgHover ,
    boxShadow: buttonBgHover ,
  },
  '&:active': {
    color: buttonColorHover,
    backgroundColor: buttonBgHover ,
    borderColor: buttonBgHover,
    boxShadow: buttonBgHover ,
  },
  '&:focus': {
    color: buttonColorHover,
    backgroundColor: buttonBgHover ,
    borderColor: buttonBgHover,
    boxShadow: buttonBgHover ,
  },
}));

export default function AppbarIconButtons({children}) {
  return (
      <BootstrapButton variant="contained" size='large' disableRipple>
        {children}
      </BootstrapButton>
  );
}