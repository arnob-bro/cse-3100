import { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'Arnob',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5rT21oo74T-VSgku5dTWpqHuFgSEHvp2xQ&s',
    role: 'Director',
  },
  {
    name: 'Mahdi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5rT21oo74T-VSgku5dTWpqHuFgSEHvp2xQ&s',
    role: 'Director',
  },
  {
    name: 'Fiha',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5rT21oo74T-VSgku5dTWpqHuFgSEHvp2xQ&s',
    role: 'Director',
  },
];

export default function AboutUs() {
  useEffect(() => {}, []);

  return (
    <>
      <section className="mt-5 about-us">
        <h2>Our mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas luc
        </p>

        <h2>Our history</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas luc
        </p>

        <h2>Our team</h2>
        <div className="mt-2 row g-4 team-container" id="team-container">
          {teamMembers.map((teamMember, i) => (
            <div key={i} className="col-md-4 member-card">
              <img src={teamMember.image} alt={teamMember.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="member-info">
                <h3 className="h5 mb-1">{teamMember.name}</h3>
                <p className="mb-1">{teamMember.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
