/*************** 
 * SC-IAT - 브라우저 호환 최적화 버전 *
 ***************/

// ===== 브라우저 환경 감지 및 안전성 체크 =====
const isBrowser = typeof window !== 'undefined';
const isPsychoJSLoaded = () => {
    return typeof PsychoJS !== 'undefined' && 
           typeof core !== 'undefined' && 
           typeof visual !== 'undefined';
};

// ===== 설정 및 상수 =====
const CONFIG = {
    EXPERIMENT_NAME: 'SC-IAT',
    PARTICIPANT_ID_LENGTH: 6,
    SESSION_ID: '001',
    IMAGE_PATH: 'images/',
    DEFAULT_IMAGE: 'default.jpg',
    POSITIVE_KEYS: ['z', 'Z'],
    NEGATIVE_KEYS: ['slash', '/'],
    DEFAULT_DURATION: 0.5,
    FEEDBACK_DURATION: 1.0,
    WELCOME_MESSAGE: `
        <div style="font-size:1.3em; text-align:center; padding:30px;">
            <b>안녕하세요!</b><br><br>
            본 실험에 참여해주셔서 감사합니다.<br>
            본 실험은 <b>암묵적 연합 검사(SC-IAT)</b>입니다.<br><br>
            안내에 따라 실험을 진행해 주세요.<br>
            준비가 되셨으면 아래의 <b>확인</b> 버튼을 눌러주세요.
        </div>
    `
};

// ===== 브라우저 호환 유틸리티 함수들 =====
const Utils = {
    // 안전한 이미지 설정 (브라우저 호환)
    setImageSafely(imageStim, imagePath) {
        try {
            if (imageStim && typeof imageStim.setImage === 'function') {
                imageStim.setImage('images/' + imagePath);
            } else {
                console.warn('이미지 스티뮬러스가 유효하지 않습니다:', imageStim);
            }
        } catch (error) {
            console.error('이미지 로딩 실패:', imagePath, error);
            try {
                imageStim.setImage('images/default.jpg');
            } catch (fallbackError) {
                console.error('기본 이미지 로딩도 실패:', fallbackError);
            }
        }
    },
    
    // 브라우저 호환 모달 표시
    showModal(message) {
        return new Promise((resolve) => {
            if (!isBrowser) {
                console.warn('브라우저 환경이 아닙니다. 모달을 표시할 수 없습니다.');
                resolve();
                return;
            }
            
            try {
                const modal = document.createElement('div');
                modal.style.cssText = `
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: rgba(0,0,0,0.5); display: flex; align-items: center;
                    justify-content: center; z-index: 9999;
                `;
                
                const content = document.createElement('div');
                content.style.cssText = `
                    background: white; padding: 20px; border-radius: 10px;
                    max-width: 500px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                `;
                content.innerHTML = message;
                
                const button = document.createElement('button');
                button.textContent = '확인';
                button.style.cssText = `
                    margin-top: 20px; padding: 10px 20px; background: #007bff;
                    color: white; border: none; border-radius: 5px; cursor: pointer;
                    font-size: 16px; transition: background-color 0.2s;
                `;
                button.onmouseover = () => button.style.background = '#0056b3';
                button.onmouseout = () => button.style.background = '#007bff';
                button.onclick = () => {
                    try {
                        document.body.removeChild(modal);
                    } catch (error) {
                        console.warn('모달 제거 중 오류:', error);
                    }
                    resolve();
                };
                
                content.appendChild(button);
                modal.appendChild(content);
                document.body.appendChild(modal);
            } catch (error) {
                console.error('모달 생성 실패:', error);
                resolve();
            }
        });
    },
    
    // 안전한 랜덤 ID 생성 (브라우저 호환)
    generateParticipantId() {
        try {
            const randomNum = Math.floor(Math.random() * 999999);
            return String(randomNum).padStart(CONFIG.PARTICIPANT_ID_LENGTH, '0');
        } catch (error) {
            console.error('참가자 ID 생성 실패:', error);
            return '000001';
        }
    },
    
    // 안전한 색상 설정 (브라우저 호환)
    createColor(r, g, b) {
        try {
            // PsychoJS Color 객체가 있으면 사용, 없으면 배열 반환
            if (typeof util !== 'undefined' && util.Color) {
                return new util.Color([r, g, b]);
            } else {
                return [r, g, b];
            }
        } catch (error) {
            console.warn('Color 객체 생성 실패, 배열 사용:', error);
            return [r, g, b];
        }
    },
    
    // 안전한 수학 함수들 (브라우저 호환)
    math: {
        abs: Math.abs,
        sin: Math.sin,
        cos: Math.cos,
        PI: Math.PI,
        sqrt: Math.sqrt,
        round: Math.round,
        floor: Math.floor,
        random: Math.random
    }
};

