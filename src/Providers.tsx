import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { ModalProvider } from '@sparkpointio/sparkswap-uikit'
import { HelmetProvider } from 'react-helmet-async'
import { NetworkContextName } from './config'
import getLibrary from './utils/getLibrary'
import { ThemeContextProvider } from './ThemeContext'

const Providers: React.FC = ({ children }) => {
    // const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
        <HelmetProvider>
        <ThemeContextProvider>
            <ModalProvider>{children}</ModalProvider>
        </ThemeContextProvider>
        </HelmetProvider>
        </Web3ReactProvider>
    )
}

export default Providers;