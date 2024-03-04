import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Matchgame() {
  const [pinkCards, setPinkCards] = useState([
    {
      letter: "apple",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXCNnL4IiPw-FUVaSxjOEvp3MyfteX092LKDI5eIkSW49yZ0mTTT2tE46Uw&s",
      revealed: false,
    },
    {
      letter: "banana",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznsjD7cccJQfA74RK5RFl8Fw0c8MQKxBFiQ&usqp=CAU",
      revealed: false,
    },
    {
      letter: "cherry",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZ4jM4inEqAMEJ8sakWhwXkDMSEgxhh6QmPb9j8DfgLyoR4wbN5bBBSvXiQ&s",
      revealed: false,
    },
    {
      letter: "mango",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdVkuRZ57YQWn1syMjWd1WslBI_0w1Oit7A5HLHTlrA4grWCJvnotzAEPPQ&s",
      revealed: false,
    },
    {
      letter: "grapes",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DNJklEns9inArVYfXzusTt_fOo7tqAaV_lbTCqK5k7tQ1zZcuNHI4bBMrA&s",
      revealed: false,
    },
    {
      letter: "watermelon",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AMkgYHDHi65sniKPdH38PAaJhmLS6gFZvQ&usqp=CAU",
      revealed: false,
    },
    {
      letter: "orange",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzLWLpgZIj11zOHIlsdvwxnLzl_7tJl9sDg&usqp=CAU",
      revealed: false,
    },
    {
      letter: "kiwi",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_hWv-vUYNwk8bnB0J8BFMMkw7GPv8psP2A&usqp=CAU",
      revealed: false,
    },
    {
      letter: "pineapple",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjY4-cVX1KO5RbTTT2rqf9SYpl5U8ozux2A&usqp=CAU",
      revealed: false,
    },
  ]);

  const [blueCards, setBlueCards] = useState([
    { letter: "c", revealed: false },
    { letter: "b", revealed: false },
    { letter: "k", revealed: false },
    { letter: "w", revealed: false },
    { letter: "g", revealed: false },
    { letter: "m", revealed: false },
    { letter: "o", revealed: false },
    { letter: "a", revealed: false },
    { letter: "p", revealed: false },
  ]);
  const [attempts, setAttempts] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [revealedPinkIndex, setRevealedPinkIndex] = useState(null);

  const handleCardClick = (index, cardType) => {
    if (gameOver) return;

    if (cardType === "pink") {
      const updatedPinkCards = [...pinkCards];
      updatedPinkCards[index].revealed = true;
      setPinkCards(updatedPinkCards);
      setRevealedPinkIndex(index);
    } else {
      const updatedBlueCards = [...blueCards];
      updatedBlueCards[index].revealed = true;
      setBlueCards(updatedBlueCards);

      const revealedPinkCard = pinkCards[revealedPinkIndex];
      const clickedBlueCard = updatedBlueCards[index];
      setAttempts(attempts + 1);

      if (
        revealedPinkCard &&
        revealedPinkCard.letter.toLowerCase().charAt(0) ===
          clickedBlueCard.letter.toLowerCase()
      ) {
        setBananas(bananas + 1);

        setMessage("It's a match!");
      } else {
        setMessage("Attempt failed.");
      }

      if (attempts >= 2) {
        setGameOver(true);
      }
    }
  };

  


  
  
  
  const restartGame = () => {
    setPinkCards(pinkCards.map((card) => ({ ...card, revealed: false })));
    setBlueCards(blueCards.map((card) => ({ ...card, revealed: false })));
    setAttempts(0);
    setBananas(0);
    setMessage("");
    setGameOver(false);
    setRevealedPinkIndex(null);
  };

  return (
    <Container mt="0.5rem" maxW="90%" >
      <Flex justify="center">
        <Flex direction={{ base: "column", md: "row" }} w="100%">
          <Box
            w={{ base: "100%", md: "50%" }}
            borderRadius="lg"
            boxShadow="lg"
            mr={{ base: 0, md: 4 }}
          >
            <Text
              mb="1rem"
              textAlign="center"
              fontWeight="bold"
              fontSize="20px"
              bg="pink.500"
              color="white"
              borderTopRadius="lg"
              p="1rem"
            >
              Select first card
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} p="1rem">
              {pinkCards.map((card, index) => (
                <GridItem
                  key={index}
                  w="100%"
                  h="20vh"
                  bg="pink.200"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  onClick={() => handleCardClick(index, "pink")}
                  _hover={{ cursor: "pointer" }}
                >
                  {card.revealed && (
                    <img src={card.image} alt={card.letter} width="80%" />
                  )}
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Box
            w={{ base: "100%", md: "50%" }}
            borderRadius="lg"
            boxShadow="lg"
            mt={{ base: 4, md: 0 }}
          >
            <Text
              mb="1rem"
              textAlign="center"
              fontWeight="bold"
              fontSize="20px"
              bg="blue.500"
              color="white"
              borderTopRadius="lg"
              p="1rem"
            >
              Select second card
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} p="1rem">
              {blueCards.map((card, index) => (
                <GridItem
                  key={index}
                  w="100%"
                  h="20vh"
                  bg="blue.200"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  onClick={() => handleCardClick(index, "blue")}
                  _hover={{ cursor: "pointer" }}
                >
                  {card.revealed && (
                    <Text fontSize="3xl">{card.letter.toUpperCase()}</Text>
                  )}
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Flex>
      <Text
        textAlign="center"
        fontSize="35px"
        fontWeight="bold"
        mt="2"
        color="white"
        bg="black"
      >
        {message}
      </Text>
      <Flex
        justify="space-between"
        mt="0.2rem"
        w="100%"
        color="white"
        bg="black"
        px="1rem"
        h="10vh"
      >
        <Text fontSize="25px" fontWeight="bold" mr="2">
          Attempts: {attempts}
        </Text>
        <Text fontSize="25px" fontWeight="bold" mr="2">
          You have earned: {bananas} bananas
        </Text>
        {gameOver && (
          <Flex justify="center">
            {Array.from({ length: bananas }).map((_, index) => (
              <img
                key={index}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHw0i7wV7rYWZHa8gSNPgQOUJDSUfXipEtA&usqp=CAU" // Replace with the URL of your banana image
                alt="Banana"
                style={{ marginRight: '0.5rem', width: '50px', height: '50px' }}
              />
            ))}
          </Flex>
        )}



        {gameOver && (
          <Button
            onClick={restartGame}
            bg="green.500"
            color="white"
            p="1rem"
            borderRadius="lg"
            fontWeight="bold"
            fontSize="xl"
            _hover={{ cursor: "pointer", bg: "green.600" }}
          >
            Restart
          </Button>
        )}
      </Flex>
    </Container>



    
     
  );
}
