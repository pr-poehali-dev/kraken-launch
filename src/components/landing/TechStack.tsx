import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Server, Database, Wrench, Binary } from "lucide-react"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Языки программирования",
      description: "Основные языки для автоматизации и разработки",
      skills: [
        { name: "C#", level: 90 },
        { name: "Python", level: 92 },
        { name: ".NET", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Bash", level: 75 },
      ],
    },
    parsing: {
      icon: <Binary className="h-6 w-6" />,
      title: "Парсинг и сбор данных",
      description: "Извлечение данных с сайтов и из API",
      skills: [
        { name: "Requests", level: 92 },
        { name: "BeautifulSoup", level: 90 },
        { name: "Scrapy", level: 85 },
        { name: "Selenium", level: 88 },
        { name: "Playwright", level: 85 },
        { name: "Обход защиты", level: 80 },
      ],
    },
    bots: {
      icon: <Server className="h-6 w-6" />,
      title: "Телеграм-боты",
      description: "Боты для бизнеса и автоматизации",
      skills: [
        { name: "aiogram", level: 90 },
        { name: "python-telegram-bot", level: 88 },
        { name: "Telegram.Bot (C#)", level: 85 },
        { name: "Платежи и подписки", level: 82 },
        { name: "Рассылки", level: 88 },
      ],
    },
    automation: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Автоматизация",
      description: "Скрипты для рутинных задач",
      skills: [
        { name: "Pandas", level: 88 },
        { name: "Openpyxl / Excel", level: 85 },
        { name: "Планировщики задач", level: 82 },
        { name: "Работа с API", level: 90 },
        { name: "Google Sheets API", level: 80 },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Базы данных",
      description: "Хранение и обработка данных",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "SQLite", level: 88 },
        { name: "MySQL", level: 80 },
        { name: "Redis", level: 75 },
      ],
    },
    tools: {
      icon: <Layout className="h-6 w-6" />,
      title: "Инструменты",
      description: "Среды и сервисы разработки",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 82 },
        { name: "Linux", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Visual Studio", level: 88 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
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
            Навыки
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Техническая экспертиза</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">+{category.skills.length - 3} ещё</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            Глубокий опыт в парсинге данных, разработке телеграм-ботов и автоматизации
            рутины на C# и Python позволяет быстро решать практические задачи бизнеса
            и собирать надёжные рабочие инструменты.
          </p>
        </motion.div>
      </div>
    </section>
  )
}