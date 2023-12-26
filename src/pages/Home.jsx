import ImgLogo from "../assets/logo.svg";
import ImgRoom_1 from "../assets/room-1.png";
import ImgRoom_2 from "../assets/room-2.png";
import ImgRoom_3 from "../assets/room-3.png";
import ImgRoom_4 from "../assets/room-4.png";
import ImgRoom_5 from "../assets/room-5.png";
import ImgRoom_6 from "../assets/room-6.png";

function Home() {
  return (
    <section className="homepage flex justify-center items-center h-[100vh]">
      <div className="flex justify-between gap-[134px]">
        <div className="flex flex-col justify-between text-white">
          <img src={ImgLogo} alt="logo" />
          <div>
            <h2>好室旅店。HOUSE HOTEL</h2>
            <p>
              花蓮縣花蓮市國聯一路1號 <br />
              03-8321155 <br />
              HOUSE@HOTEL.COM <br />
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap w-[825px]">
          <li className="w-[1/3]">
            <img src={ImgRoom_1} alt="room-1" />
          </li>
          <li className="w-[1/3]">
            <img src={ImgRoom_2} alt="room-2" />
          </li>
          <li className="w-[1/3]">
            <img src={ImgRoom_3} alt="room-3" />
          </li>
          <li className="w-[1/3]">
            <img src={ImgRoom_4} alt="room-4" />
          </li>
          <li className="w-[1/3]">
            <img src={ImgRoom_5} alt="room-5" />
          </li>
          <li className="w-[1/3]">
            <img src={ImgRoom_6} alt="room-6" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
