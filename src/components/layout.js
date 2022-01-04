import { Favorite, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { AppBar, Container, Hidden, Paper, Toolbar, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Link } from 'gatsby';
import * as React from 'react';
import HeaderButton from './headerButton';
import * as containerStyles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {

    return (
        <div className={containerStyles.container}>
            <title>{pageTitle}</title>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1 }}>Traveling Developer Blog</Typography>
                        <Hidden>
                            <HeaderButton>test</HeaderButton>
                            <HeaderButton>
                                <Link to="/blog">blog</Link>
                            </HeaderButton>
                            <HeaderButton>
                                <Link to="https://www.instagram.com" className={containerStyles.iconLink}>
                                    <Instagram />
                                </Link>
                            </HeaderButton>
                            <HeaderButton>
                                <Link to="https://www.twitter.com" className={containerStyles.iconLink}>
                                    <Twitter />
                                </Link>
                            </HeaderButton>
                            <HeaderButton>
                                <Link to="https://www.linkedin.com" className={containerStyles.iconLink}>
                                    <LinkedIn />
                                </Link>
                            </HeaderButton>
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>
            <Paper elevation={10} className={containerStyles.content}>
                {children}

            </Paper>
            <main >
            </main>
            <BottomNavigation sx={{ backgroundColor: 'secondary.main', boxShadow: 3 }} >
                <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <HeaderButton>
                        <Link to="/imprint">Imprint</Link>
                    </HeaderButton>
                    <Typography>Made with <Favorite fontSize='small' /> by Traveling Developer </Typography>
                    <HeaderButton>
                        <Link to="/privacy">Privacy</Link>
                    </HeaderButton>
                </Container>
            </BottomNavigation>
        </div >
    )
}

export default Layout