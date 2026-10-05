# 🌹 ROSA — Beauty & Skincare E-Commerce

> A modern, fully-responsive e-commerce store for beauty and skincare products, built with **React 19** and **Vite**.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://ecommerce-react-nine-nu.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-black)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/license-MIT-blue)](#license)

🔗 **Live Demo:** [ecommerce-react-nine-nu.vercel.app](https://ecommerce-react-nine-nu.vercel.app/)

---

## ✨ Features

### 🛍️ Shopping Experience
- **Browse products** by category (Skincare, Makeup, Body Care)
- **Product detail pages** with descriptions, ratings, and related products
- **Add to cart** with quantity control
- **Wishlist** — save favorite items (persists in localStorage)
- **Live search** in the header with instant dropdown results
- **Full checkout flow** with form validation and success page
- **Category pages** with dedicated routes

### 💾 State Management
- **Cart state** managed globally with React Context API
- **Wishlist state** with its own Context
- **localStorage persistence** — cart and wishlist survive page refresh
- **Toast notifications** for every action

### 🎨 UI / UX
- **Skeleton loading** with shimmer animation
- **Page transitions** using Framer Motion's `AnimatePresence`
- **Scroll reveal animations** for sections and product grids
- **Micro-interactions** — heart pulse on wishlist, cart count bump, button hover glow
- **Staggered entrance** for Hero and Categories
- **Fully responsive** — mobile, tablet, desktop
- **Custom Rosa pink theme**
- **Smooth hover animations** on product cards

### 🧭 Navigation
- **React Router v6** — real URLs for every page
- **Back-button support** (browser history works properly)
- **Search page** (`/search?q=...`) with URL parameters
- **404 handling** for missing products

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **Vite 8** | Build tool & dev server |
| **React Router v6** | Client-side routing |
| **Context API** | Global state (cart, wishlist) |
| **localStorage** | Persistent cart & wishlist |
| **Framer Motion** | Animations & transitions |
| **react-hot-toast** | Toast notifications |
| **lucide-react** | Modern SVG icons |
| **CSS3** | Custom styling (no framework) |

---

## 📂 Project Structure
