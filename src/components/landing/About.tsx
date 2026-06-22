import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            Обо мне
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Кто я</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">Разработчик-автоматизатор</h3>
            <p className="text-muted-foreground mb-6">
              Специализируюсь на C# и Python: пишу парсеры данных, автоматизирую рутинные
              процессы скриптами и разрабатываю телеграм-ботов. Помогаю бизнесу экономить
              время и собирать нужную информацию без ручного труда.
            </p>
            <p className="text-muted-foreground mb-6">
              Беру задачи под ключ — от сбора требований до готового рабочего решения.
              Парсю сайты и маркетплейсы, обхожу защиту, настраиваю выгрузку данных
              в нужном формате и подключаю боты к любым сервисам.
            </p>
            <p className="text-muted-foreground">
              Работаю как с разовыми задачами, так и над долгосрочными проектами.
              Ценю чистый код, стабильность и понятные сроки.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Парсинг данных</h4>
                      <p className="text-muted-foreground">
                        Собираю данные с сайтов, маркетплейсов и API. Обхожу защиту,
                        чищу и выгружаю результат в нужном формате.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Телеграм-боты</h4>
                      <p className="text-muted-foreground">
                        Создаю ботов для продаж, уведомлений и автоматизации —
                        с оплатой, рассылками и интеграциями.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Автоматизация</h4>
                      <p className="text-muted-foreground">
                        Пишу скрипты, которые избавляют от рутины: выгрузки, отчёты,
                        обработка файлов и интеграция сервисов между собой.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}