import * as Types from 'constants/actionTypes';
const INITIAL_STATE = {
  uploadingImage: false,
  signingUp: false,
  agentsData: null,
  loadingAgents: false,
  citiesLoading: false,
  selectedScreen: null,
  shortlistAgent: false,
  shortlistAgentData: null,
  gettingFees: false,
  getfeeData: null,
  shortlistingAgent: false,
  commonLoader: false,
  addingCard: false,
  deletingCard: false,
  gettingCards: false,
  allCards: null,
  loadingTours: false,
  activeTours: null,
  gettingChatId: false,
  gettingChat: false,
  loadingVideo: false,
  videoToken: null,
  gettingCities: false,
  availableCities: null,
  creatingRoom: false,
  roomId: null,
  chatPage: 1,
  previousChat: [],
  appStatus: true,
  gettingCompleted: false,
  completedJobs: null,
  ratingAgent: false,
  agentPage: 1,
};
function commonReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPLOAD_IMAGE_REQUEST:
      return Object.assign({}, state, {
        uploadingImage: true,
      });
    case Types.UPLOAD_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        uploadingImage: false,
      });
    case Types.UPLOAD_IMAGE_FAIL:
      return Object.assign({}, state, {
        uploadingImage: false,
      });

    case Types.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        signingUp: true,
      });
    case Types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        signingUp: false,
      });
    case Types.SIGNUP_FAIL:
      return Object.assign({}, state, {
        signingUp: false,
      });

    case Types.LOGOUT:
      return INITIAL_STATE;

    case Types.GETAGENTS_REQUEST:
      return Object.assign({}, state, {
        loadingAgents: true,
      });
    case Types.GETAGENTS_SUCCESS:
      return Object.assign({}, state, {
        loadingAgents: false,
        agentsData: action.payload,
      });

    case Types.GETAGENTS_APPEND_SUCCESS:
      return Object.assign({}, state, {
        loadingAgents: false,
        agentsData: [...state.agentsData, ...action.payload],
        agentPage: action.page_no,
      });

    case Types.GETAGENTS_FAIL:
      return Object.assign({}, state, {
        loadingAgents: false,
      });

    case Types.LOADER_REQUEST:
      return Object.assign({}, state, {
        commonLoader: true,
      });
    case Types.LOADER_SUCCESS:
      return Object.assign({}, state, {
        commonLoader: false,
      });
    case Types.LOADER_FAIL:
      return Object.assign({}, state, {
        commonLoader: false,
      });

    case Types.ADD_CARD_REQUEST:
      return Object.assign({}, state, {
        addingCard: true,
      });
    case Types.ADD_CARD_SUCCESS:
      return Object.assign({}, state, {
        addingCard: false,
      });
    case Types.ADD_CARD_FAIL:
      return Object.assign({}, state, {
        addingCard: false,
      });

    case Types.GET_CHAT_TOKEN_REQUEST:
      return Object.assign({}, state, {
        loadingVideo: true,
      });
    case Types.GET_CHAT_TOKEN_SUCCESS:
      return Object.assign({}, state, {
        loadingVideo: false,
        videoToken: action.payload,
      });
    case Types.GET_CHAT_TOKEN_FAIL:
      return Object.assign({}, state, {
        loadingVideo: false,
      });

    case Types.CREATE_ROOM_REQUEST:
      return Object.assign({}, state, {
        creatingRoom: true,
      });
    case Types.CREATE_ROOM_SUCCESS:
      return Object.assign({}, state, {
        creatingRoom: false,
        roomId: action.payload,
      });
    case Types.CREATE_ROOM_FAIL:
      return Object.assign({}, state, {
        creatingRoom: false,
      });

    case Types.DELETE_CARD_REQUEST:
      return Object.assign({}, state, {
        deletingCard: true,
      });
    case Types.DELETE_CARD_SUCCESS:
      return Object.assign({}, state, {
        deletingCard: false,
      });
    case Types.DELETE_CARD_FAIL:
      return Object.assign({}, state, {
        deletingCard: false,
      });

    case Types.GET_CARDS_REQUEST:
      return Object.assign({}, state, {
        gettingCards: true,
      });
    case Types.GET_CARDS_SUCCESS:
      return Object.assign({}, state, {
        gettingCards: false,
        allCards: action.payload,
      });
    case Types.GET_CARDS_FAIL:
      return Object.assign({}, state, {
        gettingCards: false,
      });

    case Types.GET_ACTIVE_TOURS_REQUEST:
      return Object.assign({}, state, {
        loadingTours: true,
      });
    case Types.GET_ACTIVE_TOURS_SUCCESS:
      return Object.assign({}, state, {
        loadingTours: false,
        activeTours: action.payload,
      });
    case Types.GET_ACTIVE_TOURS_FAIL:
      return Object.assign({}, state, {
        loadingTours: false,
      });

    case Types.GET_SHORTLIST_AGENTS_REQUEST:
      return Object.assign({}, state, {
        shortlistingAgent: true,
      });
    case Types.GET_SHORTLIST_AGENTS_SUCCESS:
      return Object.assign({}, state, {
        shortlistingAgent: false,
        shortlistAgentData: action.payload,
      });
    case Types.GET_SHORTLIST_AGENTS_FAIL:
      return Object.assign({}, state, {
        shortlistingAgent: false,
      });
    case Types.GET_FEE_REQUEST:
      return Object.assign({}, state, {
        gettingFees: true,
      });
    case Types.GET_FEE_SUCCESS:
      return Object.assign({}, state, {
        gettingFees: false,
        getfeeData: action.payload,
      });
    case Types.GET_FEE_FAIL:
      return Object.assign({}, state, {
        gettingFees: false,
      });

    case Types.SHORTLIST_AGENT_REQUEST:
      return Object.assign({}, state, {
        shortlistingAgent: true,
      });
    case Types.SHORTLIST_AGENT_SUCCESS:
      return Object.assign({}, state, {
        shortlistingAgent: false,
      });
    case Types.SHORTLIST_AGENT_FAIL:
      return Object.assign({}, state, {
        shortlistingAgent: false,
      });

    case Types.GET_CHAT_ID_REQUEST:
      return Object.assign({}, state, {
        gettingChatId: true,
      });
    case Types.GET_CHAT_ID_SUCCESS:
      return Object.assign({}, state, {
        gettingChatId: false,
      });
    case Types.GET_CHAT_ID_FAIL:
      return Object.assign({}, state, {
        gettingChatId: false,
      });

    case Types.GET_COMPLETED_REQUEST:
      return Object.assign({}, state, {
        gettingCompleted: true,
      });
    case Types.GET_COMPLETED_SUCCESS:
      return Object.assign({}, state, {
        gettingCompleted: false,
        completedJobs: action.payload,
      });
    case Types.GET_COMPLETED_FAIL:
      return Object.assign({}, state, {
        gettingCompleted: false,
      });

    case Types.GET_PREV_CHAT_REQUEST:
      return Object.assign({}, state, {
        gettingChat: true,
      });
    case Types.GET_PREV_CHAT_SUCCESS:
      return Object.assign({}, state, {
        gettingChat: false,
        previousChat: action.payload,
      });

    case Types.GET_PREV_CHAT_APPEND_SUCCESS:
      return Object.assign({}, state, {
        previousChat: [...state.previousChat, ...action.payload],
        chatPage: action.page_no,
      });

    case Types.GET_PREV_CHAT_FAIL:
      return Object.assign({}, state, {
        gettingChat: false,
      });

    case Types.GET_AVAILABLE_CITIES_REQUEST:
      return Object.assign({}, state, {
        gettingCities: true,
      });
    case Types.GET_AVAILABLE_CITIES_SUCCESS:
      return Object.assign({}, state, {
        gettingCities: false,
        availableCities: action.payload,
      });
    case Types.GET_AVAILABLE_CITIES_FAIL:
      return Object.assign({}, state, {
        gettingCities: false,
      });

    case Types.RATING_REQUEST:
      return Object.assign({}, state, {
        ratingAgent: true,
      });
    case Types.RATING_SUCCESS:
      return Object.assign({}, state, {
        ratingAgent: false,
      });
    case Types.RATING_FAIL:
      return Object.assign({}, state, {
        ratingAgent: false,
      });

    case Types.SAVE_CITY:
      return Object.assign({}, state, {
        selectedCity: action.payload,
      });

    case Types.SCREEN_NAME:
      return Object.assign({}, state, {
        selectedScreen: action.payload,
      });

    case Types.APP_ACTIVE_STATUS:
      return Object.assign({}, state, {
        appStatus: action.payload,
      });

    default:
      return state;
  }
}
export default commonReducer;
