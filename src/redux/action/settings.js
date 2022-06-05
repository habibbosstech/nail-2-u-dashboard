import {Post, SetHeader} from "../api";
import AlertMessage from "../../components/alerts";
import {UPDATE_SETTING} from "./types";

export const generalSetting = (payload) => (dispatch) => {

    SetHeader();
    return Post('/settings/general-setting', payload).then(res => {
        if (res.data._metadata.httpResponseCode === 200) {
            AlertMessage('success', res.data._metadata.message);
            return res;
        } else {
            AlertMessage('error', res.data._metadata.message);
        }
    })

    return payload;
}

export const alertNotification = (payload) => (dispatch) => {

    SetHeader();
    return Post('/settings/notifications-setting', payload).then(res => {
        if (res.data._metadata.httpResponseCode === 200) {
            dispatch({
                type: UPDATE_SETTING, settings: res.data.records
            })
            AlertMessage('success', res.data._metadata.message);
            return res;
        } else {
            AlertMessage('error', res.data._metadata.message);
        }
    })

    return payload;
}