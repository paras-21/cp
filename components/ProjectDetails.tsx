import { motion } from 'framer-motion';

interface ProjectDetailsProps {
    name: string;
    contractor: string;
    address: string;
    status: string;
    tests: { name: string; passed: boolean }[];
    laborDetails: {
      daysWorked: number;
      totalWages: number;
      hourlyWages: number;
      numberOfLabors: number; // Added numberOfLabors
    };
  }
  
  const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    name, contractor, address, status, tests, laborDetails
  }) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

      const formatNumber = (number : number) => {
        return number.toLocaleString();
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-800 p-6 rounded-lg shadow-md"
        >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4 text-blue-300">
                {name}
            </motion.h2>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-400">
                        <span className="font-semibold">Contractor:</span> {contractor}
                    </p>
                    <p className="text-gray-400">
                        <span className="font-semibold">Address:</span> {address}
                    </p>
                    <p className="text-gray-400">
                        <span className="font-semibold">Status:</span>{" "}
                        <span
                            className={`${
                                status === "Ongoing"
                                    ? "text-yellow-400"
                                    : status === "Completed"
                                    ? "text-green-400"
                                    : "text-gray-400"
                            }`}
                        >
                            {status}
                        </span>
                    </p>
                </div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="text-xl font-semibold mt-6 text-blue-300">Tests</motion.h3>
            <motion.ul variants={containerVariants} className="list-disc pl-5">
                {tests.map((test, idx) => (
                    <motion.li
                        variants={itemVariants}
                        key={idx}
                        className={test.passed ? "text-green-400" : "text-red-400"}
                    >
                        {test.name}: {test.passed ? "Passed" : "Failed"}
                    </motion.li>
                ))}
            </motion.ul>

            <motion.h3 variants={itemVariants} className="text-xl font-semibold mt-6 text-blue-300">Labor Details</motion.h3>
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.p variants={itemVariants}>
                    <span className="font-semibold text-gray-400">Days Worked:</span>{" "}
                    {formatNumber(laborDetails.daysWorked)}
                </motion.p>
                <motion.p variants={itemVariants}>
                    <span className="font-semibold text-gray-400">Total Wages:</span> $
                    {formatNumber(laborDetails.totalWages)}
                </motion.p>
                <motion.p variants={itemVariants}>
                    <span className="font-semibold text-gray-400">Hourly Wages:</span> $
                    {formatNumber(laborDetails.hourlyWages)}
                </motion.p>
                <motion.p variants={itemVariants}> {/* Added this section */}
                    <span className="font-semibold text-gray-400">Number of Labors:</span>{" "}
                    {formatNumber(laborDetails.numberOfLabors)}
                </motion.p>
            </motion.div>

        </motion.div>
    )
};
  
  export default ProjectDetails;

