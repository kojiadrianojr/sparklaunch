import styled from 'styled-components';
import Column from 'components/Column'

const Section = styled.div`
    margin: 35px;
    width: 100%;
`

export const CardGroup = styled(Column)`
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    row-gap: 35px;
    column-gap: 35px;
    margin-top: 20px;
`
// export const Card = styled.div``

export default Section;