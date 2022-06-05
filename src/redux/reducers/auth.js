const loginReducer = (state = "", action) => {
    console.log(action.settings)
    switch (action.type) {

        case "SUCCESS_LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
                settings: action.setting,
                token: action.token,
                errors: {},
            }

        case "INVALID_CREDENTIALS":
            return {
                ...state,
                isAuthenticated: false,
                errors: action.errors,
            }

        case "UPDATE_SETTING":
            return {
                ...state,
                settings: action.settings,
            }

        default:
            return state;
    }

}

export default loginReducer;