import { useState } from "react";
import CourseModal from "../widget/CourseModal";
import CourseCard from "./CourseCard";
import coursesData from "../../data/coursesData";

function Courses() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            113-2 課程資訊
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            我們提供多元化的課程，橫跨軟硬體，從基礎到進階，滿足不同程度同學的需求。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ml-10 mr-10">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onOpenModal={openModal}
            />
          ))}
        </div>
      </div>

      {/* 課程詳情懸浮視窗 */}
      {selectedCourse && (
        <CourseModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedCourse.title}
          image={selectedCourse.image}
          description={selectedCourse.description}
          info={selectedCourse.info}
          color={selectedCourse.color}
          registrationLink={selectedCourse.registrationLink}
        />
      )}
    </section>
  );
}

export default Courses;
