# RETHREAD Website Builder

RETHREAD is an MVP concept website for an online business that sells high-quality, second-hand items tailored for university students. This project aims to provide an affordable, sustainable, and convenient shopping platform specifically for the student community, promoting the principles of a circular economy.

---

## Project Overview

The purpose of RETHREAD is to enable university students, aged 17-24, to buy and sell pre-owned items, including:
- **Appliances**
- **Clothes**
- **Books**
- **Furniture**

This platform is by students, for students, encouraging a more sustainable lifestyle while giving students a way to make extra income. The business model is simple: **students keep 60% of the profit** from sold items, while **RETHREAD retains 40%** to support platform maintenance and growth.

---

## Key Benefits of RETHREAD

- **Affordability**: Used items are sold at lower prices, helping students save money on essentials.
- **Sustainability**: Supports sustainable living by promoting the reuse of quality items.
- **Convenience**: Provides a central, easy-to-navigate platform for students to find affordable, high-quality products.

---

## Project Structure

- **`main.py`**: The main entry point for the application, responsible for initializing the Flask server and routing.
- **`app.py`**: Handles additional configurations and modularizes routes to maintain a clean code structure.
- **`static/`**: Holds static assets, including CSS, JavaScript, and images.
  - **`css/styles.css`**: Custom CSS styles for the platform.
  - **`js/`**: JavaScript files for interactivity.
      - `animations.js`: Adds animations for an engaging user experience.
      - `newsletter.js`: Manages the newsletter subscription system.
      - `shop.js`: Implements e-commerce functionalities for a smoother shopping experience.
      - `theme.js`: Handles theming, like dark mode and color adjustments.
  - **`img/`**: Contains image assets for product images and UI elements.

- **`templates/`**: HTML templates rendered by Flask, creating a dynamic front-end experience.

---

## Getting Started

### Prerequisites

- **Python 3.7+**: Ensure you have Python installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gabrielanyosa1/rethreadecommerceproject.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rethreadecommerceproject
   ```

3. Set up a virtual environment (recommended):
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows, use `env\\Scripts\\activate`
   ```

4. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Run the application:
   ```bash
   python main.py
   ```

6. Open a web browser and go to `http://127.0.0.1:*` to view the application.

---

## Deployment

### Render Deployment Instructions

This project can be deployed on **Render** for hosting a Python Flask application:
1. Set up a **Web Service** in Render linked to this GitHub repository.
2. Set the **Build Command** to:
   ```bash
   pip install -r requirements.txt
   ```
3. Set the **Start Command** to:
   ```bash
   python3 main.py
   ```
---

## Features

- **E-commerce Functionality**: Provides a core online shopping experience for students.
- **Theming**: Dark mode and color themes for a modern UI.
- **Interactive Animations**: Engages users with smooth transitions and animations.
- **Newsletter Integration**: Allows users to subscribe and stay updated.

---

## Contributing

Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For inquiries, reach out at gabrielanyog@gmail.com.
