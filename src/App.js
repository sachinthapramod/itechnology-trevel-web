import RouterPage from './Pages/RouterPage';
import * as React from 'react'
import { useEffect } from 'react';
import { initLazyLoading } from './utils/addLazyLoading';

function App() {
  useEffect(() => {
    // Initialize lazy loading for images
    initLazyLoading();
  }, []);

  return (
      <div className="App">
        <RouterPage />
      </div>
    );
}

export default App;
