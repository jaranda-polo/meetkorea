import Header from "../components/layout/Header";
import BottomNavigation from "../components/layout/BottomNavigation";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function SchedulePage() {
  // Mock schedule data
  const schedules = [
    {
      id: "1",
      title: "서울에서 집 구하기",
      teacher: "김민지 선생님",
      time: "16:00 - 16:30",
      type: "online",
      level: "beginner",
      date: "오늘 (3월 16일)",
      isToday: true,
    },
    {
      id: "2",
      title: "카페에서 주문하기",
      teacher: "박준호 선생님",
      time: "14:30 - 15:00",
      type: "online",
      level: "beginner",
      date: "내일 (3월 17일)",
      isToday: false,
    },
    {
      id: "3",
      title: "서울 지하철 투어",
      teacher: "이지영 선생님",
      time: "10:00 - 12:00",
      type: "offline",
      location: "종로구",
      date: "수요일 (3월 19일)",
      isToday: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <Header title="내 일정" />

      {/* 뷰 선택 탭 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex">
            <button className="py-3 px-4 border-b-2 border-primary text-primary font-medium">
              일정
            </button>
            <button className="py-3 px-4 text-gray-500">지난 수업</button>
          </div>
        </div>
      </div>

      {/* 캘린더 헤더 */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">3월 2025</h2>
            <div className="flex space-x-2">
              <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* 요일 헤더 */}
          <div className="grid grid-cols-7 mb-2">
            <div className="text-center text-gray-500 text-sm">일</div>
            <div className="text-center text-gray-500 text-sm">월</div>
            <div className="text-center text-gray-500 text-sm">화</div>
            <div className="text-center text-gray-500 text-sm">수</div>
            <div className="text-center text-gray-500 text-sm">목</div>
            <div className="text-center text-gray-500 text-sm">금</div>
            <div className="text-center text-gray-500 text-sm">토</div>
          </div>

          {/* 날짜 그리드 */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="text-center py-2 text-gray-400 text-sm">23</div>
            <div className="text-center py-2 text-gray-400 text-sm">24</div>
            <div className="text-center py-2 text-gray-400 text-sm">25</div>
            <div className="text-center py-2 text-gray-400 text-sm">26</div>
            <div className="text-center py-2 text-gray-400 text-sm">27</div>
            <div className="text-center py-2 text-gray-400 text-sm">28</div>
            <div className="text-center py-2 text-gray-700 text-sm">1</div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="text-center py-2 text-gray-700 text-sm">2</div>
            <div className="text-center py-2 text-gray-700 text-sm">3</div>
            <div className="text-center py-2 text-gray-700 text-sm">4</div>
            <div className="text-center py-2 text-gray-700 text-sm">5</div>
            <div className="text-center py-2 text-gray-700 text-sm">6</div>
            <div className="text-center py-2 text-gray-700 text-sm">7</div>
            <div className="text-center py-2 text-gray-700 text-sm">8</div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="text-center py-2 text-gray-700 text-sm">9</div>
            <div className="text-center py-2 text-gray-700 text-sm">10</div>
            <div className="text-center py-2 text-gray-700 text-sm">11</div>
            <div className="text-center py-2 text-gray-700 text-sm">12</div>
            <div className="text-center py-2 text-gray-700 text-sm">13</div>
            <div className="text-center py-2 text-gray-700 text-sm">14</div>
            <div className="text-center py-2 text-gray-700 text-sm">15</div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="text-center py-2 text-white text-sm bg-primary rounded-full">
              16
            </div>
            <div className="text-center py-2 text-gray-700 text-sm relative">
              17
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="text-center py-2 text-gray-700 text-sm">18</div>
            <div className="text-center py-2 text-gray-700 text-sm relative">
              19
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="text-center py-2 text-gray-700 text-sm">20</div>
            <div className="text-center py-2 text-gray-700 text-sm">21</div>
            <div className="text-center py-2 text-gray-700 text-sm">22</div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Group schedules by date */}
        {["오늘 (3월 16일)", "내일 (3월 17일)", "수요일 (3월 19일)"].map(
          (date) => {
            const dateSchedules = schedules.filter(
              (schedule) => schedule.date === date,
            );
            if (dateSchedules.length === 0) return null;

            return (
              <div key={date} className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {date}
                </h2>

                {dateSchedules.map((schedule) => (
                  <div
                    key={schedule.id}
                    className={`${schedule.isToday ? "bg-primary-50 border border-primary-200" : "bg-white border border-gray-200"} rounded-lg p-4 mb-6`}
                  >
                    <div className="flex mb-2">
                      <div
                        className={`w-2 h-full ${schedule.type === "offline" ? "bg-orange-500" : "bg-primary"} rounded-full mr-3`}
                      ></div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-gray-800">
                            {schedule.title}
                          </h3>
                          <span
                            className={`text-sm ${schedule.isToday ? "text-primary-700" : "text-gray-600"}`}
                          >
                            {schedule.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {schedule.teacher}과{" "}
                          {schedule.type === "online"
                            ? "온라인 수업"
                            : "오프라인 동행"}
                        </p>
                        <div className="flex items-center">
                          <span
                            className={`mr-3 px-2 py-0.5 ${schedule.type === "online" ? "bg-primary-100 text-primary-700" : "bg-orange-100 text-orange-700"} rounded text-xs`}
                          >
                            {schedule.type === "online" ? "온라인" : "오프라인"}
                          </span>
                          {schedule.type === "online" && schedule.level && (
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                              {schedule.level === "beginner"
                                ? "초급"
                                : schedule.level === "intermediate"
                                  ? "중급"
                                  : "고급"}
                            </span>
                          )}
                          {schedule.type === "offline" && schedule.location && (
                            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs">
                              {schedule.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {schedule.isToday && (
                      <div className="mt-3 pt-3 border-t border-primary-200 flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          취소
                        </Button>
                        <Button size="sm">입장하기</Button>
                      </div>
                    )}
                    {!schedule.isToday && schedule.type === "offline" && (
                      <div className="mt-3 pt-3 border-t border-gray-200 flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          취소
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="bg-gray-800 text-white"
                        >
                          상세정보
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          },
        )}
      </main>

      {/* 하단 네비게이션 */}
      <BottomNavigation />
    </div>
  );
}
