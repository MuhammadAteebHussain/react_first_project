import axios from 'axios'
import React, { useState } from 'react'


export default function FilmRegisterForm() {

    const [params, setParamsState] = useState({
        name: '', photo: '', description: '', release_date: '', rating: '', country: '', genre_id: ''
    })
    const [photoState, setPhotoState] = useState({ photo: '' });

    const onChangeHandler = (e) => {
        setParamsState({ ...params, [e.target.name]: e.target.value })
        // setPhotoState(e.target.file[0]);
        // setParamsState({ ...params, [photo]:photoState })

    }

    const onChangeImageHandler = (e) => {
        setPhotoState({ photo: e.target.files[0] });
    }


    const registerFilm = (e) => {
        e.preventDefault()
        let formData = new FormData();         
        console.log(photoState);
        // setParamsState({ ...params, photoState})

        formData.append('name', params.name)
        formData.append('film_slug', params.film_slug)
        formData.append('release_date', params.release_date)
        formData.append('ticket_price', params.ticket_price)
        formData.append('country', params.country)
        formData.append('genre_id', params.genre_id)
        formData.append('description', params.description)
        formData.append('photo', photoState.photo)


        // setParamsState({photo: e.target.files[0]})

        const param = params;
        console.log(param);
        // console.log(typeof photoState);
        axios({
            url: "http://127.0.0.1:9084/api/film/store",
            method: "POST",
            data: formData,
            headers: {
                Authorization: '',
                "Accept": "application/json",
                "Content-Type": "multipart/form-data"
            },

        }).then(function (response) {
            console.log(response.data);
            // navigate('/films');

        }).catch(function (error) {
            console.log(error);
        });


    }
    return (
        <div className='container'>
            <form>
                <h1>Add New Film</h1>
                <div className="row mb-4">

                    <div className="col">

                        <div className="form-outline">
                            <input type="text" id="film_name" className="form-control" name='name' onChange={onChangeHandler} />
                            <label className="form-label" htmlFor="film_name">Name</label>
                        </div>

                        <div className="form-outline">
                            <input type="text" id="film_name" className="form-control" name='film_slug' onChange={onChangeHandler} />
                            <label className="form-label" htmlFor="film_slug">Film Slug</label>
                        </div>



                        <div className="form-outline">
                            <input className="form-control" type="file" id="photo" name='photo' onChange={onChangeImageHandler} />
                            <label className="form-label" htmlFor="photo">Cover Photo</label>
                        </div>

                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <textarea className="form-control" id="description" rows="4" name='description' onChange={onChangeHandler}></textarea>
                            <label className="form-label" htmlFor="description">Description</label>
                        </div>
                    </div>
                </div>


                <div className="row mb-4">
                    <div className="col-md-5">
                        <div className="form-outline">
                            <input type="date" id="release_date" className="form-control" name='release_date' onChange={onChangeHandler} />
                            <label className="form-label" htmlFor="release_date">Release Date</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example4" className="form-control" name='rating' onChange={onChangeHandler} />
                            <label className="form-label" htmlFor="rating">Rating</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="form-outline">
                            <input type="text" id="form6Example4" className="form-control" name='ticket_price' onChange={onChangeHandler} />
                            <label className="form-label" htmlFor="ticker_price">Ticket Price</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-outline">
                            <input type="text" id="form6Example4" className="form-control" name='country' onChange={onChangeHandler} />
                            <label className="form-label" htmlFor="country">Country</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-outline">
                            <input type="text" id="form6Example4" className="form-control" name='genre_id' onChange={onChangeHandler} />
                            <label className="form-label" htmlFor="form6Example4">Film Genre</label>
                        </div>
                    </div>

                </div>



                <button type="button" className="btn btn-primary btn-block mb-4" onClick={registerFilm}>Register</button>
            </form>
        </div>
    )
}
