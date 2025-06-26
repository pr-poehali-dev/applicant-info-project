import Icon from "@/components/ui/icon";

const Specializations = () => {
  const specializations = [
    {
      title: "Дошкольное образование",
      code: "44.02.01",
      description:
        "Подготовка воспитателей дошкольных образовательных учреждений",
      duration: "3 года 10 месяцев",
      icon: "Baby",
    },
    {
      title: "Преподавание в начальных классах",
      code: "44.02.02",
      description: "Подготовка учителей начальной школы",
      duration: "3 года 10 месяцев",
      icon: "BookOpen",
    },
    {
      title: "Физическая культура",
      code: "49.02.01",
      description: "Подготовка учителей физической культуры",
      duration: "3 года 10 месяцев",
      icon: "Activity",
    },
    {
      title: "Музыкальное образование",
      code: "53.02.01",
      description: "Подготовка учителей музыки и музыкальных руководителей",
      duration: "3 года 10 месяцев",
      icon: "Music",
    },
    {
      title: "Коррекционная педагогика",
      code: "44.02.05",
      description: "Подготовка учителей-дефектологов",
      duration: "3 года 10 месяцев",
      icon: "Heart",
    },
    {
      title: "Психолого-педагогические классы",
      code: "44.02.03",
      description: "Подготовка педагогов дополнительного образования",
      duration: "2 года 10 месяцев",
      icon: "Users",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Специальности подготовки
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите направление для получения качественного педагогического
            образования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Icon
                    name={spec.icon as any}
                    size={24}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    {spec.code}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {spec.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {spec.description}
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>Срок обучения: {spec.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/faculties"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Icon name="ArrowRight" size={20} />
            <span>Подробнее о специальностях</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
