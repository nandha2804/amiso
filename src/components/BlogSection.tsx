import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '../types';

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      date: { day: 12, month: 'Nov' },
      category: 'CLEANING',
      title: 'Temporary Ruling Issued',
      description: 'Washla has met the demands of a growing world cleaning tremendous.',
      author: {
        name: 'Martha Smith',
        role: 'Washla CEO',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      },
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952'
    },
    {
      date: { day: 11, month: 'Nov' },
      category: 'CLEANING',
      title: 'The Expands California',
      description: 'welcomed and every sed ut perspiciatis unde omnis iste natus.',
      author: {
        name: 'Laura Jones',
        role: 'Accounting',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f'
      },
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50'
    },
    {
      date: { day: 10, month: 'Nov' },
      category: 'CLEANING',
      title: 'Temporary Ruling Issued',
      description: 'Washla has met the demands of a growing world. The Cleaning.',
      author: {
        name: 'Matt Ryan',
        role: 'Lawyer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
      },
      image: 'https://images.unsplash.com/photo-1580256081112-e49377338b7f'
    }
  ];

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 2xl:px-24">
        <p className="text-center font-semibold text-sm sm:text-base mb-2">LATEST UPDATES</p>
        <h2 className="text-3xl sm:text-4xl text-teal-950 font-bold text-center mb-2 sm:mb-3">Recent News</h2>
        <p className="text-center text-sm sm:text-base max-w-2xl mx-auto text-gray-600">
          We specialise in intelligent & effective Search and believes in the power of partnerships to grow business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;