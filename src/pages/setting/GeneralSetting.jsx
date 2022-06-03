import React from "react";
import {useForm} from "react-hook-form";

export default function GeneralSetting() {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data,e) => console.log(data);


    return (
        <div>
            <div className="">
                <div className="card card-outline-secondary">
                    <div className="card-header">
                        <h3 className=" mb-0 ">General Settings</h3>
                    </div>
                    <div className="p-3 general-setting-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label htmlFor="payableAmount">Email Address</label>
                                    <div
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <input
                                            type="email"
                                            className="form-control "
                                            id="PayableAmount"
                                            placeholder="tinafox@gmail.com"
                                            {...register("email", {required: true, maxLength: 20})}
                                        />
                                    </div>
                                    <div className="validation-error">
                                        {errors.email && errors.email.type==="required" && "Email is required"}
                                        {errors.email && errors.email.type==="maxLength" && "Max length is 20"}
                                    </div>
                                </div>
                            </div>

                            <div className="form-row pt-4">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputsender">Current Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputpassword"
                                        placeholder="......."
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputsender">New Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputnewpassword"
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputreciever">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputconfirm"
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <button className="btn ml-4 update-btn">update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}