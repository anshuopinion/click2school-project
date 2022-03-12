import React, { useEffect, useState } from "react";
import { getData } from "country-list";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

const handleClick = () => {
  console.log("Click");
};

const GlobalMap = () => {
  const [countryCodeStateObj, setCountryCodeObj] = useState({});

  return (
    <div>
      <div className="map-container">
        <h2 className="map-header">
          Confirmed cases of Coronavirus (COVID-19)
        </h2>
        <VectorMap
          map={worldMill}
          backgroundColor="transparent"
          zoomOnScroll={false}
          onRegionClick={handleClick}
          //   containerClassName="map"
          style={{}}
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              fillOpacity: 0.9,
              stroke: "none",
              strokeWidth: 0,
              strokeOpacity: 0,
              cursor: "pointer",
            },
            hover: {
              fillOpacity: 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#212121",
              stroke: "#212121",
              strokeWidth: 1,
            },
            selectedHover: {
              fillOpacity: 0.8,
            },
          }}
          regionsSelectable={true}
          series={{
            regions: [
              {
                attribute: "",
                values: countryCodeStateObj,
                // scale: ["#5606A5", "#E5D1F9"],
                scale: {
                  main: "#5606A5",
                  second: "#E5D1F9",
                },
                normalizeFunction: "polynomial",
              },
            ],
          }}
        />
        <div className="legend-title">Confirmed cases (thousands)</div>
        <div className="legend">
          <div className="level-1"></div>
          <div className="level-2"></div>
          <div className="level-3"></div>
          <div className="level-4"></div>
          <div className="level-5"></div>

          <div className="scale">0 - 24</div>
          <div className="scale">25 - 49</div>
          <div className="scale">50 - 74</div>
          <div className="scale">75 - 999 </div>
          <div className="scale">1,000 +</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMap;
