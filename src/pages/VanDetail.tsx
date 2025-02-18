import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VansType } from "../utils/type";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState<VansType | null>(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((req) => req.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  console.log(params);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
