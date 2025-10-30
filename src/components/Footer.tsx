import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-slate-900 py-16 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold text-white">회사소개</h4>
            <p className="mt-3 text-sm text-slate-300">
              SULAB은 데이터 기반 디지털 파트너로, 전략 · 디자인 · 개발 · 마케팅을 아우르는 통합 솔루션을
              제공합니다.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">연락처</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>이메일: hello@sulab.co.kr</li>
              <li>대표전화: 02-1234-5678</li>
              <li>주소: 서울특별시 성동구 성수동 00-00</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">SNS</h4>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SULAB 인스타그램"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-primary hover:text-primary"
              >
                <FiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SULAB 유튜브"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-primary hover:text-primary"
              >
                <FiYoutube className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SULAB 페이스북"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-primary hover:text-primary"
              >
                <FiFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-slate-500">© 2025 SULAB. All rights reserved.</p>
      </div>
    </footer>
  );
}
