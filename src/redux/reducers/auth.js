const loginReducer = (state = "", action) => {

    switch (action.type) {

        case "SUCCESS_LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
                token: action.token,
                errors: {},
            }

        case "INVALID_CREDENTIALS":
            return {
                ...state,
                isAuthenticated: false,
                errors: action.errors,
            }

        default:
            return state;
    }

}

export default loginReducer;