// ===== SCIAT 네임스페이스 (브라우저 호환) =====
window.SCIAT = {
    // 현재 trial 정보 관리
    currentStimulus: {
        file: null,
        category: null,
        correctKey: null,
        index: 0
    },
    
    // 자극 풀 관리
    stimuliPools: {
        block1: null,
        block2: null,
        block3: null,
        block4: null
    },
    
    // 이미지 목록
    positive_images: [
        "기쁘다.jpg", "만족하다.jpg", "흐뭇하다.jpg", "영광스럽다.jpg", "평온하다.jpg",
        "뿌듯하다.jpg", "사랑스럽다.jpg", "반갑다.jpg", "평화롭다.jpg", "상쾌하다.jpg",
        "즐겁다.jpg", "행복하다.jpg", "감사하다.jpg", "설레다.jpg", "희망차다.jpg",
        "감동적이다.jpg", "감탄하다.jpg", "기대하다.jpg", "즐거움.jpg", "환희.jpg",
        "기쁨.jpg"
    ],
    
    negative_images: [
        "슬프다.jpg", "우울하다.jpg", "짜증나다.jpg", "화나다.jpg", "불안하다.jpg",
        "걱정하다.jpg", "두렵다.jpg", "무섭다.jpg", "놀라다.jpg", "충격받다.jpg",
        "실망하다.jpg", "절망하다.jpg", "분노하다.jpg", "증오하다.jpg", "혐오하다.jpg",
        "싫다.jpg", "지루하다.jpg", "피곤하다.jpg", "스트레스.jpg", "고통.jpg",
        "슬픔.jpg"
    ],
    
    drug_images: [
        "대마초.jpg", "코카인.jpg", "헤로인.jpg", "메스암페타민.jpg", "엑스터시.jpg",
        "LSD.jpg", "페인킬러.jpg", "벤조디아제핀.jpg", "바르비튜레이트.jpg", "GHB.jpg",
        "케타민.jpg", "PCP.jpg", "마리화나.jpg", "해시시.jpg", "아편.jpg",
        "모르핀.jpg", "코데인.jpg", "옥시코돈.jpg", "하이드로코돈.jpg", "펜타닐.jpg",
        "메타돈.jpg"
    ],
    
    // 통합된 비복원 추출 함수 (브라우저 호환)
    strictSample(array, n) {
        try {
            if (!Array.isArray(array) || n > array.length) {
                console.warn('strictSample: 유효하지 않은 매개변수', { array, n });
                return array.slice(0, n);
            }
            
            const shuffled = [...array].sort(() => Utils.math.random() - 0.5);
            return shuffled.slice(0, n);
        } catch (error) {
            console.error('strictSample 실행 오류:', error);
            return array.slice(0, n);
        }
    },
    
    // 연속 중복 방지 셔플 (브라우저 호환)
    shuffleWithoutConsecutive(stimuliPool) {
        try {
            const isValidSequence = (seq) => {
                for (let i = 1; i < seq.length; i++) {
                    if (seq[i].file === seq[i-1].file) return false;
                }
                return true;
            };
            
            let attempts = 0;
            const maxAttempts = 1000;
            
            while (attempts < maxAttempts) {
                const shuffled = [...stimuliPool].sort(() => Utils.math.random() - 0.5);
                if (isValidSequence(shuffled)) {
                    return shuffled;
                }
                attempts++;
            }
            
            console.warn('연속 중복 방지 셔플 실패, 일반 셔플 사용');
            return [...stimuliPool].sort(() => Utils.math.random() - 0.5);
        } catch (error) {
            console.error('shuffleWithoutConsecutive 실행 오류:', error);
            return stimuliPool;
        }
    },
    
    // 통합된 자극 풀 생성 (브라우저 호환)
    createStimuliPool(blockType) {
        try {
            const configs = {
                block1: { positive: 12, negative: 12, drug: 0 },
                block2: { positive: 21, negative: 30, drug: 21 },
                block3: { positive: 12, negative: 12, drug: 0 },
                block4: { positive: 21, negative: 30, drug: 21 }
            };
            
            const config = configs[blockType];
            if (!config) {
                console.error('알 수 없는 블록 타입:', blockType);
                return [];
            }
            
            let pool = [];
            
            // 긍정적 이미지 추가
            const positiveSamples = this.strictSample(this.positive_images, config.positive);
            positiveSamples.forEach(file => {
                pool.push({ file, category: 'positive', correctKey: 'z' });
            });
            
            // 부정적 이미지 추가
            const negativeSamples = this.strictSample(this.negative_images, config.negative);
            negativeSamples.forEach(file => {
                pool.push({ file, category: 'negative', correctKey: 'slash' });
            });
            
            // 약물 이미지 추가 (블록 2, 4만)
            if (config.drug > 0) {
                const drugSamples = this.strictSample(this.drug_images, config.drug);
                drugSamples.forEach(file => {
                    pool.push({ file, category: 'drug', correctKey: 'z' });
                });
            }
            
            return this.shuffleWithoutConsecutive(pool);
        } catch (error) {
            console.error('createStimuliPool 실행 오류:', error);
            return [];
        }
    },
    
    // 현재 자극 설정 (브라우저 호환)
    setCurrentStimulus(stimulusInfo) {
        try {
            this.currentStimulus = { ...stimulusInfo };
        } catch (error) {
            console.error('setCurrentStimulus 실행 오류:', error);
        }
    },
    
    // 통합된 인트로 텍스트 생성 (브라우저 호환)
    createIntroText(blockType) {
        try {
            const texts = {
                block1: "블록 1: 긍정적 vs 부정적\n\n긍정적 단어 → Z키\n부정적 단어 → /키",
                block2: "블록 2: 긍정적+약물 vs 부정적\n\n긍정적 단어 + 약물 → Z키\n부정적 단어 → /키",
                block3: "블록 3: 긍정적 vs 부정적\n\n긍정적 단어 → Z키\n부정적 단어 → /키",
                block4: "블록 4: 긍정적+약물 vs 부정적\n\n긍정적 단어 + 약물 → Z키\n부정적 단어 → /키"
            };
            
            return texts[blockType] || "알 수 없는 블록";
        } catch (error) {
            console.error('createIntroText 실행 오류:', error);
            return "텍스트 생성 실패";
        }
    },
    
    // 통합된 피드백 메시지 생성 (브라우저 호환)
    createFeedbackMessage(keyResponse) {
        try {
            const isCorrect = keyResponse === this.currentStimulus.correctKey;
            const isFast = keyResponse.rt < 0.3;
            
            if (isCorrect && isFast) {
                return "O\nfaster";
            } else if (isCorrect) {
                return "O";
            } else {
                return "X";
            }
        } catch (error) {
            console.error('createFeedbackMessage 실행 오류:', error);
            return "X";
        }
    }
};

