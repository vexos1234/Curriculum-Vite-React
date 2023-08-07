import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import PDFFile from './components/PDFFile';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  const [preview, setPreview] = useState(true);
  if (preview) {
    return (
      <div className='pdf-container'>

        <PDFFile />

      </div>
    )
  }

}

export default App
