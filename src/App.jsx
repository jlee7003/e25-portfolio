import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import mainImage from "./assets/images/main.png";
import toss1 from "./assets/images/toss1.png";
import toss2 from "./assets/images/toss2.png";
import texts from "./locales/texts/texts.js";
import DownloadButtons from "./components/DownloadButtons";

// Header
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

// ScrollSection 컴포넌트 - 뷰포트 진입 시 애니메이션
function ScrollSection({ children, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting); // 스크롤 들어오면 true, 나가면 false
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </section>
  );
}

// HeroSection - 글 + 버튼만 순차적 등장
function HeroSection({ language }) {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-white">
      <img
        src={mainImage}
        alt="메인"
        className="absolute inset-0 w-full h-screen object-cover"
      />

      <ScrollSection className="relative flex flex-col space-y-6 items-center justify-center text-center px-6">
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 transform transition-all duration-700"
          style={{ transitionDelay: "0.2s" }}
        >
          {texts[language].main}
        </h1>
        <div
          className="transform transition-all duration-700"
          style={{ transitionDelay: "0.5s" }}
        >
          <DownloadButtons />
        </div>
      </ScrollSection>
    </section>
  );
}

// FeatureSection
function FeatureSection({ language }) {
  return (
    <ScrollSection className="relative flex flex-col space-y-6 items-center justify-center text-center px-6 py-[200px]">
      <h1 className="text-[32px] md:text-[32px] font-bold leading-tight text-gray-900">
        {texts[language].section2}
      </h1>
    </ScrollSection>
  );
}

// AdditionalSection
function AdditionalSection({ text, bg }) {
  return (
    <ScrollSection
      className={`${bg} h-screen flex items-center justify-center text-4xl font-bold text-white`}
    >
      {text}
    </ScrollSection>
  );
}

// Section3
function Section3() {
  return (
    <section className="w-full bg-white py-32 h-[1000px] relative">
      <div className="max-w-7xl mx-auto items-center px-8 md:px-16 gap-12">
        {/* 왼쪽 텍스트 */}
        <ScrollSection className="space-y-6 block">
          <p className="text-blue-600 font-medium">홈 · 소비</p>
          <h2 className="text-5xl font-extrabold leading-snug  h-[700px] text-gray-900">
            내 돈 관리, <br /> 지출부터 일정까지 <br /> 똑똑하게
          </h2>
        </ScrollSection>
        <ScrollSection className="text-gray-600 text-lg leading-relaxed text-right max-w-">
          토스에 계좌와 카드를 연결해 보세요. <br />
          계좌 잔액, 대출·투자 내역은 기본, <br />
          일자별 소비와 수입까지 한 번에 볼 수 있어요.
        </ScrollSection>
        {/* 오른쪽 휴대폰 영역 */}
        <div className="flex flex-col items-center space-y-8">
          {/* 폰 2개 (대각선으로 엇갈리게) */}

          <ScrollSection
            iv
            className="absolute flex justify-center left-[200px] top-[400px]"
          >
            {/* 왼쪽 폰 (왼쪽 아래로 이동) */}
            <img
              src={toss1}
              alt="소비 내역 화면"
              className="w-[260px] md:w-[300px] drop-shadow-2xl rounded-[2rem] relative -translate-x-10 translate-y-10"
            />
            {/* 오른쪽 폰 (오른쪽 위로 이동) */}
          </ScrollSection>

          <ScrollSection className="absolute right-[200px] top-[0px]">
            <img
              src={toss2}
              alt="홈 화면"
              className="w-[260px] md:w-[300px] drop-shadow-2xl rounded-[2rem] relative translate-x-10 -translate-y-10"
            />
          </ScrollSection>

          {/* 하단 설명 */}
        </div>
      </div>
    </section>
  );
}
// Footer
function Footer() {
  return (
    <ScrollSection className="bg-gray-100 px-6 md:px-20 py-10 text-gray-600 text-sm">
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
    </ScrollSection>
  );
}

// Main App
export default function App() {
  const [language, setLanguage] = useState("ko");

  return (
    <div className="font-sans">
      <Header language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <FeatureSection language={language} />
      <Section3 />
      <AdditionalSection text="Section 3" bg="bg-purple-500" />
      <AdditionalSection text="Section 4" bg="bg-indigo-600" />
      <Footer />
    </div>
  );
}
