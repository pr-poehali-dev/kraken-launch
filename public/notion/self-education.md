# 🎓 База самообразования

> Знания — единственный актив, который нельзя потерять.

---

## 🗺️ Дорожная карта обучения

```
Python Basics → ООП → Библиотеки → Парсинг → Боты → Продвинутый Python
     ✅              ✅         🔄            🔄         ⬜             ⬜

C# Basics → .NET → LINQ → async/await → WinForms/WPF → ASP.NET
    ✅          ✅      🔄        ⬜                ⬜            ⬜
```

---

## 📚 Книги

### 📖 Читаю сейчас

| Книга | Автор | Прогресс | Заметки |
|-------|-------|----------|---------|
| Чистый код | Роберт Мартин | 45% | Глава 5 — форматирование |

### ✅ Прочитано

| Книга | Автор | Дата | Оценка | Главная мысль |
|-------|-------|------|--------|---------------|
| Python. К вершинам мастерства | Лусиану Рамальо | Март 2026 | ⭐⭐⭐⭐⭐ | Магические методы — ключ к питоничному коду |
| Алгоритмы. Вводный курс | Томас Кормен | Янв 2026 | ⭐⭐⭐⭐ | Big O — фундамент оценки эффективности |

### 📋 Хочу прочитать

| Книга | Автор | Приоритет |
|-------|-------|-----------|
| Паттерны проектирования | Банда четырёх | 🔴 Высокий |
| Прагматичный программист | Хант, Томас | 🔴 Высокий |
| Автостопом по Python | Кеннет Рейтц | 🟡 Средний |
| C# 10 и .NET 6 | Марк Прайс | 🟡 Средний |
| Грокаем алгоритмы | Адитья Бхаргава | 🟢 Низкий |

---

## 🎥 Курсы и видео

### 🔄 Прохожу сейчас

| Курс | Платформа | Прогресс | Ссылка |
|------|-----------|----------|--------|
| Python: полный курс | YouTube | 60% | — |
| aiogram 3 — телеграм боты | YouTube | 30% | — |

### ✅ Завершены

| Курс | Платформа | Дата | Оценка |
|------|-----------|------|--------|
| Python для начинающих | Stepik | Фев 2026 | ⭐⭐⭐⭐⭐ |
| Git и GitHub с нуля | YouTube | Янв 2026 | ⭐⭐⭐⭐ |

### 📋 В очереди

| Курс | Платформа | Приоритет |
|------|-----------|-----------|
| Selenium WebDriver на Python | Udemy | 🔴 Высокий |
| Docker для разработчиков | YouTube | 🔴 Высокий |
| PostgreSQL для Python-разработчиков | Stepik | 🟡 Средний |
| C# — продвинутый уровень | Udemy | 🟡 Средний |
| FastAPI с нуля | YouTube | 🟢 Низкий |

---

## 💡 База знаний

### Python

#### Полезные библиотеки

| Библиотека | Для чего | Изучено |
|------------|---------|---------|
| requests | HTTP-запросы | ✅ |
| BeautifulSoup | Парсинг HTML | ✅ |
| Selenium | Браузерная автоматизация | 🔄 |
| Playwright | Современная автоматизация | ⬜ |
| Scrapy | Крупный парсинг | ⬜ |
| aiogram | Telegram-боты | 🔄 |
| pandas | Работа с данными | 🔄 |
| openpyxl | Excel-файлы | ✅ |
| schedule | Планировщик задач | ✅ |
| SQLAlchemy | ORM для БД | ⬜ |

#### Мои сниппеты

```python
# Базовый HTTP-запрос с заголовками
import requests

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}
response = requests.get("https://example.com", headers=headers)
print(response.status_code)
```

```python
# Парсинг таблицы через BeautifulSoup
from bs4 import BeautifulSoup
import requests

url = "https://example.com/table"
soup = BeautifulSoup(requests.get(url).text, "html.parser")
rows = soup.find("table").find_all("tr")
for row in rows:
    cells = [td.text.strip() for td in row.find_all("td")]
    print(cells)
```

```python
# Простой Telegram-бот на aiogram 3
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
import asyncio

bot = Bot(token="YOUR_TOKEN")
dp = Dispatcher()

@dp.message(Command("start"))
async def start(message: types.Message):
    await message.answer("Привет! Я бот 🤖")

async def main():
    await dp.start_polling(bot)

asyncio.run(main())
```

---

### C#

#### Мои сниппеты

```csharp
// HTTP-запрос на C#
using System.Net.Http;

var client = new HttpClient();
client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0");
var response = await client.GetStringAsync("https://example.com");
Console.WriteLine(response);
```

```csharp
// Парсинг HTML через HtmlAgilityPack
using HtmlAgilityPack;

var web = new HtmlWeb();
var doc = web.Load("https://example.com");
var nodes = doc.DocumentNode.SelectNodes("//h2");
foreach (var node in nodes)
    Console.WriteLine(node.InnerText.Trim());
```

---

## 🧠 Конспекты

### Паттерны проектирования (кратко)

| Паттерн | Тип | Суть | Когда применять |
|---------|-----|------|-----------------|
| Singleton | Порождающий | Один экземпляр класса | БД-соединение, логгер |
| Factory | Порождающий | Фабрика объектов | Создание разных парсеров |
| Observer | Поведенческий | Подписка на события | Уведомления в боте |
| Strategy | Поведенческий | Замена алгоритма | Разные методы парсинга |
| Decorator | Структурный | Обёртка с доп. функциями | Логирование запросов |

### Git — шпаргалка

| Команда | Что делает |
|---------|------------|
| `git init` | Инициализировать репозиторий |
| `git add .` | Добавить все изменения |
| `git commit -m "msg"` | Сохранить коммит |
| `git push origin main` | Отправить на GitHub |
| `git pull` | Получить изменения |
| `git branch feature` | Создать ветку |
| `git checkout feature` | Переключиться на ветку |
| `git merge feature` | Слить ветку в текущую |
| `git stash` | Временно сохранить изменения |
| `git log --oneline` | Краткая история коммитов |

---

## 🏆 Достижения

| Достижение | Дата | Описание |
|------------|------|----------|
| 🥇 Первый коммерческий заказ | — | — |
| 📦 Первый проект на GitHub | — | — |
| 🤖 Первый Telegram-бот | — | — |
| 🕷️ Первый рабочий парсер | — | — |
| 💰 Первые 10 000 ₽ на фрилансе | — | — |

---

## 🔗 Полезные ресурсы

### Документация
- [Python docs](https://docs.python.org/3/)
- [aiogram docs](https://docs.aiogram.dev/)
- [Microsoft C# docs](https://learn.microsoft.com/ru-ru/dotnet/csharp/)
- [Scrapy docs](https://docs.scrapy.org/)

### Практика
- [LeetCode](https://leetcode.com/) — алгоритмы
- [Codewars](https://www.codewars.com/) — задачи на Python/C#
- [replit.com](https://replit.com/) — быстрый онлайн-редактор

### Фриланс
- [FL.ru](https://fl.ru/) — заказы на парсинг и боты
- [Kwork.ru](https://kwork.ru/) — быстрые заказы
- [Habr Карьера](https://career.habr.com/) — вакансии

### YouTube-каналы
- Диджитализируй — Python для начинающих
- Хауди Хо — продвинутый Python
- Тимофей Хирьянов — алгоритмы и структуры данных
