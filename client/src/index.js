import { createRoot } from 'react-dom/client';

import Routes from './Routes/Routes'

const Doc = document.getElementById('root');
const root = createRoot(Doc);


root.render(<Routes />);