# SULAB 웹사이트

Next.js(14)와 Tailwind CSS 기반으로 구현된 SULAB 공식 웹사이트입니다. Figma 시안을 유지하되 컴포넌트 구조를 재정비하고 데이터와 유틸을 분리해 유지보수를 용이하게 했습니다.

## 주요 섹션

- Hero · Services · AI Search · Portfolio · Process · CTA · Contact · Footer
- 서비스/포트폴리오 데이터 분리: `src/data`
- AI 검색 로직 유틸화: `src/utils/aiSearch.ts`
- Pretendard 폰트와 다크 모드 토글(테마 전환) 기반 UI
- `react-hot-toast`, `react-icons`, `framer-motion`을 사용한 인터랙션

## 개발 환경

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 개발 서버를 확인할 수 있습니다.
