import React, { useCallback } from "react";
import { Modal, Text, Button, IconButton, Flex } from "@sparkpointio/sparkswap-uikit";
import {Field} from 'state/swap/action';
import styled from "styled-components";
import { useSwapActionHandlers, useSwapState } from "state/swap/hooks";
import { useFindProjectByAddress } from "state/hooks";
import { useSelectToken } from "state/tokens/hooks";
import CurrencyInputPanel from "components/CurrencyInputPanel";
import { StyledImage } from 'pages/Launchpad/components/styled';
import Icon from 'assets/icons/Arrow';
import SvgIcon from 'components/SvgIcon';
import { ArrowWrapper } from './styleds';


interface AppProps {
    onDismiss?: () => void
    address: string | null | undefined
  }

const StyledHeading = styled(Text)`
  margin-top: -40px;
  padding-bottom: 25px;
  color: ${({theme}) => theme.colors.textSubtle};
`
const ActionDiv = styled(Flex)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`

const PurchaseModal: React.FC<AppProps> = ({onDismiss, address}) => {
  const { onUserInput } = useSwapActionHandlers();
  const { independentField, typedValue } = useSwapState();
  const project = useFindProjectByAddress(address);
  const token = useSelectToken(project.buyingCoin);
  const formattedAmounts = {
    [independentField]: typedValue,
  }

  const handleTypeInput = useCallback((value: string) => {
    onUserInput(Field.INPUT, value)
  }, [onUserInput])

  const handleTypeOutput = useCallback((value: string) => {
    onUserInput(Field.OUTPUT, value)
  }, [onUserInput])

  
    return (
        <Modal title="Swap Coins" onDismiss={onDismiss}>
            <StyledHeading>Max. Allocation is  {project.symbol}</StyledHeading>
            <CurrencyInputPanel 
                label="From"
                id="swap-input"
                value={formattedAmounts[Field.INPUT]}
                onUserInput={handleTypeInput}
                currency={token}
                showMaxButton
            />
            <div style={{margin: '30px 0px 20px 0px'}}>
            <ArrowWrapper clickable>
              <IconButton style={{ backgroundColor:'transparent', width: '100%', marginTop: '10px', boxShadow: 'none'  }} size="sm">
                  <Icon />
              </IconButton>
            </ArrowWrapper>
            </div>
              <CurrencyInputPanel 
                showMaxButton
                label="To"
                id="swap-input"
                value={formattedAmounts[Field.OUTPUT]}
                onUserInput={handleTypeOutput}
                currency={project}
            />
            <ActionDiv>
            <Button fullWidth>Swap</Button>
            </ActionDiv>
            <ActionDiv>
              <Text>My Allocations</Text>
              <Flex alignItems="center" marginTop="12px">
                <StyledImage src={`${process.env.PUBLIC_URL}/images/icons/${project?.symbol}.png`} />
                <Text color="textSubtle">0.0 {project.symbol}</Text>
              </Flex>
            </ActionDiv>
  
        </Modal>
    )
}

export default PurchaseModal;