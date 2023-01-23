import { Box, Grid } from '@mui/material'
import useRetrospectiveCards from '../hooks/useRetrospectiveCards'
import AppHeader from '../molecules/Display/AppHeader'
import RetrospectiveSection from '../organisms/RetrospectiveSection'
import { RETROSPECTIVE_CARD_SECTION } from '../reducers/retrospectiveCardsReducer'

const MyCardsPage = () => {
  const { allCardsCreatedByTheUser } = useRetrospectiveCards()

  return (
    <Box px={3} py={3}>
      <Box mb={5} mx={1} position="relative">
        <AppHeader />
      </Box>
      <Grid container rowSpacing={6} columnSpacing={4}>
        {[
          {
            sectionKey: RETROSPECTIVE_CARD_SECTION.WHAT_WENT_WELL,
            cards: allCardsCreatedByTheUser,
          },
          {
            sectionKey: RETROSPECTIVE_CARD_SECTION.WHAT_CAN_BE_IMPROVED,
            cards: allCardsCreatedByTheUser,
          },
          {
            sectionKey: RETROSPECTIVE_CARD_SECTION.START_DOING,
            cards: allCardsCreatedByTheUser,
          },
          {
            sectionKey: RETROSPECTIVE_CARD_SECTION.ACTION_ITEMS,
            cards: allCardsCreatedByTheUser,
          },
        ].map((sectionData) => (
          <Grid item md={12} key={sectionData.sectionKey}>
            <RetrospectiveSection
              sectionKey={sectionData.sectionKey}
              cards={sectionData.cards}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default MyCardsPage