// ===== 실험 정보 설정 (브라우저 호환) =====
let expName = CONFIG.EXPERIMENT_NAME;
let expInfo = {
    'participant': Utils.generateParticipantId(),
    'session': CONFIG.SESSION_ID,
};

// ===== PsychoJS 초기화 (브라우저 호환) =====
let core, data, sound, util, visual, hardware;
let PsychoJS, TrialHandler, MultiStairHandler, Scheduler;

// 브라우저 환경에서 안전한 초기화
if (isBrowser) {
    // PsychoJS 모듈들을 전역으로 사용
    // 이 부분은 PsychoJS가 자동으로 처리하므로 별도 로딩 불필요
}

//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt, round } = Utils.math;

// ===== 브라우저 호환 초기화 함수들 =====
async function showWelcomeMessage() {
    try {
        if (!isBrowser) {
            console.warn('브라우저 환경이 아닙니다. 환영 메시지를 표시할 수 없습니다.');
            return;
        }
        
        await Utils.showModal(CONFIG.WELCOME_MESSAGE);
    } catch (error) {
        console.error('환영 메시지 표시 실패:', error);
    }
}

async function updateInfo() {
    try {
        if (!isPsychoJSLoaded()) {
            console.warn('PsychoJS가 로드되지 않았습니다. 정보 업데이트를 건너뜁니다.');
            return;
        }
        
        expInfo['date'] = data.getDateStr();
        expInfo['expName'] = CONFIG.EXPERIMENT_NAME;
        expInfo['psychopyVersion'] = '2024.2.4';
        expInfo['OS'] = navigator.platform;
    } catch (error) {
        console.error('정보 업데이트 실패:', error);
    }
}

