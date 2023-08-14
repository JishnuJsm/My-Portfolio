import React from "react";

export default function Skill({ data }) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: "transparent", color: "yellow" }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
          }}
        >
          {data.name}
          <img
            src={data.logo}
            alt={data.name.toLowerCase()}
            style={{ height: "25px" }}
          />
        </h4>

        <p
          style={{ display: "inline", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          {data.proficiency}%
        </p>
      </div>
      <div
        style={{
          width: "90%",
          height: "20px",
          backgroundColor: "lightgrey",
          borderRadius: "10px",
          display: "flex",
          alignItems: "flex-start"
        }}
      >
        <div
          style={{
            width: `${data.proficiency}%`,
            height: "20px",
            backgroundColor: data.color,
            borderRadius: "10px",
            transition: "all 2s ease-in-out",
            animation: "fillwidth",
            animationDuration: "2s",
            animationDelay: "2.5s"
          }}
        ></div>
      </div>
    </div>
  );
}
