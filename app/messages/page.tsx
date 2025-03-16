import Header from "../components/layout/Header";
import BottomNavigation from "../components/layout/BottomNavigation";
import Card from "../components/ui/Card";

export default function MessagesPage() {
  // Mock messages data
  const messages = [
    {
      id: "1",
      sender: "김민지 선생님",
      content:
        "안녕하세요! 오늘 수업에서 배울 '서울에서 집 구하기' 콘텐츠에 대해 미리 알려드릴게요. 월세와 전세의 차이점에 대해 중점적으로 다룰 예정입니다.",
      time: "오전 10:25",
      unread: 2,
      tag: "오늘 수업",
      tagColor: "teal",
    },
    {
      id: "2",
      sender: "박준호 선생님",
      content:
        "네, 내일 수업에서 뵙겠습니다! 혹시 카페에서 주문할 때 특별히 배우고 싶은 표현이 있으신가요?",
      time: "어제",
      unread: 0,
      tag: "내일 수업",
      tagColor: "blue",
    },
    {
      id: "3",
      sender: "시스템 알림",
      content:
        "이지영 선생님과의 오프라인 동행이 확정되었습니다. 3월 19일 오전 10시, 종로3가역 1번 출구에서 만나실 예정입니다.",
      time: "3일 전",
      unread: 0,
      isSystem: true,
    },
    {
      id: "4",
      sender: "최영호 선생님",
      content:
        "수업 잘 들으셨나요? 다음에 또 만나뵙길 바랍니다. 혹시 궁금한 점이 있으시면 언제든지 메시지 주세요.",
      time: "1주일 전",
      unread: 0,
      tag: "지난 수업",
      tagColor: "gray",
    },
    {
      id: "5",
      sender: "이지영 선생님",
      content:
        "서울 지하철 투어 오프라인 동행 신청 감사합니다! 편안한 신발을 준비해 오시면 좋을 것 같아요. 지하철 노선도를 미리 첨부해 드립니다.",
      time: "1주일 전",
      unread: 0,
      tag: "오프라인 동행",
      tagColor: "orange",
      hasAttachment: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <Header title="메시지" />

      {/* 뷰 선택 탭 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex">
            <button className="py-3 px-4 border-b-2 border-primary text-primary font-medium">
              모든 대화
            </button>
            <button className="py-3 px-4 text-gray-500">선생님</button>
            <button className="py-3 px-4 text-gray-500">시스템 알림</button>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 메시지 목록 */}
        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`bg-white rounded-xl shadow-sm p-4 ${message.unread ? "border-l-4 border-primary" : ""}`}
            >
              <div className="flex">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 flex-shrink-0 relative">
                  {message.unread > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-white flex items-center justify-center text-xs">
                      {message.unread}
                    </div>
                  )}
                  {message.isSystem && (
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800">
                      {message.sender}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {message.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                    {message.content}
                  </p>
                  {(message.tag || message.hasAttachment) && (
                    <div className="flex justify-between items-center">
                      {message.tag && (
                        <span
                          className={`text-xs bg-${message.tagColor}-100 text-${message.tagColor}-700 px-2 py-0.5 rounded-full`}
                        >
                          {message.tag}
                        </span>
                      )}
                      {message.hasAttachment && (
                        <span className="text-xs text-primary">
                          첨부파일 1개
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <BottomNavigation />
    </div>
  );
}
