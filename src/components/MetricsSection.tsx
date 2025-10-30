'use client';

const metrics = [
  { title: '10�� �̻� ������ ������', description: '���� �Ƿ� 124,131�� �� �ſ� 2,000�� �̻�' },
  { title: '������ ��Ʈ��ũ 20,062��', description: '������ ������ �� �����̳� �� ��ȹ�� �� QA' },
  { title: '��Ʈ�� ������ 97%', description: '���μ����� ǰ�� �� ��� ��Ī �ý���' },
];

const MetricsSection = () => {
  return (
    <section className="bg-sky-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
          �� SULAB�� �����ؾ� �ұ��?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="rounded-3xl border border-sky-100 bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{metric.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
