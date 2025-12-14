import { useState } from "react";
import { useTranslation } from "react-i18next";
import must from "../../assets/must-logo.png"


type TabType = "visitor" | "gradute";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("gradute");
  const isRTL = document.documentElement.dir === "rtl";
  const { t } = useTranslation()
const handleShareWhatsApp = async () => {
  const qrData = `
Seat: Center-L-18L
Student: Guest
Event: Physical Therapy
Date: 2025-12-03
Time: 09:30 PM - 01:30 AM
`;

  // رابط QR image من QuickChart
  const qrImageUrl = `https://quickchart.io/qr?text=${encodeURIComponent(qrData)}&size=900`;

  // نحول الصورة إلى Blob
  const response = await fetch(qrImageUrl);
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
    alert("Sharing not supported on this device/browser.");
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
          alt={'must'}
          className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>
      <div className="px-6 pt-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">
          {"mohamed mamdouh"}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          {"MUST"}
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-400">
          <span className="rounded-full bg-gray-100 px-3 py-1">
            {t('id')}: <b className="text-gray-600">{'E0196545'}</b>
          </span>
        </div>
      </div>

      <div className="mt-6 px-4">
        <div className="relative flex rounded-2xl bg-gray-100 p-1">
          {[
            { key: "gradute", label: t('gradute') },
            { key: "visitor", label: t('gradute-visitor') },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabType)}
              className={`relative z-10 flex-1 rounded-xl py-2 text-sm font-medium transition
                ${activeTab === tab.key
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
              <img
                src={`data:image/png;base64,${`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`}`}
                alt="QR Code"
                className="mx-auto"
                width={200}
                height={120}
              />
            </div>
          </div>
        )}

        {activeTab === "visitor" && (
          <div className="space-y-3">
            <div className="qr-container mx-auto">
              <img
                src={`data:image/png;base64,${`iVBORw0KGgoAAAANSUhEUgAABgQAAAYEAQAAAAAK71yqAAAOmUlEQVR4nO3dbZLbOg6F4ewg+9/l3UFmaua6SOJDdirNxtypBz9ScVuiiAIJnNeUqB+//uH214/pHvyp8WDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexGDexOB/KwY/ov387xHxkL//9+9v93/CGa/T/j7j9be6+ePg/Rqv4+qu8UAMjCLzQC6STdUDNZmqoItoU+oaH2C0q5S5/p4/VqwbKHp9mzrw6m0g6/1CzbfvusYDMTCKzAO5SDZVD9RkqoIuok2pa3yA0S5SZoDbvbnjEvWy8WoqdK/F5uzGzuI/H7rGAzEwiswDuUg2VQ/UZKqCLqJNqWt8gNEGKDMtQOePC5Gr1eZwyK+Cu9c1qoNzX3ggBkaReSAXyabqgZpMVdBFtCl1jQ8w2hRlHvdt7wvI1VPJh+3MvLocuPvVVMXd7XOHPBADo8g8kItkU/VATaYq6CLalLrGBxjtmyizwuYKffePDTHXC9pHJOu9vY6W267xQAyMIvNALpJN1QM1maqgi2hT6hofYLTLlBkscPboP7lrPBADo8g8kItkU/VATaYq6CLalLrGBxjtKmVWlmA7PHLc3PrYgnq9SF3xfb6PuzYeiIFRZB7IRbKpeqAmUxV0EW1KXeMDjHaHMhNTr2ee8/3Uack5I3Jamn5V8cXJoZV2A+ca8nkgBkaReSAXyabqgZpMVdBFtCl1jQ8w2m3KbHfPDGvUYVE5ndF8TL1YXa6ev87baZ/d54EYGEXmgVwkm6oHajJVQRfRptQ1PsBo1ygzrB2nlemGmNPeYEfPglU927+ovGo7xAMxMIrMA7lINlUP1GSqgi6iTalrfIDRLlLmztnHYWnJ+vhbOK16Ajk0tff76Gh1ofQjeXKXB2JgFJkHcpFsqh6oyVQFXUSbUtf4AKNdpMwF4GGdOFwnL16nJecA0Md6crju2amnVfKDtnkgBkaReSAXyabqgZpMVdBFtCl1jQ8w2i3KrGA53DudDm6faH7aJrsF6KrQ75Cf98/mgRgYReaBXCSbqgdqMlVBF9Gm1DU+wGhXKbNaow5fBJ7eO1BtKVZtmB3OqND8uPhyrfhZgAdiYBSZB3KRbKoeqMlUBV1Em1LX+ACj3aHM6qnmF2e/I9z2zupPXyzVvPI5dS39GMADMTCKzAO5SDZVD9RkqoIuok2pa3yA0W5QZg3b64R8u3dC5HCTdgvLYVU6EHy+STtdlwdiYBSZB3KRbKoeqMlUBV1Em1LX+ACj3afM5xdBhYsdx7W3Vz9sBFbdn535fifw9zt280AMjCLzQC6STdUDNZmqoItoU+oaH2C0r6LMDzbaWvy7n9ZYampB9dFKIP12h+zE5zwQA6PIPJCLZFP1QE2mKugi2pS6xgcY7SJlJqYO1wnAuxpudrTeW873hlcXqsk6dC1xNw/EwCgyD+Qi2VQ9UJOpCrqINqWu8QFGu0OZ7W5bByzXBy8KDxuBNbeF70HMUP38dqndOR6IgVFkHshFsql6oCZTFXQRbUpd4wOMdocyz7/n5eCwHn3wdHXFgOeJwPOadb0O3r78mQdiYBSZB3KRbKoeqMlUBV1Em1LX+ACj3afM8P7kwwLmpubCJcJGYHlluVoHr/C6boAHYmAUmQdykWyqHqjJVAVdRJtS1/gAo12kzLTbVlitbCk6rFv/Kq6zulztch2esA4ehL89kD4PxMAoMg/kItlUPVCTqQq6iDalrvEBRrtDmdXHl9WEm1ega9quXrZcvSZqkfXB4p88n8wDMTCKzAO5SDZVD9RkqoIuok2pa3yA0b6AMuttsSscPg5Jdz3mM/ZrH+vbi8B3Fs83bgfQ5oEYGEXmgVwkm6oHajJVQRfRptQ1PsBo30SZgXWfd/Sql4gzVCdrXg5VXWN37WU8EAOjyDyQi2RT9UBNpiroItqUusYHGO2bKLPdE2e/xNGVdFrehDt0r+1U5VraTuxxJzIeiIFRZB7IRbKpeqAmUxV0EW1KXeMDjPZ1lLmkRebxaveu6tvqCeTVcrsndzqjWtGuCJwHYmAUmQdykWyqHqjJVAVdRJtS1/gAo92izPDAX+Df44r1TdovS5uLHQC9X2MB9K/3S9PvdiLjgRgYReaBXCSbqgdqMlVBF9Gm1DU+wGhfTJn1m5oy5laHfPCG5Oqh6fTzX7hk9TsAD8TAKDIP5CLZVD1Qk6kKuog2pa7xAUa7T5kZp6tL7B3I/9uRO8Nyu7dXtXAd6J0HYmAUmQdykWyqHqjJVAVdRJtS1/gAo30nZdaXCEvJ1Sryj4eL7a2EQwJFtxt4V63wQAyMIvNALpJN1QM1maqgi2hT6hofYLRvocyquQpzE6MHbmveXVU9QdzuwLPaa//HAzEwiswDuUg2VQ/UZKqCLqJNqWt8gNEuU+aBufUjx826dQDtqpWdu5sl53RGbmADfR6IgVFkHshFsql6oCZTFXQRbUpd4wOMdokyKxKunm9ON7gcDYdrp04FWm9fJ1Xx/dEoD8TAKDIP5CLZVD1Qk6kKuog2pa7xAUa7TJnNk8XVXdRhGXu1EVC6w/PM3fkHkNDA8o8HYmAUmQdykWyqHqjJVAVdRJtS1/gAo92nzIS+Df9WOPxuC6/mseb2tNSr1nggBkaReSAXyabqgZpMVdBFtCl1jQ8w2kXKDDlmby4g9tH6B6vNAdTb7Qkf0P79jt08EAOjyDyQi2RT9UBNpiroItqUusYHGO2rKHPnzYWvzy9rzuxcNZBe9pgfYT47VT4NXZ/BAzEwiswDuUg2VQ/UZKqCLqJNqWt8gNHuUGa7CtU+n5warla1A5636+BPj1lXBM4DMTCKzAO5SDZVD9RkqoIuok2pa3yA0a5S5g7Br0Z21q2eXj4OaS8W2gu9SB8Ty/fX4IEYGEXmgVwkm6oHajJVQRfRptQ1PsBotygzLSDn9eRE4Rl96wYOS6SfIb/2r7qtjAdiYBSZB3KRbKoeqMlUBV1Em1LX+ACj3aLMY2et9vydiZsXM4e/hVbqx5Wrnb8+eKKZB2JgFJkHcpFsqh6oyVQFXUSbUtf4AKNdpcxmq+v2vSvhYume7/x88mqlffy5/gng6CkPxMAoMg/kItlUPVCTqQq6iDalrvEBRrtKmdUadQDoRMzVafk6CZtDexVFVx95IAZGkXkgF8mm6oGaTFXQRbQpdY0PMNr3UWbg2rWovNsB0Pu5AcWP3zQC0O8fA+k3m3X/zp3jPBADo8g8kItkU/VATaYq6CLalLrGBxjtiyizWp5+fkPUsb758L/QwIHc7a3eacftgOs8EAOjyDyQi2RT9UBNpiroItqUusYHGO0iZabHXY/mqo20w0r3Ttv/OTf8rXmx1MPvHLnzZx94IAZGkXkgF8mm6oGaTFXQRbQpdY0PMNo1yqxhO6Pvot4afVd7FVnna1Qt162EXcN4IAZGkXkgF8mm6oGaTFXQRbQpdY0PMNpFyqyRNt/Q/XBT9dGB1LOjlD9QdH44erW3e88DMTCKzAO5SDZVD9RkqoIuok2pa3yA0S5SZvotbjXcvmEqA3T7Xqh6C6+F0uG1UwHoj778znM4PBADo8g8kItkU/VATaYq6CLalLrGBxjtDygzQWcm12qv7Zp6w9L2+nZdKNyLHRoNS9OrKR6IgVFkHshFsql6oCZTFXQRbUpd4wOMdp8yA1gv/j12zm5f8LSfmJ+hfvcqq2avsfr90PuFeCAGRpF5IBfJpuqBmkxV0EW0KXWNDzDaDcqsnkBO++xXPJ1pfYflcNzRlfQxXHz9LcA3D8TAKDIP5CLZVD1Qk6kKuog2pa7xAUa7TZlh1Tflnby5dnVDdoDlE9/zwZngq//V+2zzQAyMIvNALpJN1QM1maqgi2hT6hofYLSLlJmI+QPsDlcMe4iFt0YF2m7fWPXXu/Z4IAZGkXkgF8mm6oGaTFXQRbQpdY0PMNq3UWa+RLXZfnVa+pi3v967Up1b3e+dO88DMTCKzAO5SDZVD9RkqoIuok2pa3yA0e5TZtqfK5z6+hh+wN6/qP4JoP26UCDrwPyJ1I+rnd7zQAyMIvNALpJN1QM1maqgi2hT6hofYLRrlHl+GQGs2sd6Z+y2Fz9/+xq5gdA8D8TAKDIP5CLZVD1Qk6kKuog2pa7xAUb7Dso8lp3T3dot9eYnkHcLC8jhhVGf3jn+cogHYmAUmQdykWyqHqjJVAVdRJtS1/gAo92nzMoS5tabZh+9aJ5KDu3VjeY172pT7/f7ePFADIwi80Aukk3VAzWZqqCLaFPqGh9gtD+lzHoROMNyWndeEJzPaJ9Urh51Dn2pD37/ZiseiIFRZB7IRbKpeqAmUxV0EW1KXeMDjPYllHnc1f0BBAc4ra69n/sb90lWvapeiMUDMTCKzAO5SDZVD9RkqoIuok2pa3yA0a5SZr0SnO/gDrDcLjSn4wJKH4zd3oadjlvGAzEwiswDuUg2VQ/UZKqCLqJNqWt8gNG+mTLbV01UN18neA8f6123m+eT8zPZPBADo8g8kItkU/VATaYq6CLalLrGBxhtlDLXT9R5I+0A0Ambjxutq4OrnlX3ez++WIoHYmAUmQdykWyqHqjJVAVdRJtS1/gAo12jzPpji8iBrJ8Xr18N7N1b7a0LNftnJ+7mgRgYReaBXCSbqgdqMlVBF9Gm1DU+wGhXKTPY86JyeCdz8yKosJtY1dG2twnX1yE8EAOjyDyQi2RT9UBNpiroItqUusYHGO02Zf4zjQfzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbzJgbz9n8Qg38B2fpSZygbbLMAAAAASUVORK5CYII=`}`}
                alt="QR Code"
                className="mx-auto"
                width={200}
                height={120}
              />
            </div>
            <div className="flex  items-center justify-center ">
              <button
                onClick={handleShareWhatsApp}
                type="submit"
                className="!bg-green-600 hover:!bg-green-700"
>
                {t("shareWhatsApp")}
              </button>
            </div>
            <div className="flex  items-center justify-center ">
              <button
                onClick={handleShareEmail}

                type="submit"
                className="!bg-blue-600 hover:!bg-blue-700"
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