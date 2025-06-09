// 설문 데이터
const surveyQuestions = [
    {
        id: 1,
        question: "하나님과의 관계에서 영적 성장을 위해 가장 중요하다고 생각하는 것은?",
        options: [
            { text: "정기적인 말씀 묵상과 개인 기도 시간", type: "I" },
            { text: "성도들과의 교제와 공동체 예배", type: "E" },
            { text: "체계적인 신학 공부와 교리 학습", type: "T" },
            { text: "하나님의 사랑을 느끼는 감정적 체험", type: "F" }
        ]
    },
    {
        id: 2,
        question: "성경을 읽을 때 당신의 접근 방식은?",
        options: [
            { text: "전체적인 맥락과 하나님의 구원 계획을 파악한다", type: "N" },
            { text: "구체적인 교훈과 실생활 적용점을 찾는다", type: "S" },
            { text: "논리적 해석과 원어 연구를 중시한다", type: "T" },
            { text: "하나님의 마음과 감정을 느끼려 한다", type: "F" }
        ]
    },
    {
        id: 3,
        question: "교회에서 새로운 사역을 시작할 때 당신의 우선순위는?",
        options: [
            { text: "충분한 계획과 준비를 통한 체계적 접근", type: "J" },
            { text: "상황에 따라 유연하게 조정할 수 있는 여지", type: "P" },
            { text: "성도들의 필요와 감정을 먼저 고려", type: "F" },
            { text: "사역의 효율성과 목표 달성", type: "T" }
        ]
    },
    {
        id: 4,
        question: "기도할 때 당신이 선호하는 방식은?",
        options: [
            { text: "조용한 곳에서 혼자 깊이 묵상하며", type: "I" },
            { text: "다른 성도들과 함께 소리 내어", type: "E" },
            { text: "정해진 시간과 순서에 따라 규칙적으로", type: "J" },
            { text: "그때그때 마음이 이끄는 대로 자유롭게", type: "P" }
        ]
    },
    {
        id: 5,
        question: "하나님의 뜻을 분별할 때 가장 신뢰하는 방법은?",
        options: [
            { text: "성경 말씀과 기도를 통한 개인적 확신", type: "I" },
            { text: "목회자와 성숙한 성도들의 조언", type: "E" },
            { text: "성경적 원리와 논리적 판단", type: "T" },
            { text: "성령의 감동과 마음의 평안", type: "F" }
        ]
    },
    {
        id: 6,
        question: "전도할 때 당신이 주로 사용하는 접근법은?",
        options: [
            { text: "개인적 간증과 삶의 변화 이야기", type: "F" },
            { text: "논리적 변증과 기독교 세계관 설명", type: "T" },
            { text: "구체적인 성경 구절과 실제 사례", type: "S" },
            { text: "하나님 나라의 비전과 영원한 소망", type: "N" }
        ]
    },
    {
        id: 7,
        question: "교회 공동체에서 갈등이 생겼을 때 당신의 대응은?",
        options: [
            { text: "당사자들과 개별적으로 만나 이야기를 듣는다", type: "I" },
            { text: "공개적인 자리에서 함께 대화의 장을 만든다", type: "E" },
            { text: "성경적 원칙에 따라 명확한 해결책을 제시한다", type: "T" },
            { text: "모든 사람의 감정을 배려하며 화해를 도모한다", type: "F" }
        ]
    },
    {
        id: 8,
        question: "하나님의 성품 중 가장 감동받는 부분은?",
        options: [
            { text: "변하지 않는 신실함과 약속 이행", type: "S" },
            { text: "무한한 창조력과 새로운 가능성", type: "N" },
            { text: "완전한 공의와 거룩함", type: "T" },
            { text: "무조건적인 사랑과 은혜", type: "F" }
        ]
    },
    {
        id: 9,
        question: "성경 공부 모임을 인도할 때 당신의 스타일은?",
        options: [
            { text: "미리 준비한 계획에 따라 체계적으로", type: "J" },
            { text: "참석자들의 반응을 보며 유연하게 조정", type: "P" },
            { text: "깊이 있는 해석과 적용에 집중", type: "I" },
            { text: "활발한 토론과 나눔을 격려", type: "E" }
        ]
    },
    {
        id: 10,
        question: "신앙생활에서 가장 큰 기쁨을 느끼는 순간은?",
        options: [
            { text: "하나님의 말씀이 깊이 깨달아질 때", type: "T" },
            { text: "하나님의 사랑을 체험할 때", type: "F" },
            { text: "계획한 일이 하나님의 뜻대로 이루어질 때", type: "J" },
            { text: "예상치 못한 하나님의 은혜를 경험할 때", type: "P" }
        ]
    },
    {
        id: 11,
        question: "예배 중 설교를 들을 때 당신의 집중 포인트는?",
        options: [
            { text: "말씀의 논리적 구조와 신학적 깊이", type: "T" },
            { text: "개인적 적용과 삶의 변화", type: "F" },
            { text: "구체적인 실천 방안과 예시", type: "S" },
            { text: "하나님 나라의 비전과 소망", type: "N" }
        ]
    },
    {
        id: 12,
        question: "교회 사역에 참여할 때 선호하는 역할은?",
        options: [
            { text: "혼자서 집중할 수 있는 준비 업무", type: "I" },
            { text: "사람들과 직접 만나는 접촉 사역", type: "E" },
            { text: "정확하고 세밀한 관리 업무", type: "S" },
            { text: "창의적이고 새로운 기획 업무", type: "N" }
        ]
    },
    {
        id: 13,
        question: "하나님께 순종하는 것에 대한 당신의 이해는?",
        options: [
            { text: "성경 말씀에 대한 절대적 복종", type: "J" },
            { text: "성령의 인도하심을 따르는 것", type: "P" },
            { text: "하나님의 뜻을 정확히 이해하고 행하는 것", type: "T" },
            { text: "하나님을 사랑하는 마음으로 기꺼이 따르는 것", type: "F" }
        ]
    },
    {
        id: 14,
        question: "영적 성장을 위해 가장 도움이 되는 활동은?",
        options: [
            { text: "개인 경건의 시간과 말씀 묵상", type: "I" },
            { text: "소그룹 모임과 성도 교제", type: "E" },
            { text: "체계적인 성경 공부와 신학 서적", type: "T" },
            { text: "찬양과 기도를 통한 영적 체험", type: "F" }
        ]
    },
    {
        id: 15,
        question: "하나님의 인도하심을 받는다는 것은?",
        options: [
            { text: "미래에 대한 구체적인 계획을 세우는 것", type: "S" },
            { text: "하나님 나라의 큰 그림을 보는 것", type: "N" },
            { text: "명확한 기준에 따라 판단하는 것", type: "T" },
            { text: "하나님과의 친밀한 관계 속에서 이끄심을 받는 것", type: "F" }
        ]
    },
    {
        id: 16,
        question: "교회에서 의사결정을 할 때 중요하게 생각하는 것은?",
        options: [
            { text: "충분한 시간을 갖고 신중하게 결정", type: "J" },
            { text: "상황 변화에 따라 언제든 수정 가능하도록", type: "P" },
            { text: "과거 경험과 검증된 방법 활용", type: "S" },
            { text: "새로운 가능성과 혁신적 접근", type: "N" }
        ]
    },
    {
        id: 17,
        question: "성경의 약속들에 대한 당신의 관점은?",
        options: [
            { text: "하나님의 신실하심에 대한 확신", type: "S" },
            { text: "아직 이루어지지 않은 소망에 대한 기대", type: "N" },
            { text: "조건과 원칙이 명확한 약속", type: "T" },
            { text: "하나님 사랑의 표현으로서의 약속", type: "F" }
        ]
    },
    {
        id: 18,
        question: "다른 성도를 섬길 때 당신의 접근 방식은?",
        options: [
            { text: "그들의 필요를 미리 파악하고 준비해서", type: "J" },
            { text: "그때그때 필요에 따라 즉석에서", type: "P" },
            { text: "조용히 뒤에서 실질적으로 돕는다", type: "I" },
            { text: "적극적으로 다가가서 관계를 맺는다", type: "E" }
        ]
    },
    {
        id: 19,
        question: "하나님을 찬양할 때 가장 은혜받는 방식은?",
        options: [
            { text: "가사의 의미를 깊이 묵상하며", type: "T" },
            { text: "감정을 자유롭게 표현하며", type: "F" },
            { text: "익숙한 찬송가로 안정감 있게", type: "S" },
            { text: "새로운 곡으로 신선하게", type: "N" }
        ]
    },
    {
        id: 20,
        question: "신앙의 확신에 대한 당신의 기준은?",
        options: [
            { text: "성경 말씀과 교리에 근거한 확신", type: "T" },
            { text: "하나님과의 관계에서 오는 확신", type: "F" },
            { text: "과거 경험을 통해 검증된 확신", type: "S" },
            { text: "미래에 대한 소망으로서의 확신", type: "N" }
        ]
    }
];

