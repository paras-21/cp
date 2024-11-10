import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import { projects } from '@/components/projects';
import { motion } from 'framer-motion';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Increased stagger for smoother effect
        delayChildren: 0.2,  // Added a slight delay before cards appear
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 }, // Increased initial y offset
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }, // Increased duration
  };


  return (
    <div className="bg-gray-900 min-h-screen"> {/* Dark background */}
      <Navbar />
      <motion.div
        className="container mx-auto px-4 py-12" // Increased padding
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-12 text-blue-300"> {/* Larger heading, blue color */}
          Our Projects
        </motion.h1>
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div variants={itemVariants} key={project.id}> {/* Wrap ProjectCard in motion.div */}
              <ProjectCard
                id={project.id}
                name={project.name}
                status={project.status}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default HomePage;
