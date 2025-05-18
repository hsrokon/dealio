# Dealio — Smart Coupon Collection Platform

Dealio is a responsive and dynamic coupon-collection web app where users can browse, save, and reveal curated discount codes across categories like Food, Fashion, Electronics, Travel, and more. Built with React, Firebase Authentication, Framer Motion, and Tailwind CSS.

---

## 📈 Live Demo

**Live Site:** [https://deali0.web.app/](https://deali0.web.app/) <!-- Replace with your real URL after Firebase deployment -->

---

## ✨ Features

* ✅ Responsive layout with animated 3D coupon cards (Framer Motion)
* ✨ Spotlight buttons and hover effects inspired by hover.dev
* ⛔ Login-gated access to coupon codes
* 🎉 Copy-to-clipboard coupon reveal with animation and confirmation
* 🔢 Category-wise filtering with context API
* 🏠 User dashboard with profile update and saved coupons
* ✨ Save/unsave feature with persistent localStorage logic
* 🕐 Sticky sidebar filters and scroll-to-top bounce button
* ⚡ Firebase Auth (email/password) and Firebase Hosting deployment-ready

---

## 👨‍💼 Tech Stack

* **Frontend**: React, Tailwind CSS, DaisyUI
* **Animation**: Framer Motion
* **Routing**: React Router DOM
* **Auth**: Firebase Authentication
* **Hosting**: Firebase Hosting

---

## 🌄 Pages & Components

### Public:

* Home page with banner swiper and featured deals
* Coupons page with sidebar filter
* Saved coupons page
* Auth (Signup / Login)

### Private:

* Dashboard with user profile info and update form
* View-only coupon code component after login

---

## 🌐 Deployment

### Firebase Hosting:

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login & init:

```bash
firebase login
firebase init
```

3. Choose Hosting, build directory: `dist` or `build`
4. Deploy:

```bash
npm run build
firebase deploy
```

### Custom Domain:

1. Go to **Firebase Console > Hosting > Add Custom Domain**
2. Follow DNS verification steps (TXT + A/AAAA records)
3. Firebase will handle SSL (HTTPS) automatically

---

## 🔐 Environment Setup

1. Clone the repo

```bash
git clone https://github.com/your-username/dealio.git
cd dealio
```

2. Install dependencies

```bash
npm install
```

3. Add Firebase config in `firebase.config.js`

```js
// Example
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  ...
};
```

4. Run locally

```bash
npm run dev
```

---

## 🚀 Folder Structure

```
/src
  /components         // Reusable UI components
  /pages              // Page-level views (Coupons, Dashboard, Auth)
  /sub                // Smaller subcomponents
  /provider           // AuthContext
  /utils              // LocalStorage, SavedContext
  /main               // Route wrappers, context sharing
```

---

## 📅 Future Enhancements

* Social login (Google, GitHub)
* Firestore user profiles
* Email coupon alerts
* Admin dashboard for adding/editing coupons
* Analytics for coupon usage

---

## 🙏 Credits

Design inspired by [hover.dev](https://hover.dev)
Built with love & learning during my frontend journey.

---

## 🌐 License

[MIT](https://choosealicense.com/licenses/mit/)
