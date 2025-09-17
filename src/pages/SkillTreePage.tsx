import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lock, Star, Play, CheckCircle } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { useUserStore } from '@/store/userStore';
import { SkillTree, SkillNode } from '@/types';

const SkillTreePage = () => {
  const { skillTrees } = useGameStore();
  const { progress } = useUserStore();
  const [selectedTree, setSelectedTree] = useState<SkillTree | null>(
    skillTrees.length > 0 ? skillTrees[0] : null
  );

  const getNodeStatus = (node: SkillNode) => {
    if (!progress) return 'locked';
    
    const nodeProgress = progress.skillTreeProgress[node.id];
    if (!nodeProgress) {
      // Check if prerequisites are met
      const prerequisitesMet = node.prerequisites.every(prereqId => 
        progress.skillTreeProgress[prereqId]?.status === 'completed'
      );
      return prerequisitesMet || node.prerequisites.length === 0 ? 'available' : 'locked';
    }
    
    return nodeProgress.status;
  };

  const getNodeIcon = (node: SkillNode) => {
    const status = getNodeStatus(node);
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-white" />;
      case 'current':
        return <Play className="w-6 h-6 text-white" />;
      case 'available':
        return <Star className="w-6 h-6 text-white" />;
      default:
        return <Lock className="w-6 h-6 text-white" />;
    }
  };

  const getNodeClasses = (node: SkillNode) => {
    const status = getNodeStatus(node);
    const baseClasses = "skill-bubble";
    
    switch (status) {
      case 'completed':
        return `${baseClasses} completed`;
      case 'current':
        return `${baseClasses} current`;
      case 'available':
        return `${baseClasses} bg-primary-500 hover:bg-primary-600 cursor-pointer`;
      default:
        return `${baseClasses} locked`;
    }
  };

  if (!selectedTree) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-600">No skill trees available</h2>
        <p className="text-gray-500 mt-2">Check back later for new content!</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-display font-bold gradient-text">
          Choose Your Path 🎯
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select a skill tree and start your musical journey. Each node represents a new skill to master!
        </p>
      </motion.div>

      {/* Skill Tree Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {skillTrees.map((tree) => (
          <button
            key={tree.id}
            onClick={() => setSelectedTree(tree)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedTree?.id === tree.id
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl">{tree.icon}</span>
              <span>{tree.name}</span>
            </div>
          </button>
        ))}
      </motion.div>

      {/* Selected Tree Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card text-center"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl">{selectedTree.icon}</span>
          <h2 className="text-2xl font-semibold">{selectedTree.name}</h2>
        </div>
        <p className="text-gray-600">{selectedTree.description}</p>
      </motion.div>

      {/* Skill Tree Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card"
      >
        <div className="relative min-h-96 overflow-x-auto">
          {/* SVG for connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {selectedTree.nodes.map((node) =>
              node.prerequisites.map((prereqId) => {
                const prereqNode = selectedTree.nodes.find(n => n.id === prereqId);
                if (!prereqNode) return null;

                return (
                  <line
                    key={`${prereqId}-${node.id}`}
                    x1={prereqNode.position.x + 32}
                    y1={prereqNode.position.y + 32}
                    x2={node.position.x + 32}
                    y2={node.position.y + 32}
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                );
              })
            )}
          </svg>

          {/* Skill Nodes */}
          {selectedTree.nodes.map((node, index) => {
            const status = getNodeStatus(node);
            const isClickable = status === 'available' || status === 'current' || status === 'completed';

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="absolute"
                style={{
                  left: node.position.x,
                  top: node.position.y,
                }}
              >
                {isClickable ? (
                  <Link to={`/lesson/${node.lessons[0]?.id || 'demo'}`}>
                    <div className={getNodeClasses(node)} title={node.name}>
                      {getNodeIcon(node)}
                    </div>
                  </Link>
                ) : (
                  <div className={getNodeClasses(node)} title={node.name}>
                    {getNodeIcon(node)}
                  </div>
                )}
                
                {/* Node Label */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-white px-2 py-1 rounded shadow-sm border text-xs font-medium whitespace-nowrap">
                    {node.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {node.xpReward} XP
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card"
      >
        <h3 className="text-lg font-semibold mb-4">Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <div className="skill-bubble bg-gray-300">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm">Locked</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="skill-bubble bg-primary-500">
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="skill-bubble current">
              <Play className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm">In Progress</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="skill-bubble completed">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm">Completed</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillTreePage;
