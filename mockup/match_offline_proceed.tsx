import React from 'react';

const OfflineMatchingScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-3">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </button>
            <div className="text-xl font-bold text-gray-800">오프라인 동행 신청</div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 매칭 경로 선택 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">매칭 방법을 선택하세요</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-teal-600 rounded-xl shadow-sm overflow-hidden">
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800">신청서 작성하기</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">나의 요구사항과 상황을 설명하는 신청서를 작성하고, 적합한 선생님이 지원하면 선택합니다.</p>
                <div className="flex justify-end">
                  <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800">선생님 먼저 선택하기</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">선생님의 프로필을 직접 확인하고 선택한 후, 동행 요청서를 작성합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 신청서 작성 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">신청서 작성</h3>
          
          <div className="space-y-4">
            {/* 동행 목적 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">동행 목적*</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option value="">동행 목적을 선택해주세요</option>
                <option value="hospital">병원 방문</option>
                <option value="real_estate">부동산/집 구하기</option>
                <option value="shopping">쇼핑 도움</option>
                <option value="transportation">교통/이동 도움</option>
                <option value="phone">휴대폰 개통</option>
                <option value="food">맛집 탐방</option>
                <option value="tourism">관광지 탐방</option>
                <option value="other">기타 (직접 입력)</option>
              </select>
            </div>
            
            {/* 지역 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">지역*</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option value="">지역을 선택해주세요</option>
                <option value="seoul_gangnam">서울 - 강남/서초</option>
                <option value="seoul_hongdae">서울 - 홍대/신촌</option>
                <option value="seoul_jongno">서울 - 종로/중구</option>
                <option value="seoul_gangbuk">서울 - 강북/성북</option>
                <option value="seoul_etc">서울 - 기타</option>
                <option value="busan">부산</option>
                <option value="jeju">제주</option>
                <option value="other">기타 지역</option>
              </select>
            </div>
            
            {/* 날짜 및 시간 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">희망 날짜*</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">희망 시간*</label>
              <div className="grid grid-cols-2 gap-4">
                <input type="time" placeholder="시작 시간" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
                <input type="time" placeholder="종료 시간" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
              </div>
            </div>
            
            {/* 예상 소요 시간 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">예상 소요 시간</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option value="1">1시간</option>
                <option value="2">2시간</option>
                <option value="3">3시간</option>
                <option value="4">4시간</option>
                <option value="5">5시간 이상</option>
              </select>
            </div>
            
            {/* 상세 요청 사항 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">상세 요청 사항</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="선생님에게 알려주고 싶은 구체적인 사항을 적어주세요. 예: 특정 병원에 예약이 있어요. 제 한국어 수준은 초급이에요."
              ></textarea>
            </div>
            
            {/* 가격 범위 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">희망 가격 범위</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                <option value="">희망 가격 범위를 선택해주세요</option>
                <option value="30000">~30,000원/시간</option>
                <option value="30000-50000">30,000원~50,000원/시간</option>
                <option value="50000">50,000원~/시간</option>
              </select>
            </div>
            
            {/* 자동 매칭 옵션 */}
            <div className="flex items-center">
              <input type="checkbox" id="auto_matching" className="w-4 h-4 text-teal-600" />
              <label htmlFor="auto_matching" className="ml-2 text-sm text-gray-700">
                자동 매칭하기 (지원하는 선생님 중 조건에 맞는 분이 즉시 매칭됩니다)
              </label>
            </div>
          </div>
        </div>
        
        {/* 비용 정보 */}
        <div className="bg-gray-100 rounded-xl p-4 mb-6">
          <h4 className="font-medium text-gray-800 mb-2">가격 안내</h4>
          <p className="text-sm text-gray-600 mb-3">
            오프라인 동행 서비스는 기본 시간당 요금에 선생님의 교통비가 추가됩니다. 최종 금액은 선생님의 지원 후 확인할 수 있습니다.
          </p>
          <div className="flex justify-between text-sm text-gray-700">
            <span>기본 요금 (1시간)</span>
            <span className="font-medium">30,000원~</span>
          </div>
        </div>
      </main>

      {/* 하단 버튼 */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium">
          신청서 제출하기
        </button>
      </div>
    </div>
  );
};

export default OfflineMatchingScreen;
