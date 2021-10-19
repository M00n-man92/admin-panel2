import { AccessAlarm } from '@mui/icons-material'
import { Badge } from '@mui/material';
import Topbar from './components/topbar/Topbar';
import './appbar.scss'
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
function App() {
  return (
    <div className="appbar">
      <div className="top">
      <Topbar />
      </div>
    
      <div className="bigo">
        <div className="todaside">
<Menu/>
        </div>

        <div className="middlestuff">
          <Home/>
        </div>
      </div>




    </div>

  );
}

export default App;
