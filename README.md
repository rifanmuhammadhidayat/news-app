# NewsApp - React News Portal

A responsive news portal built with React, TypeScript, Vite, and Ant Design, fetching real-time data from NewsAPI. This project was developed as part of a frontend technical assessment.

## ✨ Features

- ✅ List and detail views for news articles
- ✅ Categorized top headlines (business, sports, health, etc.)
- ✅ Responsive layout with Masonry Grid
- ✅ Theme customization using Ant Design ConfigProvider
- ✅ Reusable components with clear separation of concerns
- ✅ Article sharing and saving UI
- ✅ Sticky sidebar for top news
- ✅ Unit testing with Jest and React Testing Library

## 🧱 Tech Stack

- **React + TypeScript**
- **Vite** (as the build tool)
- **Ant Design** (for UI components)
- **React Router** (for navigation)
- **Jest + React Testing Library** (for testing)
- **NewsAPI** (for real-time news)

## 🧩 Project Structure

src/
├── features/
│ └── articles/
│ ├── components/ # All UI components (cards, sections, etc.)
│ ├── hooks/ # React hooks (e.g., useNews)
│ ├── services/ # API service (newsService.ts)
│ ├── types/ # TypeScript types
│ ├── utils/ # Data converters
│ └── tests/ # Unit tests
├── layout/ # Header and Footer
├── pages/ # Home and Detail pages
├── router/ # Routing configuration
├── utils/ # Shared utility functions


## 📦 Installation & Running Locally

1. **Clone the repo**
```bash
git clone https://github.com/rifanmuhammadhidayat/news-app.git
cd news-app

2. **Install dependencies**
npm install

3. **Run the app**
npm run dev

4. **Run tests**
npm run test


🧪 Testing

This project includes unit tests for core UI components:

    - ArticlesSection
    - FeaturedArticleCard
    - SmallArticleCard

Tests are located in:
src/features/articles/___tests___/


Testing stack:

    - Jest
    - React Testing Library

🧠 Clean Architecture

The project follows a lightweight Clean Architecture structure by separating:

    - UI components
    - Business logic (hooks)
    - External services
    - Data transformation (converters)
    - Types and domain entities

This ensures scalability and easy maintainability.


📝 Notes

This project was developed as part of a Frontend Technical Test. It prioritizes:

    - Code readability and structure
    - UI/UX design clarity
    - React and TypeScript best practices