import React, { useEffect, useState } from 'react';
import { FaNoteSticky } from 'react-icons/fa6';
import { GiLevelFour } from 'react-icons/gi';
import { BsFillTrophyFill } from 'react-icons/bs';
import { CgPlayListCheck } from "react-icons/cg";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Calendar from '../components/Calender';

function Home() {
  const [assignments, setAssignments] = useState([]);

  const data = [
    { name: 'Attendance', Performance: 50 },
    { name: 'Quiz', Performance: 30 },
    { name: 'Assignment', Performance: 69 },
    { name: 'ExtraCurricular', Performance: 30 },
    { name: 'Quiz', Performance: 30 },
  ];

useEffect(() => {
    fetch('http://localhost:8000/api/v1/students/getAssignments')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setAssignments(data.data);
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching assignments:', error));
  }, []);



  const divStyle = {
    height: '170px',
  };

  const cardStyle = {
    ...divStyle,
    background: '#2f2f2f',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 14px, rgba(0, 0, 0, 0.3) 0px 13px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    transition: 'all 0.3s ease',
  };

  const cardHoverStyle = {
    background: '#4f4f4f',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.8) 0px 2px 20px, rgba(0, 0, 0, 0.6) 0px 15px 15px -7px, rgba(0, 0, 0, 0.4) 0px -3px 0px inset',
    transform: 'scale(1.05)',
  };

  // State to track hover state for each card
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <main className="main-container dark-theme">
      {/* Main title */}
      <div className="main-title dark-bg">
        <h2 className="text-2xl font-bold">Hi there, Welcome to ClassConnect</h2>
      </div>

      {/* Main cards */}
      <div className="main-cards display-flex" style={{ gap: '65px' }}>
        {/* Card 1 */}
        <div className="card bg-blue-300 dark-card shadow-lg" style={{ ...cardStyle, ...(isHovered1 && cardHoverStyle) }}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}>
          <div className="bg-gray-800 rounded-lg p-5 flex flex-col justify-center items-center shadow-lg" style={{ ...cardStyle, background: '#2c2c2c', color: 'aqua' }}>
            <BsFillTrophyFill className="card_icon text-4xl ml-auto text-yellow-500" />
            <h2 className="text-3xl font-bold">56</h2>
            <h2>Total Trophy Earned</h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-blue-300 dark-card shadow-lg" style={{ ...cardStyle, ...(isHovered2 && cardHoverStyle) }}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}>
          <div className="bg-gray-800 rounded-lg p-5 flex flex-col justify-center items-center shadow-lg" style={{ ...cardStyle, background: '#2c2c2c', color: 'aqua' }}>
            <GiLevelFour className="card-icon text-4xl ml-auto text-blue-500" />
            <h2 className="text-3xl font-bold">3</h2>
            <h2>Total Badges Earned</h2>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-blue-300 dark-card shadow-lg" style={{ ...cardStyle, ...(isHovered3 && cardHoverStyle) }}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}>
          <div className="bg-gray-800 rounded-lg p-5 flex flex-col justify-center items-center shadow-lg" style={{ ...cardStyle, background: '#2c2c2c', color: '' }}>
            <FaNoteSticky className="text-4xl ml-auto text-green-500" />
            <h2 className="text-3xl font-bold">36</h2>
            <h2>Public/Private Notes</h2>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-blue-300 dark-card shadow-lg" style={{ ...cardStyle, ...(isHovered4 && cardHoverStyle) }}
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}>
          <div className="bg-gray-800 rounded-lg p-5 flex flex-col justify-center items-center shadow-lg" style={{ ...cardStyle, background: '#2c2c2c', color: '#fff' }}>
            <CgPlayListCheck className="text-5xl text-blue-500" />
            <h2 className="text-3xl font-bold">36</h2>
            <h2>Assignment Score</h2>
          </div>
        </div>
      </div>
      

      <div className="line-chart-calendar-container mt-8" style={{ display: 'flex', justifyContent: 'space-between' }}>
         <ResponsiveContainer width="60%" height="60%" style={{ margin: '5px',}}>
    <div style={{ width: '100%', height: '300px' }} >
      <LineChart
        width={650}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: -18,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="Performance" stroke="violet" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
    
  </ResponsiveContainer> 

        <div className='mt--1' >
          <Calendar />
        </div>
        <div >
        </div>




      </div>
      

      <div className="bg-[#2f2f2f] rounded-xl dark-card shadow-xl p-4 pt-8 mt-6 "
  style={{
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 14px, rgba(0, 0, 0, 0.3) 0px 13px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
  }}
  hoverStyle={{
    boxShadow: 'rgba(0, 0, 0, 0.8) 0px 2px 20px, rgba(0, 0, 0, 0.6) 0px 15px 15px -7px, rgba(0, 0, 0, 0.4) 0px -3px 0px inset'
  }}>
  <h1 className="text-center text-3xl font-bold text-white">Pending Assignment</h1>
  <table className="w-full text-white border-collapse rounded-xl">
    <thead>
      <tr>
        <th className="p-2 border border-white ">Subject</th>
        <th className="p-2 border border-white">Teachers Name</th>
        <th className="p-2 border border-white">Deadline</th>
        <th className="p-2 border border-white">Status</th>
        <th className="p-2 border border-white">Priority</th>
      </tr>
    </thead>
   <tbody>
  {assignments.map((assignment) => (
    <tr key={assignment.id}>
      <td className="p-2 border border-white">{assignment.subject}</td>
      <td className="p-2 border border-white">{assignment.teacherName}</td>
      <td className="p-2 border border-white">{assignment.deadline}</td>
      <td className="p-2 border border-white">Pending</td>
      <td className="p-2 border border-white">High</td>
    </tr>
  ))}
</tbody>

  </table>

</div>







    </main>
  );
}

export default Home;