"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  selected: any;
  onClose: () => void;
};

export default function Modal({ selected, onClose }: Props) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full bg-background p-6 rounded-lg border"
          >
            <h3 className="text-xl font-semibold">{selected.title}</h3>
            <p className="mt-2 text-sm opacity-90">{selected.long}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.tags.map((t: string) => (
                <span key={t} className="text-xs px-2 py-1 border rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className=" flex flex-wrap gap-2">
            {selected.github && (
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-4 py-2 border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Ver no GitHub
              </a>
            )}
            {selected.deploy && (
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-4 py-2 border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Deploy
              </a>
            )}
{selected.gif && (
  <a
    href={selected.gif}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-block px-4 py-2 border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
  >
    Ver GIF
  </a>
)}
            <button
              onClick={onClose}
              className="mt-6 px-4 py-2 border rounded-md"
            >
              Fechar
            </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
