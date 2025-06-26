import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30 mb-6">
            <Icon name="Award" size={20} className="text-blue-300" />
            <span className="text-blue-200 font-medium">
              Аккредитованное образовательное учреждение
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ГБПОУ РМ
            <br />
            <span className="text-blue-300">"Зубово-Полянский</span>
            <br />
            <span className="text-blue-300">Педагогический Колледж"</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Качественное педагогическое образование в Республике Мордовия.
            Готовим профессиональных педагогов для системы образования региона.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/admission"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Icon name="FileText" size={20} />
            <span>Подать документы</span>
          </a>

          <a
            href="/about"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2"
          >
            <Icon name="Info" size={20} />
            <span>О колледже</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-300 mb-2">65+</div>
            <div className="text-gray-300">Лет качественного образования</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-300 mb-2">500+</div>
            <div className="text-gray-300">Выпускников ежегодно</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-300 mb-2">6</div>
            <div className="text-gray-300">Специальностей подготовки</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
