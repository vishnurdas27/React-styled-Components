# 🎨 Gradient Generator — React Project

The **Gradient Generator** is a React-based application that allows users to create custom CSS linear gradients by selecting two colors and a gradient direction. It dynamically updates the background based on the user’s selections, providing a real-time preview of the generated gradient.

---

## ⚙️ Project Overview

This project demonstrates React concepts such as **state management**, **component reusability**, and **dynamic styling** using **Styled Components**.  
The user can choose the gradient direction and pick two colors, then generate a linear gradient that updates the background instantly.

---

## 🧩 Functionalities

- The default gradient direction is **Top**.  
- Default colors:  
  - **Color 1:** `#8ae323`  
  - **Color 2:** `#014f7b`  
- Users can select gradient direction — **Top**, **Bottom**, **Left**, or **Right**.  
- Users can pick two colors using color pickers.  
- The selected color values are displayed as text beside the color pickers.  
- Clicking **Generate** updates the background with the selected direction and colors.  
- Active direction button has **opacity: 1**, while inactive ones have **opacity: 0.5**.

---

## 🧠 Methods and Concepts Used

### 🔹 React Class Components
- The project is built using a **class-based component** structure.  
- State is used to store and update color values, direction, and gradient style dynamically.

### 🔹 State Management
- State variables:
  - `color1` — stores the first color value.
  - `color2` — stores the second color value.
  - `direction` — stores the selected gradient direction.
  - `generate` — triggers re-render when the **Generate** button is clicked.

### 🔹 Event Handlers
- `onChangeColor1` and `onChangeColor2` — handle color input changes.  
- `onClickDirection` — updates the selected gradient direction.  
- `onGenerateGradient` — applies the new gradient background.

### 🔹 Styled Components
- Used to style all elements with scoped CSS inside `styledComponents.js`.  
- Dynamic styling applied for active/inactive buttons using the `opacity` property.

### 🔹 Conditional Rendering
- The active gradient direction button changes opacity dynamically based on the selected direction.

---

## 🧰 Technologies Used

- **React.js**
- **Styled Components**
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 📜 Summary

This project combines **interactive UI design** with **React’s dynamic rendering capabilities**, providing a simple yet powerful tool for generating CSS gradients. It demonstrates key React principles like **component-based architecture**, **state handling**, and **custom styling** using **Styled Components**.
