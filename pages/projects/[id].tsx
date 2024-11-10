import { useRouter } from 'next/router';
import { projects } from '@/components/projects';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectPage = () => {
    const { id } = useRouter().query;
    const project = projects.find((proj) => proj.id === parseInt(id as string));

    if (!project) return <div className="text-white">Project not found</div>;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // Function to format numbers with commas
    const formatNumber = (number : number) => {
        return number.toLocaleString();
    };


    return (
        <>
         <Navbar />
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-900 text-white min-h-screen p-4"
        >
           
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
                <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-4 text-blue-300">
                    {project.name}
                </motion.h1>

                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <motion.div variants={itemVariants} className="bg-gray-700 rounded-lg p-4">
                        <p className="font-semibold text-gray-400">Contractor:</p>
                        <p>{project.contractor}</p>
                        <p className="font-semibold mt-2 text-gray-400">Address:</p>
                        <p>{project.address}</p>
                        <p className="font-semibold mt-2 text-gray-400">Status:</p>
                        <p
                            className={`${project.status === 'Ongoing'
                                ? 'text-yellow-400'
                                : project.status === 'Completed'
                                ? 'text-green-400'
                                : 'text-gray-400'
                                }`}
                        >
                            {project.status}
                        </p>
                    </motion.div>


                    <motion.div variants={itemVariants} className="bg-gray-700 rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-2 text-blue-300">Tests:</h2>
                        <motion.ul variants={containerVariants}>
                            {project.tests.map((test) => (
                                <motion.li
                                    variants={itemVariants}
                                    key={test.name}
                                    className={`flex items-center ${test.passed ? 'text-green-400' : 'text-red-400'
                                        }`}
                                >
                                    <span
                                        className={`mr-2 rounded-full ${test.passed ? 'bg-green-600' : 'bg-red-600'
                                            } p-1`}
                                    >
                                        {test.passed ? '✓' : '✗'}
                                    </span>
                                    {test.name}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>


                </motion.div>


                <motion.div variants={itemVariants} className="mt-8">
                    <h2 className="text-xl font-semibold mb-2 text-blue-300">Labor Details:</h2>
                    <motion.div variants={containerVariants} className="bg-gray-700 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(project.laborDetails).map(([key, value]) => (
                                <motion.div key={key} variants={itemVariants}>
                                    <p className="font-semibold text-gray-400">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                                    </p>
                                    <p>
                                        {key === 'totalWages' || key === 'hourlyWages'
                                            ? `$${formatNumber(value)}`
                                            : formatNumber(value)}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
        <Footer />
        </>
    );
   
};

export default ProjectPage;

