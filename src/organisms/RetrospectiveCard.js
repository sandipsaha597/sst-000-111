import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import EditableText from './EditableText'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import useAuth from '../hooks/useAuth'
import useRetrospectiveCards from '../hooks/useRetrospectiveCards'

const RetrospectiveCard = React.memo(
  ({ cardData, cardColor, defaultEditMode = false }) => {
    const { cardId, text, createdBy, upvotedBy } = cardData || {}
    const [editMode, setEditMode] = useState(defaultEditMode)
    const { userDetails } = useAuth()
    const { editCard, deleteCard, upvoteCard } = useRetrospectiveCards()

    return (
      <Card
        sx={{
          boxSizing: 'border-box',
          px: 2,
          py: 0,
          backgroundColor: cardColor,
          borderRadius: '0.3em 0.3em 1.7em 0.3em',
        }}
        elevation={3}
      >
        <CardContent sx={{ textAlign: 'center', minHeight: 80, px: 0 }}>
          <EditableText
            {...{ editMode }}
            text={text}
            whenDone={(text) => {
              setEditMode(false)
              editCard(text, cardId)
            }}
          />
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ mr: 1, whiteSpace: 'nowrap' }}>
            + {upvotedBy.length}
          </Typography>
          <CardActions
            sx={{ justifyContent: 'space-between', px: 0, width: '100%' }}
          >
            <Box>
              {createdBy !== userDetails.username && (
                <IconButton size="small" onClick={() => upvoteCard(cardId)}>
                  <ThumbUpIcon
                    sx={
                      upvotedBy.includes(userDetails.username)
                        ? { color: 'primary.main' }
                        : {}
                    }
                  />
                </IconButton>
              )}
            </Box>
            <Box>
              {createdBy === userDetails.username && (
                <>
                  <IconButton size="small" onClick={() => setEditMode(true)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" onClick={() => deleteCard(cardId)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )}
            </Box>
          </CardActions>
        </Box>
      </Card>
    )
  }
)

export default RetrospectiveCard
