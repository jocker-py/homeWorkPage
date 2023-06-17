const SET_THEME_ID = "SET_THEME_ID";

type SetThemeIdType = {
  type: typeof SET_THEME_ID,
  id: number
};

type ThemeActionsType = SetThemeIdType;

export type ThemeStateType = {
  themeId: number
};

const initState: ThemeStateType = {
  themeId: 1,
};

type ThemeReducerType = (state: ThemeStateType, action: ThemeActionsType) => ThemeStateType;
export const themeReducer: ThemeReducerType = (state = initState, action) => {
  switch (action.type) {
    // дописать
    case SET_THEME_ID:
      return {
        ...state,
        themeId: action.id,
      };
    default:
      return state;
  }
};


export const changeThemeId = (id: number): SetThemeIdType => ({type: SET_THEME_ID, id});
