

# 🚀 Admin Dashboard Table (React + Tailwind)

This is a fully functional, beautiful **Admin Dashboard Table** built with **React**, **Tailwind CSS**, and **Recharts**. It includes advanced features like sorting, filtering, pagination, dark mode, and CSV export — ideal for modern web applications or internal dashboards.

---
# Live Demo# 
https://admindashboardlevich.netlify.app/
## 📦 Setup Instructions (From a Clean System)

### 🧰 If you don't have anything installed:

1. **Install Node.js (LTS version)**  
   👉 Download and install from: https://nodejs.org/  
   This will install both `node` and `npm`.

2. **(Optional but Recommended) Install Git**  
   👉 Download from: https://git-scm.com/downloads  
   This lets you clone repositories directly.

---
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/admin-dashboard-table.git
   cd admin-dashboard-table
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🧠 Key Decisions and Assumptions

- **Mock Data** is used via a local JSON file (`mockData.json`) for easier testing and no backend dependency.
- **Dark Mode** is managed via React Context + localStorage for persistence.
- **CSV Export** is limited to *visible columns only*, with support for flattening complex values like `metrics`.
- **Component Modularization** improves reusability and maintainability by dividing logic into separate files.
- **Tailwind CSS** is used for a modern, responsive UI with utility-first styling.
- **Sparkline Metrics** are implemented using Recharts for clear activity insights per user.
- **Sticky Columns** (first two) improve usability when scrolling horizontally.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AdminTable.jsx
│   ├── ColumnConfig.jsx
│   ├── ExportCSVButton.jsx
│   ├── ExpandedRow.jsx
│   ├── Filters.jsx
│   ├── Pagination.jsx
│   ├── Sparkline.jsx
│   ├── TableBody.jsx
│   ├── TableHead.jsx
├── context/
│   └── ThemeContext.jsx
├── data/
│   └── mockData.json
├── App.jsx
├── main.jsx
├── index.css
```

---

## ✨ Features

- ✅ **Sorting** with visual ↑↓ indicators
- ✅ **Pagination** with 5 rows per page
- ✅ **Expandable Rows** to show extra user info
- ✅ **Filtering** by name, status, and amount
- ✅ **Column Config** for show/hide visibility
- ✅ **Sticky Columns** for name and email
- ✅ **Dark Mode** with context and localStorage
- ✅ **Export to CSV** (only visible columns)
- ✅ **Responsive Design** (mobile-friendly)
- ✅ **Sparkline Charts** using Recharts

---



## 🧪 Tech Stack

- **React**
- **Tailwind CSS v4**
- **Recharts**
- **Vite (for dev/build tooling)**

---
