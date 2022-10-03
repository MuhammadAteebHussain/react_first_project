import React from 'react'

export default function FilmRegisterForm() {
    return (
        <div className='container'>
            <form>
                <h1>Register New Film</h1>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control" />
                            <label className="form-label" htmlFor="form6Example1">Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                            <label className="form-label" htmlFor="form6Example2">Description</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-5">
                        <div className="form-outline">
                            <input type="date" id="form6Example3" className="form-control" />
                            <label className="form-label" htmlFor="form6Example3">Rlease Date</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example4" className="form-control" />
                            <label className="form-label" htmlFor="form6Example4">Rating</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="form-outline">
                            <input type="text" id="form6Example4" className="form-control" />
                            <label className="form-label" htmlFor="form6Example3">Ticket Price</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-outline">
                            <input type="text" id="form6Example4" className="form-control" />
                            <label className="form-label" htmlFor="form6Example4">Country</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-outline">
                            <input type="text" id="form6Example4" className="form-control" />
                            <label className="form-label" htmlFor="form6Example4">Film Genre</label>
                        </div>
                    </div>

                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
                    <label className="form-check-label" htmlFor="form6Example8"> Create an account? </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>
            </form>
        </div>
    )
}
