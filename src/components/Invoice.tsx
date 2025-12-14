import MainLogo from "../shared/MainLogo";
import qr from "../assets/qr.png";

function Invoice() {
  return (
    <div className="w-[350px] bg-white p-5 rounded-xl text-[#111]">
      <div className="flex justify-center">
        <MainLogo />
      </div>

      <p className="font-semibold text-[13px] text-center mt-1">
        MUST Medicine Ceremony F-2025-2026
      </p>

      <div className="dashed-line"></div>

      <div className="grid grid-cols-[100px_1fr] items-start">
        <h3 className="font-medium text-[13px]">Venue</h3>
        <p className="font-semibold text-[13px]">MUST Opera House</p>
      </div>

      <div className="dashed-line"></div>

      <div className="grid grid-cols-[100px_1fr] items-start">
        <h3 className="font-medium text-[13px]">DATE & TIME</h3>
        <p className="font-semibold text-[13px]">
          Wednesday 23 July 2025 12:00
        </p>
      </div>

      <div className="dashed-line"></div>

      <div className="grid grid-cols-[100px_1fr] items-start">
        <h3 className="font-medium text-[13px]">Row & Seat</h3>
        <div className="font-semibold text-[13px] text-right">
          <p>Platinum-C-5</p>
          Mohamed Ahmed Ali
        </div>
      </div>

      <div className="dashed-line"></div>

      <div className="flex justify-center items-center">
        <img src={qr} className="w-[80%]" alt="QR" />
      </div>
    </div>
  );
}

export default Invoice;
