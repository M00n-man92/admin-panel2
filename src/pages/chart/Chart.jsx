import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CartesianAxis } from 'recharts/lib/cartesian/CartesianAxis';

export default function Chart() {

    const data = [
      {
        name: 'Jan',
       "Active User": 4000,
        
        
      },
      {
        name: 'Feb',
       "Active User": 3000,
        
        
      },
    
      {
        name: 'Mar',
       "Active User": 2780,
        
        
      },
      {
        name: 'Apr',
       "Active User": 1890,
        
        
      },
      {
        name: 'May',
       "Active User": 2390,
        
        
      },
      {
        name: 'Jun',
       "Active User": 3490,
        
        
      },
      {
        name: 'Jul',
       "Active User": 3490,
        
        
      },
      {
        name: 'Aug',
       "Active User": 3490,
        
        
      },
      {
        name: 'Sep',
       "Active User": 3490,
        
        
      },
      {
        name: 'Oct',
       "Active User": 3490,
        
        
      },
      {
        name: 'Nov',
       "Active User": 3490,
        
        
      },
      {
        name: 'Dec',
       "Active User": 3490,
        
        
      },
    ];
    
    return (
        <div className="chart">
            <div className="charttitle">
                <span>User Analytics</span>
            </div>
           <ResponsiveContainer width="100%" aspect={4 / 1}>
           <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip/>
          <CartesianGrid stroke="#34"/>
          <Line type="monotone" dataKey="Active User" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
           </ResponsiveContainer>
        </div>
    )
}
