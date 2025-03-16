import React from 'react';

const SearchScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="선생님, 콘텐츠, 주제 검색"
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 최근 검색어 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-800">최근 검색어</h2>
            <button className="text-sm text-gray-500">전체 삭제</button>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5">
              <span className="text-sm text-gray-700 mr-2">부동산</span>
              <button className="text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5">
              <span className="text-sm text-gray-700 mr-2">K-pop</span>
              <button className="text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5">
              <span className="text-sm text-gray-700 mr-2">김민지 선생님</span>
              <button className="text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-800 mb-3">카테고리</h2>
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-teal-600 text-white py-2 px-3 rounded-lg text-sm font-medium">전체</button>
            <button className="bg-white text-gray-700 py-2 px-3 rounded-lg text-sm font-medium border border-gray-200">선생님</button>
            <button className="bg-white text-gray-700 py-2 px-3 rounded-lg text-sm font-medium border border-gray-200">콘텐츠</button>
          </div>
        </div>

        {/* 추천 검색어 */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-800 mb-3">인기 검색어</h2>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <ol className="space-y-2">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-teal-600 text-white rounded flex items-center justify-center text-xs mr-3">1</span>
                <span className="text-gray-800">대중교통 이용하기</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-teal-500 text-white rounded flex items-center justify-center text-xs mr-3">2</span>
                <span className="text-gray-800">병원 방문</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-teal-400 text-white rounded flex items-center justify-center text-xs mr-3">3</span>
                <span className="text-gray-800">음식점에서 주문하기</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-gray-200 text-gray-600 rounded flex items-center justify-center text-xs mr-3">4</span>
                <span className="text-gray-800">카페 회화</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-gray-200 text-gray-600 rounded flex items-center justify-center text-xs mr-3">5</span>
                <span className="text-gray-800">TOPIK 준비</span>
              </li>
            </ol>
          </div>
        </div>

        {/* 추천 탐색 */}
        <div>
          <h2 className="text-base font-semibold text-gray-800 mb-3">추천 탐색</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">서울 생활 정착 가이드</h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">K-Pop 팬을 위한 한국어</h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">한국 문화와 예절</h3>
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
            <button className="py-3 flex flex-col items-center justify-center w-1/5 text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="text-xs mt-1">홈</span>
            </button>
            <button className="py-3 flex flex-col items-center justify-center w-1/5 text-teal-600">
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

export default SearchScreen;
