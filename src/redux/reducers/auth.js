const adminReducer = (state = "", action) => {

    switch (action.type) {

        case "SUCCESS_LOGINS":
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
                settings: action.setting,
                token: action.token,
                errors: {},
            }

        default:
            return state;
    }

}

export default adminReducer;