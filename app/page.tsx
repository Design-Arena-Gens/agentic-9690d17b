"use client";

import Image from "next/image";
import { useMemo } from "react";

const stats = [
  { label: "عامل حماية", value: "SPF 50+" },
  { label: "مقاوم للماء", value: "حتى 80 دقيقة" },
  { label: "ترطيب", value: "24 ساعة" }
];

const benefits = [
  {
    title: "حماية ذكية متعددة الأطياف",
    description:
      "تركيبة متقدمة ضد الأشعة UVA وUVB وHEV، مع مضادات أكسدة تحمي البشرة من العوامل البيئية وتمنع ظهور البقع الداكنة."
  },
  {
    title: "خاخ سريع الامتصاص",
    description:
      "ملمس خفيف غير دهني ينطلق برذاذ ناعم يغطي الوجه والجسم بالتساوي دون الحاجة للفرك أو الانتظار."
  },
  {
    title: "صديق للبشرة الحساسة",
    description:
      "خالٍ من العطور والكحول، مع نياسيناميد وصبار مهدئ يخفف الاحمرار ويحافظ على توازن البشرة."
  }
];

const testimonials = [
  {
    name: "أمينة • جدة",
    quote:
      "أول مرة أجد واقياً بخاخ يعطي حماية حقيقية دون ملمس مزعج. مناسب لي ولأطفالي!"
  },
  {
    name: "ليان • الرياض",
    quote: "النتيجة فورية، بشرتي تظل رطبة ومحمية حتى بعد البحر. أعشقه."
  },
  {
    name: "ندى • دبي",
    quote: "التطبيق سهل قبل المكياج، لا يترك طبقة بيضاء ويمنح لمعاناً صحياً."
  }
];

