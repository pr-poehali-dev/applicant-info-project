import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  ГБПОУ РМ "Зубово-Полянский
                  <br />
                  Педагогический Колледж"
                </h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Государственное бюджетное профессиональное образовательное
              учреждение Республики Мордовия, готовящее квалифицированных
              педагогических работников с 1958 года.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <div className="text-gray-400 text-sm">
                  431140, Республика Мордовия,
                  <br />
                  пгт. Зубова Поляна,
                  <br />
                  ул. Новикова-Прибоя, д. 15
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon
                  name="Phone"
                  size={16}
                  className="text-blue-400 flex-shrink-0"
                />
                <div className="text-gray-400 text-sm">+7 (83458) 2-15-68</div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon
                  name="Mail"
                  size={16}
                  className="text-blue-400 flex-shrink-0"
                />
                <div className="text-gray-400 text-sm">zpk@edurm.ru</div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex justify-between">
                <span>Пн - Пт:</span>
                <span>8:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Суббота:</span>
                <span>8:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>Воскресенье:</span>
                <span>Выходной</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500">
                  Приемная комиссия работает
                  <br />с 1 июня по 15 августа
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ГБПОУ РМ "Зубово-Полянский Педагогический Колледж". Все
              права защищены.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                О колледже
              </a>
              <a
                href="/admission"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Поступление
              </a>
              <a
                href="/contacts"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
