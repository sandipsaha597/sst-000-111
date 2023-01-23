import produce from 'immer'

export const RETROSPECTIVE_CARD_SECTION = {
  WHAT_WENT_WELL: 'WHAT_WENT_WELL',
  WHAT_CAN_BE_IMPROVED: 'WHAT_CAN_BE_IMPROVED',
  START_DOING: 'START_DOING',
  ACTION_ITEMS: 'ACTION_ITEMS',
}

const INITIALIZE_CARD = 'INITIALIZE_CARD'
const EDIT_CARD = 'EDIT_CARD'
const UPVOTE_CARD = 'UPVOTE_CARD'
const DELETE_CARD = 'DELETE_CARD'
const DISCARD_UNSAVED_CARDS = 'DISCARD_UNSAVED_CARD'

export const RETROSPECTIVE_CARDS_DISPATCH_ACTION_TYPE = {
  INITIALIZE_CARD,
  UPVOTE_CARD,
  EDIT_CARD,
  DELETE_CARD,
  DISCARD_UNSAVED_CARDS,
}

const initialState = {
  retrospectiveCards: [],
}

const retrospectiveCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_CARD:
      return produce(state, (draft) => {
        draft.retrospectiveCards.unshift(action.payload)
      })

    case UPVOTE_CARD:
      return produce(state, (draft) => {
        const cardToUpvote = draft.retrospectiveCards.find(
          (card) => card.cardId === action.payload.cardId
        )
        const currentUser = action.payload.upvotedBy
        const upvotedByUser = cardToUpvote.upvotedBy.includes(currentUser)
        if (upvotedByUser) {
          cardToUpvote.upvotedBy = cardToUpvote.upvotedBy.filter(
            (username) => username !== currentUser
          )
        } else {
          cardToUpvote.upvotedBy.push(currentUser)
        }
      })

    case EDIT_CARD:
      return produce(state, (draft) => {
        const cardToEdit = draft.retrospectiveCards.find(
          (card) => card.cardId === action.payload.cardId
        )
        cardToEdit.text = action.payload.text
        cardToEdit.newCard = false
      })

    case DELETE_CARD:
      return produce(state, (draft) => {
        const filteredCards = draft.retrospectiveCards.filter(
          (card) => card.cardId !== action.payload.cardId
        )
        draft.retrospectiveCards = filteredCards
      })
    case DISCARD_UNSAVED_CARDS:
      return produce(state, (draft) => {
        const filteredCards = draft.retrospectiveCards.filter(
          (card) => card.newCard !== true
        )
        draft.retrospectiveCards = filteredCards
      })
    default:
      return state
  }
}

export default retrospectiveCardsReducer
