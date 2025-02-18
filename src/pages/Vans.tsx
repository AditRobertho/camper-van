import { useEffect, useState } from "react";
import { VansType } from "../utils/type";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState<VansType[]>([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <>
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </>
  );
}
