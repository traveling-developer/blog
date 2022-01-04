import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const CustomizedButton = styled(Button)({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        boxShadow: 'none',
    },
});

const HeaderButton = ({ children }) => {
    return <CustomizedButton> {children} </CustomizedButton>;
}

export default HeaderButton