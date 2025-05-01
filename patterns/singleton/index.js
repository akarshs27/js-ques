// The Singleton Pattern in JavaScript ensures that a class has only one instance and provides a global point of access to it. This is useful when exactly one object is needed to coordinate actions across a system, such as a configuration manager, logger, or database connection

class Logger {
  constructor() {
    if (instance) {
      console.log("Instance already exists");
    }
    this.logs = [];
    instance = this;
  }

  log(message) {
    this.logs.push(message);
  }

  getLogCount() {
    return this.logs.length;
  }

  getLogs() {
    return this.logs;
  }
}

const Singleton = Object.freeze(new Logger()); // Object.freeze so that no other function can add new method
export default Singleton;

// in JavaScript, because of how modules and objects work, you can often achieve singleton-like behavior without explicitly writing a Singleton class.

// logger.js
// const logger = {
//   logs: [],
//   log(message) {
//     this.logs.push( message );
//     console.log(`[${message}`);
//   },
//   getLogs() {
//     return this.logs;
//   },
// };

// export default logger;

// anyComponent.js
// import logger from './logger';

// logger.log('User clicked button');

// React example
// App.jsx
// import React, { useEffect } from 'react';
// import logger from './logger';

// function App() {
//   useEffect(() => {
//     logger.log('App mounted');
//   }, []);

//   return (
//     <div>
//       <h1>Check the console for logs!</h1>
//     </div>
//   );
// }

// export default App;

// apiClient.js
// import axios from 'axios';

// class APIClient {
//   constructor() {
//     if (APIClient.instance) return APIClient.instance;

//     this.client = axios.create({
//       baseURL: 'https://api.example.com',
//       headers: { 'Content-Type': 'application/json' },
//     });

//     APIClient.instance = this;
//   }

//   get(url) {
//     return this.client.get(url);
//   }

//   post(url, data) {
//     return this.client.post(url, data);
//   }
// }

// const apiClient = new APIClient();
// export default apiClient;
// UserComponent.jsx
// import React, { useEffect, useState } from 'react';
// import apiClient from './apiClient';

// function UserComponent() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     apiClient.get('/user/1').then((res) => setUser(res.data));
//   }, []);

//   return <div>{user ? `Hello, ${user.name}` : 'Loading...'}</div>;
// }

// export default UserComponent;
