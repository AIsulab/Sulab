export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
        
        * {
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
      <main className="mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center text-slate-900">
        <h1 className="text-3xl font-bold sm:text-4xl">새로운 홈페이지를 준비 중입니다</h1>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          기존 컴포넌트를 정리하고 신규 디자인을 구축할 예정입니다.
          <br />
          완성된 화면은 곧 공식 빌드에 반영될 예정입니다.
        </p>
      </main>
    </div>
  );
}
