import ImgLogo from "../assets/logo.svg";
import ImgRoom_1 from "../assets/room-1.png";
import ImgRoom_2 from "../assets/room-2.png";
import ImgRoom_3 from "../assets/room-3.png";
import ImgRoom_4 from "../assets/room-4.png";
import ImgRoom_5 from "../assets/room-5.png";
import ImgRoom_6 from "../assets/room-6.png";

const data = [
  { name: "Single Room", img: ImgRoom_1 },
  { name: "Double Room", img: ImgRoom_2 },
  { name: "Single Room", img: ImgRoom_3 },
  { name: "Double Room", img: ImgRoom_4 },
  { name: "Double Room", img: ImgRoom_5 },
  { name: "Double Room", img: ImgRoom_6 },
];

function Home() {
  return (
    <section className="homepage flex justify-center items-center h-[100vh] font-sans">
      <div className="flex justify-between gap-x-[134px]">
        <div className="flex flex-col justify-between items-end">
          <img src={ImgLogo} alt="logo" />
          <div className="text-white text-xs">
            <h2>好室旅店。HOUSE HOTEL</h2>
            <p className="mt-4 font-light">
              花蓮縣花蓮市國聯一路1號 <br />
              03-8321155 <br />
              HOUSE@HOTEL.COM <br />
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap w-[825px]">
          {data.map(({ name, img }, index) => (
            <li key={`${index}-name`}>
              <a
                href="#"
                className="card-home relative flex justify-center items-center"
              >
                <img src={img} alt={`room-${index + 1}`} />
                <div className="card-home__title absolute flex justify-center items-center w-full h-full bg-[rgba(56,71,11,0.6)] opacity-0">
                  <h3 className="text-white text-lg font-light">{name}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
