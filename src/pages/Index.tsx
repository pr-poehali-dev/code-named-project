import { useState } from "react"
import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "ShieldCheck",
    title: "Сертификация под ключ",
    description: "Полный цикл разрешительной документации",
    items: [
      "Оформление СС, ДС, ГОСТ Р, СГР",
      "Нотификации ФСБ и КНБ",
      "Получение лицензий и сертификатов",
      "Разработка технической документации",
      "Сопровождение в аккредитованных лабораториях",
    ],
  },
  {
    icon: "Ship",
    title: "Логистика под ключ",
    description: "Все виды перевозок и таможенное оформление",
    items: [
      "Авто, ЖД, морские и авиаперевозки",
      "Оптимизация цепочки поставок",
      "Таможенное оформление (ДТ)",
      "Расчёт пошлин и кодов ТН ВЭД",
      "Декларации таможенной стоимости",
    ],
  },
]

const advantages = [
  {
    icon: "Award",
    title: "12 лет на рынке",
    description: "Надёжность и экспертиза в каждой сделке. Более 500 успешно завершённых проектов.",
  },
  {
    icon: "Settings",
    title: "Индивидуальный подход",
    description: "Разрабатываем уникальные решения под специфику вашего бизнеса и товарной группы.",
  },
  {
    icon: "Globe",
    title: "Партнёрская сеть",
    description: "17 партнёров в РФ и 11 в странах ЕАЭС. Ведущие лаборатории и транспортные компании.",
  },
  {
    icon: "BadgeCheck",
    title: "Прозрачное ценообразование",
    description: "Фиксированная стоимость с учётом всех расходов — никаких скрытых платежей.",
  },
]

const cases = [
  {
    tag: "Маркетплейсы",
    title: "Оптимизация поставок для крупного селлера",
    description: "Выстроили цепочку поставок из Китая через ЕАЭС. Сократили срок доставки на 18 дней, снизили логистические издержки на 23%.",
    metrics: ["-23% издержки", "-18 дней срок"],
  },
  {
    tag: "Сертификация",
    title: "Сертификация новой линейки электроники",
    description: "Получили 14 сертификатов соответствия и нотификаций ФСБ для IoT-оборудования. Срок — 6 недель вместо стандартных 4 месяцев.",
    metrics: ["14 документов", "6 недель"],
  },
  {
    tag: "Корпоративный клиент",
    title: "ВЭД-сопровождение производителя",
    description: "Взяли на аутсорсинг полный цикл ВЭД: от подбора кодов ТН ВЭД до таможенного оформления 40+ деклараций в год.",
    metrics: ["40+ ДТ в год", "0 штрафов"],
  },
  {
    tag: "Логистика",
    title: "Мультимодальная доставка негабарита",
    description: "Организовали морско-железнодорожную доставку крупногабаритного оборудования из Южной Кореи. Сохранили бюджет клиента на 31%.",
    metrics: ["-31% стоимость", "В срок"],
  },
]

