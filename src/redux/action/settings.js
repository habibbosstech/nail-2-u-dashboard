import {Post, SetHeader} from "../api";
import AlertMessage from "../../components/alerts";

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