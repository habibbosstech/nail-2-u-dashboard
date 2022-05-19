import {
    INVALID_CREDENTIALS, SUCCESS_LOGIN
} from "./types";
import {Post} from "../api";

export const login = (payload) => (dispatch) => {

    return Post('/auth/login', payload).then(res => {

        if (res.data._metadata.httpResponseCode === 401) {
            dispatch({
                type: INVALID_CREDENTIALS, body: {
                    email: res.data
                }
            });
        } else {
            dispatch({
                type: SUCCESS_LOGIN, user: res.data.records.user, token: res.data.records.token,
            });

        }
        return res;
    })
}
