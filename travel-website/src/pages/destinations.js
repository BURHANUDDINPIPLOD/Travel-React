import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DestinationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const DestinationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const DestinationCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DestinationInfo = styled.div`
  padding: 1.5rem;
`;

const DestinationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const DestinationDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const Button = styled(Link)`
  background-color: #e74c3c;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  display: inline-block;

  &:hover {
    background-color: #c0392b;
  }
`;

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchedDestinations = [
      { id: 1, name: 'Bali', description: 'Tropical paradise with beautiful beaches', image: '/images/bali.jpg' },
      { id: 2, name: 'Paris', description: 'City of love and iconic landmarks', image: '/images/paris.jpg' },
      { id: 3, name: 'New York', description: 'The city that never sleeps', image: '/images/newyork.webp' },
      { id: 4, name: 'Tokyo', description: 'A blend of traditional and ultra-modern', image: '/images/tokyo.jpeg' },
      { id: 5, name: 'Rome', description: 'Ancient history and delicious cuisine', image: '/images/rome.webp' },
      { id: 6, name: 'Sydney', description: 'Iconic harbor and beautiful beaches', image: '/images/sydney.webp' },
    ];
    setDestinations(fetchedDestinations);
  }, []);

  return (
    <DestinationsContainer>
      <Title>Explore Our Destinations</Title>
      <DestinationGrid>
        {destinations.map((destination) => (
          <DestinationCard key={destination.id}>
            <DestinationImage src={destination.image} alt={destination.name} />
            <DestinationInfo>
              <DestinationTitle>{destination.name}</DestinationTitle>
              <DestinationDescription>{destination.description}</DestinationDescription>
              <Button to={`/destinations/${destination.id}`}>Learn More</Button>
            </DestinationInfo>
          </DestinationCard>
        ))}
      </DestinationGrid>
    </DestinationsContainer>
  );
};

export default Destinations;
