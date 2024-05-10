import { Container, Heading, Text, VStack, Box, Image, Divider } from "@chakra-ui/react";
import { FaUniversity, FaUserGraduate, FaChartBar } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={5} border="2px" borderColor="gray.200" borderRadius="lg" bg="white">
      <VStack spacing={5} align="stretch">
        <Box>
          <Heading size="lg" textAlign="center">
            The Impact of AI on Modern Education
          </Heading>
          <Text fontSize="md" textAlign="center" mt={2}>
            <FaUniversity /> University of Technology
          </Text>
          <Text fontSize="md" textAlign="center">
            <FaUserGraduate /> John Doe, PhD Candidate
          </Text>
        </Box>
        <Divider />
        <Box>
          <Heading size="md">Abstract</Heading>
          <Text fontSize="sm">This study explores the transformative potential of artificial intelligence (AI) in reshaping educational methodologies. It examines the integration of AI tools in teaching and learning processes, and evaluates the outcomes on student engagement and academic performance.</Text>
        </Box>
        <Box>
          <Heading size="md">Introduction</Heading>
          <Text fontSize="sm">Artificial intelligence has become a pivotal technology in various sectors, including education. This section introduces the background and the significance of AI in education.</Text>
        </Box>
        <Box>
          <Heading size="md">Methodology</Heading>
          <Text fontSize="sm">The study utilized a qualitative approach, surveying 200 educators and 500 students across 10 universities.</Text>
        </Box>
        <Box>
          <Heading size="md">Results</Heading>
          <Text fontSize="sm">The findings suggest a significant improvement in personalized learning experiences and a 30% increase in student performance metrics.</Text>
          <Image src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGdyYXBofGVufDB8fHx8MTcxNTMxOTAyN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Academic Graph" />
        </Box>
        <Box>
          <Heading size="md">Conclusion</Heading>
          <Text fontSize="sm">AI technologies offer promising enhancements to educational practices, though challenges remain in accessibility and ethical implementations.</Text>
        </Box>
        <Box>
          <Heading size="md">References</Heading>
          <Text fontSize="sm">[1] Smith, A. (2022). AI in Education. Journal of Educational Technology. [2] Johnson, B. (2023). Learning Enhanced: AI Applications. AI and Society.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