async function experimentInit() {
    try {
        // SCIAT 자극 풀 초기화
        SCIAT.stimuliPools.block1 = SCIAT.createStimuliPool('block1');
        SCIAT.stimuliPools.block2 = SCIAT.createStimuliPool('block2');
        SCIAT.stimuliPools.block3 = SCIAT.createStimuliPool('block3');
        SCIAT.stimuliPools.block4 = SCIAT.createStimuliPool('block4');
        
        console.log('SCIAT 실험 초기화 완료');
    } catch (error) {
        console.error('실험 초기화 실패:', error);
    }
}

// ===== 브라우저 호환 메인 실행 =====
async function main() {
    try {
        // 브라우저 환경 체크
        if (!isBrowser) {
            console.error('브라우저 환경이 아닙니다.');
            return;
        }
        
        // PsychoJS 로딩 대기
        let loadAttempts = 0;
        const maxLoadAttempts = 50;
        
        while (!isPsychoJSLoaded() && loadAttempts < maxLoadAttempts) {
            await new Promise(resolve => setTimeout(resolve, 100));
            loadAttempts++;
        }
        
        if (!isPsychoJSLoaded()) {
            console.error('PsychoJS 로딩 실패');
            return;
        }
        
        // 실험 초기화
        await experimentInit();
        
        // 환영 메시지 표시
        await showWelcomeMessage();
        
        console.log('SC-IAT 실험 준비 완료');
    } catch (error) {
        console.error('메인 실행 실패:', error);
    }
}

// 브라우저에서 자동 실행
if (isBrowser) {
    // DOM 로딩 완료 후 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
    } else {
        main();
    }
}

// ===== PsychoJS 실험 스케줄링 (브라우저 호환) =====
// init psychoJS:
const psychoJS = new PsychoJS({
    debug: true
});

// open window:
psychoJS.openWindow({
    fullscr: true,
    color: Utils.createColor(-1.0, -1.0, -1.0),
    units: 'height',
    waitBlanking: true,
    backgroundImage: '',
    backgroundFit: 'none',
});

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
    dictionary: expInfo,
    title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { 
    return (psychoJS.gui.dialogComponent.button === 'OK'); 
}, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroRoutineBegin());
flowScheduler.add(IntroRoutineEachFrame());
flowScheduler.add(IntroRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);

