import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Парсер маркетплейсов",
      shortDescription: "Сбор цен и остатков с Wildberries, Ozon и Яндекс.Маркета.",
      description:
        "Парсер цен, остатков и характеристик товаров с крупных маркетплейсов с выгрузкой в Excel.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Requests", "BeautifulSoup", "Pandas"],
      features: [
        "Сбор цен и остатков",
        "Парсинг характеристик и отзывов",
        "Выгрузка в Excel и Google Sheets",
        "Запуск по расписанию",
        "Уведомления об изменениях",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Парсер собирает цены, остатки, характеристики и отзывы товаров с Wildberries, Ozon и Яндекс.Маркета. Написан на Python, обходит ограничения по запросам, чистит и нормализует данные, выгружает результат в Excel или Google Sheets. Поддерживает запуск по расписанию и уведомления при изменении цен конкурентов.",
    },
    {
      id: 2,
      title: "Телеграм-бот для продаж",
      shortDescription: "Бот-магазин с каталогом, корзиной и онлайн-оплатой.",
      description: "Телеграм-бот с каталогом товаров, корзиной, приёмом оплаты и админ-панелью.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "aiogram", "PostgreSQL", "ЮKassa"],
      features: [
        "Каталог и корзина",
        "Приём онлайн-оплаты",
        "Админ-панель заказов",
        "Рассылки клиентам",
        "Уведомления о заказах",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Телеграм-бот для продаж с полным циклом покупки: каталог с категориями, корзина, оформление заказа и приём онлайн-оплаты через ЮKassa. Написан на Python с aiogram, данные хранятся в PostgreSQL. Включает админ-панель для управления товарами и заказами, а также массовые рассылки по базе клиентов.",
    },
    {
      id: 3,
      title: "Бот уведомлений и мониторинга",
      shortDescription: "Отслеживает события и мгновенно присылает оповещения в Telegram.",
      description: "Бот, который мониторит сайты и сервисы и присылает уведомления о событиях.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "aiogram", "Requests", "SQLite"],
      features: [
        "Мониторинг сайтов и цен",
        "Мгновенные оповещения",
        "Гибкие фильтры событий",
        "История уведомлений",
        "Несколько каналов получателей",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Бот отслеживает появление новых товаров, изменение цен, статусы заказов или любые события на сайтах и в API, мгновенно присылая уведомления в Telegram. Написан на Python, поддерживает гибкие фильтры, историю событий и отправку оповещений сразу нескольким получателям или в группы.",
    },
    {
      id: 4,
      title: "Скрипт автоматизации отчётов",
      shortDescription: "Автоматическая выгрузка и формирование отчётов из разных источников.",
      description: "Скрипт собирает данные из API и таблиц и формирует готовые отчёты в Excel.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Pandas", "Openpyxl", "API"],
      features: ["Сбор данных из API", "Объединение источников", "Готовые Excel-отчёты", "Запуск по расписанию", "Отправка на почту"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Скрипт автоматизации избавляет от ручного сведения отчётов: собирает данные из нескольких API и таблиц, объединяет и обрабатывает их с помощью Pandas и формирует готовый Excel-отчёт. Запускается по расписанию и автоматически отправляет результат на почту ответственным сотрудникам.",
    },
    {
      id: 5,
      title: "Парсер на C# с обходом защиты",
      shortDescription: "Высоконагруженный парсер на C# с прокси и обходом блокировок.",
      description: "Парсер на C#/.NET с поддержкой прокси, многопоточности и обхода защиты.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["C#", ".NET", "Selenium", "SQL"],
      features: ["Многопоточный сбор", "Ротация прокси", "Обход капчи и блокировок", "Сохранение в БД", "Логирование и устойчивость"],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Производительный парсер на C# и .NET для сбора больших объёмов данных. Использует ротацию прокси, многопоточность и эмуляцию браузера через Selenium для обхода защиты и капчи. Данные сохраняются в базу, реализованы подробное логирование и автоматическое восстановление после сбоев.",
    },
    {
      id: 6,
      title: "Бот-ассистент с интеграциями",
      shortDescription: "Телеграм-бот, связывающий CRM, таблицы и платёжные сервисы.",
      description: "Бот-ассистент с интеграцией CRM, Google Sheets и внешних сервисов.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "aiogram", "Google API", "REST"],
      features: [
        "Интеграция с CRM",
        "Синхронизация с Google Sheets",
        "Сценарии и кнопки",
        "Роли и доступы",
        "Сбор заявок",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Телеграм-бот-ассистент для бизнеса, который связывает воедино CRM, Google Sheets и внешние сервисы через API. Принимает заявки, заносит данные в таблицы и CRM, поддерживает сценарии с кнопками, роли и разграничение доступа. Написан на Python с aiogram и легко расширяется новыми интеграциями.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Портфолио
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Избранные проекты</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Ключевые функции:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Код
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Демо
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Подробнее
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Ключевые функции:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Смотреть код
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Демо
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}