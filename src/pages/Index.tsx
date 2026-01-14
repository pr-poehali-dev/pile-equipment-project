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
            <div className="absolute inset-0">
              <img 
                src="https://cdn.poehali.dev/files/Снимок экрана 2026-01-13 164626.png" 
                alt="КГС Производство" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/85"></div>
            </div>
            
            <div className="relative z-10 px-6 md:px-12 py-8 md:py-12 text-white">
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
              
              <h1 className="font-heading text-3xl md:text-6xl font-bold mb-4 leading-tight">
                Оборудование и<br/>машины для<br/>строительства<br/>свайных фундаментов
              </h1>
              
              <p className="text-lg md:text-2xl text-secondary font-bold tracking-wider leading-relaxed">
                ПРОИЗВОДСТВО • ПОСТАВКА • СЕРВИС
              </p>
            </div>
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

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10 mb-12 border border-primary/10">
              <p className="text-gray-800 font-medium mb-6 text-lg leading-relaxed">
                КоперГруппСервис предлагает полный цикл услуг под ключ, обеспечивая своих клиентов всем необходимым для успешной реализации строительных проектов:
              </p>
              
              <div className="space-y-4">
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
              <div className="flex items-center justify-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" 
                  alt="КГС" 
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-gray-700 mb-6 text-base leading-relaxed max-w-2xl mx-auto">
                КоперГруппСервис — надежный партнер в оборудовании для свайного фундаментостроения
              </p>
              <div className="flex items-center justify-center gap-6">
                <Button 
                  variant="link" 
                  className="text-secondary hover:text-secondary/80 font-semibold group"
                  asChild
                >
                  <a href="https://kgs-ural.ru" target="_blank" rel="noopener noreferrer">
                    Посетить сайт
                    <Icon name="ExternalLink" className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-secondary hover:text-secondary/80 hover:bg-secondary/10 rounded-full"
                  asChild
                >
                  <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <Icon name="MessageCircle" size={24} />
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