import React from 'react';
import { motion } from 'framer-motion';

const Opacity = ({ className, duration = 0.5, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default Opacity;
