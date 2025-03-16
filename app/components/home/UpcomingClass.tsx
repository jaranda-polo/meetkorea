import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

type UpcomingClassProps = {
  lesson: {
    id: string;
    title: string;
    teacher: string;
    time: string;
    timeRemaining: string;
    isToday: boolean;
  };
  onJoin?: () => void;
  onDetails?: () => void;
};

export default function UpcomingClass({
  lesson,
  onJoin,
  onDetails,
}: UpcomingClassProps) {
  const { title, teacher, time, timeRemaining, isToday } = lesson;

  return (
    <div
      className={
        isToday
          ? "bg-primary-50 border border-primary-200 rounded-lg p-4 mb-2"
          : "border border-gray-200 rounded-lg p-4"
      }
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full ${isToday ? "bg-primary-200" : "bg-gray-200"} flex items-center justify-center mr-3`}
          >
            <span
              className={`${isToday ? "text-primary-700" : "text-gray-700"} font-medium`}
            >
              {isToday ? "오늘" : "내일"}
            </span>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">
              {teacher}과 {time} {isToday ? `(${timeRemaining})` : ""}
            </p>
          </div>
        </div>
        {isToday ? (
          <Button onClick={onJoin} size="sm">
            입장하기
          </Button>
        ) : (
          <Button
            onClick={onDetails}
            variant="ghost"
            size="sm"
            className="bg-gray-200"
          >
            상세보기
          </Button>
        )}
      </div>
    </div>
  );
}
