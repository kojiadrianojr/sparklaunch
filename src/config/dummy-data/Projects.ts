import { IProjects } from "config/constants/type";
import {BNB, TBNB, OWN , TOWN} from "../index";


const ProjectList: Array<IProjects> = [
    {
        category: 'ownlyLaunchPad',
        address: '0x001',
        sellingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? OWN : TOWN ),
        buyingCoin: ( process.env.REACT_APP_CHAIN_ID === "56" ? BNB : TBNB ) ,
        title: 'Ownly',
        symbol: 'OWN',
        image: 'ownly.png',
        desc: 'OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists.',
        longDesc: 'Backed with over 2+ years of experience in the NFT and blockchain industry, Ownly is a governance token-based NFT-focused marketplace, curator, and a blockchain platform with an existing basket portfolio of NFT artworks that enable creators and collectors to optimize the authentic value of NFT assets.',
        longDesc2: '$OWN Token is the native utility token of Ownly, users are able to buy, own, collect, and trade 1 of 1 edition crypto artworks by talented artists. Own the only true copy and there\'s nothing else like that in the world -- as if it\'s made just for you. ',
        longDesc3: 'Ownly is created to be a meeting place of artworks and collectors in the crypto space. It offers a Decentralized NFT Marketplace, Staking, NFT launching & curation, and NFT-focused & energy-efficient blockchain platform in a seamless, transparent, secure, inclusive, and interoperable approach.',
        price: 1,
        progress: 0,
        totalRaise: 253.46,
        endDate: '11-01 12:00:00',
        ownSale: 2666666667,
        wallpaperBg: 'ownlyBG.jpg',
        status: "completed",
        socMeds: ['ownly.io', 'twitter.com/ownlyio', 't.me/ownlyio', 'medium.com/ownlyio'],
    },
    {
        category: 'ownlyLaunchPad',
        address: '0x004',
        sellingCoin: OWN,
        buyingCoin: BNB,
        title: 'FlashLoans',
        symbol: 'FLASH',
        image: 'flash.PNG',
        desc: 'Flashloans.com is a new DeFi tool that allows users to create and perform a flash loan backed trade from an easy to use UI. ',
        longDesc: 'Flash loans are a new uncollateralized loan product in DeFi, empowering traders and DeFi users by enabling instant borrowing with no collateral required provided that the liquidity is returned to the pool within one transaction block.',
        longDesc2: 'Flashloans.com will also be adding an additional layer of functionality with Flash tokens, allowing users to access bespoke Flash loan analytics, as well as enjoying reduced platform fees.',
        price: 0.0000909,
        progress: 75,
        totalRaise: 150,
        endDate: '11-01 12:00:00',
        ownSale: 165000000.0,
        wallpaperBg: 'flashtokenBG.png',
        status: "upcoming",
        socMeds: ['https://flashloans.com', 'https://twitter.com/ComFlashloans', 'https://t.me/joinchat/HCAFABqRGjY77vIdI2nV9g', 'https://medium.com/@flashloans'],
    },
    {
        category: 'ownlyLaunchPad',
        address: '0x005',
        sellingCoin: OWN,
        buyingCoin: BNB,
        title: 'Outrace',
        symbol: 'ORE',
        image: 'ore.PNG',
        desc: '',
        longDesc: '',
        price: 0.0000909,
        progress: 75,
        totalRaise: 150,
        endDate: '11-01 17:00:00',
        ownSale: 165000000.0,
        wallpaperBg: 'oreBG.PNG',
        status: "upcoming",
        socMeds: ['https://outrace.game', 'https://twitter.com/outrace_ore', 'https://t.me/Outrace', 'medium.com'],
    },
]

export default ProjectList;
