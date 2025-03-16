import React from "react";
import Card from "./Card";
import Button from "./Button";

type TeacherCardProps = {
  teacher: {
    id: string;
    name: string;
    areas: string[];
    specialties: string[];
    languages: string[];
    description: string;
    rating: number;
    reviewCount: number;
    hourlyRate: number;
    availability: string;
    profileImage?: string;
  };
  onSelect?: () => void;
  compact?: boolean;
};

export default function TeacherCard({
  teacher,
  onSelect,
  compact = false,
}: TeacherCardProps) {
  const {
    name,
    areas,
    specialties,
    languages,
    description,
    rating,
    reviewCount,
    hourlyRate,
    availability,
    profileImage,
  } = teacher;

  if (compact) {
    return (
      <Card className="p-4 flex">
        <div className="w-16 h-16 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600 mb-1">{specialties.join(", ")}</p>
          <div className="flex items-center text-sm">
            <span className="text-yellow-500 flex items-center">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              {rating}
            </span>
            <span className="text-gray-500 ml-2">({reviewCount} 리뷰)</span>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="p-4">
        <div className="flex">
          <div className="w-20 h-20 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mb-1">{areas.join(", ")}</p>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-yellow-500 flex items-center">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  {rating}
                </span>
                <span className="text-gray-500 ml-1">({reviewCount})</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 mb-2">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-700 text-xs py-1 px-2 rounded"
                >
                  {specialty}
                </span>
              ))}
              {languages.map((language, index) => (
                <span
                  key={index}
                  className="bg-primary-100 text-primary-700 text-xs py-1 px-2 rounded"
                >
                  {language}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm">
            <span className="text-gray-700 font-medium">
              {hourlyRate.toLocaleString()}원/시간
            </span>
            <span className="text-gray-500 ml-2">{availability}</span>
          </div>
          <Button onClick={onSelect} size="sm">
            선택하기
          </Button>
        </div>
      </div>
    </Card>
  );
}
