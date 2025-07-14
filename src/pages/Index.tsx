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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">Реферат Центр</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Icon name="Phone" size={20} className="text-gray-600" />
                <span className="text-gray-600">+7 (800) 123-45-67</span>
              </div>
              <Button variant="outline" size="sm">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Чат
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Студенческие работы <br />
                <span className="text-yellow-300">на заказ</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Выполняем дипломы, курсовые, рефераты и другие работы. 
                Быстро, качественно, с гарантией.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Сроки от 1 дня
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Гарантия 90 дней
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  Рассрочка 0%
                </Badge>
              </div>
            </div>
            
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-center">Заказать работу</CardTitle>
                <CardDescription className="text-center">
                  Оставьте заявку и получите расчет в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                <Button className="w-full bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700">
                  <Icon name="Send" size={16} className="mr-2" />
                  Заказать работу
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
                    <span className="text-2xl font-bold text-primary">{type.price}</span>
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