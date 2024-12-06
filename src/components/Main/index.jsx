import React from "react";

function Main() {
  let datas = [
    {
      id: 1,
      img: <img src="/img1.png" alt="" />,
      userImg: <img src="/ava1.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 2,
      img: <img src="/img2.png" alt="" />,
      userImg: <img src="/ava2.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 3,
      img: <img src="/img3.png" alt="" />,
      userImg: <img src="/ava3.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 4,
      img: <img src="/img4.png" alt="" />,
      userImg: <img src="/ava4.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 5,
      img: <img src="/img5.png" alt="" />,
      userImg: <img src="/ava1.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 6,
      img: <img src="/img6.png" alt="" />,
      userImg: <img src="/ava2.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 7,
      img: <img src="/img7.png" alt="" />,
      userImg: <img src="/ava3.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 8,
      img: <img src="/img8.png" alt="" />,
      userImg: <img src="/ava4.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 9,
      img: <img src="/img9.png" alt="" />,
      userImg: <img src="/ava1.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 10,
      img: <img src="/img10.png" alt="" />,
      userImg: <img src="/ava2.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 11,
      img: <img src="/img11.png" alt="" />,
      userImg: <img src="/ava3.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
    {
      id: 12,
      img: <img src="/img12.png" alt="" />,
      userImg: <img src="/ava4.png" alt="" />,
      userinfo: "Lorem Ipsum is simply dummy text of the printing",
      chanelName: "LOREM IPSUM",
      seen: "156 Görüntüleme",
      posted: "4 Dakika önce",
    },
  ];

  return (
    <div className="text-white grid grid-cols-4 gap-4">
      {datas.map((data) => (
        <div className="card" key={data.id}>
          <div>{data.img}</div>
          <div className="flex gap-3 pt-3">
            <div> {data.userImg}</div>
            <div>
              <h3 className="font-normal text-base leading-[22px]">
                {data.userinfo}
              </h3>
              <p className="font-normal text-sm leading-[18px] text-[#a3a3a3]">
                {data.chanelName}
              </p>
              <div className="flex gap-4">
                <p className="font-normal text-sm leading-[18px] text-[#a3a3a3]">{data.seen}</p>
                <p className="font-normal text-sm leading-[18px] text-[#a3a3a3]">{data.posted}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
