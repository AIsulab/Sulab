import { ChangeEvent, FormEvent, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SiKakaotalk } from "react-icons/si";
import toast from "react-hot-toast";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export function Contact() {
  const [formValues, setFormValues] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange =
    (key: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [key]: event.target.value
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message ?? "전송 중 문제가 발생했습니다.");
      }

      toast.success("전송 완료되었습니다!");
      setFormValues(initialState);
    } catch (error) {
      const message = error instanceof Error ? error.message : "전송에 실패했습니다. 잠시 후 다시 시도해주세요.";
      toast.error(message);
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:gap-12">
          <div>
            <h2 className="section-heading">프로젝트와 목표를 알려주세요</h2>
            <p className="section-subtitle section-copy md:mx-0">
              상세히 작성해주실수록 더 정확한 제안을 드릴 수 있습니다. 24시간 내에 회신드립니다.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark">
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange("name")}
                  required
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-dark shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="성함 또는 회사명을 입력해주세요"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark">
                  이메일
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange("email")}
                  required
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-dark shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="example@sulab.co.kr"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange("message")}
                  required
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-dark shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="진행하고 싶은 프로젝트와 목표를 적어주세요."
                />
              </div>

              <button
                type="submit"
                aria-label="문의 내용 전송"
                className="btn-primary cursor-pointer w-full md:w-auto"
                disabled={loading}
              >
                {loading ? "전송 중..." : "문의 보내기"}
              </button>
            </form>
          </div>

          <aside className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <h3 className="text-2xl font-semibold text-dark">바로 연결하기</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray">
              빠른 상담이 필요하시면 아래 채널로 메시지를 남겨주세요.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://pf.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="카카오톡 바로가기"
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-dark transition hover:border-primary hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FEE500] text-dark">
                  <SiKakaotalk className="h-5 w-5" />
                </span>
                카카오톡 상담 연결
              </a>
              <a
                href="mailto:hello@sulab.co.kr"
                aria-label="이메일 바로가기"
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-dark transition hover:border-primary hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HiOutlineMail className="h-5 w-5" />
                </span>
                hello@sulab.co.kr
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-gray">
              개인정보는 상담 목적 외 다른 용도로 사용하지 않으며, 30일 이후 자동 파기됩니다.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
