import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const equipmentCategories = [
  { icon: "Hammer", title: "Сваебойные молоты", url: "https://kgs-ural.ru/catalog/svaebojnye-moloty/", image: "https://cdn.poehali.dev/files/Сваебойные молоты.png" },
  { icon: "Building2", title: "Копровые мачты", url: "https://kgs-ural.ru/catalog/machty-koprovye/", image: "https://cdn.poehali.dev/files/Копровые мачты.png" },
  { icon: "Waves", title: "Вибропогружатели экскаваторные", url: "https://kgs-ural.ru/catalog/vibropogruzhateli-ekskavatornye/", image: "https://cdn.poehali.dev/files/Вибропогружатели экскаваторные.png" },
  { icon: "Truck", title: "Сваебойные установки", url: "https://kgs-ural.ru/catalog/svaebojnye-mashiny/", image: "https://cdn.poehali.dev/files/Сваебойные машины.png" },
  { icon: "CircleDot", title: "Свайные наголовники", url: "https://kgs-ural.ru/catalog/svajnye-nagolovniki/", image: "https://cdn.poehali.dev/files/Свайные наголовники.png" },
  { icon: "Drill", title: "Буровые машины", url: "https://kgs-ural.ru/catalog/burovye-mashiny/", image: "https://cdn.poehali.dev/files/Буровые машины.png" }
];

const services = [
  "Профессиональные консультации по подбору оборудования и техники",
  "Организация доставки любым удобным способом (ж/д, морским или автомобильным транспортом) до строительной площадки заказчика",
  "Полное таможенное оформление грузов",
  "Шефмонтажные работы непосредственно на объекте",
  "Сервисное обслуживание и обеспечение запасными частями"
];

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                />
                <div className="absolute inset-0 bg-primary/85"></div>
              </div>
              
              <div className="relative z-10 px-6 md:px-12 py-8 md:py-12 text-white cursor-pointer">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                  <img 
                    src="https://cdn.poehali.dev/files/KGS_logo_white_yellow.png" 
                    alt="КГС" 
                    className="h-16 md:h-20 w-auto"
                  />
                  <Badge className="bg-secondary text-white border-0 text-sm font-semibold px-4 py-2 hover:bg-secondary/90 shadow-lg">
                    10+ лет на рынке
                  </Badge>
                </div>
                
                <h1 className="font-heading text-3xl md:text-6xl font-bold mb-6 leading-tight">
                  Оборудование и машины<br/>для строительства свайных фундаментов
                </h1>
                
                <p className="text-lg md:text-2xl text-secondary font-extrabold tracking-wider mb-8">
                  ПРОИЗВОДСТВО • ПОСТАВКА • СЕРВИС
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/20 transition-colors flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <div className="text-base md:text-lg font-bold text-secondary">350+ клиентов</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/20 transition-colors flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <div className="text-base md:text-lg font-bold text-secondary">Прямые поставки</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/20 transition-colors flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <div className="text-sm md:text-base font-bold text-secondary leading-tight">Собственное<br className="md:hidden" /> производство</div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="p-6 md:p-12">
            <a href="https://kgs-ural.ru/catalog/" target="_blank" rel="noopener noreferrer" className="block mb-8 group">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary flex items-center gap-3 hover:text-secondary transition-colors">
                <Icon name="Package" className="text-secondary group-hover:scale-110 transition-transform" size={32} />
                Каталог оборудования
              </h2>
            </a>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {equipmentCategories.map((category, index) => (
                <a 
                  key={index}
                  href={category.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary/20 animate-scale-in cursor-pointer overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-48 overflow-hidden bg-white">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-heading font-bold text-lg text-primary group-hover:text-secondary transition-colors text-center">
                        {category.title}
                      </h3>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            <div className="text-center mb-12 px-4">
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm md:text-base px-6 md:px-8 py-4 md:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group w-full md:w-auto"
                asChild
              >
                <a href="https://kgs-ural.ru/catalog/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Icon name="Package" className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Полный каталог оборудования
                </a>
              </Button>
            </div>

            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10 mb-12 border border-primary/10 overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://cdn.poehali.dev/files/Пост ТГ 1.png" 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="relative text-primary font-medium mb-6 text-lg leading-relaxed">
                <span className="font-heading text-2xl font-bold text-primary">КоперГруппСервис</span> предлагает комплексное обслуживание, обеспечивая своих клиентов всем необходимым для успешной реализации строительных проектов:
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
                    <p className="text-primary leading-relaxed group-hover:text-primary/80 transition-colors">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>



            <div className="text-center py-8 border-t border-gray-200">
              <a href="https://kgs-ural.ru" target="_blank" rel="noopener noreferrer" className="inline-block mb-6 hover:opacity-80 transition-opacity">
                <img 
                  src="https://cdn.poehali.dev/files/Логотип рабочий без фона.png" 
                  alt="КГС" 
                  className="h-28 md:h-32 w-auto"
                />
              </a>
              <p className="text-primary font-extrabold mb-6 md:mb-8 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto px-4">
                КоперГруппСервис — надежный партнер в оборудовании для свайного фундаментостроения
              </p>
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-8 px-4">
                <Button 
                  variant="outline" 
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold text-base md:text-lg px-6 py-3 rounded-xl group w-full md:w-auto"
                  asChild
                >
                  <a href="https://kgs-ural.ru" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Посетить сайт
                    <Icon name="ExternalLink" className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </a>
                </Button>
                <Button 
                  size="lg"
                  className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all group w-full md:w-auto"
                  asChild
                >
                  <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
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