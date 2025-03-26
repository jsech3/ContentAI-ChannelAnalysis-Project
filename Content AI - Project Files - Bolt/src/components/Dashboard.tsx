import React from 'react';
import { Calendar, TrendingUp, FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Dashboard() {
  const stats = [
    { name: 'Scripts Generated', value: '12', icon: FileText, change: '+2 this week' },
    { name: 'Trending Topics', value: '24', icon: TrendingUp, change: 'Updated 2h ago' },
    { name: 'Scheduled Videos', value: '8', icon: Calendar, change: 'Next: Tomorrow' },
    { name: 'Hours Saved', value: '47', icon: Clock, change: '+5 this week' },
  ];

  const recentScripts = [
    { title: 'How to Start Investing in 2024', date: '2h ago', status: 'Generated' },
    { title: '10 Productivity Hacks', date: '5h ago', status: 'Draft' },
    { title: 'Beginner\'s Guide to AI', date: '1d ago', status: 'Published' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-400">Overview of your content planning</p>
      </div>

      {/* Stats */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.name}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="stat-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                <p className="mt-1 text-3xl font-semibold text-white">{stat.value}</p>
              </div>
              <stat.icon className="w-6 h-6 text-accent-primary" />
            </div>
            <p className="mt-2 text-sm text-gray-400">{stat.change}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Scripts */}
      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        className="glass-panel"
      >
        <div className="p-6">
          <h2 className="text-lg font-medium text-white">Recent Scripts</h2>
          <div className="mt-6 divide-y divide-dark-700/50">
            {recentScripts.map((script, index) => (
              <motion.div 
                key={script.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="py-4 flex items-center justify-between hover:bg-dark-800/40 transition-colors rounded-lg px-4"
              >
                <div>
                  <p className="text-sm font-medium text-white">{script.title}</p>
                  <p className="text-sm text-gray-400">{script.date}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-800 text-accent-primary">
                  {script.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}