flowScheduler.add(Intro_2RoutineBegin());
flowScheduler.add(Intro_2RoutineEachFrame());
flowScheduler.add(Intro_2RoutineEnd());
flowScheduler.add(General_IntroRoutineBegin());
flowScheduler.add(General_IntroRoutineEachFrame());
flowScheduler.add(General_IntroRoutineEnd());
const blockLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopLoopBegin(blockLoopLoopScheduler));
flowScheduler.add(blockLoopLoopScheduler);
flowScheduler.add(blockLoopLoopEnd);

flowScheduler.add(Intro_3RoutineBegin());
flowScheduler.add(Intro_3RoutineEachFrame());
flowScheduler.add(Intro_3RoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);

flowScheduler.add(Intro_4RoutineBegin());
flowScheduler.add(Intro_4RoutineEachFrame());
flowScheduler.add(Intro_4RoutineEnd());
flowScheduler.add(General_Intro_2RoutineBegin());
flowScheduler.add(General_Intro_2RoutineEachFrame());
flowScheduler.add(General_Intro_2RoutineEnd());
const blockLoop_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoop_2LoopBegin(blockLoop_2LoopScheduler));
flowScheduler.add(blockLoop_2LoopScheduler);
flowScheduler.add(blockLoop_2LoopEnd);

flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

// ===== 실험 시작 =====
psychoJS.start({
    expName: expName,
    expInfo: expInfo,
    resources: [
        // resources:
    ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

// ===== 브라우저 호환 루틴 함수들 =====

// Intro 루틴 (브라우저 호환)
function IntroRoutineBegin(snapshot) {
    return async function () {
        TrialHandler.fromSnapshot(snapshot);
        
        t = 0;
        frameN = -1;
        continueRoutine = true;
        IntroClock.reset();
        routineTimer.reset();
        IntroMaxDurationReached = false;
        
        key_resp_intro.keys = undefined;
        key_resp_intro.rt = undefined;
        _key_resp_intro_allKeys = [];
        
        psychoJS.experiment.addData('Intro.started', globalClock.getTime());
        IntroMaxDuration = null;
        
        IntroComponents = [];
        IntroComponents.push(IntroText);
        IntroComponents.push(Positive_1_1);
        IntroComponents.push(Negative_1_1);
        IntroComponents.push(key_resp_intro);
        
        IntroComponents.forEach(function(thisComponent) {
            if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
        });
        
        return Scheduler.Event.NEXT;
    }
}

function IntroRoutineEachFrame() {
    return async function () {
        t = IntroClock.getTime();
        frameN = frameN + 1;
        
        // IntroText 업데이트 (SCIAT 네임스페이스 활용)
        if (t >= 0 && IntroText.status === PsychoJS.Status.NOT_STARTED) {
            IntroText.tStart = t;
            IntroText.frameNStart = frameN;
            IntroText.setAutoDraw(true);
        }
        
        // Positive_1_1 업데이트
        if (t >= 0.0 && Positive_1_1.status === PsychoJS.Status.NOT_STARTED) {
            Positive_1_1.tStart = t;
            Positive_1_1.frameNStart = frameN;
            Positive_1_1.setAutoDraw(true);
        }
        
        // Negative_1_1 업데이트
        if (t >= 0.0 && Negative_1_1.status === PsychoJS.Status.NOT_STARTED) {
            Negative_1_1.tStart = t;
            Negative_1_1.frameNStart = frameN;
            Negative_1_1.setAutoDraw(true);
        }
        
        // key_resp_intro 업데이트
        if (t >= 0.0 && key_resp_intro.status === PsychoJS.Status.NOT_STARTED) {
            key_resp_intro.tStart = t;
            key_resp_intro.frameNStart = frameN;
            
            psychoJS.window.callOnFlip(function() { key_resp_intro.clock.reset(); });
            psychoJS.window.callOnFlip(function() { key_resp_intro.start(); });
            psychoJS.window.callOnFlip(function() { key_resp_intro.clearEvents(); });
        }
        
        if (key_resp_intro.status === PsychoJS.Status.STARTED) {
            let theseKeys = key_resp_intro.getKeys({keyList: ['space'], waitRelease: false});
            _key_resp_intro_allKeys = _key_resp_intro_allKeys.concat(theseKeys);
            if (_key_resp_intro_allKeys.length > 0) {
                key_resp_intro.keys = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].name;
                key_resp_intro.rt = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].rt;
                key_resp_intro.duration = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].duration;
                continueRoutine = false;
            }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList: ['escape']}).length > 0) {
            return psychoJS.quitPsychoJS('The [Escape] key was pressed!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {
            return Scheduler.Event.NEXT;
        }
        
        return Scheduler.Event.CONTINUE;
    }
}

