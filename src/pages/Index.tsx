import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workType: '',
    subject: '',
    description: '',
    deadline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const advantages = [
    {
      icon: "Clock",
      title: "Быстрые сроки",
      description: "Выполняем работы в кратчайшие сроки без потери качества"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "90 дней гарантии на все виды работ"
    },
    {
      icon: "Users",
      title: "Опытные авторы",
      description: "Команда из 200+ специалистов разных областей"
    },
    {
      icon: "CreditCard",
      title: "Рассрочка 0%",
      description: "Оплата в рассрочку без переплат"
    },
    {
      icon: "RefreshCw",
      title: "Бесплатные доработки",
      description: "Корректируем работу до полного соответствия"
    },
    {
      icon: "CheckCircle",
      title: "Оригинальность",
      description: "Все работы проверяются на уникальность"
    }
  ];

  const workSteps = [
    {
      number: "01",
      title: "Оставьте заявку",
      description: "Заполните форму с требованиями к работе"
    },
    {
      number: "02", 
      title: "Получите расчет",
      description: "Менеджер свяжется с вами в течение 15 минут"
    },
    {
      number: "03",
      title: "Внесите предоплату",
      description: "Оплатите 50% стоимости для начала работы"
    },
    {
      number: "04",
      title: "Получите работу",
      description: "Готовая работа будет доставлена в срок"
    }
  ];

  const subjects = [
    "Математика", "Физика", "Химия", "Биология", "История", "Философия",
    "Экономика", "Менеджмент", "Маркетинг", "Психология", "Педагогика",
    "Право", "Медицина", "Программирование", "Дизайн", "Архитектура"
  ];

  const workTypes = [
    { name: "Дипломная работа", price: "от 15 000 ₽", time: "14-21 день" },
    { name: "Курсовая работа", price: "от 3 000 ₽", time: "7-14 дней" },
    { name: "Реферат", price: "от 500 ₽", time: "1-3 дня" },
    { name: "Контрольная работа", price: "от 800 ₽", time: "2-5 дней" },
    { name: "Эссе", price: "от 600 ₽", time: "1-2 дня" },
    { name: "Отчет по практике", price: "от 2 000 ₽", time: "5-7 дней" }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Студентка МГУ",
      text: "Заказывала дипломную работу по экономике. Работа выполнена на отлично, все требования соблюдены. Защитилась на 5!",
      rating: 5
    },
    {
      name: "Михаил Сидоров",
      role: "Магистрант СПбГУ",
      text: "Отличный сервис! Курсовая по программированию была готова раньше срока. Автор учел все пожелания.",
      rating: 5
    },
    {
      name: "Елена Козлова",
      role: "Студентка МФТИ",
      text: "Очень довольна качеством работы. Реферат по физике написан грамотно, с актуальными источниками.",
      rating: 5
    },
    {
      name: "Дмитрий Волков",
      role: "Аспирант МГТУ",
      text: "Помогли с отчетом по практике. Работа соответствует всем требованиям ВУЗа. Рекомендую!",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Как гарантируется качество работы?",
      answer: "Все работы проходят многоступенчатую проверку: проверка на плагиат, редактирование, корректура. Предоставляем гарантию 90 дней с момента сдачи."
    },
    {
      question: "Можно ли вносить правки в готовую работу?",
      answer: "Да, мы предоставляем бесплатные доработки в течение гарантийного срока. Количество правок не ограничено."
    },
    {
      question: "Как происходит оплата?",
      answer: "Оплата производится в два этапа: 50% предоплата для начала работы, 50% после получения готовой работы. Возможна рассрочка без переплат."
    },
    {
      question: "Соблюдаются ли сроки выполнения?",
      answer: "Да, мы строго соблюдаем оговоренные сроки. В случае задержки по нашей вине предоставляем скидку на следующий заказ."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-comic-green/20 to-comic-purple/20 comic-style halftone-bg">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-lg shadow-lg">
                <Icon name="GraduationCap" className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">РЕФЕРАТ ЦЕНТР</h1>
                <p className="text-sm text-gray-600">Качественные работы на заказ</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4">
                <a href="https://t.me/referatcentr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Icon name="Send" className="h-5 w-5" />
                  <span className="font-medium">Telegram</span>
                </a>
                <a href="https://vk.com/referatcentr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Icon name="Users" className="h-5 w-5" />
                  <span className="font-medium">ВКонтакте</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-gray-800 font-bold">
                <Icon name="Phone" className="h-5 w-5" />
                <span>+7 (800) 123-45-67</span>
              </div>
              <Button className="bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 text-white">
                ЗАКАЗАТЬ
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-comic-green/30 to-comic-purple/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black comic-text">
                СТУДЕНЧЕСКИЕ РАБОТЫ 
                <span className="text-comic-orange block transform -rotate-2" style={{filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.8))'}}>
                  НА ЗАКАЗ!
                </span>
              </h1>
              <div className="comic-bubble mb-8 max-w-lg mx-auto md:mx-0">
                <p className="text-lg text-black font-semibold leading-relaxed">
                  Выполняем дипломы, курсовые, рефераты и другие работы. 
                  Быстро, качественно, с гарантией!
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                <Badge className="bg-comic-green text-white comic-text text-lg px-4 py-2 border-4 border-black shadow-lg transform rotate-1" style={{filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.8))'}}>
                  <Icon name="Clock" size={16} className="mr-2" />
                  ОТ 1 ДНЯ!
                </Badge>
                <Badge className="bg-comic-purple text-white comic-text text-lg px-4 py-2 border-4 border-black shadow-lg transform -rotate-1" style={{filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.8))'}}>
                  <Icon name="Shield" size={16} className="mr-2" />
                  90 ДНЕЙ!
                </Badge>
                <Badge className="bg-comic-orange text-white comic-text text-lg px-4 py-2 border-4 border-black shadow-lg transform rotate-2" style={{filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.8))'}}>
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  БЕЗ %!
                </Badge>
              </div>
            </div>
            
            <div className="relative">
              <img src="/img/283899ad-7775-43bc-af0b-8abe91ecb686.jpg" alt="Студентка с книгами" className="w-full max-w-md mx-auto rounded-2xl border-4 border-black shadow-lg transform rotate-3 hover:rotate-6 transition-transform" style={{filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,0.8))'}} />
              <div className="absolute -top-4 -right-4 bg-comic-yellow p-4 rounded-full border-4 border-black comic-text text-xl font-bold transform rotate-12 animate-bounce" style={{filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.8))'}}>
                HOT!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 bg-gradient-to-br from-comic-yellow/20 to-comic-orange/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black comic-text mb-4">ЗАКАЗАТЬ РАБОТУ!</h2>
              <div className="comic-bubble mx-auto max-w-lg">
                <p className="text-lg text-black font-semibold">
                  Оставьте заявку и получите расчет в течение 15 минут
                </p>
              </div>
            </div>
            
            <Card className="animate-scale-in border-4 border-black shadow-lg bg-white" style={{filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,0.8))'}}>
              <CardContent className="space-y-4 p-8">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <Input
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="workType"
                    placeholder="Тип работы"
                    value={formData.workType}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="subject"
                    placeholder="Предмет"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <Textarea
                  name="description"
                  placeholder="Описание работы"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                />
                <Input
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleInputChange}
                />
                <Button className="w-full bg-gradient-to-r from-comic-green to-comic-purple hover:from-comic-orange hover:to-comic-red text-white comic-text text-xl px-8 py-6 border-4 border-black shadow-lg transform hover:scale-105 transition-all" style={{filter: 'drop-shadow(6px 6px 0px rgba(0,0,0,0.8))'}}>
                  <Icon name="Send" size={20} className="mr-2" />
                  ЗАКАЗАТЬ РАБОТУ!
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы работаем для вас уже более 10 лет и знаем, как сделать вашу учебу проще
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Как это работает</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Простой процесс заказа в 4 шага
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="text-green-100">Выполненных работ</p>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-green-100">Авторов в команде</p>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-green-100">Довольных клиентов</p>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-green-100">Поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Предметы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выполняем работы по всем предметам и дисциплинам
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {subjects.map((subject, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Более 5000 довольных студентов уже получили качественные работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Цены на услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Прозрачные цены без скрытых доплат
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-[#16a300]">{type.price}</span>
                    <Badge variant="outline">{type.time}</Badge>
                  </div>
                  <Button className="w-full" variant="outline">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Second CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Оставьте заявку прямо сейчас и получите скидку 10% на первый заказ
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Заказать работу со скидкой
          </Button>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">О нашем образовательном центре</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                <strong>Реферат Центр</strong> — это ведущая организация в сфере образовательных услуг, которая специализируется на 
                профессиональном выполнении студенческих работ на заказ. Мы работаем на рынке образовательных услуг уже более 10 лет 
                и за это время помогли тысячам студентов и школьников успешно справиться с академическими задачами.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Наши услуги</h3>
              <p className="mb-4">
                Мы выполняем все виды студенческих работ: <strong>дипломные работы</strong>, <strong>курсовые проекты</strong>, 
                <strong>рефераты</strong>, <strong>контрольные работы</strong>, <strong>эссе</strong>, <strong>отчеты по практике</strong>, 
                <strong>диссертации</strong>, <strong>решение задач</strong>, <strong>НИР</strong>, <strong>сочинения</strong> и многие другие виды академических работ.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Преимущества работы с нами</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Быстрое выполнение:</strong> Минимальные сроки от 1 дня без потери качества</li>
                <li><strong>Гарантия качества:</strong> 90 дней гарантии на все виды работ с бесплатными доработками</li>
                <li><strong>Опытные авторы:</strong> Команда из 200+ специалистов с высшим образованием</li>
                <li><strong>Доступные цены:</strong> Оптимальные цены с возможностью рассрочки без переплат</li>
                <li><strong>Оригинальность:</strong> Все работы проверяются на уникальность</li>
                <li><strong>Соблюдение сроков:</strong> Строгое соблюдение договоренностей по времени</li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Процесс заказа</h3>
              <p className="mb-4">
                Заказать работу в нашем центре очень просто. Достаточно заполнить форму заявки на сайте, указав все требования 
                к работе. Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей и расчета стоимости. 
                После согласования всех условий и внесения предоплаты 50%, мы приступаем к выполнению вашего заказа.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Работаем со всеми учебными заведениями</h3>
              <p className="mb-4">
                Мы сотрудничаем со студентами различных учебных заведений: университетов, институтов, колледжей, техникумов 
                и школ. Наши авторы знакомы с требованиями различных образовательных организаций и всегда учитывают специфику 
                конкретного учебного заведения при выполнении работ.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Все предметы и дисциплины</h3>
              <p className="mb-4">
                Наша команда специалистов охватывает все области знаний: от точных наук (математика, физика, химия) до 
                гуманитарных дисциплин (история, философия, литература). Мы выполняем работы по экономике, менеджменту, 
                маркетингу, психологии, педагогике, праву, медицине, программированию, дизайну и многим другим предметам.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Конфиденциальность и безопасность</h3>
              <p className="mb-4">
                Мы гарантируем полную конфиденциальность всех данных наших клиентов. Информация о заказах и персональные данные 
                надежно защищены и не передаются третьим лицам. Все работы выполняются с нуля специально для каждого клиента.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Связь с нами</h3>
              <p className="mb-4">
                Наша служба поддержки работает круглосуточно 7 дней в неделю. Вы можете связаться с нами по телефону, электронной 
                почте или через онлайн-чат на сайте. Мы всегда готовы ответить на ваши вопросы и помочь с выбором подходящей услуги.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={24} />
                <span className="text-xl font-bold">Реферат Центр</span>
              </div>
              <p className="text-gray-400">
                Качественные студенческие работы на заказ с гарантией
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Дипломные работы</li>
                <li>Курсовые работы</li>
                <li>Рефераты</li>
                <li>Контрольные работы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Часто задаваемые вопросы</li>
                <li>Условия оплаты</li>
                <li>Гарантии</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (800) 123-45-67</p>
                <p>info@referat-center.ru</p>
                <p>Работаем круглосуточно</p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Реферат Центр. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm">
                Политика конфиденциальности
              </Button>
              <Button variant="ghost" size="sm">
                Условия использования
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}