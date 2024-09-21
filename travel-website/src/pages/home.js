import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background-image: url('/images/background.avif');
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Button = styled(Link)`
  background-color: #e74c3c;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const FeaturedSection = styled.section`
  padding: 4rem 0;
`;

const FeaturedTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const DestinationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
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

const Home = () => {
  const featuredDestinations = [
    { id: 1, name: 'Bali', description: 'Tropical paradise with beautiful beaches', image: '/images/bali.jpg' },
    { id: 2, name: 'Paris', description: 'City of love and iconic landmarks', image: '/images/paris.jpg' },
    { id: 3, name: 'New York', description: 'The city that never sleeps', image: '/images/newyork.webp' },
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <Title>Discover Your Next Adventure</Title>
          <Subtitle>Explore the world's most beautiful destinations</Subtitle>
          <Button to="/destinations">Start Exploring</Button>
        </HeroContent>
      </HeroSection>
      <FeaturedSection>
        <FeaturedTitle>Featured Destinations</FeaturedTitle>
        <DestinationGrid>
          {featuredDestinations.map((destination) => (
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
      </FeaturedSection>
    </>
  );
};

export default Home;