import React from "react";

const UserCard = (props) => {

    return (
        <div className="clearfix">
            <div className="row">
                    <div className="col-md-4 animated fadeIn">
                        <div className="card">
                            <div className="card-body">
                                <div className="avatar">
                                    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" className="card-img-top" alt="...srdgfyjhgku" width="50" height="50"/>
                                </div>
                                <h5 className="card-title">
                                    {props.firstname} {props.lastname}
                                </h5>
                                <p className="card-text">
                                    {props.desc}
                                    <br />
                               
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    )
}

export default UserCard;