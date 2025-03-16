import React from 'react';

const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-teal-600">로컬한국어</div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 환영 메시지 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">안녕하세요, John님!</h1>
          <p className="text-gray-600">오늘은 어떤 한국어를 배워볼까요?</p>
        </div>

        {/* 예정된 수업 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">다가오는 수업</h2>
            <button className="text-sm text-teal-600 font-medium">모두 보기</button>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal-200 flex items-center justify-center mr-3">
                  <span className="text-teal-700 font-medium">오늘</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">서울에서 집 구하기</h3>
                  <p className="text-sm text-gray-600">김민지 선생님과 16:00 (30분 후)</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium">
                입장하기
              </button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="text-gray-700 font-medium">내일</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">카페에서 주문하기</h3>
                  <p className="text-sm text-gray-600">박준호 선생님과 14:30</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium">
                상세보기
              </button>
            </div>
          </div>
        </div>

        {/* 빠른 액션 버튼 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="bg-teal-600 text-white rounded-xl shadow-sm p-6 text-center flex flex-col items-center justify-center">
            <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span className="font-medium">온라인 학습 시작하기</span>
          </button>
          <button className="bg-white border-2 border-teal-500 text-teal-600 rounded-xl shadow-sm p-6 text-center flex flex-col items-center justify-center">
            <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="font-medium">오프라인 동행 신청하기</span>
          </button>
        </div>

        {/* 추천 콘텐츠 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">추천 학습 콘텐츠</h2>
            <button className="text-sm text-teal-600 font-medium">더보기</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-32 bg-gray-300 relative">
                <div className="absolute bottom-0 left-0 bg-teal-600 text-white px-2 py-1 text-xs rounded-tr-lg">
                  초급
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">한국 음식점에서 주문하기</h3>
                <p className="text-sm text-gray-600 mb-2">현지 식당에서 사용하는 실용적인 표현</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center mr-3">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                    2.5K
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    4.8
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-32 bg-gray-300 relative">
                <div className="absolute bottom-0 left-0 bg-orange-600 text-white px-2 py-1 text-xs rounded-tr-lg">
                  중급
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">한국에서 휴대폰 개통하기</h3>
                <p className="text-sm text-gray-600 mb-2">통신사에서 필요한 용어와 대화</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center mr-3">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                    1.8K
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    4.6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 인기 선생님 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">인기 선생님</h2>
            <button className="text-sm text-teal-600 font-medium">모두 보기</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4 flex">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium text-gray-800">김민지 선생님</h3>
                <p className="text-sm text-gray-600 mb-1">서울 생활 전문가</p>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500 flex items-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    4.9
                  </span>
                  <span className="text-gray-500 ml-2">(124 리뷰)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 flex">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium text-gray-800">이준호 선생님</h3>
                <p className="text-sm text-gray-600 mb-1">K-Pop & 문화 전문가</p>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500 flex items-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    4.8
                  </span>
                  <span className="text-gray-500 ml-2">(98 리뷰)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <nav className="sticky bottom-0 z-10 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <button className="py-3 flex flex-col items-center justify-center w-1/5 text-teal-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span className="text-xs mt-1">홈</span>
            </button>
            <button className="py-3 flex flex-col items-center justify-center w-1/5 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span className="text-xs mt-1">검색</span>
            </button>
            <button className="py-3 flex flex-col items-center justify-center w-1/5 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="text-xs mt-1">일정</span>
            </button>
            <button className="py-3 flex flex-col items-center justify-center w-1/5 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
              </svg>
              <span className="text-xs mt-1">메시지</span>
            </button>
            <button className="py-3 flex flex-col items-center justify-center w-1/5 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="text-xs mt-1">프로필</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomeScreen;