// MBTI 유형 정의
const mbtiResults = {
    "ISTJ": {
        name: "충실한 청지기형",
        description: "하나님의 말씀을 신실하게 지키며 맡겨진 사명을 끝까지 감당하는 신앙인",
        characteristics: [
            "성경적 원칙을 중시하며 체계적인 신앙생활",
            "전통적 가치와 교회 질서 존중",
            "꾸준한 경건생활과 성실한 섬김",
            "책임감 있고 신뢰할 수 있는 리더십"
        ],
        strengths: "안정적이고 지속적인 신앙 성장, 교회 공동체의 든든한 기둥 역할",
        growth: "새로운 변화에 대한 열린 마음과 감정적 소통 능력 개발"
    },
    "ISFJ": {
        name: "따뜻한 돌봄이형",
        description: "하나님의 사랑으로 이웃을 섬기며 공동체를 돌보는 신앙인",
        characteristics: [
            "타인의 필요에 민감하고 실질적 도움 제공",
            "조화로운 공동체 분위기 조성",
            "겸손하고 헌신적인 섬김의 자세",
            "세심한 배려와 따뜻한 마음"
        ],
        strengths: "실제적인 사랑의 실천, 공동체 내 화합과 평화 조성",
        growth: "자신의 필요도 돌보는 균형잡힌 삶과 건강한 경계 설정"
    },
    "INFJ": {
        name: "영적 통찰자형",
        description: "하나님의 뜻을 깊이 묵상하며 영적 비전을 제시하는 신앙인",
        characteristics: [
            "깊은 영성과 미래지향적 신앙관",
            "개인적 묵상과 영적 성장 추구",
            "하나님 나라에 대한 분명한 비전",
            "직관적이고 통찰력 있는 영적 분별력"
        ],
        strengths: "영적 깊이와 미래에 대한 하나님의 계획 이해",
        growth: "현실적 실행력과 타인과의 소통 능력 향상"
    },
    "INTJ": {
        name: "신학적 건축가형",
        description: "하나님의 진리를 체계적으로 이해하며 전략적으로 사역하는 신앙인",
        characteristics: [
            "논리적이고 체계적인 신앙 접근",
            "장기적 관점에서의 사역 계획",
            "독립적이고 깊이 있는 신앙 추구",
            "전략적 사고와 혁신적 아이디어"
        ],
        strengths: "체계적인 신학적 이해와 장기적 비전 제시",
        growth: "감정적 공감 능력과 협력적 리더십 개발"
    },
    "ISTP": {
        name: "실용적 봉사자형",
        description: "하나님이 주신 은사를 실제적으로 활용하여 섬기는 신앙인",
        characteristics: [
            "실용적이고 효율적인 섬김",
            "위기 상황에서의 냉정한 대처",
            "행동으로 보여주는 신앙",
            "문제 해결 능력과 실무적 재능"
        ],
        strengths: "실제적인 도움과 효율적인 문제 해결",
        growth: "감정 표현과 장기적 관계 형성 능력 개발"
    },
    "ISFP": {
        name: "온유한 예배자형",
        description: "하나님의 사랑 안에서 자유롭게 예배하며 개성을 발휘하는 신앙인",
        characteristics: [
            "개인적이고 진실한 신앙 표현",
            "예술적 감성을 통한 예배",
            "평화롭고 조화로운 신앙생활",
            "온유하고 겸손한 성품"
        ],
        strengths: "진정성 있는 예배와 창의적인 신앙 표현",
        growth: "적극적인 소통과 리더십 역할 수용"
    },
    "INFP": {
        name: "열정적 사명자형",
        description: "하나님의 부르심에 온 마음으로 응답하며 이상을 추구하는 신앙인",
        characteristics: [
            "강한 신앙적 가치관과 사명감",
            "창의적이고 독창적인 사역 방식",
            "진정성 있는 신앙 추구",
            "이상주의적이고 열정적인 성품"
        ],
        strengths: "강한 동기와 창의적인 사역 아이디어",
        growth: "현실적 실행력과 지속적인 인내력 개발"
    },
    "INTP": {
        name: "탐구하는 신학자형",
        description: "하나님의 진리를 끊임없이 탐구하며 깊이 이해하려는 신앙인",
        characteristics: [
            "지적 호기심을 통한 신앙 탐구",
            "논리적이고 분석적인 성경 연구",
            "독립적이고 자유로운 사고",
            "객관적이고 비판적인 사고력"
        ],
        strengths: "깊이 있는 신학적 이해와 논리적 사고",
        growth: "실제적 적용과 감정적 연결 능력 향상"
    },
    "ESTP": {
        name: "활동적 전도자형",
        description: "하나님의 사랑을 적극적으로 전하며 현장에서 섬기는 신앙인",
        characteristics: [
            "즉석에서의 전도와 섬김",
            "활동적이고 에너지 넘치는 신앙",
            "현실적이고 실용적인 접근",
            "사교적이고 적응력이 뛰어남"
        ],
        strengths: "활발한 전도와 현장 중심의 사역",
        growth: "깊이 있는 묵상과 장기적 계획 수립"
    },
    "ESFP": {
        name: "기쁨의 전령사형",
        description: "하나님의 기쁨을 나누며 사람들에게 희망을 전하는 신앙인",
        characteristics: [
            "밝고 긍정적인 신앙 표현",
            "사람들과의 따뜻한 교제 중시",
            "자유롭고 감정적인 예배",
            "낙관적이고 격려하는 성품"
        ],
        strengths: "긍정적 에너지와 따뜻한 인간관계",
        growth: "깊이 있는 성찰과 체계적인 성장 추구"
    },
    "ENFP": {
        name: "영감을 주는 격려자형",
        description: "하나님의 가능성을 보며 다른 이들에게 영감을 주는 신앙인",
        characteristics: [
            "창의적이고 혁신적인 사역 아이디어",
            "사람들의 잠재력을 발견하고 격려",
            "열정적이고 미래지향적 신앙",
            "영감을 주는 리더십"
        ],
        strengths: "창의적 아이디어와 사람들에게 영감을 주는 능력",
        growth: "지속적인 실행력과 세부적인 관리 능력"
    },
    "ENTP": {
        name: "개척하는 혁신자형",
        description: "하나님 나라의 새로운 가능성을 탐구하며 변화를 이끄는 신앙인",
        characteristics: [
            "새로운 사역 방법과 접근 시도",
            "도전적이고 혁신적인 사고",
            "변화와 성장을 추구하는 신앙",
            "창의적 문제 해결 능력"
        ],
        strengths: "혁신적 사고와 새로운 가능성 탐구",
        growth: "일관성 있는 실행과 감정적 배려 능력"
    },
    "ESTJ": {
        name: "지도력 있는 관리자형",
        description: "하나님의 질서 안에서 공동체를 효율적으로 이끄는 신앙인",
        characteristics: [
            "체계적이고 조직적인 교회 운영",
            "명확한 목표와 계획 수립",
            "책임감 있는 리더십 발휘",
            "효율적이고 실용적인 관리"
        ],
        strengths: "강력한 리더십과 체계적인 조직 운영",
        growth: "유연성과 개인적 배려 능력 개발"
    },
    "ESFJ": {
        name: "사랑의 목자형",
        description: "하나님의 사랑으로 성도들을 돌보며 공동체를 섬기는 신앙인",
        characteristics: [
            "성도들의 필요에 세심한 관심",
            "조화롭고 따뜻한 공동체 분위기",
            "전통적 가치와 관계 중시",
            "협력적이고 배려하는 리더십"
        ],
        strengths: "따뜻한 돌봄과 조화로운 공동체 형성",
        growth: "객관적 판단력과 건강한 경계 설정"
    },
    "ENFJ": {
        name: "영감을 주는 목회자형",
        description: "하나님의 비전을 제시하며 사람들의 영적 성장을 돕는 신앙인",
        characteristics: [
            "카리스마 있는 영적 리더십",
            "개인의 영적 성장에 관심",
            "공동체의 비전 제시와 동기부여",
            "감화력 있는 소통 능력"
        ],
        strengths: "영감을 주는 리더십과 개인 성장 도움",
        growth: "객관적 분석력과 자기 돌봄 능력"
    },
    "ENTJ": {
        name: "전략적 지휘관형",
        description: "하나님 나라 확장을 위해 전략적으로 사역을 이끄는 신앙인",
        characteristics: [
            "장기적 비전과 전략적 사고",
            "효율적이고 목표지향적 사역",
            "강력한 리더십과 추진력",
            "체계적이고 논리적인 접근"
        ],
        strengths: "전략적 비전과 강력한 실행력",
        growth: "감정적 공감과 개인적 배려 능력"
    }
};

