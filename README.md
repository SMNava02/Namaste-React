# Namaste React
This is a React playground project for POCs of new libraries/frameworks.

# Parcel (Refer [Parcel](https://parceljs.org/))
- Dev build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm - Written in C++
- Caching for faster builds
- Image optimisation
- Minification
- Bundling
- Compressing
- Differential bundling - bundle to support different versions of browser
- Diagnostics 
- Error handling
- HTTPs
- Tree shaking = Remove unused code/files
- Different dev (`npx parcel index.html`) and prod builds (`npx parcel build index.html`)

# Foodie APP component hierarchy

/**
 * Header
 *  - Logo
 *  - Nav items
 *    - Home
 *    - About
 *    - Cart
 * Body
 *  - Search
 *  - Restaurant Container
 *     - Restaurant cards
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */