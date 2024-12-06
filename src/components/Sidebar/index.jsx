import React from "react";

function Sidebar() {
  let infos = [
    {
      id: 1,
      icon: <img src="/icon1.svg" alt="" />,
      name: "Anasayfa",
    },
    {
      id: 2,
      icon: <img src="/icon5.png" alt="" />,
      name: "Keşfet",
    },
    {
      id: 3,
      icon: <img src="/icon2.svg" alt="" />,
      name: "Abonelikler",
    },
  ];
  return (
    <div>
      {infos.map((info) => {
        <div className="item" key={info.id}>
          {info.icon}
          <p>{info.name}</p>
        </div>;
      })}
    </div>
  );
}

export default Sidebar;
