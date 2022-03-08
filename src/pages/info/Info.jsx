import { ArrowUpwardSharp,ArrowDownwardSharp} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'
import './info.scss'

export default function Info() {
    const [incomeStat,setINcomeStat]=useState([])
    const [percent,setPercent]=useState(0)
    useEffect(()=>{
        const pleadinformisery=async()=>{
            try{
                const res=await userRequest.get("order/income")
               setINcomeStat(res.data)
               setPercent((res.data[1].total*100)/res.data[0].total - 100)
            }
            catch(e){
                console.log(e)
            }
        }
        pleadinformisery()
    },[])
 
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
                    $ {incomeStat[1]?.total}
                    </span>
                    <span className="infomoneytwo">
                       % {Math.floor(percent)} 
                       {percent >= 0 ? <ArrowUpwardSharp className="upwardz"/>: <ArrowDownwardSharp className="downwardz"/>}
                    </span>
                </div>
                <div className="infowentdown">
                    <span>compaired to last month</span>
                </div>
            </div>
            <div className="infowrapper">
                <div className="infotitle">
                    <span>
                        Cost
                    </span>
                </div>
                <div className="infocontainer">
                    <span className="infomoneyone">
                        $ 1003
                    </span>
                    <span className="infomoneytwo">
                        +7 <ArrowUpwardSharp className="upwardz"/>
                    </span>
                </div>
                <div className="infowentdown">
                    <span>compaired to last month</span>
                </div>
            </div>
            <div className="infowrapper">
                <div className="infotitle">
                    <span>
                        Sales
                    </span>
                </div>
                <div className="infocontainer">
                    <span className="infomoneyone">
                        $ 378
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
