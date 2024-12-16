import { Link } from 'react-router-dom'

import {
    AppleIcon, DeBankIcon, DiscordIcon,
    GooglePlayIcon,
    InstagramIcon,
    MailIcon, MediumIcon,
    TelegramIcon, TikTokIcon,
    TwitterIcon, WhatsAppIcon,
    YouTubeIcon
} from '@common/SvgIcon/SvgIcon'

import './socialLinks.scss'

const email = import.meta.env.VITE_EMAIL
const twitter = import.meta.env.VITE_TWITTER
const telegram = import.meta.env.VITE_TELEGRAM
const instagram = import.meta.env.VITE_INSTAGRAM
const youtube = import.meta.env.VITE_YOUTUBE
const appStore = import.meta.env.VITE_APP_STORE
const googlePlay = import.meta.env.VITE_GOOGLE_PLAY
const tikTok = import.meta.env.VITE_TIKTOK
const medium = import.meta.env.VITE_MEDIUM
const deBank = import.meta.env.VITE_DEBANK
const discord = import.meta.env.VITE_DISCORD
const whatsapp = import.meta.env.VITE_WHATSAPP

const SocialLinks = () => {
    return (
        <>
            <Link to={appStore} target='_blank' className='socialLinks'>
                <AppleIcon/>
            </Link>
            <Link to={googlePlay} target='_blank' className='socialLinks'>
                <GooglePlayIcon/>
            </Link>
            <Link to={tikTok} target='_blank' className='socialLinks'>
                <TikTokIcon/>
            </Link>
            <Link to={youtube} className='socialLinks'>
                <YouTubeIcon/>
            </Link>
            <Link to={telegram} target='_blank' className='socialLinks'>
                <TelegramIcon/>
            </Link>
            <Link to={twitter} target='_blank' className='socialLinks'>
                <TwitterIcon/>
            </Link>
            <Link to={medium} target='_blank' className='socialLinks'>
                <MediumIcon/>
            </Link>
            <Link to={deBank} target='_blank' className='socialLinks'>
                <DeBankIcon/>
            </Link>
            <Link to={discord} target='_blank' className='socialLinks'>
                <DiscordIcon/>
            </Link>
            <Link to={`mailto:${email}`} className='socialLinks' target='_blank'>
                <MailIcon/>
            </Link>
            <Link to={whatsapp} className='socialLinks' target='_blank'>
                <WhatsAppIcon/>
            </Link>
            <Link to={instagram} className='socialLinks' target='_blank'>
                <InstagramIcon/>
            </Link>
        </>
    )
}

export default SocialLinks
