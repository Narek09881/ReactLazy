import './App.css';
import { lazy, Suspense } from 'react';
import {Helmet} from "react-helmet";
import Loading from './components/Loading';
const Cars = lazy(() => import('./pages/Cars'));
function App() {
  return (
      <div className="App">
        <Helmet>
          <title>Cars</title>
        </Helmet>
        <h2>Cars</h2>
        <Suspense fallback={<Loading/>}>
          <Cars/>
        </Suspense>
      </div>
  );
}

export default App;