import { Box, Grid } from '@mui/material'

import AppHeader from '../molecules/Display/AppHeader'
import { RETROSPECTIVE_CARD_SECTION } from '../reducers/retrospectiveCardsReducer'

import useRetrospectiveCards from '../hooks/useRetrospectiveCards'
import RetrospectiveSection from '../organisms/RetrospectiveSection'

const HomePage = () => {
  return (
    <Box px={3} py={3}>
      <Box mb={5} mx={1} position="relative">
        <AppHeader />
      </Box>
      <Dashboard />
    </Box>
  )
}

export default HomePage

const Dashboard = () => {
  const { allRetrospectiveCards } = useRetrospectiveCards()

  return (
    <Grid container rowSpacing={6} columnSpacing={4}>
      {[
        {
          sectionKey: RETROSPECTIVE_CARD_SECTION.WHAT_WENT_WELL,
          cards: allRetrospectiveCards,
        },
        {
          sectionKey: RETROSPECTIVE_CARD_SECTION.WHAT_CAN_BE_IMPROVED,
          cards: allRetrospectiveCards,
        },
        {
          sectionKey: RETROSPECTIVE_CARD_SECTION.START_DOING,
          cards: allRetrospectiveCards,
        },
        {
          sectionKey: RETROSPECTIVE_CARD_SECTION.ACTION_ITEMS,
          cards: allRetrospectiveCards,
        },
      ].map((sectionData) => (
        <Grid item md={6} key={sectionData.sectionKey}>
          <RetrospectiveSection
            sectionKey={sectionData.sectionKey}
            cards={sectionData.cards}
          />
        </Grid>
      ))}
    </Grid>
  )
}
