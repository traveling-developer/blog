import { Favorite, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { AppBar, Box, Container, Paper, Toolbar, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Link } from 'gatsby';
import React, { useCallback, useEffect, useState } from 'react';
import HeaderButton from './headerButton';
import * as containerStyles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
    const [customColor, setCustomColor] = useState(false);

    const handleScroll = useCallback(() => {
        console.log(window.scrollY);
        if (window.scrollY >= 62) {
            setCustomColor(true)
        } else {
            setCustomColor(false)
        }
    }, [setCustomColor]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className={containerStyles.container}>
            <title>{pageTitle}</title>
            <AppBar sx={{ backgroundColor: customColor ? 'primary.main' : 'transparent', boxShadow: customColor ? '3' : '0' }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1 }}>Traveling Developer Blog</Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <HeaderButton>
                                <Link to="/">Home</Link>
                            </HeaderButton>
                            <HeaderButton>
                                <a href="https://www.menzel-it.de">About me</a>
                            </HeaderButton>
                            <HeaderButton>
                                <a href="https://www.instagram.com/traveling_developer_42" className={containerStyles.iconLink}>
                                    <Instagram />
                                </a>
                            </HeaderButton>
                            <HeaderButton>
                                <a href="https://twitter.com/menzel42" className={containerStyles.iconLink}>
                                    <Twitter />
                                </a>
                            </HeaderButton>
                            <HeaderButton>
                                <a href="https://github.com/traveling-developer" className={containerStyles.iconLink}>
                                    <GitHub />
                                </a>
                            </HeaderButton>
                            <HeaderButton>
                                <a href="https://www.linkedin.com/in/christoph-menzel/" className={containerStyles.iconLink}>
                                    <LinkedIn />
                                </a>
                            </HeaderButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className={containerStyles.imageHeader} />
            <Paper elevation={10} className={containerStyles.content}>
                {children}
            </Paper>
            <BottomNavigation sx={{ backgroundColor: 'transparent' }} >
                <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <HeaderButton>
                        <Link to="/imprint">Imprint</Link>
                    </HeaderButton>
                    <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>Made with <Favorite fontSize='small' sx={{ position: 'relative', top: '3px', height: '20px', color: 'primary.main' }} /> by Traveling Developer </Typography>
                    <HeaderButton>
                        <Link to="/privacy">Privacy</Link>
                    </HeaderButton>
                </Container>
            </BottomNavigation>
        </div >
    )
}

export default Layout