// 전역 변수
let currentQuestion = 0;
let userAnswers = [];
let testStartTime = null;

// 테스트 시작
function startTest() {
    testStartTime = new Date();
    document.getElementById('main-screen').classList.remove('active');
    document.getElementById('question-screens').style.display = 'block';
    createQuestionScreens();
    showQuestion(1);
}

// 질문 화면 생성
function createQuestionScreens() {
    const container = document.getElementById('question-screens');
    container.innerHTML = '';
    
    surveyQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'screen';
        questionDiv.id = `question-${question.id}`;
        
        const progress = ((index + 1) / surveyQuestions.length) * 100;
        
        questionDiv.innerHTML = `
            <div class="question-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                
                <div class="question-number">
                    ${question.id} / ${surveyQuestions.length}
                </div>
                
                <div class="question-card">
                    <div class="question-text">
                        ${question.question}
                    </div>
                    
                    <div class="options-grid">
                        ${question.options.map((option, optIndex) => `
                            <label class="option-item" for="q${question.id}_${optIndex}">
                                <input type="radio" name="question${question.id}" value="${option.type}" id="q${question.id}_${optIndex}">
                                <div class="option-text">${option.text}</div>
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div class="question-nav">
                    <button class="nav-btn ${index === 0 ? 'disabled' : ''}" 
                            onclick="prevQuestion()" 
                            ${index === 0 ? 'disabled' : ''}>
                        ← 이전
                    </button>
                    <button class="nav-btn primary" 
                            onclick="nextQuestion()" 
                            id="next-btn-${question.id}" 
                            disabled>
                        ${index === surveyQuestions.length - 1 ? '결과 보기' : '다음 →'}
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(questionDiv);
        
        // 라디오 버튼 이벤트 리스너
        const radioButtons = questionDiv.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', function() {
                userAnswers[index] = this.value;
                document.getElementById(`next-btn-${question.id}`).disabled = false;
                
                // 선택 효과
                const options = questionDiv.querySelectorAll('.option-item');
                options.forEach(opt => opt.classList.remove('selected'));
                this.closest('.option-item').classList.add('selected');
                
                // 자동 진행 (선택적)
                setTimeout(() => {
                    if (index < surveyQuestions.length - 1) {
                        nextQuestion();
                    }
                }, 800);
            });
        });
    });
}

