import Icon from "@/components/ui/icon";

const AdmissionInfo = () => {
  const admissionRequirements = [
    {
      title: "Документы об образовании",
      description: "Аттестат о среднем общем образовании или диплом СПО",
      icon: "GraduationCap",
    },
    {
      title: "Медицинская справка",
      description: "справка о прохождении медосмотра по форме 086/у",
      icon: "FileHeart",
    },
    {
      title: "Документы личности",
      description: "Паспорт, СНИЛС, фотографии 3×4 см (6 шт.)",
      icon: "User",
    },
  ];

  const admissionSteps = [
    {
      step: "1",
      title: "Подача документов",
      period: "С 20 июня по 15 августа",
      description: "Подайте документы лично или через представителя",
    },
    {
      step: "2",
      title: "Рассмотрение заявлений",
      period: "До 17 августа",
      description: "Приемная комиссия рассматривает поданные документы",
    },
    {
      step: "3",
      title: "Зачисление",
      period: "До 25 августа",
      description: "Публикация приказов о зачислении на сайте колледжа",
    },
  ];

  const benefits = [
    {
      icon: "DollarSign",
      title: "Стипендия",
      description:
        "Академическая стипендия для отличников и хорошистов, социальная поддержка нуждающихся студентов",
    },
    {
      icon: "Home",
      title: "Общежитие",
      description:
        "Комфортное общежитие для иногородних студентов с современными условиями проживания",
    },
    {
      icon: "Briefcase",
      title: "Трудоустройство",
      description:
        "98% выпускников трудоустраиваются по специальности в первый год после окончания",
    },
    {
      icon: "BookOpen",
      title: "Практика",
      description:
        "Производственная практика в ведущих образовательных учреждениях Мордовии",
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Информация для абитуриентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Всё что нужно знать для поступления в наш педагогический колледж
          </p>
        </div>

        {/* Сроки приема */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Приемная кампания 2024</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">20 июня</div>
              <div className="text-blue-100">Начало приема документов</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15 августа</div>
              <div className="text-blue-100">Окончание приема документов</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25 августа</div>
              <div className="text-blue-100">Зачисление</div>
            </div>
          </div>
        </div>

        {/* Необходимые документы */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Необходимые документы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {admissionRequirements.map((req, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={req.icon as any}
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {req.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{req.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Этапы поступления */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Этапы поступления
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <div className="text-blue-600 font-medium mb-2">
                        {step.period}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <Icon
                      name="ArrowRight"
                      size={20}
                      className="text-blue-600"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Преимущества для студентов */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Что мы предлагаем студентам
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={benefit.icon as any}
                    size={28}
                    className="text-green-600"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Контактная информация приемной комиссии */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Приемная комиссия
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                  <span className="text-gray-700">
                    Пн-Пт: 8:00-17:00, Сб: 8:00-12:00
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <span className="text-gray-700">+7 (83458) 2-14-68</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <span className="text-gray-700">zpk@edu.e-mordovia.ru</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-blue-600 mt-1"
                  />
                  <span className="text-gray-700">
                    431240, Республика Мордовия,
                    <br />
                    пгт Зубова Поляна, ул. Советская, 8А
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Подача документов
              </h4>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Icon
                    name="Info"
                    size={16}
                    className="text-yellow-600 mt-1"
                  />
                  <div className="text-sm">
                    <p className="text-yellow-800 font-medium mb-1">
                      Важно знать:
                    </p>
                    <ul className="text-yellow-700 space-y-1">
                      <li>
                        • Прием документов ведется лично или через представителя
                      </li>
                      <li>• Результаты ЕГЭ не требуются</li>
                      <li>• Зачисление по среднему баллу аттестата</li>
                      <li>• Льготы для детей-сирот и инвалидов</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <a
                  href="/admission"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Подать документы онлайн
                </a>
                <a
                  href="/contacts"
                  className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-center"
                >
                  Задать вопрос
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInfo;
