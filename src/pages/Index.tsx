import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const equipmentCategories = [
  { icon: "Hammer", title: "Сваебойные молоты" },
  { icon: "Building2", title: "Копровые мачты" },
  { icon: "Waves", title: "Вибропогружатели экскаваторные" },
  { icon: "Truck", title: "Сваебойные установки" },
  { icon: "CircleDot", title: "Свайные наголовники" },
  { icon: "Drill", title: "Буровые машины" }
];

const services = [
  "Профессиональные консультации по подбору оборудования и техники",
  "Организация доставки любым удобным способом (ж/д, морским или автомобильным транспортом) до строительной площадки заказчика",
  "Полное таможенное оформление грузов",
  "Шефмонтажные работы непосредственно на объекте",
  "Сервисное обслуживание и обеспечение запасными частями"
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <div className="relative overflow-hidden">
            <a href="https://kgs-ural.ru" target="_blank" rel="noopener noreferrer" className="block">
              <div className="absolute inset-0">
                <img 
                  src="https://cdn.poehali.dev/files/с полом.png" 
                  alt="КГС Производство" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/85"></div>
              </div>
              
              <div className="relative z-10 px-6 md:px-12 py-8 md:py-12 text-white cursor-pointer">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" 
                      alt="КГС" 
                      className="h-16 md:h-20 w-auto"
                    />
                  </div>
                  <Badge className="bg-secondary text-white border-0 text-sm font-semibold px-4 py-2 hover:bg-secondary/90 shadow-lg">
                    10+ лет на рынке
                  </Badge>
                </div>
                
                <h1 className="font-heading text-3xl md:text-6xl font-bold mb-6 leading-tight">
                  Оборудование и<br/>машины для<br/>строительства<br/>свайных фундаментов
                </h1>
                
                <p className="text-lg md:text-2xl text-secondary font-bold tracking-wider mb-8">
                  ПРОИЗВОДСТВО • ПОСТАВКА • СЕРВИС
                </p>
                
                <div className="grid grid-cols-3 gap-6 max-w-3xl">
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                      <div className="text-3xl font-bold text-secondary mb-1">350+</div>
                      <div className="text-sm text-white/90">клиентов</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                      <div className="text-2xl font-bold text-secondary mb-1">Прямые</div>
                      <div className="text-sm text-white/90">поставки</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                      <div className="text-xl font-bold text-secondary mb-1">Собственное</div>
                      <div className="text-sm text-white/90">производство</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Icon name="Package" className="text-secondary" size={32} />
              Каталог оборудования
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {equipmentCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <Icon name={category.icon as any} className="text-secondary" size={28} />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10 mb-12 border border-primary/10 overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://cdn.poehali.dev/files/Пост ТГ 1.png" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="relative text-gray-800 font-medium mb-6 text-lg leading-relaxed">
                <span className="font-heading text-2xl font-bold text-primary">КоперГруппСервис</span> предлагает полный цикл услуг под ключ, обеспечивая своих клиентов всем необходимым для успешной реализации строительных проектов:
              </p>
              
              <div className="relative space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 group animate-fade-in"
                    style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" className="text-white" size={16} />
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 md:p-10 mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                Свяжитесь с нами уже сегодня
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group"
                  asChild
                >
                  <a href="mailto:info@kgs-ural.ru">
                    <Icon name="Mail" className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                    Получить консультацию
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group"
                  asChild
                >
                  <a href="tel:88006007465">
                    <Icon name="Phone" className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                    8 (800) 600-74-65
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-center py-8 border-t border-gray-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/Логотип рабочий без фона.png" 
                  alt="КГС" 
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-gray-900 font-bold mb-8 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                КоперГруппСервис — надежный партнер в оборудовании для свайного фундаментостроения
              </p>
              <div className="flex items-center justify-center gap-8">
                <Button 
                  variant="outline" 
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold text-lg px-6 py-3 rounded-xl group"
                  asChild
                >
                  <a href="https://kgs-ural.ru" target="_blank" rel="noopener noreferrer">
                    Посетить сайт
                    <Icon name="ExternalLink" className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </a>
                </Button>
                <Button 
                  size="lg"
                  className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                  asChild
                >
                  <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                    Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}