import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useRouter } from 'next/router';
import { MenuOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

import navStyle from "./header.module.scss";


function SecondaryHeader(props) {
    const { data } = props;
    const [initialRender, setInitialRender] = useState(false);
    const router = useRouter();

    const MoreCategory = data.filter((category, index) => {
        return index >= 8 && category;
    })

    useEffect(() => {
        setInitialRender(true);
    }, [])

    const categorySlug = router.asPath.split('/')[1];

    return (
        <>
            {initialRender && <Navbar expand="md" className={navStyle.navBar_container}>
                <Container>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" className={navStyle.navBar_toggle} >
                        <MenuOutlined fontSize="large" />
                    </Navbar.Toggle>
                    <Link href="/">
                        <Box className={navStyle.mobile_logo}>CookBook</Box>
                    </Link>
                    <Box>
                        <Button className={navStyle.mobile_signIn}>SignIn</Button>
                    </Box>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-md"
                        aria-labelledby="offcanvasNavbarLabel-expand-md"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md" className={navStyle.toggle_logo}>
                                CookBook
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className={navStyle.navBar_body}>
                            <ul className={navStyle.navbar_items}>
                                <Link href='/'>
                                    <li className={categorySlug == "" && `${navStyle.active_category}`} key="all">All</li>
                                </Link>
                                {data.map((item, index) => {
                                    return index < 8 && <Link key={item.id} href={item.slug}><li key={item.id} className={categorySlug == item.slug && `${navStyle.active_category}`}>{item.name}</li></Link>
                                })}
                                {data.length > 8 && <NavDropdown title="More" id="navbarScrollingDropdown" className={navStyle.navBar_itemDropdown}>
                                    {MoreCategory.map((item, index) => {
                                        return <>
                                            <NavDropdown.Item href={item.slug} key={item.id} className={categorySlug == item.slug && `${navStyle.active_category}`}>{item.name}</NavDropdown.Item>
                                            {index + 8 != data.length - 1 && <NavDropdown.Divider key={item.id} />}
                                        </>
                                    })}
                                </NavDropdown>}
                            </ul>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>}
        </>
    );
}
export default SecondaryHeader;