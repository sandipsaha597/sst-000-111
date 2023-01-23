import { useDispatch, useSelector } from 'react-redux'
import { RETROSPECTIVE_CARDS_DISPATCH_ACTION_TYPE } from '../reducers/retrospectiveCardsReducer'
import useAuth from './useAuth'

const useRetrospectiveCards = () => {
  const allRetrospectiveCards = useSelector(
    ({ retrospectiveCardsReducer: { retrospectiveCards } }) =>
      retrospectiveCards
  )
  const { userDetails } = useAuth()
  const dispatch = useDispatch()

  const allCardsCreatedByTheUser = allRetrospectiveCards.filter(
    ({ createdBy }) => createdBy === userDetails.username
  )

  const initializeCard = (sectionKey) => {
    dispatch({
      type: RETROSPECTIVE_CARDS_DISPATCH_ACTION_TYPE.INITIALIZE_CARD,
      payload: {
        // can use UUID library or something else as well
        cardId: crypto.randomUUID(),
        text: '',
        upvotedBy: [],
        createdBy: userDetails.username,
        section: sectionKey,
        newCard: true,
      },
    })
  }

  const editCard = (text, cardId) => {
    dispatch({
      type: RETROSPECTIVE_CARDS_DISPATCH_ACTION_TYPE.EDIT_CARD,
      payload: { text, cardId },
    })
  }

  const deleteCard = (cardId) => {
    dispatch({
      type: RETROSPECTIVE_CARDS_DISPATCH_ACTION_TYPE.DELETE_CARD,
      payload: { cardId },
    })
  }

  const upvoteCard = (cardId) => {
    dispatch({
      type: RETROSPECTIVE_CARDS_DISPATCH_ACTION_TYPE.UPVOTE_CARD,
      payload: { cardId, upvotedBy: userDetails.username },
    })
  }

  return {
    allRetrospectiveCards,
    allCardsCreatedByTheUser,
    initializeCard,
    editCard,
    deleteCard,
    upvoteCard,
  }
}

export default useRetrospectiveCards
