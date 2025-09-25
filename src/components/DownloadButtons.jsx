import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function DownloadButtons() {
  return (
    <div className="flex gap-4">
      {/* App Store 버튼 */}
      <a
        href="#"
        className="flex items-center gap-2 px-5 py-3 rounded-xl 
                   bg-black/40 backdrop-blur-md border border-white/30 
                   text-white font-medium shadow-lg hover:bg-white/30 transition"
      >
        <FaApple size={20} />
        <span>App Store</span>
      </a>

      {/* Google Play 버튼 */}
      <a
        href="#"
        className="flex items-center gap-2 px-5 py-3 rounded-xl 
                   bg-black/40 backdrop-blur-md border border-white/30 
                   text-white font-medium shadow-lg hover:bg-white/30 transition"
      >
        <FaGooglePlay size={20} />
        <span>Google Play</span>
      </a>
    </div>
  );
}
