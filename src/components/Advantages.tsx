import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Award",
      title: "Аккредитация и лицензии",
      description:
        "Полный пакет документов для ведения образовательной деятельности",
    },
    {
      icon: "Users",
      title: "Опытные преподаватели",
      description:
        "Высококвалифицированный педагогический состав с многолетним опытом",
    },
    {
      icon: "Building",
      title: "Современная база",
      description:
        "Обновленные аудитории, компьютерные классы, спортивные залы",
    },
    {
      icon: "BookOpen",
      title: "Практическая подготовка",
      description:
        "Производственная практика в лучших образовательных учреждениях региона",
    },
    {
      icon: "Target",
      title: "Трудоустройство",
      description:
        "Высокий процент трудоустройства выпускников по специальности",
    },
    {
      icon: "Laptop",
      title: "Современные технологии",
      description: "Изучение цифровых образовательных технологий и инноваций",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Преимущества обучения
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Почему стоит выбрать наш педагогический колледж для получения
            образования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <Icon
                  name={advantage.icon as any}
                  size={32}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Готовы начать обучение?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Приемная комиссия работает с 1 июня. Подавайте документы заранее и
            получите качественное педагогическое образование.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admission"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Icon name="FileText" size={20} />
              <span>Подать документы</span>
            </a>
            <a
              href="/contacts"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Icon name="Phone" size={20} />
              <span>Связаться с нами</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
