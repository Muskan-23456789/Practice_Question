import React, { useState } from 'react';
import UserCard from './UserCard';

const DashBoard = () => {
  const [users] = useState([
    {
      id: 1,
      name: 'Muskan',
      email: 'muskan123@gmail.com',
      description: 'Senior Full Stack Developer with 8 years of experience in React, Node.js, and Cloud Architecture. Leading the frontend team at TechCorp.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 2,
      name: 'Manish',
      email: 'manish@gmail.com',
      description: 'Product Design Lead specializing in UX/UI design. Previously worked at Google and Amazon. Passionate about creating intuitive user experiences.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 3,
      name: 'hasnain',
      email: 'hasnain@gmail.com',
      description: 'Data Science Team Lead with expertise in Machine Learning and AI. PhD in Computer Science from MIT. Published researcher in NLP.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    },
    {
      id: 4,
      name: 'sujal bhaiya',
      email: 'super60@gmail.com',
      description: 'DevOps Engineer specializing in cloud infrastructure and automation. AWS Certified Solutions Architect with expertise in Kubernetes.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 5,
      name: 'Sophia ',
      email: 'sophia@gmail.com',
      description: 'Cybersecurity Expert with focus on application security and threat detection. CISSP certified with 6 years of experience in financial sector.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Card mapped</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet our talented team of professionals who are dedicated to delivering exceptional results and driving innovation in technology.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            description={user.description}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;