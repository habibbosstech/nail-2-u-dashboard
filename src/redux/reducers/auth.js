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

        case "WITHDRAW":
            return state + action.payload;

        default:
            return state;
    }

}

export default loginReducer;