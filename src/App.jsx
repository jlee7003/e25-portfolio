import React, { useState, useEffect } from "react";
import "./index.css";
import mainImage from "./assets/images/main.png";
import texts from "./locales/texts/texts.js";
import DownloadButtons from "./components/DownloadButtons";

function Header({ language, setLanguage }) {
  return (
    <header className="flex justify-between items-center px-4 py-0 shadow-md fixed top-0 bg-white z-50 h-[60px] w-full">
      <div className="text-2xl font-bold text-blue-600">
        {texts[language].logo}
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-4 text-gray-700 font-medium text-[13px]">
          <a href="#services" className="hover:text-blue-600">
            {texts[language].services}
          </a>
          <a href="#company" className="hover:text-blue-600">
            {texts[language].company}
          </a>
          <a href="#support" className="hover:text-blue-600">
            {texts[language].support}
          </a>
        </nav>
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage("ko")}
            className={`px-3 py-1 rounded ${
              language === "ko"
                ? "bg-white text-[#b0b8c1]"
                : "bg-white text-black"
            }`}
          >
            한국어
          </button>
          <div className="text-[#b0b8c1]">|</div>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded ${
              language === "en"
                ? "bg-white text-[#b0b8c1]"
                : "bg-white text-black"
            }`}
          >
            English
          </button>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection({ language, loaded }) {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-white transition-all duration-700 transform">
      <img
        src={mainImage}
        alt="메인"
        className="absolute inset-0 w-full h-screen object-cover"
      />
      <div
        className={`relative flex flex-col space-y-6 items-center justify-center text-center px-6 transition-all duration-700 transform
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          {texts[language].main}
        </h1>
        <DownloadButtons />
      </div>
    </section>
  );
}

// Feature Section
function FeatureSection({ language, loaded }) {
  return (
    <section
      className={`relative flex flex-col space-y-6 items-center justify-center text-center px-6 py-[200px] transition-all duration-700 transform
      ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h1 className="text-[32px] md:text-[32px] font-bold leading-tight text-gray-900">
        {texts[language].section2}
      </h1>
    </section>
  );
}

// Additional Sections
function AdditionalSection({ text, bg, loaded, delay }) {
  return (
    <section
      className={`${bg} h-screen flex items-center justify-center text-4xl font-bold text-white transition-all duration-700 transform
      ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${
        delay ? `delay-${delay}` : ""
      }`}
    >
      {text}
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-100 px-6 md:px-20 py-10 text-gray-600 text-sm">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold mb-2 text-gray-900">토스 클론 프로젝트</h3>
          <p>본 페이지는 포트폴리오 목적의 클론 프로젝트입니다.</p>
        </div>
        <div className="space-y-2">
          <a href="#terms" className="block hover:underline">
            이용약관
          </a>
          <a href="#privacy" className="block hover:underline">
            개인정보 처리방침
          </a>
          <a href="#support" className="block hover:underline">
            고객센터
          </a>
        </div>
      </div>
      <p className="mt-6">© 2025 Toss Clone. All rights reserved.</p>
    </footer>
  );
}

// Main App
export default function App() {
  const [language, setLanguage] = useState("ko");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 페이지 로딩 후 애니메이션 트리거
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className="font-sans">
      <Header language={language} setLanguage={setLanguage} />
      <HeroSection language={language} loaded={loaded} />
      <FeatureSection language={language} loaded={loaded} />

      {/* 추가 섹션 1 */}
      <AdditionalSection text="Section 3" bg="bg-purple-500" loaded={loaded} />
      {/* 추가 섹션 2 */}
      <AdditionalSection text="Section 4" bg="bg-indigo-600" loaded={loaded} />

      <Footer />
    </div>
  );
}
