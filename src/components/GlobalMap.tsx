import React, { useEffect, useState } from "react";
import { getData } from "country-list";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { Container } from "@chakra-ui/react";

const handleClick = () => {
  console.log("Click");
};

const GlobalMap = () => {
  const [countriesData, setContriesData] = useState({});

  useEffect(() => {
    let countries: any = {};
    getData().map((country) => {
      countries[country.code] = Math.floor(Math.random() * (100 - 1) + 1);
    });
    setContriesData(countries);
  }, []);
  console.log(countriesData);

  return (
    <Container>
      <VectorMap
        map={worldMill}
        backgroundColor="transparent"
        zoomOnScroll={false}
        onRegionClick={handleClick}
        style={{ height: "100vh", width: "100%" }}
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
          markers: [{ attribute: "r" }],
          regions: [
            {
              attribute: "fill",
              values: countriesData,
              // scale: ["green", "red"] as any,

              scale: {
                20: "red",
                AUS: "#E5D1F9",
              },
              normalizeFunction: "polynomial",
            },
          ],
        }}
      />
    </Container>
  );
};

export default GlobalMap;