export default function HomePage() {
  const timestamp = useMemo(() => new Date().toLocaleDateString("ar", { dateStyle: "long" }), []);

  return (
    <main className="flex min-h-screen flex-col bg-sand-50 text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-sand-200 via-sand-50 to-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/sunbursts.svg')] bg-cover bg-right md:bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-l from-white/60" />
        </div>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 md:flex-row md:items-center">
          <div className="flex-1 space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-sm font-medium text-sand-700 shadow-sm">
              جديد • تاريخ الإطلاق {timestamp}
            </span>
            <h1 className="text-4xl font-bold leading-tight text-sand-900 sm:text-5xl lg:text-6xl">
              خاخ واقي من الشمس للوجه والجسم
              <span className="block text-sand-600">حماية فورية بلمسة حريرية</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
              سبراي مبتكر بعامل حماية 50، يمنحك درعاً شفافاً ضد أشعة الشمس مع مرونة للاستخدام على البشرة الرطبة أو الجافة. بخاخ 360° يغطي كل التفاصيل، من لحظات الشاطئ حتى مشاويرك اليومية.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#offer"
                className="rounded-full bg-sand-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-sand-300 transition hover:bg-sand-600 hover:shadow-xl"
              >
                احجز عرض الإطلاق الآن
              </a>
              <span className="text-sm text-slate-600">
                تجربة مجانية لمدة 7 أيام مع ضمان استرجاع كامل.
              </span>
            </div>
            <div className="flex flex-wrap gap-6 rounded-3xl border border-sand-200 bg-white/70 p-6 backdrop-blur">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-sand-400">
                    {stat.label}
                  </span>
                  <span className="text-2xl font-bold text-sand-800">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-[3rem] border border-white/60 bg-white shadow-2xl">
              <div className="relative h-[520px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                  alt="خاخ واقي من الشمس"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-white/90 p-4 text-slate-700 shadow-lg backdrop-blur">
                  <h2 className="text-lg font-semibold text-sand-700">شمس الخليج بلا قلق</h2>
                  <p className="text-sm">
                    بخاخ سريع الامتصاص يمنحك حماية قصوى مع رائحة منعشة خفيفة والعناية التي تستحقينها.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden rounded-3xl bg-white/80 p-6 shadow-xl md:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-sand-500">مكونات طبيعية</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• زيت بذور الشيا</li>
                <li>• فيتامين E مركز</li>
                <li>• خلاصة جل الصبار</li>
                <li>• حمض الهيالورونيك</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold text-sand-900 md:text-4xl">لماذا ستعشقين خاخ الوقاية؟</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          اخترناه ليواكب إيقاعك السريع ويقدم لك حماية مستمرة دون عناء. كل تفصيل مصمم لتثقي ببشرتك تحت أشد أشعة الشمس.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-4 rounded-3xl border border-sand-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand-100 text-2xl text-sand-500">
                ☀️
              </span>
              <h3 className="text-xl font-semibold text-sand-800">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate bg-sand-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1521571738100-9f2cce22a35c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sand-900 via-sand-800/95 to-sand-700/90" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold md:text-4xl">حماية متوازنة للوجه والجسم</h2>
            <p className="text-lg text-sand-100">
              انطلقي في مغامراتك بثقة. تركيبتنا المقاومة للماء والعرق تحافظ على انتعاشك حتى في أكثر الأيام حرارة، مع لمسة نهائية مخملية تناسب جميع ألوان البشرة.
            </p>
            <ul className="space-y-4 text-sm text-sand-100">
              <li>• ثابت على البشرة حتى بعد السباحة والرياضة</li>
              <li>• يعزز مرونة البشرة ويمنع فقدان الرطوبة</li>
              <li>• مناسب للاستعمال اليومي تحت المكياج أو فوقه</li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold text-white">آراء عميلاتنا</h3>
              <div className="mt-6 space-y-6">
                {testimonials.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-white/10 p-6">
                    <p className="text-sm leading-relaxed text-sand-50">{item.quote}</p>
                    <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-sand-200">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-sand-100 bg-white p-10 shadow-md">
            <h2 className="text-3xl font-bold text-sand-900">عرض الإطلاق المحدود</h2>
            <p className="mt-4 text-lg text-slate-600">
              احصلي على خاخ الوقاية مع حقيبة صيفية مقاومة للماء وفرشاة تطبيق مجانية لفترة محدودة.
            </p>
            <div className="mt-8 flex items-end gap-4">
              <span className="text-sm text-slate-500 line-through">189 ر.س</span>
              <span className="text-4xl font-bold text-sand-600">149 ر.س</span>
              <span className="text-xs text-slate-500">شامل الضريبة</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• توصيل مجاني خلال 48 ساعة داخل المملكة</li>
              <li>• حماية خلال سباقات الجري والسباحة</li>
              <li>• إعادة تعبئة مجانية خلال أول شهر</li>
            </ul>
            <a
              href="https://wa.me/966500000000"
              className="mt-10 inline-flex w-full justify-center rounded-full bg-sand-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-sand-600"
            >
              اطلب الآن عبر واتساب
            </a>
          </div>
          <div className="flex flex-col gap-8 rounded-3xl border border-sand-100 bg-sand-50 p-10">
            <div>
              <h3 className="text-xl font-semibold text-sand-800">كيف تستخدمين الخاخ؟</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                <li>1. رجي العبوة جيداً قبل الاستخدام.</li>
                <li>2. رشي من مسافة 15 سم على بشرة نظيفة أو فوق المكياج.</li>
                <li>3. أعيدي التطبيق كل ساعتين أو بعد السباحة.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sand-800">أسئلة شائعة</h3>
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-sand-700">هل يناسب جميع أنواع البشرة؟</p>
                  <p>نعم، تم اختباره على بشرة حساسة ودهنية وجافة دون تهيج.</p>
                </div>
                <div>
                  <p className="font-semibold text-sand-700">هل يترك أثر أبيض؟</p>
                  <p>التركيبة شفافة وتصمم لتذوب فوراً دون أي بقايا.</p>
                </div>
                <div>
                  <p className="font-semibold text-sand-700">هل يمكن استخدامه للأطفال؟</p>
                  <p>آمن للأطفال فوق عمر 3 سنوات تحت إشراف الكبار.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center text-slate-500 md:flex-row md:text-right">
          <div>
            <p className="text-sm text-sand-600">© {new Date().getFullYear()} Radiant Sun Labs</p>
            <p className="text-xs">متخصصون في حلول الحماية الشمسية الفائقة للبشرة العربية.</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="mailto:hello@radiantsunlabs.com" className="hover:text-sand-500">
              الدعم الفني
            </a>
            <span>•</span>
            <a href="https://instagram.com" className="hover:text-sand-500">
              انستقرام
            </a>
            <span>•</span>
            <a href="https://tiktok.com" className="hover:text-sand-500">
              تيك توك
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
