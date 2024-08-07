import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletePermission } from "../api/apiCalls";

const PermissionCard = ({ permission }) => {

    const { statuses } = useSelector((store) => ({
        statuses: store.statuses
    }));

    const onClickDelete = async () => {
        try {
            await deletePermission(permission.id);
            window.location.reload();
        } catch(error) {

        }
    }

    let cardType = (
        <div id="permission-card">
            <div className="card h-100 border rounded-3 shadow my-card">
                <Link to={`/profile/${permission.email}`} className="card-link nav-link">
                    <div className="card-body">
                        <h5 className="card-title">{permission.firstName} {permission.lastName} {"("}{permission.email}{")"}</h5>
                        <hr className="my-2" />
                        <p className="card-text mb-2"><span className="fw-bold">Departman:</span> {permission.department} </p>
                        <p className="card-text"><span className="fw-bold">İzin Nedeni:</span> {permission.description}</p>
                        <p className="card-text mb-3 text-muted fst-italic"><span className="fw-bold">İzin Alınan Gün Sayısı:</span> {permission.numberOfDays}</p>
                        <p className="card-text"><span className="fw-bold">Tarih:</span> {permission.startDate} - {permission.endDate}</p>
                        <button className="btn btn-success">Görüntüle</button>
                        {statuses === "ADMIN" &&
                            <div className="d-inline">
                                <Link to={`/permission/update/${permission.id}`} className="btn btn-warning ms-2">Güncelle</Link>
                                <Link className="btn btn-danger ms-2" onClick={onClickDelete}>Sil</Link>
                            </div>
                        }
                    </div>
                </Link>
            </div>
        </div>
        
    )

    return(
            <div className={`mb-4 card-padding card-for-permission col-md-4`}>
                {cardType}
            </div>
    );
}

export default PermissionCard;