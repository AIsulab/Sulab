'use client';

const serviceHighlights = [
  {
    title: '���� �Ŵ��� ����',
    description: '������Ʈ ��ȹ���� ���, ���� �������� ���� �Ŵ����� �Բ��մϴ�.',
  },
  {
    title: '������ ������ ��õ',
    description: '�� ��ǥ�� ���� ������� ������Ʈ�� �� �´� �������� �����մϴ�.',
  },
  {
    title: '���� ���� �ý���',
    description: '�ܰ躰 ��� ��ȣ ���μ����� �������� ������ �����մϴ�.',
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-sky-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">SULAB�� �����ϴ� ������Ʈ ��Ī ����</h2>
          <p className="mt-3 text-sm text-slate-600">
            ������Ʈ ���� Ȯ���� ���̴� ü������ ��Ī�� ���� �ý����� ������ ������.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-sky-100 bg-white p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
