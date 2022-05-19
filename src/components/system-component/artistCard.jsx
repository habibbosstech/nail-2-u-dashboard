import React, {Component, useState} from "react";
import apic from "../users/artists/a.png";
import trash from "../users/artists/trash.png";
import p from "../users/artists/g.jpg";
import s from "../users/artists/s.png";
import {Link} from "react-router-dom";
import StarRating from 'react-bootstrap-star-rating';
import SpinnerLoader from "../loaders/Spiner";
import {deleteArtist} from "../../redux/action/artists";
import {useDispatch} from "react-redux";

const ArtistCard = (props) => {
    const [deleteArtistLoader, setDeleteArtistLoader] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteArtist = (id) => (event) => {
        setDeleteArtistLoader(true)
        dispatch(deleteArtist({id: id}));
        setDeleteArtistLoader(false)
    }

    return (
        <div className="card m-4 artistlist">
            <img className="card-img-top" src={apic} alt="Card"/>
            <span className="toptrash">
                {
                    (deleteArtistLoader) ?
                        <SpinnerLoader/>
                        : <img src={trash} onClick={handleDeleteArtist(props.artistId)}/>
                }
                </span>
            <div className="card-body artist">
                <img src={props.profileImage}
                     onError={({currentTarget}) => {
                         currentTarget.onerror = null;
                         currentTarget.src = s;
                     }}
                     className="artist-profile"/>

                <p className="card-title text-center mt-3 artist-name">
                    {props.username}
                </p>
                <span className="arating mb-2">
                        <StarRating
                            defaultValue={props.rating}/>

                    </span>
                <p className="card-text artist-dec ">
                    Expert in Acrylic and French Manicure
                </p>
                <span>Jobs Done</span>
                <span className="float-right">Working Since</span>
                <br/>
                <span className="ml-4 num">{props.bookingsCount}</span>
                <span className="float-right num mr-5">{props.workingSince}</span>
                <p className="text-center para">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>{props.phoneNo}</span>
                </p>

                <Link
                    to="/dashboard/artists/artist-profile"
                    className="btn btn-artist-info "
                >
                    View More
                </Link>
            </div>
        </div>
    );
}


export default ArtistCard;