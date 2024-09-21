import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DestinationContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const HighlightsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const HighlightsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const HighlightItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  &:before {
    content: '✓';
    color: #e74c3c;
    margin-right: 0.5rem;
  }
`;

const BookingButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchedDestination = {
      id: parseInt(id),
      name: 'Bali',
      description: 'Bali is a tropical paradise known for its lush landscapes, beautiful beaches, and rich culture. From stunning rice terraces to ancient temples, Bali offers a unique blend of natural beauty and spiritual experiences.',
      image: '/images/bali.jpg',
      highlights: [
        'Visit the iconic Tanah Lot temple',
        'Relax on the beautiful beaches of Nusa Dua',
        'Explore the rice terraces of Tegalalang',
        'Experience the spiritual atmosphere of Ubud',
        'Enjoy world-class surfing in Uluwatu'
      ]
    };
    setDestination(fetchedDestination);
  }, [id]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <DestinationContainer>
      <DestinationImage src={destination.image} alt={destination.name} />
      <Title>{destination.name}</Title>
      <Description>{destination.description}</Description>
      <HighlightsTitle>Highlights</HighlightsTitle>
      <HighlightsList>
        {destination.highlights.map((highlight, index) => (
          <HighlightItem key={index}>{highlight}</HighlightItem>
        ))}
      </HighlightsList>
      <BookingButton>Book Now</BookingButton>
    </DestinationContainer>
  );
};

export default DestinationDetail;