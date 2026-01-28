"use client";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <motion.div
      className="post-content serif container text-textcolor mx-auto px-4 py-8 max-w-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={paragraphVariants}>Dear Reader,</motion.p>

      <motion.p variants={paragraphVariants} className="mt-4 text-base">
        Welcome to my blog. What a challenging time it is to be alive!
      </motion.p>

      <motion.p variants={paragraphVariants} className="mt-4 text-base">
        I am a non-religious person, unaffiliated with any denomination or
        organized religion, because I simply do not believe in it.
      </motion.p>

      <motion.p variants={paragraphVariants} className="mt-4 text-base">
        In this blog, I'll be sharing my personal spiritual experiences, along
        with my thoughts on religion and various societal norms. The heart of
        this space is to speak my mind freely: to raise the questions that
        trouble me, explore spiritual matters from my own perspective, and
        reflect critically on the norms that shape our societies.
      </motion.p>

      <motion.p variants={paragraphVariants} className="mt-4 text-base">
        Most of my beliefs as a child were shaped by how I was raised, the
        people around me, and the broader society. I suspect many of us fall
        into this same category—our early beliefs largely influenced by
        upbringing and environment. That influence is undeniable. But the real
        question is: Should we simply accept it as the permanent foundation of
        our worldview? Or should we examine and question those beliefs?
      </motion.p>

      <motion.p variants={paragraphVariants} className="mt-4 text-base">
        Questioning long-held beliefs is hard, especially at the beginning. It
        can feel unsettling or even disorienting. Yet I believe it is essential.
        We should not fall into the trap of blind belief. Instead, we owe it to
        ourselves to think independently—to analyze in depth what we believe
        rather than passively accept inherited ideas.
      </motion.p>

      <motion.p variants={paragraphVariants} className="mt-4 text-base">
        I hope you'll join me on this journey of reflection and honest inquiry.
      </motion.p>
    </motion.div>
  );
}
