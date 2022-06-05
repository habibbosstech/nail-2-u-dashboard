import React from "react";
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";


export default function ProfileSetting() {

    const state = useSelector((state) => state);
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <div className="">
                <div className="card card-outline-secondary">
                    <div className="card-header">
                        <h3 className=" mb-0 ">Profile Settings</h3>
                    </div>
                    <div>
                        <form style={{display: "flex"}} onSubmit={handleSubmit(onSubmit)}>
                            <div className="setting-image-profile p-3 m-3">
                                <p>Change Profile Picture</p>
                                <img src={state.auth.user.absolute_image_url} alt=""/>
                                <div className="circle-div-setting">
                                    <div className="image-upload-setting mt-3">
                                        {" "}
                                        <label htmlFor="file_upload-setting">
                                            {" "}
                                            <img src="" alt="" className="uploaded-image"/>
                                            <div className="h-100">
                                                <div className="dplay-tbl">
                                                    <div className="dplay-tbl-cell">
                                                        {" "}
                                                        <i className="fa fa-camera" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <input
                                                data-required="image"
                                                type="file"
                                                name="image_name"
                                                id="file_upload"
                                                className="image-input"
                                                data-traget-resolution="image_resolution"
                                            />
                                        </label>{" "}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-row pt-4 pl-5">
                                    <div className="form-group col-md-5">
                                        <label htmlFor="inputsender">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="name"
                                            defaultValue={state.auth.user.email}
                                            {...register("userName", {required: true, maxLength: 20})}
                                        />
                                        <div
                                            className="validation-error">{errors.userName && "First name is required"}</div>
                                    </div>
                                    <div className="form-group col-md-5">
                                        <label htmlFor="username">User Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="CardNumber"
                                            placeholder="username"
                                            defaultValue={state.auth.user.username}
                                        />
                                    </div>
                                </div>

                                <div className="form-row pt-4 pl-5">
                                    <div className="form-group col-md-5">
                                        <label htmlFor="inputsender">Contact</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contact"
                                            placeholder="no#"
                                            defaultValue={state.auth.user.phone_no}
                                        />
                                    </div>
                                    <div className="form-group col-md-5">
                                        <label htmlFor="username">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="address"
                                            defaultValue={(state.auth.user.address) ? "" : state.auth.user.address}
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <button className="btn btn-profile-update">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
