import React from "react";
import Card from "./Card";

type ContentCardProps = {
  content: {
    id: string;
    title: string;
    description: string;
    level: "beginner" | "intermediate" | "advanced";
    views: number;
    rating: number;
    image?: string;
  };
  onClick?: () => void;
};

export default function ContentCard({ content, onClick }: ContentCardProps) {
  const { title, description, level, views, rating, image } = content;

  const levelColors = {
    beginner: "bg-teal-600",
    intermediate: "bg-orange-600",
    advanced: "bg-red-600",
  };

  const levelText = {
    beginner: "초급",
    intermediate: "중급",
    advanced: "고급",
  };

  return (
    <Card className="overflow-hidden" onClick={onClick}>
      <div className="h-32 bg-gray-300 relative">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
        <div
          className={`absolute bottom-0 left-0 ${levelColors[level]} text-white px-2 py-1 text-xs rounded-tr-lg`}
        >
          {levelText[level]}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="flex items-center mr-3">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {views.toLocaleString()}
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Card>
  );
}