// 질문 표시
function showQuestion(questionNumber) {
    const screens = document.querySelectorAll('#question-screens .screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    const targetScreen = document.getElementById(`question-${questionNumber}`);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentQuestion = questionNumber;
    }
}

// 다음 질문
function nextQuestion() {
    if (currentQuestion < surveyQuestions.length) {
        showQuestion(currentQuestion + 1);
    } else {
        showResult();
    }
}

// 이전 질문
function prevQuestion() {
    if (currentQuestion > 1) {
        showQuestion(currentQuestion - 1);
    }
}

// 결과 계산
function calculateMBTI() {
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    userAnswers.forEach(answer => {
        if (answer) counts[answer]++;
    });
    
    const result = 
        (counts.E > counts.I ? 'E' : 'I') +
        (counts.S > counts.N ? 'S' : 'N') +
        (counts.T > counts.F ? 'T' : 'F') +
        (counts.J > counts.P ? 'J' : 'P');
    
    return result;
}

// 결과 표시
function showResult() {
    const mbtiType = calculateMBTI();
    const result = mbtiResults[mbtiType];
    const testDuration = Math.round((new Date() - testStartTime) / 1000);
    
    document.getElementById('question-screens').style.display = 'none';
    document.getElementById('result-screen').style.display = 'flex';
    document.getElementById('result-screen').classList.add('active');
    
    const resultContent = document.getElementById('result-content');
    resultContent.innerHTML = `
        <div class="result-type">
            <div class="result-mbti">${mbtiType}</div>
            <div class="result-name">${result.name}</div>
        </div>
        
        <div class="result-description">
            "${result.description}"
        </div>
        
        <div class="result-details">
            <h4>🌟 주요 특징</h4>
            <ul>
                ${result.characteristics.map(char => `<li>${char}</li>`).join('')}
            </ul>
            
            <h4>💪 신앙적 강점</h4>
            <p>${result.strengths}</p>
            
            <h4>🌱 성장 포인트</h4>
            <p>${result.growth}</p>
            
            <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 15px; text-align: center;">
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">
                    테스트 완료 시간: ${Math.floor(testDuration / 60)}분 ${testDuration % 60}초
                </p>
                <p style="font-size: 0.85rem; color: #888;">
                    칼뱅의 기독교강요와 메튜 헨리의 실제적 경건 원리를 바탕으로 제작되었습니다.
                </p>
            </div>
        </div>
    `;
}

