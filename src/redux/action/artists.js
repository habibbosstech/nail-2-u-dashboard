//import {GET_ALL_ARTIST} from "./types";
import {Post, SetHeader} from "../api";
import React from "react";
import { toast } from 'react-toastify';
import { CheckmarkCircleOutline } from "react-ionicons";

export const getAllArtist = () => (dispatch) => {
    SetHeader();
    return Post('/artist/list-all', {}).then(res => {
        if (res.data._metadata.httpResponseCode === 200) {
            return res;
        } else {

        }
    })
}

export const deleteArtist = (payload) => (dispatch) => {
    SetHeader();
    return Post('/artist/delete', payload).then(res => {
        if (res.data._metadata.httpResponseCode === 200) {
            toast.success( <div>{res.data._metadata.message}
                <CheckmarkCircleOutline color={"green"} height="25px" width="25px" />
                <span style={{ fontWeight: "bold", color: "#000" }}>Success</span>
                {"  "}
                <span style={{ marginLeft: 5 }}>Default address update</span>
            </div>);
            return res;
        } else {

        }
    })
}
