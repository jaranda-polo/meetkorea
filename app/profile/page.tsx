import Header from "../components/layout/Header";
import BottomNavigation from "../components/layout/BottomNavigation";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function ProfilePage() {
  // Mock saved words data
  const savedWords = [
    {
      id: "1",
      word: "월세 (wolse)",
      meaning: "월마다 내는 집세",
    },
    {
      id: "2",
      word: "보증금 (bojungeum)",
      meaning: "계약할 때 내는 돈",
    },
    {
      id: "3",
      word: "원룸 (oneroom)",
      meaning: "주방, 욕실, 침실이 하나인 아파트",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <Header title="프로필" />

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 프로필 카드 */}
        <Card className="p-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              John Davis
            </h2>
            <p className="text-gray-600 mb-3">미국 · 초급 수준</p>
            <div className="flex space-x-2 mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                여행
              </span>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                일상 생활
              </span>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                K-Pop
              </span>
            </div>
            <Button variant="outline" fullWidth>
              프로필 편집
            </Button>
          </div>
        </Card>

        {/* 학습 현황 */}
        <Card className="p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            학습 현황
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">총 수업 시간</span>
                <span className="font-medium text-gray-800">12시간 30분</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full w-1/2"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">완료한 수업</span>
                <span className="font-medium text-gray-800">8 / 20</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full w-2/5"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">저장한 단어</span>
                <span className="font-medium text-gray-800">47개</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full w-3/5"></div>
              </div>
            </div>
          </div>
        </Card>

        {/* 저장된 단어 */}
        <Card className="p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">저장된 단어</h3>
            <button className="text-sm text-primary">모두 보기</button>
          </div>
          <div className="space-y-3">
            {savedWords.map((word) => (
              <div
                key={word.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{word.word}</p>
                  <p className="text-sm text-gray-600">{word.meaning}</p>
                </div>
                <button className="text-gray-400">
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
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* 설정 메뉴 */}
        <Card className="overflow-hidden">
          <div className="divide-y divide-gray-200">
            <button className="w-full text-left p-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span className="text-gray-800">결제 및 구독 정보</span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
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
            <button className="w-full text-left p-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
                <span className="text-gray-800">알림 설정</span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
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
            <button className="w-full text-left p-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-gray-800">도움말 및 지원</span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
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
            <button className="w-full text-left p-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                <span className="text-gray-800">로그아웃</span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
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
        </Card>
      </main>

      {/* 하단 네비게이션 */}
      <BottomNavigation />
    </div>
  );
}
