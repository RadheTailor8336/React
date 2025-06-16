# React Quick Revision

This repo contains a quick revision of core React concepts — helpful for interviews and beginner-friendly learning.

## ⚛️ What is React?

**React** is a JavaScript library for building fast, responsive, and interactive user interfaces.

- Developed by **Meta (Facebook)**
- Based on **component-driven architecture**
- Uses a **declarative syntax** to build UI
- Allows creation of **reusable components**
- Efficiently updates UI using a Virtual DOM

## 🪝 What are Hooks?

**Hooks** are built-in functions introduced in React 16.8 that let you use React features (like state, lifecycle, context) inside **functional components**.

### Commonly Used Hooks:

| Hook         | Purpose                            |
|--------------|------------------------------------|
| `useState()` | To manage local component state    |
| `useEffect()`| To handle side effects (API, timers)|
| `useRef()`   | To reference DOM elements or values|
| `useContext()`| To access context values          |
| `useReducer()`| For complex state logic           |

Hooks let you write cleaner and more modular code without using class components.

## 🌐 What is Virtual DOM?

The **Virtual DOM (VDOM)** is an in-memory copy of the real DOM used by React to optimize rendering.

### How it works:
1. React creates a Virtual DOM.
2. When state/props change, React compares the new VDOM with the previous one.
3. Only the **differences (diffs)** are updated in the **real DOM**.
4. This process is called **reconciliation**.

### Benefits:
- Faster UI updates
- Improved performance
- Smooth user experience

## 📚 Summary

| Concept      | Purpose                                 |
|--------------|------------------------------------------|
| React        | Build dynamic and interactive UIs        |
| Hooks        | Use state and features in functional components |
| Virtual DOM  | Efficient UI updates using in-memory DOM |

---

Happy Coding! 🚀
