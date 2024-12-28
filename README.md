# Full-Stack Laravel Vue.js Project

<div align="center"> <a href="https://laravel.com" target="_blank"> <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"> </a> </div> <div style="display:flex; justify-content:center; align-items:center;"> <span> <a href="https://inertiajs.com/" target="_blank"> <img src="https://avatars.githubusercontent.com/u/47703742?s=200&v=4" width="50" alt="Inertia.js Logo"> </a> </span> <span> <a href="https://vuejs.org/" target="_blank"> <img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" width="80" alt="Vue.js Logo"> </a> </span> <span> <a href="https://primevue.org/" target="_blank"> <img src="https://i2.wp.com/www.primefaces.org/wp-content/uploads/2019/12/primevue-logo.png?fit=300%2C300&ssl=1" width="60" alt="PrimeVue Logo"> </a> </span> <span> <a href="https://tailwindcss.com/" target="_blank"> <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" width="70" alt="Tailwind CSS Logo"> </a> </span> </div>

This project is a **full-stack Laravel application** that scaffolds **Vue.js** using **Inertia.js**. It integrates **PrimeVue 4** for UI components and **Tailwind CSS** for styling, offering a seamless developer experience for building modern web applications.

---

## **Features**

-   **Laravel Backend**:

    -   Handles routing, authentication, and data management.
    -   Provides an API-driven backend using Laravel's robust ecosystem.

-   **Vue.js Frontend**:

    -   Scaffolding provided via Inertia.js.
    -   Vue components dynamically render data received from the Laravel backend.

-   **Inertia.js**:

    -   Acts as the glue between Laravel and Vue.js, allowing SPA-like behavior without the complexity of a separate frontend.

-   **PrimeVue 4**:

    -   Provides a rich set of UI components, such as data tables, forms, modals, and more.

-   **Tailwind CSS**:
    -   A utility-first CSS framework for rapid UI development with clean and customizable designs.

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed on your system:

-   PHP (>=8.0)
-   Composer
-   Node.js (>=16.x)
-   npm or yarn
-   MySQL or another database system supported by Laravel

---

### **Installation**

1. Clone the repository:

    ```bash
    git clone https://github.com/MDanielle007/laravel-vue.git
    ```

2. Install backend dependencies:

    ```bash
    composer install
    ```

3. Install frontend dependencies:

    ```bash
    npm install
    ```

4. Configure environment variables:

    - Copy `.env.example` to `.env`:
        ```bash
        cp .env.example .env
        ```
    - Update database and other configurations in `.env`.

5. Run migrations:

    ```bash
    php artisan migrate
    ```

6. Build the frontend:

    ```bash
    npm run dev
    ```

7. Start the Laravel development server:
    ```bash
    php artisan serve
    ```

Access the application at `http://localhost:8000`.

---

### **Usage**

-   **Development Mode**: Use `npm run dev` to run the frontend in development mode with hot module replacement (HMR).
-   **Production Mode**: Build the production assets using `npm run build`.
-   **PrimeVue Components**: Start adding PrimeVue components to your Vue pages. For a list of components, refer to the [PrimeVue documentation](https://primevue.org/).

---

## **Project Structure**

-   **Backend**:

    -   `routes/web.php`: Handles web routes.
    -   `app/Http/Controllers`: Contains Laravel controllers for handling backend logic.

-   **Frontend**:
    -   `resources/js/`: Vue.js components and Inertia.js pages.
    -   `resources/css/`: Tailwind CSS configuration and custom styles.
    -   `vite.config.js`: Configuration file for Vite bundler.

---

## **Customization**

### **PrimeVue Setup**

-   PrimeVue is pre-installed and configured in the project.
-   You can customize the PrimeVue theme in `resources/js/plugins/theme.js` or by modifying Tailwind utilities to complement the theme.

### **Tailwind CSS Configuration**

-   Tailwind is fully integrated.
-   Extend or override styles in `tailwind.config.js`.

---

## **Contributing**

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## **License**

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
