import {Get, SetHeader} from "../api";
import AlertMessage from "../../components/alerts";

export const getAllAdminRaw = () => (dispatch) => {
    SetHeader();
    return Get('/admins/all').then(res => {

        if (res.data._metadata.httpResponseCode === 200) {
            AlertMessage('success', res.data._metadata.message);
            return res;
        } else {
            AlertMessage('error', res.data._metadata.message);
        }
    })
}
