import { ArrowUpwardSharp,ArrowDownwardSharp} from '@mui/icons-material'
import './info.scss'

export default function Info() {
    return (
        <div className="info">
            <div className="infowrapper">
                <div className="infotitle">
                    <span>
                        Revenue
                    </span>
                </div>
                <div className="infocontainer">
                    <span className="infomoneyone">
                        $ 123
                    </span>
                    <span className="infomoneytwo">
                        +67 <ArrowUpwardSharp className="upwardz"/>
                    </span>
                </div>
                <div className="infowentdown">
                    <span>compaired to last month</span>
                </div>
            </div>
            <div className="infowrapper">
                <div className="infotitle">
                    <span>
                        Revenue
                    </span>
                </div>
                <div className="infocontainer">
                    <span className="infomoneyone">
                        $ 123
                    </span>
                    <span className="infomoneytwo">
                        +67 <ArrowUpwardSharp className="upwardz"/>
                    </span>
                </div>
                <div className="infowentdown">
                    <span>compaired to last month</span>
                </div>
            </div>
            <div className="infowrapper">
                <div className="infotitle">
                    <span>
                        Revenue
                    </span>
                </div>
                <div className="infocontainer">
                    <span className="infomoneyone">
                        $ 123
                    </span>
                    <span className="infomoneytwo">
                        +67 <ArrowDownwardSharp className="downwardz"/>
                    </span>
                </div>
                <div className="infowentdown">
                    <span>compaired to last month</span>
                </div>
            </div>
            
            
        </div>
        
    )
}
