import { Box, Grid, IconButton, Typography } from '@mui/material'
import { RETROSPECTIVE_CARD_SECTION } from '../reducers/retrospectiveCardsReducer'
import RetrospectiveCard from './RetrospectiveCard'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import useRetrospectiveCards from '../hooks/useRetrospectiveCards'
import React from 'react'

const RetrospectiveSectionData = {
  [RETROSPECTIVE_CARD_SECTION.WHAT_WENT_WELL]: {
    name: 'What went well',
    color: 'dodgerblue',
  },
  [RETROSPECTIVE_CARD_SECTION.WHAT_CAN_BE_IMPROVED]: {
    name: 'What can be improved',
    color: 'tomato',
  },
  [RETROSPECTIVE_CARD_SECTION.START_DOING]: {
    name: 'Start doing',
    color: 'cyan',
  },
  [RETROSPECTIVE_CARD_SECTION.ACTION_ITEMS]: {
    name: 'Action item',
    color: 'yellow',
  },
}

const RetrospectiveSection = React.memo(({ sectionKey, cards }) => {
  const { initializeCard } = useRetrospectiveCards()
  return (
    <Box sx={{ textAlign: 'center', minHeight: 200 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Typography component="h2" variant="h4">
          {RetrospectiveSectionData[sectionKey].name}
        </Typography>
        <IconButton
          disabled={!!cards.find((card) => card.newCard === true)}
          size="small"
          sx={{ mt: -3, '&.Mui-disabled': { opacity: 0.3 } }}
          onClick={() => initializeCard(sectionKey)}
        >
          <AddCircleIcon fontSize="large" sx={{ color: 'success.light' }} />
        </IconButton>
      </Box>
      <Grid container spacing={2}>
        {cards
          .filter((v) => v.section === sectionKey)
          .map((card) => (
            <Grid item md={4} key={card.cardId}>
              <RetrospectiveCard
                cardColor={RetrospectiveSectionData[sectionKey].color}
                cardData={card}
                defaultEditMode={card.newCard}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  )
})

export default RetrospectiveSection
