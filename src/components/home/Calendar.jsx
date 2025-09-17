import React from "react";
import "./Calendar.css";
import { useInView } from "react-intersection-observer";

const Calendar = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <section id="calendar" className="bg-white">
      <div className="container mx-auto">
        {/* Top decorative line */}
        <div className="w-full h-10 bg-green-800 mb-12"></div>
        <section
          ref={ref}
          className={`transition-all duration-1000 ease-in-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">社團日曆</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              追蹤我們的最新活動、課程和重要日期。
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="responsive-calendar rounded-lg shadow-xl overflow-hidden">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=it.nchu%40gmail.com&ctz=Asia%2FTaipei"
                style={{ border: 0 }}
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Bottom decorative line */}
        <div className="w-full h-px bg-green-800 mt-12"></div>
      </div>
    </section>
  );
};

export default Calendar;
