import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const attractions = [
    {
      title: "Бозжыра",
      description: "Самая масштабная достопримечательность Мангистау",
      distance: "270 км",
      icon: "Mountain"
    },
    {
      title: "Подземная мечеть Шакпак-ата",
      description: "Важнейший религиозный памятник",
      distance: "85 км",
      icon: "Building"
    },
    {
      title: "Солончак Тузбаир",
      description: "Одна из самых фотогеничных достопримечательностей",
      distance: "230 км",
      icon: "Camera"
    },
    {
      title: "Голубая бухта",
      description: "Казахстанские Мальдивы",
      distance: "150 км",
      icon: "Waves"
    }
  ];

  const beaches = [
    { name: "Маракеш", location: "1 мкр", icon: "Umbrella" },
    { name: "Достар", location: "1 мкр", icon: "Umbrella" },
    { name: "Набережная", location: "15 мкр", icon: "MapPin" },
    { name: "Скальная тропа", location: "4а мкр", icon: "Mountain" }
  ];

  const restaurants = [
    {
      name: "JETI",
      cuisine: "Казахская и авторская кухня",
      location: "30 мкр, 181",
      phone: "+7 701 934 44 24",
      discount: "10% скидка по буклету",
      featured: true
    },
    {
      name: "Merhaba",
      cuisine: "Средиземноморская кухня",
      location: "Барханс",
      phone: "+7 701 000 00 30"
    },
    {
      name: "Barashka Dine&Drink",
      cuisine: "Азербайджанская и средиземноморская",
      location: "Центр",
      phone: "+7 700 444 07 71"
    }
  ];

  const activities = [
    { activity: "Квадроциклы", phone: "+7 708 954 14 05", icon: "Bike" },
    { activity: "Верховая езда", phone: "+7 775 479 53 90", icon: "Horse" },
    { activity: "Сапборд", phone: "+7 702 614 92 95", icon: "Waves" },
    { activity: "Яхт-клуб", location: "15 мкр", icon: "Anchor" }
  ];

  return (
    <div className="min-h-screen bg-desert-50 font-opensans">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-desert-600 to-desert-500 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(/img/91c7dddd-c8e3-44d7-867e-42206d6a2adc.jpg)` }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 animate-fade-in">
              🧭 АКТАУ
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 opacity-90">
              Город солнца, моря и невероятных пейзажей
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-desert-300 text-desert-900">
                🌊 Каспийское море
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-desert-300 text-desert-900">
                🏜️ Пустыня Мангистау
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-desert-300 text-desert-900">
                ⛰️ Чудеса природы
              </Badge>
            </div>
            <Button size="lg" className="bg-sand text-desert-800 hover:bg-sand-dark text-xl px-8 py-4 font-montserrat font-semibold">
              Начать путешествие
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Beaches & Sea Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold text-desert-800 mb-6">
              🏖 Лучшие пляжи и места для прогулок
            </h2>
            <p className="text-xl text-desert-600 max-w-3xl mx-auto">
              Откройте для себя самые красивые побережья Каспийского моря и уютные места для прогулок
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beaches.map((beach, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-desert-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name={beach.icon} size={32} className="text-ocean" />
                    <Badge variant="outline" className="text-desert-600 border-desert-300">
                      {beach.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-montserrat font-semibold text-desert-800 mb-2">
                    {beach.name}
                  </h3>
                  <Button variant="outline" size="sm" className="w-full border-desert-400 text-desert-700 hover:bg-desert-100">
                    Показать на карте
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-20 bg-desert-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold text-desert-800 mb-6">
              ⛰️ ТОП-6 чудес Мангистау
            </h2>
            <p className="text-xl text-desert-600 max-w-3xl mx-auto">
              Удивительные природные достопримечательности, которые поразят вас своей красотой
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-desert-300 bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name={attraction.icon} size={32} className="text-desert-600" />
                      <div>
                        <CardTitle className="text-xl font-montserrat text-desert-800">
                          {attraction.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge className="bg-ocean text-white">
                      {attraction.distance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-desert-600 mb-4">
                    {attraction.description}
                  </p>
                  <Button className="w-full bg-desert-600 hover:bg-desert-700 text-white">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div 
              className="relative h-80 rounded-2xl bg-cover bg-center mb-6 overflow-hidden"
              style={{ backgroundImage: `url(/img/c5f6b288-a0b0-46a8-92a7-46b80aa61e89.jpg)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-desert-900/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-montserrat font-bold mb-2">
                    Джип-туры по пустыне
                  </h3>
                  <p className="text-lg opacity-90">
                    Mangystau Safari • Kettik Mangystau
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold text-desert-800 mb-6">
              🍽️ Где поесть
            </h2>
            <p className="text-xl text-desert-600 max-w-3xl mx-auto">
              Лучшие рестораны города для знакомства с местной и международной кухней
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${
                restaurant.featured 
                  ? 'border-sand-dark border-2 bg-gradient-to-br from-sand-light to-white transform scale-105' 
                  : 'border-desert-200'
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-montserrat text-desert-800">
                      {restaurant.name}
                    </CardTitle>
                    {restaurant.featured && (
                      <Badge className="bg-sand-dark text-white">
                        ⭐ РЕКОМЕНДУЕМ
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-desert-600">{restaurant.cuisine}</p>
                  <div className="flex items-center space-x-2 text-sm text-desert-500">
                    <Icon name="MapPin" size={16} />
                    <span>{restaurant.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-desert-500">
                    <Icon name="Phone" size={16} />
                    <span>{restaurant.phone}</span>
                  </div>
                  {restaurant.discount && (
                    <Badge variant="outline" className="bg-sand-light text-desert-800 border-sand-dark">
                      {restaurant.discount}
                    </Badge>
                  )}
                  <Button className="w-full mt-4 bg-desert-600 hover:bg-desert-700 text-white">
                    Показать меню
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-desert-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold text-desert-800 mb-6">
              🔥 Активный отдых
            </h2>
            <p className="text-xl text-desert-600 max-w-3xl mx-auto">
              Захватывающие приключения и развлечения для всей семьи
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-desert-200 bg-white">
                <CardHeader className="text-center">
                  <Icon name={activity.icon} size={40} className="mx-auto text-ocean mb-3" />
                  <CardTitle className="text-lg font-montserrat text-desert-800">
                    {activity.activity}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {activity.phone && (
                    <p className="text-sm text-desert-600 mb-3">{activity.phone}</p>
                  )}
                  {activity.location && (
                    <p className="text-sm text-desert-600 mb-3">{activity.location}</p>
                  )}
                  <Button size="sm" variant="outline" className="border-desert-400 text-desert-700 hover:bg-desert-100">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold text-desert-800 mb-6">
              📞 Полезные контакты
            </h2>
            <p className="text-xl text-desert-600 max-w-3xl mx-auto">
              Важная информация для комфортного пребывания в Актау
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-desert-200">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat text-desert-800 flex items-center">
                  <Icon name="Building2" size={24} className="mr-3 text-ocean" />
                  Частные клиники
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-desert-700">Sofie MedGroup</p>
                  <p className="text-sm text-desert-600">1А мкр, +7 771 308 65 66</p>
                </div>
                <div>
                  <p className="font-semibold text-desert-700">Нейрон</p>
                  <p className="text-sm text-desert-600">14 мкр, +7 775 424 85 25</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-desert-200">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat text-desert-800 flex items-center">
                  <Icon name="CreditCard" size={24} className="mr-3 text-ocean" />
                  Обмен валют
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-desert-700">YES Exchange</p>
                  <p className="text-sm text-desert-600">Аэропорт, +7 708 914 62 84</p>
                </div>
                <div>
                  <p className="font-semibold text-desert-700">Golden Partners</p>
                  <p className="text-sm text-desert-600">6 мкр, +7 702 358 72 24</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-desert-200">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat text-desert-800 flex items-center">
                  <Icon name="Smartphone" size={24} className="mr-3 text-ocean" />
                  Полезные приложения
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-desert-700">Такси</p>
                  <p className="text-sm text-desert-600">InDrive, Yandex Go</p>
                </div>
                <div>
                  <p className="font-semibold text-desert-700">Доставка</p>
                  <p className="text-sm text-desert-600">Wolt, Glovo, Chocofood</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-desert-600 to-sand-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            🌊 Откройте вкус Актау с JETI
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ваш гастрономический ориентир в городе — свежие морепродукты, локальные блюда, уют у моря
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-lg">📍 30 микрорайон | ☎ +7 701 934 44 24</p>
            <Badge className="bg-sand text-desert-800 text-lg px-6 py-2">
              Покажите этот сайт — получите скидку 10%!
            </Badge>
          </div>
          <Button size="lg" className="bg-white text-desert-600 hover:bg-desert-50 text-xl px-8 py-4 font-montserrat font-semibold">
            Забронировать столик
            <Icon name="ExternalLink" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-desert-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">АКТАУ</h3>
              <p className="text-desert-200">
                Город солнца, моря и невероятных пейзажей. Откройте для себя красоту Мангистау!
              </p>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">Бытовые фразы на казахском</h4>
              <div className="space-y-2 text-desert-200">
                <p>Привет — Сәлем!</p>
                <p>Спасибо — Рахмет</p>
                <p>Сколько стоит? — Бағасы қанша?</p>
                <p>Где пляж? — Жағажай қайда?</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">⚠ Важно знать</h4>
              <div className="space-y-2 text-desert-200 text-sm">
                <p>• Купание в неположенных местах — штраф</p>
                <p>• Фото военных объектов — запрещено</p>
                <p>• Штрафы: мусор, шелуха от семечек</p>
              </div>
            </div>
          </div>
          <div className="border-t border-desert-600 mt-8 pt-8 text-center text-desert-300">
            <p>&copy; 2024 Туристический портал Актау. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;