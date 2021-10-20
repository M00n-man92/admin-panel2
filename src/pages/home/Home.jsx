import WidgetOne from '../../components/widgets/firstwidget/WidgetOne'
import WidgetTwo from '../../components/widgets/secwidget/WidgetTwo'
import Chart from '../chart/Chart'
import Info from '../info/Info'
import './home.scss'

export default function Home() {
    return (
        <div className="home">
            <Info/>
            <Chart/>
            <div className="widgets">
            <WidgetOne/>
            <WidgetTwo/>
            </div>
            
        </div>
    )
}
