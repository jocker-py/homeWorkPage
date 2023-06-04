export type LoadingStateType = { isLoading: boolean }

const initState: LoadingStateType = {isLoading: false};

type LoadingReducerType = (state: LoadingStateType, action: ActionType) => LoadingStateType
export const loadingReducer: LoadingReducerType = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_LOADING":
      return {...state, isLoading: action.isLoading};
    default:
      return state;
  }
};

type LoadingActionType = {
  type: "CHANGE_LOADING"
  isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: "CHANGE_LOADING",
  isLoading,
});

type ActionType = ReturnType<typeof loadingAC>;