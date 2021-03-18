##👉 React Redux-Toolkit Clean Architecture Boilerplate

- 📂src
  - 📂application
    - 📂actions
      - 📄todoActions.js
      - 📄uiActions.js
    - 📂middleware
      - 📄index.js
      - 📄todosMiddleware.js
    - 📂reducers
      - 📄index.js
      - 📄todosReducer.js
      - 📄uiReducer.js
    - 📂selectors
      - 📄todosSelector.js
      - 📄uiSelector.js
    - 📄store.js
  - 📂infrastructure
    - 📂services
      - 📂api
        - 📂todosService
          - 📄index.js
        - 📄apiInstance.js
        - 📄index.js
      - 📄index.js
  - 📂views
    - 📂components
      - 📄Helloworld.jsx
    - 📂pages
      - 📄AllTodosPage.jsx
    - 📄App.js
    - 📄index.js
    - ...(other files)

---

- application - contains all the redux actions,reducers,middlewares,store..

- infrastructure - contains all the services

- Services in the `infrastructure` are injected into the `Middlewares` using dependency injection
