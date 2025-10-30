'use client';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center text-xs text-slate-300">
        <p>SULAB �� {new Date().getFullYear()}</p>
        <p>���ο� Ȩ�������� ���µǸ� �� ���� �ҽ��� ���� �帱�Կ�.</p>
      </div>
    </footer>
  );
};

export default Footer;
