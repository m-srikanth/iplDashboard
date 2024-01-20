import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const Legend1 = props => {
  const {wonC, loseC, drawC} = props

  const data = [
    {
      count: wonC,
      status: 'won',
    },
    {
      count: loseC,
      status: 'lost',
    },
    {
      count: drawC,
      status: 'drawn',
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="drawn" fill="#fecba6" />
          <Cell name="lost" fill="#b3d23f" />
          <Cell name="won" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Legend1
