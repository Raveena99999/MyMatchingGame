import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import Matchgame from "./Matchgame";

const cardData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLfXrczaUKurFKE7NXcOGDq4lOqZgkKT1kY3_7cUwrWpOOv369ZPHjNdmBA&s",
    title: "Welcome Kiddo",
    buttonText: "Start",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLfXrczaUKurFKE7NXcOGDq4lOqZgkKT1kY3_7cUwrWpOOv369ZPHjNdmBA&s",
    title: "Hey, I am Mizo, and I love bananas",
    buttonText: "Next",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLfXrczaUKurFKE7NXcOGDq4lOqZgkKT1kY3_7cUwrWpOOv369ZPHjNdmBA&s",
    title: "Can you help me get some?",
    buttonText: "Yes",
  },
  {
    title:
      "Instructions: 1. Select a Pink card 2. Select a Blue card 3. If matched, well played otherwise retry.",
    buttonText: "Play",
  },
];

export default function Intro() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showMatchGame, setShowMatchGame] = useState(false);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
  };

  const handleButtonClick = () => {
    if (currentCardIndex === cardData.length - 1) {
      setShowMatchGame(true);
    } else {
      handleNext();
    }
  };

  if (showMatchGame) {
    return <Matchgame />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      backgroundSize: "cover",
      backgroundImage:"url('https://t4.ftcdn.net/jpg/01/91/13/11/240_F_191131160_YJ6OxSQNPe2q2lHgffWhlHmfb0eAWLAu.jpg')"

    }}
    >
      <Card
        key={currentCardIndex}
        maxW="lg"
        boxShadow="xl"
        borderRadius="lg"
        p={8}
        textAlign="center"
        bg="black"

      >
        <CardBody>
          {cardData[currentCardIndex].image && (
            <Image
              mx="auto"
              src={cardData[currentCardIndex].image}
              alt="Card Image"
              borderRadius="lg"
            />
          )}
          <Stack mt={8} spacing={6}>
            <Heading size="lg" color="teal.500">
              {cardData[currentCardIndex].title}
            </Heading>
          </Stack>
        </CardBody>
        <CardFooter
          justifyContent="space-between"
          bg="gray.200"
          borderRadius="lg"
          p={6}
        >
          {currentCardIndex > 0 && (
            <Button
              colorScheme="green"
              onClick={handlePrevious}
              borderRadius="lg"
            >
              Previous
            </Button>
          )}
          <Button
            colorScheme="teal"
            onClick={handleButtonClick}
            borderRadius="lg"
          >
            {cardData[currentCardIndex].buttonText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
