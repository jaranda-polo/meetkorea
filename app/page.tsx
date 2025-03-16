import Header from "./components/layout/Header";
import BottomNavigation from "./components/layout/BottomNavigation";
import UpcomingClass from "./components/home/UpcomingClass";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import TeacherCard from "./components/ui/TeacherCard";
import ContentCard from "./components/ui/ContentCard";
import Link from "next/link";

export default function Home() {
  // Mock data for upcoming classes
  const upcomingClasses = [
    {
      id: "1",
      title: "서울에서 집 구하기",
      teacher: "김민지 선생님",
      time: "16:00",
      timeRemaining: "30분 후",
      isToday: true,
    },
    {
      id: "2",
      title: "카페에서 주문하기",
      teacher: "박준호 선생님",
      time: "14:30",
      timeRemaining: "",
      isToday: false,
    },
  ];

  // Mock data for recommended content
  const recommendedContent = [
    {
      id: "1",
      title: "한국 음식점에서 주문하기",
      description: "현지 식당에서 사용하는 실용적인 표현",
      level: "beginner" as const,
      views: 2500,
      rating: 4.8,
    },
    {
      id: "2",
      title: "한국에서 휴대폰 개통하기",
      description: "통신사에서 필요한 용어와 대화",
      level: "intermediate" as const,
      views: 1800,
      rating: 4.6,
    },
  ];

  // Mock data for popular teachers
  const popularTeachers = [
    {
      id: "1",
      name: "김민지 선생님",
      areas: ["서울 생활 전문가"],
      specialties: ["서울 생활 전문가"],
      languages: ["영어 가능"],
      description: "서울 토박이로서 종로, 중구 지역에 대해 잘 알고 있습니다.",
      rating: 4.9,
      reviewCount: 124,
      hourlyRate: 40000,
      availability: "3일 내 가능",
    },
    {
      id: "2",
      name: "이준호 선생님",
      areas: ["K-Pop & 문화 전문가"],
      specialties: ["K-Pop & 문화 전문가"],
      languages: ["영어 가능"],
      description:
        "K-Pop과 한국 문화에 대한 깊은 이해를 바탕으로 재미있는 수업을 제공합니다.",
      rating: 4.8,
      reviewCount: 98,
      hourlyRate: 35000,
      availability: "오늘 가능",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <Header showLogo={true} />

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 환영 메시지 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            안녕하세요, John님!
          </h1>
          <p className="text-gray-600">오늘은 어떤 한국어를 배워볼까요?</p>
        </div>

        {/* 예정된 수업 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              다가오는 수업
            </h2>
            <Link href="/schedule" className="text-sm text-primary font-medium">
              모두 보기
            </Link>
          </div>

          {upcomingClasses.map((lesson) => (
            <UpcomingClass
              key={lesson.id}
              lesson={lesson}
              onJoin={() => console.log("Join class", lesson.id)}
              onDetails={() => console.log("View details", lesson.id)}
            />
          ))}
        </div>

        {/* 빠른 액션 버튼 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            href="/online-matching"
            className="bg-primary text-white rounded-xl shadow-sm p-6 text-center flex flex-col items-center justify-center"
          >
            <svg
              className="w-8 h-8 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="font-medium">온라인 학습 시작하기</span>
          </Link>
          <Link
            href="/offline-matching"
            className="bg-white border-2 border-primary text-primary rounded-xl shadow-sm p-6 text-center flex flex-col items-center justify-center"
          >
            <svg
              className="w-8 h-8 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span className="font-medium">오프라인 동행 신청하기</span>
          </Link>
        </div>

        {/* 추천 콘텐츠 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              추천 학습 콘텐츠
            </h2>
            <Link href="/search" className="text-sm text-primary font-medium">
              더보기
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {recommendedContent.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onClick={() => console.log("View content", content.id)}
              />
            ))}
          </div>
        </div>

        {/* 인기 선생님 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">인기 선생님</h2>
            <Link href="/search" className="text-sm text-primary font-medium">
              모두 보기
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {popularTeachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                compact={true}
                onSelect={() => console.log("Select teacher", teacher.id)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <BottomNavigation />
    </div>
  );
}
