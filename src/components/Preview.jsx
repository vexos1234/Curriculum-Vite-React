import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import PDFFile from './components/PDFFile';
import { useState } from 'react';

function Preview() {
    if (preview) {
        return (
            <div className='pdf-container'>
                <PDFViewer className='pdf-preview'>
                    <PDFFile />
                </PDFViewer>
            </div>
        )
    }

}

export default Preview