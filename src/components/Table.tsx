import { useCallback, useEffect, useState } from "react";
import { Button } from "./Button";

export function Table() {
  // fetch 10 item from pokemon api
  const [items, setItems] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (isLoaded) {
      return;
    }
    fetch('https://pokeapi.co/api/v2/pokemon?limit=2&offset=0')
      .then(res => res.json())
      .then(data => setItems(data.results));
    setOffset((prev) => prev + 10);
    console.log("Init");
    setIsLoaded(true);
  }, []);
  const handleFetchAgain = useCallback(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=2&offset=${offset}`)
      .then(res => res.json())
      .then(data => setItems((prev) => [...prev, ...data.results]));

    setOffset((prev) => prev + 10);
  }, [offset]);
  return (<>
    <Button className="m-2" icon={<i className="ti ti-add"/>} onClick={handleFetchAgain}>Ambil Lagi</Button> 
    <table className="table table-vcenter card-table">
      <thead>
        <tr>
          <th>Nama Pokemon</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, index) => {
            return <tr key={`item ${index}`}>
              <td>{item.name}</td>
            </tr>;
          })
        }
      </tbody>
    </table></>);
}
