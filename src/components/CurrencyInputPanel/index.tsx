import React, { useState, useCallback, useContext } from 'react'
import { Button, ChevronDownIcon, Dropdown, Text } from '@sparkpointio/sparkswap-uikit'
import { useWeb3React } from '@web3-react/core'
import styled, { ThemeContext } from 'styled-components'
import { darken } from 'polished'
import { IProjects, ITokens } from 'config/constants/type'
import { StyledImage } from 'pages/Launchpad/components/styled'
import { Currency } from 'components/types'
import { Input as NumericalInput } from '../NumericalInput'
import { RowBetween } from '../Row'
import CurrencyLogo from '../CurrencyLogo'

import useActiveWeb3React from '../../hooks/useActiveWeb3React'

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`
const CurrencySelect = styled.button<{ selected: boolean }>`
  align-items: center;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  color: ${({ selected, theme }) => (selected ? theme.colors.text : '#FFFFFF')};
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 0 0.5rem;
  :focus,
  :hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.input)};
  }
`

const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
  span:hover {
    cursor: pointer;
    color: ${({ theme }) => darken(0.2, theme.colors.textSubtle)};
  }
`

const Aligner = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const InputPanel = styled.div<{ hideInput?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  // border-radius: ${({ hideInput }) => (hideInput ? '8px' : '20px')};
  // background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
`

const Container = styled.div<{ hideInput: boolean }>`
  // border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme }) => theme.shadows.inset};
`


interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideInput?: boolean
  hideBalance?: boolean
  remainingSupply?: string
  id: string
  showCommonBases?: boolean
}

export default function CurrencyInputPanel({
    value,
    onUserInput,
    onMax,
    showMaxButton,
    label,
    currency,
    disableCurrencySelect = false,
    remainingSupply = '',
    hideBalance = false,
    hideInput = false,
    id,
    showCommonBases,
  }: CurrencyInputPanelProps) {
    const [modalOpen, setModalOpen] = useState(false)
    const { account } = useWeb3React()
    // const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
    const selectedCurrencyBalance = 22222
    const theme = useContext(ThemeContext)
    const handleDismissSearch = useCallback(() => {
      setModalOpen(false)
    }, [setModalOpen])

    return (
      <InputPanel id={id}>
        <Text fontSize="14px">{label}</Text>
        <Container hideInput={hideInput}>
          <InputRow style={hideInput ? { padding: '0', borderRadius: '8px' } : {}} selected={disableCurrencySelect}>
          <Aligner>
                {/* <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} /> */}
                <StyledImage src={`${process.env.PUBLIC_URL}/images/icons/${currency?.symbol}.png`} size="24px" />
                <Text>
                {(currency && currency.symbol && currency.symbol.length > 20
                    ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                        currency.symbol.length - 5,
                        currency.symbol.length
                      )}`
                    : currency?.symbol)}
                    &nbsp;
                </Text>
            </Aligner>
            {!hideInput && (
              <>
                <NumericalInput
                  className="token-amount-input"
                  value={value}
                  onUserInput={onUserInput}
                />
                {account && currency && showMaxButton && (
                  <Button onClick={onMax} size="sm" variant="primary" style={{maxWidth: '50px', width: '20%', fontSize: '14px'}}>
                    MAX
                  </Button>
                )}
              </>
            )}
          </InputRow>
        </Container>
        {!hideInput && (

          <RowBetween>
              {account && (
                <Text onClick={onMax} fontSize="14px" style={{ display: 'inline', cursor: 'pointer' }}>
                  {!hideBalance && !!currency
                    ? `Remaining: ${remainingSupply} ${currency.symbol}`
                    : ' -'}

                </Text>
              )}
          </RowBetween>

        )}
      </InputPanel>
    )
  }
