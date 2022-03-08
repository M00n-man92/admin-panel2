import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CartesianAxis } from 'recharts/lib/cartesian/CartesianAxis';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../requestMethods';

export default function Chart() {
  const [userStat, setUserStat] = useState([])
  const MOnths = useMemo(() => [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ], [])
  useEffect(() => {
    const holedown = async () => {
      try {
        const res = await userRequest.get("user/status")
        res.data.map((item) =>
          setUserStat(prev => [
            { name: MOnths[item._id - 1], "Active User": item.total }
          ])
        )

      }
      catch (e) {
        console.log(e)
      }

    }
    holedown()
  }, [
    MOnths
  ])


  return (
    <div className="chart">
      <div className="charttitle">
        <span>User Analytics</span>
      </div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={userStat}
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
          <Tooltip />
          <CartesianGrid stroke="#34" />
          <Line type="monotone" dataKey="Active User" stroke="#8884d8" activeDot={{ r: 8 }} />

        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
