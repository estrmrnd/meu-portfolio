'use client';
import React from 'react';
import { motion } from 'framer-motion';


type Props = {
title: string;
short: string;
tags: string[];
onClick: () => void;
};


export default function ProjectCard({ title, short, tags, onClick }: Props) {
return (
<motion.article
whileHover={{ scale: 1.02 }}
onClick={onClick}
className="p-4 border rounded-lg cursor-pointer hover:shadow-md"
>
<h4 className="font-semibold">{title}</h4>
<p className="text-sm mt-1 opacity-90">{short}</p>
<div className="mt-3 flex flex-wrap gap-2">
{tags.map((t) => (
<span key={t} className="text-xs px-2 py-1 border rounded-full">
{t}
</span>
))}
</div>
</motion.article>
);
}