flowchart TD
    Start[시작] --> Landing[랜딩 페이지]
    Landing --> Register[회원가입]
    Register --> Onboarding[온보딩: 언어수준/관심사 설정]
    Onboarding --> Home[홈 화면]
    
    Home --> Online[온라인 학습 매칭]
    Home --> Offline[오프라인 동행 매칭]
    Home --> MyPage[마이페이지]
    Home --> Schedule[예약 관리]
    
    %% 온라인 학습 플로우
    Online --> LearningType{학습 유형 선택}
    LearningType -->|프리토킹| PathChoice1{경로 선택}
    LearningType -->|콘텐츠로 대화| PathChoice1
    LearningType -->|공인학습레벨| PathChoice1
    
    PathChoice1 -->|선생님 먼저| TeacherFirst[선생님 검색/필터링]
    PathChoice1 -->|콘텐츠 먼저| ContentFirst[콘텐츠 검색/필터링]
    
    TeacherFirst --> TeacherProfile[선생님 프로필 확인]
    TeacherProfile --> SelectTeacher[선생님 선택]
    SelectTeacher --> SelectContent[콘텐츠 선택]
    
    ContentFirst --> ContentDetails[콘텐츠 상세 확인]
    ContentDetails --> SelectContent2[콘텐츠 선택]
    SelectContent2 --> TeacherOptions[가능한 선생님 목록]
    TeacherOptions -->|선생님 선택| SelectTeacher2[특정 선생님 선택]
    TeacherOptions -->|자동 매칭| AutoMatch[자동 매칭 ($1 할인)]
    
    SelectContent --> Schedule1[일정/시간 선택]
    SelectTeacher2 --> Schedule1
    AutoMatch --> Schedule1
    
    Schedule1 --> Payment[결제]
    Payment --> Confirmation[예약 확인]
    Confirmation --> Class[수업 진행]
    Class --> Feedback[피드백 작성]
    
    %% 오프라인 동행 플로우
    Offline --> PathChoice2{경로 선택}
    
    PathChoice2 -->|신청서 먼저| RequestFirst[동행 신청서 작성]
    PathChoice2 -->|선생님 먼저| TeacherFirst2[선생님 검색/필터링]
    
    RequestFirst --> SubmitRequest[신청서 제출]
    SubmitRequest -->|자동 매칭| AutoMatchOffline[선생님 자동 매칭]
    SubmitRequest -->|직접 선택| WaitApplication[선생님 지원 대기]
    WaitApplication --> SelectApplicant[지원 선생님 선택]
    
    TeacherFirst2 --> TeacherProfile2[선생님 프로필 확인]
    TeacherProfile2 --> SelectTeacher3[선생님 선택]
    SelectTeacher3 --> RequestSecond[동행 신청서 작성]
    RequestSecond --> SubmitToTeacher[선택 선생님에게 제출]
    SubmitToTeacher --> WaitApproval[선생님 수락 대기]
    
    AutoMatchOffline --> MatchConfirm[매칭 확정]
    SelectApplicant --> MatchConfirm
    WaitApproval -->|수락됨| MatchConfirm
    
    MatchConfirm --> OfflinePayment[결제]
    OfflinePayment --> MeetingDetails[만남 상세 정보 교환]
    MeetingDetails --> Meeting[오프라인 동행]
    Meeting --> OfflineFeedback[동행 후 피드백 작성]
    
    %% 추가 플로우
    Class --> NextClass[다음 수업 예약]
    Feedback --> NextClass
    
    OfflineFeedback --> NextMeeting[다음 동행 예약]
    
    %% 스타일링
    classDef primary fill:#1A9C9C,stroke:#0d5454,color:white;
    classDef secondary fill:#FF6B6B,stroke:#cc5555,color:white;
    classDef neutral fill:#F8F9FA,stroke:#DEE2E6,color:black;
    classDef decision fill:#FFC107,stroke:#d6a206,color:black;
    
    class Start,Landing,Register,Onboarding,Home primary;
    class Online,Offline,TeacherFirst,ContentFirst,TeacherFirst2,RequestFirst secondary;
    class LearningType,PathChoice1,PathChoice2 decision;
    class TeacherProfile,ContentDetails,Schedule1,Payment,Class,Feedback,RequestSecond,Meeting,OfflineFeedback neutral;
