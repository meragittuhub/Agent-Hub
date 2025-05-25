import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, Code, Users, Bot, Zap, Star, Mail, Github, Twitter } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const glowAnimation = {
    opacity: [0.5, 1, 0.5],
    scale: [0.95, 1, 0.95],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-72 h-72 bg-primary/5 rounded-full dark:bg-[#ff7900]/10"
            initial={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <main className="relative pt-16">
        {/* Hero Section */}
        <section className="container px-4 py-24 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div animate={floatingAnimation}>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  The AI Agent
                  <br />
                  <span className="gradient-text">
                    Marketplace
                  </span>
                </h1>
              </motion.div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build, share, and monetize AI agents. Connect creators with users in a
                revolutionary token-based economy powered by cutting-edge AI technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={() => navigate('/producer')}
                    className="bg-[#ff7900] hover:bg-[#ff7900]/90 text-white button-glow"
                  >
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/consumer')}
                    className="dark:border-[#ff7900] dark:text-white button-glow"
                  >
                    Explore Agents
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden gradient-bg card-glow"
            >
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={glowAnimation}
              >
                <div className="text-center">
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full mx-auto mb-4"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255,125,0,0.2)",
                        "0 0 60px rgba(255,125,0,0.4)",
                        "0 0 20px rgba(255,125,0,0.2)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="w-full h-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Bot className="w-16 h-16 text-white" />
                    </motion.div>
                  </motion.div>
                  <motion.p 
                    className="text-foreground"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Interactive AI Demo
                  </motion.p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 py-24 mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Agent Hub?</h2>
            <p className="text-xl text-muted-foreground">
              The most advanced platform for AI agent development and deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-10 h-10 dark:text-[#ff7900]" />,
                title: "Easy Integration",
                description:
                  "Upload your code and we'll automatically convert it into a deployable AI agent.",
              },
              {
                icon: <Sparkles className="w-10 h-10 dark:text-[#ff7900]" />,
                title: "Token Economy",
                description:
                  "Fair, transparent pricing based on actual usage. Earn tokens by creating valuable AI agents.",
              },
              {
                icon: <Users className="w-10 h-10 dark:text-[#ff7900]" />,
                title: "Global Community",
                description:
                  "Join thousands of AI developers and users. Share knowledge and collaborate.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center h-full flex flex-col items-center hover:shadow-lg transition-shadow dark:bg-[#ff7900]/5 card-glow">
                  <motion.div 
                    className="mb-6 p-3 rounded-lg bg-primary/10 dark:bg-[#ff7900]/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container px-4 py-24 mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 relative">Get in Touch</h2>
            <p className="text-xl text-muted-foreground relative mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center h-full flex flex-col items-center hover:shadow-lg transition-shadow dark:bg-[#ff7900]/5 card-glow relative">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 dark:bg-white/10">
                  <Mail className="w-8 h-8 dark:text-white icon-glow" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <a href="mailto:contact@agenthub.dev" className="text-primary dark:text-white hover:underline">
                  contact@agenthub.dev
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center h-full flex flex-col items-center hover:shadow-lg transition-shadow dark:bg-[#ff7900]/5 card-glow relative">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 dark:bg-white/10">
                  <Github className="w-8 h-8 dark:text-white icon-glow" />
                </div>
                <h3 className="text-lg font-bold mb-2">GitHub</h3>
                <a href="https://github.com/agenthub" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white hover:underline">
                  github.com/agenthub
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center h-full flex flex-col items-center hover:shadow-lg transition-shadow dark:bg-[#ff7900]/5 card-glow relative">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 dark:bg-white/10">
                  <Twitter className="w-8 h-8 dark:text-white icon-glow" />
                </div>
                <h3 className="text-lg font-bold mb-2">Twitter</h3>
                <a href="https://twitter.com/agenthub" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white hover:underline">
                  @agenthub
                </a>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              © 2024 Agent Hub. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
