import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import must from "../../assets/must-logo.png";

type TabType = "visitor" | "gradute";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("gradute");
  const [qrUrl, setQrUrl] = useState<string>(""); // رابط QR الفعلي
  const { t } = useTranslation();
  const isRTL = document.documentElement.dir === "rtl";

  useEffect(() => {
    const qrData = `
Seat: Center-L-18L
Student: Guest
Event: Physical Therapy
Date: 2025-12-03
Time: 09:30 PM - 01:30 AM
`;
    const url = `https://quickchart.io/qr?text=${encodeURIComponent(
      qrData
    )}&size=400`;
    setQrUrl(url);
  }, []);

  const handleShareWhatsApp = async () => {
    if (!qrUrl) return;

    // نحول الصورة إلى Blob
    const response = await fetch(qrUrl);
    const blob = await response.blob();
    const file = new File([blob], "ticket-qr.png", { type: blob.type });

    // Web Share API
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: "Your Ticket QR",
          text: "Here is your ticket QR code 🎫",
        });
        console.log("Shared successfully!");
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      // fallback: مشاركة رابط QR على واتساب
      const message = `Here is your ticket QR code: ${qrUrl}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
    }
  };

  const handleShareEmail = () => {
    const subject = encodeURIComponent("Event Invitation");
    const body = encodeURIComponent(
      "مرحبا،\n\nحابب أشارك معاك تفاصيل الايفينت.\n\n"
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="relative md:w-[400px] w-full mx-auto mt-52 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition">
      <div className="h-28 rounded-t-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-900" />
      <div className="relative -mt-14 flex justify-center">
        <img
          src={must}
          alt="must"
          className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>
      <div className="px-6 pt-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">{"mohamed mamdouh"}</h3>
        <p className="mt-1 text-sm text-gray-500">{"MUST"}</p>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-400">
          <span className="rounded-full bg-gray-100 px-3 py-1">
            {t("id")}: <b className="text-gray-600">{'E0196545'}</b>
          </span>
        </div>
      </div>

      <div className="mt-6 px-4">
        <div className="relative flex rounded-2xl bg-gray-100 p-1">
          {[
            { key: "gradute", label: t("gradute") },
            { key: "visitor", label: t("gradute-visitor") },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabType)}
              className={`relative z-10 flex-1 rounded-xl py-2 text-sm font-medium transition ${
                activeTab === tab.key
                  ? "text-blue-700"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div
            className="absolute inset-y-1 w-[49%] rounded-xl bg-white shadow transition-transform duration-300"
            style={{
              transform:
                activeTab === "gradute"
                  ? "translateX(0%)"
                  : isRTL
                  ? "translateX(-100%)"
                  : "translateX(100%)",
            }}
          />
        </div>
      </div>

      <div className="px-6 py-5 text-sm text-gray-600">
        {activeTab === "gradute" && (
          <div className="space-y-3">
            <div className="qr-container mx-auto">
              {qrUrl && (
                <img
                  src={qrUrl}
                  alt="QR Code"
                  className="mx-auto"
                  width={200}
                  height={200}
                />
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={handleShareWhatsApp}
                type="button"
                className="!bg-green-600 hover:!bg-green-700 px-4 py-2 rounded text-white"
              >
                {t("shareWhatsApp")}
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={handleShareEmail}
                type="button"
                className="!bg-blue-600 hover:!bg-blue-700 px-4 py-2 rounded text-white"
              >
                {t("shareEmail")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