const stats = [
  { value: "12+", label: "лет опыта" },
  { value: "500+", label: "завершённых проектов" },
  { value: "28", label: "партнёров в РФ и ЕАЭС" },
  { value: "0", label: "штрафов по нашей вине" },
]

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="relative bg-[#060d1f] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <GradientBlinds
            gradientColors={["#060d1f", "#0a1a3e", "#1a3a7e", "#1d4ed8"]}
            angle={15}
            noise={0.2}
            blindCount={13}
            blindMinWidth={50}
            spotlightRadius={0.38}
            spotlightSoftness={1.6}
            spotlightOpacity={0.45}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="overlay"
          />
        </div>

        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto pt-32 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8">
            <Icon name="Shield" size={14} />
            Надёжные Решения ВЭД — с 2012 года
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6 text-balance drop-shadow-2xl">
            Ваш надёжный партнёр
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
              в логистике и сертификации
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Более 12 лет оптимизируем поставки и расширяем бизнес наших клиентов.
            Комплексный подход: от кодов ТН ВЭД до получения сертификатов под ключ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all shadow-2xl shadow-blue-900/50"
            >
              Получить коммерческое предложение
              <Icon name="ArrowRight" size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/40"
            >
              Узнать наши решения
            </a>
          </div>

          {/* Quick contacts */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/60 text-sm">
            <a href="tel:+7XXXXXXXXXX" className="flex items-center gap-2 hover:text-white transition-colors">
              <Icon name="Phone" size={16} />
              +7 (XXX) XXX-XX-XX
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Icon name="Send" size={16} />
              Telegram
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs animate-bounce">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 bg-[#0a1630] border-y border-white/5 py-12">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-1">{s.value}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Наши услуги</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Комплексный ВЭД под ключ</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Берём на себя все этапы — от подбора кода ТН ВЭД до финального сертификата у вас в руках.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-8 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon name={s.icon} size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <p className="text-white/40 text-sm">{s.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/70">
                      <Icon name="CheckCircle" size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="relative z-10 py-24 px-5 bg-[#070e20]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Почему мы</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Почему выбирают «Надежные Решения ВЭД»
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Не просто подрядчик — долгосрочный партнёр, который разделяет риски и результаты.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <Icon name={a.icon} size={24} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="relative z-10 py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Кейсы</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Примеры решений</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Реальные результаты для реального бизнеса — в цифрах.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-blue-500/40 transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4">
                  {c.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{c.description}</p>
                <div className="flex gap-3">
                  {c.metrics.map((m, j) => (
                    <div
                      key={j}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-bold"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-5 bg-[#070e20]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Контакты</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Обсудим ваш проект
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Оставьте заявку — рассчитаем стоимость и предложим оптимальное решение в течение 1 рабочего дня.
              </p>

              <div className="space-y-4">
                <a href="tel:+7XXXXXXXXXX" className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/3 hover:border-blue-500/40 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Телефон</div>
                    <div className="text-white font-medium">+7 (XXX) XXX-XX-XX</div>
                  </div>
                </a>
                <a href="mailto:info@nrved.ru" className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/3 hover:border-blue-500/40 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Email</div>
                    <div className="text-white font-medium">info@nrved.ru</div>
                  </div>
                </a>
                <div className="flex gap-3">
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-white/8 bg-white/3 hover:border-green-500/40 hover:bg-green-500/5 transition-all text-white/70 hover:text-white text-sm font-medium">
                    <Icon name="MessageCircle" size={16} className="text-green-400" />
                    WhatsApp
                  </a>
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-white/8 bg-white/3 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all text-white/70 hover:text-white text-sm font-medium">
                    <Icon name="Send" size={16} className="text-blue-400" />
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/3 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={32} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h3>
                  <p className="text-white/50">Свяжемся с вами в течение 1 рабочего дня.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-6">Быстрая заявка</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Иван Петров"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-blue-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-blue-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-sm mb-2">Тип услуги</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/60 transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0a1630]">Выберите услугу</option>
                        <option value="cert" className="bg-[#0a1630]">Сертификация</option>
                        <option value="logistics" className="bg-[#0a1630]">Логистика</option>
                        <option value="customs" className="bg-[#0a1630]">Таможенное оформление</option>
                        <option value="complex" className="bg-[#0a1630]">Комплексное сопровождение</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30"
                    >
                      Получить коммерческое предложение
                      <Icon name="ArrowRight" size={18} />
                    </button>
                    <p className="text-center text-white/25 text-xs">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Icon name="Globe" size={16} className="text-white" />
            </div>
            <span className="text-white font-semibold">Надежные Решения ВЭД</span>
          </div>
          <nav className="flex flex-wrap gap-6 text-white/40 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#why" className="hover:text-white transition-colors">Почему мы</a>
            <a href="#cases" className="hover:text-white transition-colors">Кейсы</a>
            <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
          </nav>
          <p className="text-white/25 text-sm">© 2024 Надежные Решения ВЭД</p>
        </div>
      </footer>
    </div>
  )
}
