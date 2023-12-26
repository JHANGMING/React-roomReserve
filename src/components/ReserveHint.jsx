import ImgSurvey from "../assets/icons/icon-survey.svg";
import ImgCancel from "../assets/icons/icon-cancel.svg";

function ReserveHint() {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[rgba(255,255,255,0.5)]">
      <div className="flex flex-col justify-center items-center grow max-w-[1110px] p-9 bg-room-primaryGreen text-white text-center">
        <div className="relative flex justify-center mt-[72px]">
          <img className="relative" src={ImgSurvey} alt="survey" />
          <img
            className="absolute bottom-12 w-9 h-9"
            src={ImgCancel}
            alt="fail"
          />
        </div>
        <h2 className="mt-[42px] text-[50px] font-medium">預約失敗</h2>
        <p className="mt-[42px] mb-[68px] font-light">
          哎呀！晚了一步！您預約的日期已經被預約走了，
          <br />
          再看看其它房型吧
        </p>
      </div>
    </div>
  );
}

export default ReserveHint;
