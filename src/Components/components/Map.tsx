import { useState } from "react";
import Image from "next/image";

// import GoogleMapReact from "google-map-react";
import { BiSearch } from "react-icons/bi";
// import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
// npm i --save-dev @types/google-map-react
type MapProps = {
  apiKey: string;
};

const map = ({ apiKey }: MapProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, bottom: 0, right: 0 }}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          defaultZoom={12}
        /> */}

        <form
          onSubmit={handleSearch}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
          className="input-search"
        >
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search to find address"
          />
          <span style={{ marginLeft: "-36px", fontSize: "21px" }}>
            <BiSearch />
          </span>

          {/* <BiSearch style={{ marginLeft: "-36px", fontSize: "20px" }} /> */}
          {/* <div className="datalist">
<DatalistInput placeholder="Chocolate"
    onSelect={(item) => console.log(item.value)}
    items={[
      { id: 'Chocolate', value: 'Chocolate' },
      { id: 'Coconut', value: 'Coconut' },
      { id: 'Mint', value: 'Mint' },
      { id: 'Strawberry', value: 'Strawberry' },
      { id: 'Vanilla', value: 'Vanilla' },
    ]}
  />
</div> */}

          <button type="submit" className="skip-button">
            Skip
          </button>
        </form>
      </div>
    </>
  );
};

export default map;
