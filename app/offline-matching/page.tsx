import Header from "../components/layout/Header";
import BottomNavigation from "../components/layout/BottomNavigation";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Link from "next/link";

export default function OfflineMatchingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <Header title="오프라인 동행 신청" showBackButton={true} />

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 매칭 경로 선택 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">매칭 방법을 선택하세요</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-5 border-2 border-primary">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800">신청서 작성하기</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">나의 요구사항과 상황을 설명하는 신청서를 작성하고, 적합한 선생님이 지원하면 선택합니다.</p>
              <div className="flex justify-end">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
            </Card>
            <Link href="/offline-matching/teachers">
              <Card className="p-5 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800">선생님 먼저 선택하기</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">선생님의 프로필을 직접 확인하고 선택한 후, 동행 요청서를 작성합니다.</p>
              </Card>
            </Link>
          </div>
        </div>

        {/* 신청서 작성 */}
        <Card className="p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">신청서 작성</h3>
          
          <div className="space-y-4">
            {/* 동행 목적 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">동행 목적*</label>
              <select className="input">