import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube, FaLinkedin,
    FaTwitter
}
    from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
}
    from './FooterElements';
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Academia 💪
                        </SocialLogo>
                        <WebsiteRights> Academia 💪 © {new Date().getFullYear()}
                            | All rigths reserved</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/resilia.br/" target="_blank"
                                aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="//https://www.instagram.com/resilia.br/" target="_blank"
                                aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="//www.youtube.com/channel/UCBIRxu3dixMNMRVjz-YQAcA" target="_blank"
                                aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href="//twitter.com/resilia_br" target="_blank"
                                aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="//www.linkedin.com/company/resilia-educa%C3%A7%C3%A3o/" target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>

                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