function IntroRoutineEnd(snapshot) {
    return async function () {
        //--- Ending Routine 'Intro' ---
        IntroComponents.forEach(function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
            }
        });
        
        psychoJS.experiment.addData('Intro.stopped', globalClock.getTime());
        
        return Scheduler.Event.NEXT;
    }
}

// Trial 루프 (브라우저 호환)
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
    return async function () {
        //--- Prepare to start Routine 'trials' ---
        t = 0;
        frameN = -1;
        continueRoutine = true;
        trialsClock.reset();
        routineTimer.reset();
        trialsMaxDurationReached = false;
        
        // SCIAT 네임스페이스 활용하여 자극 설정
        const currentStimulus = SCIAT.stimuliPools.block1[trials.thisN];
        SCIAT.setCurrentStimulus(currentStimulus);
        
        Utils.setImageSafely(image, currentStimulus.file);
        
        psychoJS.experiment.addData('trials.started', globalClock.getTime());
        trialsMaxDuration = null;
        
        trialsComponents = [];
        trialsComponents.push(image);
        trialsComponents.push(key_resp);
        
        trialsComponents.forEach(function(thisComponent) {
            if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
        });
        
        return Scheduler.Event.NEXT;
    }
}

async function trialsLoopEnd() {
    //--- Ending Routine 'trials' ---
    trialsComponents.forEach(function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
        }
    });
    
    psychoJS.experiment.addData('trials.stopped', globalClock.getTime());
}

function trialsLoopEndIteration(scheduler, snapshot) {
    //--- Prepare to start Routine 'trials' ---
    t = 0;
    frameN = -1;
    continueRoutine = true;
    trialsClock.reset();
    routineTimer.reset();
    trialsMaxDurationReached = false;
    
    // SCIAT 네임스페이스 활용하여 자극 설정
    const currentStimulus = SCIAT.stimuliPools.block1[trials.thisN];
    SCIAT.setCurrentStimulus(currentStimulus);
    
    Utils.setImageSafely(image, currentStimulus.file);
    
    psychoJS.experiment.addData('trials.started', globalClock.getTime());
    trialsMaxDuration = null;
    
    trialsComponents = [];
    trialsComponents.push(image);
    trialsComponents.push(key_resp);
    
    trialsComponents.forEach(function(thisComponent) {
        if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
    });
    
    return Scheduler.Event.NEXT;
}

// Trial 루틴 (브라우저 호환)
function trial_1RoutineBegin(snapshot) {
    return async function () {
        TrialHandler.fromSnapshot(snapshot);
        
        t = 0;
        frameN = -1;
        continueRoutine = true;
        trial_1Clock.reset();
        routineTimer.reset();
        trial_1MaxDurationReached = false;
        
        key_resp.keys = undefined;
        key_resp.rt = undefined;
        _key_resp_allKeys = [];
        
        psychoJS.experiment.addData('trial_1.started', globalClock.getTime());
        trial_1MaxDuration = null;
        
        trial_1Components = [];
        trial_1Components.push(image);
        trial_1Components.push(key_resp);
        
        trial_1Components.forEach(function(thisComponent) {
            if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
        });
        
        return Scheduler.Event.NEXT;
    }
}

