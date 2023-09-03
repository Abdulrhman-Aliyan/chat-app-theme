import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { purple, grey, blue} from '@mui/material/colors';
import Typography from '@mui/material/Typography';


const colorHue = false? 900: 300;
const buttonBg = grey[colorHue];
const buttonColor = false? grey[colorHue-500] : grey[colorHue+500];

const colorHueHover = 200;
const buttonBgHover = blue[colorHueHover];
const buttonColorHover = blue[colorHueHover +600]


const BootstrapButton = styled(Button)(({ theme }) => ({
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: 'none',
  color: buttonColor ,
  backgroundColor: buttonBg ,
  borderColor: buttonBg ,
  height: 62 ,
  width: 62,
  '&:hover': {
    color: buttonColorHover,
    backgroundColor: buttonBgHover ,
    borderColor: buttonBgHover ,
    boxShadow: 'none' ,
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
    boxShadow: 'none' ,
  },
}));

export default function LargeSquarBtns({children,iconBtn}) {
  return (
      <BootstrapButton variant="contained" disableRipple sx={{width: 76, height: 76}}>
        {iconBtn}
       <Typography variant='subtitle2' sx={{ fontSize: 10, fontWeight: 800, textTransform: 'capitalize' }}> {children} </Typography>
      </BootstrapButton>
  );
}