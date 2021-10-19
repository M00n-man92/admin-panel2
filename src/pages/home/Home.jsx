import Chart from '../chart/Chart'
import Info from '../info/Info'
import './home.scss'

export default function Home() {
    return (
        <div className="home">
            <Info/>
            <Chart/>
        </div>
    )
}