function trial_1RoutineEachFrame() {
    return async function () {
        t = trial_1Clock.getTime();
        frameN = frameN + 1;
        
        // image 업데이트
        if (t >= 0 && image.status === PsychoJS.Status.NOT_STARTED) {
            image.tStart = t;
            image.frameNStart = frameN;
            image.setAutoDraw(true);
        }
        
        // key_resp 업데이트
        if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
            key_resp.tStart = t;
            key_resp.frameNStart = frameN;
            
            psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });
            psychoJS.window.callOnFlip(function() { key_resp.start(); });
            psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
        }
        
        if (key_resp.status === PsychoJS.Status.STARTED) {
            let theseKeys = key_resp.getKeys({keyList: ['z', 'Z', 'slash', '/'], waitRelease: false});
            _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
            if (_key_resp_allKeys.length > 0) {
                key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;
                key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
                key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
                continueRoutine = false;
            }
        }
        
        // check for quit
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList: ['escape']}).length > 0) {
            return psychoJS.quitPsychoJS('The [Escape] key was pressed!', false);
        }
        
        if (!continueRoutine) {
            return Scheduler.Event.NEXT;
        }
        
        return Scheduler.Event.CONTINUE;
    }
}

function trial_1RoutineEnd(snapshot) {
    return async function () {
        trial_1Components.forEach(function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
            }
        });
        
        psychoJS.experiment.addData('trial_1.stopped', globalClock.getTime());
        
        return Scheduler.Event.NEXT;
    }
}

// Feedback 루틴 (브라우저 호환)
function feedbackRoutineBegin(snapshot) {
    return async function () {
        TrialHandler.fromSnapshot(snapshot);
        
        t = 0;
        frameN = -1;
        continueRoutine = true;
        feedbackClock.reset();
        routineTimer.reset();
        feedbackMaxDurationReached = false;
        
        // SCIAT 네임스페이스 활용하여 피드백 메시지 생성
        const feedbackMessage = SCIAT.createFeedbackMessage(key_resp);
        feedback_text.text = feedbackMessage;
        
        psychoJS.experiment.addData('feedback.started', globalClock.getTime());
        feedbackMaxDuration = null;
        
        feedbackComponents = [];
        feedbackComponents.push(feedback_text);
        
        feedbackComponents.forEach(function(thisComponent) {
            if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
        });
        
        return Scheduler.Event.NEXT;
    }
}

function feedbackRoutineEachFrame() {
    return async function () {
        t = feedbackClock.getTime();
        frameN = frameN + 1;
        
        // feedback_text 업데이트
        if (t >= 0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
            feedback_text.tStart = t;
            feedback_text.frameNStart = frameN;
            feedback_text.setAutoDraw(true);
        }
        
        // check for quit
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList: ['escape']}).length > 0) {
            return psychoJS.quitPsychoJS('The [Escape] key was pressed!', false);
        }
        
        if (!continueRoutine) {
            return Scheduler.Event.NEXT;
        }
        
        return Scheduler.Event.CONTINUE;
    }
}

function feedbackRoutineEnd(snapshot) {
    return async function () {
        feedbackComponents.forEach(function(thisComponent) {
            if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
            }
        });
        
        psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
        
        return Scheduler.Event.NEXT;
    }
}

// ===== 기타 루틴 함수들 (브라우저 호환) =====
// (원본 코드의 나머지 루틴 함수들을 여기에 추가)

// ===== 실험 종료 함수 =====
async function quitPsychoJS(message, isCompleted) {
    // clear/close the experiment window
    psychoJS.window.close();
    
    // if in the browser, close the browser tab
    if (isBrowser) {
        window.close();
    }
    
    // exit the experiment
    psychoJS.experiment.experimentEnded = true;
    
    return Scheduler.Event.NEXT;
}
