import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App
			className="font-inter bg-gradient-to-b from-[200px] from-gray-700
		 			   to-[200px] to-gray-600 min-h-screen"
		/>
	</StrictMode>
);
