# 🛒 Shopping Cart (React Project)

This is a mock e-commerce shopping cart application built with **React**, as part of the [The Odin Project](https://www.theodinproject.com/) curriculum.

🔗 **Live Demo**: https://rainbow-marigold-e5e7fd.netlify.app/

---

## 📌 Features

- 🏠 **Home Page** — a simple welcome layout  
- 🛍️ **Shop Page** — displays product cards fetched from [FakeStore API](https://fakestoreapi.com/)  
- ➕➖ Users can select product quantities using buttons or manually  
- 🛒 **Cart Summary** — shown in the navigation bar and checkout page  
- 📦 **Checkout Page** — lists all items added with total price calculation  
- 🔄 **Routing** — handled with `react-router-dom`  
- ✅ **Prop validation** with `PropTypes`  
- 🧪 **Test coverage** with **React Testing Library + Vitest**

---

## 🚀 Technologies Used

- React 19 + Vite  
- React Router DOM (v7)  
- CSS Modules  
- ESLint 9 (flat config)  
- Prettier  
- React Testing Library + Vitest   
- Hosted on: [Netlify](https://rainbow-marigold-e5e7fd.netlify.app/)

---

## 📁 Project Structure (Simplified)

```
src/
├── assets/              # Static assets (images, etc.)
├── components/          # Shared UI components
│   ├── Header.jsx
│   ├── Header.module.css
│   ├── ProductCard.jsx
│   ├── ProductCard.module.css
│   └── ProductCard.test.jsx
├── pages/               # Route views (Home, Shop, Checkout)
├── routes/              # React Router setup
├── App.jsx              # Root layout component
├── main.jsx             # React entry point
setupTests.js            # Test setup file
.eslint.config.js        # ESLint flat config
index.html               # Main HTML file
vite.config.js           # Vite config
```

---

## 📦 API

This project fetches product data from the [FakeStore API](https://fakestoreapi.com/products).

---

## 🧪 Testing

Tests are written using **React Testing Library** and run with **Vitest**.

```bash
npm run test
```

---

## 🙋‍♂️ Author

Made by **Alfie** — as part of [The Odin Project](https://www.theodinproject.com/) curriculum.
