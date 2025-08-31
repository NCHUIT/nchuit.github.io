import React from "react";
import GreenCheck from "../widget/green-check";
import CourseIcon from "../widget/CourseIcon";

function CourseCard({ course, onOpenModal }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
      <div className="h-3" style={{ backgroundColor: course.color }}></div>
      <div className="p-6 flex flex-col flex-grow">
        <div
          className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
          style={{ backgroundColor: `${course.color}20` }}
        >
          <CourseIcon iconName={course.iconName} color={course.color} />
        </div>
        <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
          {course.title}
        </h3>
        <ul className="space-y-2 mb-6 flex-grow">
          {course.cardItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <GreenCheck color={course.color} />
              </div>
              <span className="text-gray-600 break-words">{item}</span>
            </li>
          ))}
        </ul>
        <div className="text-center mt-auto">
          <button
            onClick={() => onOpenModal(course)}
            className="text-white font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer inline-block mr-2 mb-2 hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: course.color }}
          >
            課程詳情
          </button>
          {course.registrationLink && (<a
            href={course.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer inline-block mb-2 hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: course.color }}
          >
            立即報名
          </a>)}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