// 결과 저장
function saveResult() {
    const button = event.target;
    const originalText = button.innerHTML;
    
    button.innerHTML = '<div class="loading"></div> 저장 중...';
    button.disabled = true;
    
    const resultContent = document.getElementById('result-content');
    
    html2canvas(resultContent, {
        allowTaint: true,
        useCORS: true,
        backgroundColor: '#ffffff',
        scale: 2,
        width: resultContent.offsetWidth,
        height: resultContent.offsetHeight
    }).then(function(canvas) {
        const imageData = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.download = `크리스천_MBTI_${calculateMBTI()}_${new Date().getTime()}.png`;
        link.href = imageData;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        button.innerHTML = '✅ 저장 완료!';
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
        
    }).catch(function(error) {
        console.error('저장 오류:', error);
        button.innerHTML = '❌ 저장 실패';
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    });
}

// 결과 공유
function shareResult() {
    const mbtiType = calculateMBTI();
    const result = mbtiResults[mbtiType];
    
    if (navigator.share) {
        navigator.share({
            title: '크리스천 MBTI 결과',
            text: `나의 크리스천 MBTI는 ${mbtiType} (${result.name})입니다! ${result.description}`,
            url: window.location.href
        });
    } else {
        const shareText = `나의 크리스천 MBTI는 ${mbtiType} (${result.name})입니다!\n\n${result.description}\n\n테스트 해보기: ${window.location.href}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('결과가 클립보드에 복사되었습니다!');
            });
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('결과가 클립보드에 복사되었습니다!');
        }
    }
}

// 테스트 재시작
function restartTest() {
    currentQuestion = 0;
    userAnswers = [];
    testStartTime = null;
    
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('question-screens').style.display = 'none';
    document.getElementById('main-screen').classList.add('active');
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 터치 이벤트 최적화
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // 뒤로가기 방지 (선택적)
    window.addEventListener('beforeunload', function(e) {
        if (currentQuestion > 0 && currentQuestion <= surveyQuestions.length) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
});
