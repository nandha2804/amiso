import React from 'react';
import { Calendar } from 'lucide-react';
import { BlogPost } from '../types';

const BlogCard: React.FC<BlogPost> = ({ date, category, title, description, author, image }) => {
  return (
    <div className="w-full relative py-8 sm:py-12 lg:py-16">
      <div className="aspect-[4/3] mb-12 sm:mb-16 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-lg mx-auto relative z-10"
        />
        <div className="absolute top-3 right-3 z-20 bg-sky-500 backdrop-blur-sm rounded px-3 py-2 flex items-center gap-2 shadow-md mb-6">
          <Calendar size={14} className="text-white" />
          <span className="text-xs font-medium text-white">{date.day} {date.month}</span>
        </div>
      </div>
      
      <div className="bg-white shadow-xl p-3 sm:p-4 lg:p-5 rounded-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-16 sm:-translate-y-24 w-[90%] z-20 border-b-2 border-cyan-500">
        <span className="text-cyan-500 text-xs sm:text-sm font-semibold block mb-2">
          {category}
        </span>
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2">
          <img 
            src={author.image} 
            alt={author.name}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-xs sm:text-sm font-semibold line-clamp-1">{author.name}</p>
            <p className="text-gray-500 text-xs line-clamp-1">{author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;