import {alertNotification} from "../../redux/action/settings";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function AlertNotification() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const onSubmit = (n, v) => {

        dispatch(alertNotification({
            key: n, value: (v) ? 1 : 0
        })).then((r) => {
            console.log(r)
        });
    }

    return (<div>
        <div className="">
            <div className="card card-outline-secondary">
                <div className="card-header">
                    <h3 className=" mb-0 ">Alert & notification</h3>
                </div>
                <form>
                    <div className="p-3">
                        <div className="alert-notification-setting">
                            <p>Dashboard Notification</p>
                            <div className="switch_box box_1">
                                <input
                                    type="checkbox"
                                    className="switch"
                                    defaultChecked="false"
                                    name="dashboard_notification"
                                    onChange={(e) => {
                                        onSubmit(e.target.name, e.target.checked)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="alert-notification-setting pt-3">
                            <p>Sound</p>
                            <div className="switch_box box_1">
                                <input
                                    type="checkbox"
                                    className="switch"
                                    name="sound"
                                    onChange={(e) => {
                                        onSubmit(e.target.name, e.target.checked)
                                    }}
                                />
                            </div>
                        </div>

                        <h4>Language</h4>
                        <hr/>
                        <div className="alert-notification-setting pt-3">
                            <p>English(USA)</p>
                            <div className="switch_box box_1">
                                <input
                                    type="checkbox"
                                    className="switch"
                                    name="english_usa"
                                    onChange={(e) => {
                                        onSubmit(e.target.name, e.target.checked)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="alert-notification-setting pt-3">
                            <p>English(Uk)</p>
                            <div className="switch_box box_1">
                                <input
                                    type="checkbox"
                                    className="switch"
                                    name="english_uk"
                                    onChange={(e) => {
                                        onSubmit(e.target.name, e.target.checked)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}
