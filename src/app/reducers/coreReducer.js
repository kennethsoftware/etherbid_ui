import { ACTION_TYPES } from '../utils/constants'
const { core } = ACTION_TYPES

const defaultState = {
  auctionService: {},
  userIsSignedIn: false,
  defaultAccount: ''
}

export default function coreReducer(state = defaultState, action) {
  const newState = { ...defaultState, ...state }

  switch(action.type) {
    case core.AUTH_ACTION:
      return { ...newState, userIsSignedIn: action.payload }
    case core.SET_CONTRACT_SERVICE:
      return { ...newState, auctionService: action.payload }
    case core.SET_DEFAULT_ACCOUNT:
      return { ...newState, defaultAccount: action.payload }
    default:
      return newState;
  }
}
