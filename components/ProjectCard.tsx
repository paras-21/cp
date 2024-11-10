import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  id: number;
  name: string;
  status: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, status }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
  >
    <Link href={`/projects/${id}`}>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">Status: {status}</p>
    </Link>
  </motion.div>
);

export default ProjectCard;
