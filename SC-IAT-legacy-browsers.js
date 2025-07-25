﻿/*************** 
 * Sc-Iat *
 ***************/


// store info about the experiment session:
let expName = 'SC-IAT';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
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
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

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

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var IntroClock;
var IntroText;
var Positive_1_1;
var Negative_1_1;
var key_resp_intro;
var trial_1Clock;
var image_stim_1;
var Drug_1;
var Positive_1_2;
var Negative_1_2;
var key_resp_1;
var feedbackClock;
var msg_feedback_1;
var Intro_2Clock;
var IntroText_2;
var Positive_1;
var Negative_1;
var key_resp_intro_2;
var General_IntroClock;
var SetupRoutineClock;
var trial_2Clock;
var image_stim_2;
var Drug_2;
var Positive_2_2;
var Negative_2_2;
var key_resp_2;
var feedback_2Clock;
var msg_feedback_2;
var Intro_3Clock;
var IntroText_3;
var Positive_3_1;
var Negative_3_1;
var key_resp_intro_3;
var trial_3Clock;
var image_stim_3;
var Drug_3;
var Positive_3_2;
var Negative_3_2;
var key_resp_3;
var feedback_3Clock;
var msg_feedback;
var Intro_4Clock;
var Positive_4_1;
var Negative_4_1;
var key_resp_intro_4;
var IntroText_4;
var General_Intro_2Clock;
var SetupRoutine_2Clock;
var trial_4Clock;
var image_stim_4;
var Drug_4;
var Positive_4_2;
var Negative_4_2;
var key_resp_4;
var feedback_4Clock;
var msg_feedback_3;
var EndClock;
var text;
var End;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  // Run 'Begin Experiment' code from code_1
  /* Syntax Error: Fix Python code */
  IntroText = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroText',
    text: "Z 키에는 왼쪽 손가락을, / 키에는 오른쪽 손가락을 올려주세요. \n화면의 왼쪽 상단에는 '긍정'이, 오른쪽 상단에는 '부정'이 나타납니다.\n중간에 나오는 단어는 다음 세 가지 범주 중 하나에 속할 수 있습니다. \n\n(1) 긍정적인 단어\n(2) 부정적인 단어\n(3) 마약 사진\n\n긍정적인 단어/마약 사진이 나오면 Z 키를 누르고, 부정적인 단어가 나오면 / 키를 눌러주세요.\n\n단어 또는 사진은 한 번에 하나씩 나타나며, 잘못 분류하면 X가 나타납니다.\n정확하게, 가능한 한 빨리 눌러주세요. 준비가 되었다면, 스페이스바를 눌러 시작하세요.  ",
    font: 'NanumGothic',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.04,  wrapWidth: 1.7, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Positive_1_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Positive_1_1',
    text: '긍정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -2.0 
  });
  
  Negative_1_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Negative_1_1',
    text: '부정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_1"
  trial_1Clock = new util.Clock();
  /* Syntax Error: Fix Python code */
  image_stim_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_stim_1', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  Drug_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Drug_1',
    text: '마약',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.25], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  Positive_1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Positive_1_2',
    text: '긍정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -3.0 
  });
  
  Negative_1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Negative_1_2',
    text: '부정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  msg_feedback_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_feedback_1',
    text: '',
    font: 'Nanumgothic',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Intro_2"
  Intro_2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_15
  /* Syntax Error: Fix Python code */
  IntroText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroText_2',
    text: "Z 키에는 왼쪽 손가락을, / 키에는 오른쪽 손가락을 올려주세요. \n화면의 왼쪽 상단에는 '긍정'이, 오른쪽 상단에는 '부정'이 나타납니다.\n중간에 나오는 단어는 다음 세 가지 범주 중 하나에 속할 수 있습니다. \n\n(1) 긍정적인 단어\n(2) 부정적인 단어\n(3) 마약 사진\n\n긍정적인 단어/마약 사진이 나오면 Z 키를 누르고, 부정적인 단어가 나오면 / 키를 눌러주세요.\n\n단어 또는 사진은 한 번에 하나씩 나타나며, 잘못 분류하면 X가 나타납니다.\n정확하게, 가능한 한 빨리 눌러주세요. 준비가 되었다면, 스페이스바를 눌러 시작하세요.  ",
    font: 'NanumGothic',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.04,  wrapWidth: 1.7, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Positive_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Positive_1',
    text: '긍정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -2.0 
  });
  
  Negative_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Negative_1',
    text: '부정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_intro_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "General_Intro"
  General_IntroClock = new util.Clock();
  // Initialize components for Routine "SetupRoutine"
  SetupRoutineClock = new util.Clock();
  // Initialize components for Routine "trial_2"
  trial_2Clock = new util.Clock();
  image_stim_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_stim_2', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Drug_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Drug_2',
    text: '마약',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.25], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Positive_2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Positive_2_2',
    text: '긍정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -2.0 
  });
  
  Negative_2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Negative_2_2',
    text: '부정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "feedback_2"
  feedback_2Clock = new util.Clock();
  msg_feedback_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_feedback_2',
    text: '',
    font: 'Nanumgothic',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Intro_3"
  Intro_3Clock = new util.Clock();
  IntroText_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroText_3',
    text: "Z 키에는 왼쪽 손가락을, / 키에는 오른쪽 손가락을 올려주세요. \n화면의 왼쪽 상단에는 '긍정'이, 오른쪽 상단에는 '부정'이 나타납니다.\n중간에 나오는 단어는 다음 세 가지 범주 중 하나에 속할 수 있습니다. \n\n(1) 긍정적인 단어\n(2) 부정적인 단어\n(3) 마약 사진\n\n긍정적인 단어 사진이 나오면 Z 키를 누르고, 부정적인 단어/마약 사진이 나오면 / 키를 눌러주세요.\n\n단어 또는 사진은 한 번에 하나씩 나타나며, 잘못 분류하면 X가 나타납니다.\n정확하게, 가능한 한 빨리 눌러주세요. 준비가 되었다면, 스페이스바를 눌러 시작하세요.  ",
    font: 'NanumGothic',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.04,  wrapWidth: 1.7, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Positive_3_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Positive_3_1',
    text: '긍정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  Negative_3_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Negative_3_1',
    text: '부정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_intro_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_8
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "trial_3"
  trial_3Clock = new util.Clock();
  image_stim_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_stim_3', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Drug_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Drug_3',
    text: '마약',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.25], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Positive_3_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Positive_3_2',
    text: '긍정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -2.0 
  });
  
  Negative_3_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Negative_3_2',
    text: '부정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "feedback_3"
  feedback_3Clock = new util.Clock();
  msg_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_feedback',
    text: '',
    font: 'Nanumgothic',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Intro_4"
  Intro_4Clock = new util.Clock();
  Positive_4_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Positive_4_1',
    text: '긍정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: 0.0 
  });
  
  Negative_4_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Negative_4_1',
    text: '부정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_intro_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  IntroText_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroText_4',
    text: "Z 키에는 왼쪽 손가락을, / 키에는 오른쪽 손가락을 올려주세요. \n화면의 왼쪽 상단에는 '긍정'이, 오른쪽 상단에는 '부정'이 나타납니다.\n중간에 나오는 단어는 다음 세 가지 범주 중 하나에 속할 수 있습니다. \n\n(1) 긍정적인 단어\n(2) 부정적인 단어\n(3) 마약 사진\n\n긍정적인 단어 사진이 나오면 Z 키를 누르고, 부정적인 단어/마약 사진이 나오면 / 키를 눌러주세요.\n\n단어 또는 사진은 한 번에 하나씩 나타나며, 잘못 분류하면 X가 나타납니다.\n정확하게, 가능한 한 빨리 눌러주세요. 준비가 되었다면, 스페이스바를 눌러 시작하세요.  ",
    font: 'NanumGothic',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.04,  wrapWidth: 1.7, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "General_Intro_2"
  General_Intro_2Clock = new util.Clock();
  // Initialize components for Routine "SetupRoutine_2"
  SetupRoutine_2Clock = new util.Clock();
  // Initialize components for Routine "trial_4"
  trial_4Clock = new util.Clock();
  image_stim_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_stim_4', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Drug_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Drug_4',
    text: '마약',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.25], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  Positive_4_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Positive_4_2',
    text: '긍정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [(- 0.55), 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -2.0 
  });
  
  Negative_4_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Negative_4_2',
    text: '부정',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0.55, 0.35], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('lightgreen'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "feedback_4"
  feedback_4Clock = new util.Clock();
  msg_feedback_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'msg_feedback_3',
    text: '',
    font: 'Nanumgothic',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '수고하셨습니다!\n참여해주셔서 감사합니다.',
    font: 'NanumGothic',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  End = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var IntroMaxDurationReached;
var message;
var fb_color;
var fb_duration;
var fb_size;
var _key_resp_intro_allKeys;
var IntroMaxDuration;
var IntroComponents;
function IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    IntroClock.reset();
    routineTimer.reset();
    IntroMaxDurationReached = false;
    // update component parameters for each repeat
    message = "";
    fb_color = "white";
    fb_duration = 0.0;
    fb_size = 0.06;
    
    key_resp_intro.keys = undefined;
    key_resp_intro.rt = undefined;
    _key_resp_intro_allKeys = [];
    psychoJS.experiment.addData('Intro.started', globalClock.getTime());
    IntroMaxDuration = null
    // keep track of which components have finished
    IntroComponents = [];
    IntroComponents.push(IntroText);
    IntroComponents.push(Positive_1_1);
    IntroComponents.push(Negative_1_1);
    IntroComponents.push(key_resp_intro);
    
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intro' ---
    // get current time
    t = IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *IntroText* updates
    if (t >= 0 && IntroText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroText.tStart = t;  // (not accounting for frame time here)
      IntroText.frameNStart = frameN;  // exact frame index
      
      IntroText.setAutoDraw(true);
    }
    
    
    // *Positive_1_1* updates
    if (t >= 0.0 && Positive_1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Positive_1_1.tStart = t;  // (not accounting for frame time here)
      Positive_1_1.frameNStart = frameN;  // exact frame index
      
      Positive_1_1.setAutoDraw(true);
    }
    
    
    // *Negative_1_1* updates
    if (t >= 0.0 && Negative_1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Negative_1_1.tStart = t;  // (not accounting for frame time here)
      Negative_1_1.frameNStart = frameN;  // exact frame index
      
      Negative_1_1.setAutoDraw(true);
    }
    
    
    // *key_resp_intro* updates
    if (t >= 0.0 && key_resp_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro.tStart = t;  // (not accounting for frame time here)
      key_resp_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.clearEvents(); });
    }
    
    if (key_resp_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_allKeys = _key_resp_intro_allKeys.concat(theseKeys);
      if (_key_resp_intro_allKeys.length > 0) {
        key_resp_intro.keys = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro.rt = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].rt;
        key_resp_intro.duration = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intro' ---
    IntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_intro.corr, level);
    }
    psychoJS.experiment.addData('key_resp_intro.keys', key_resp_intro.keys);
    if (typeof key_resp_intro.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_intro.rt', key_resp_intro.rt);
        psychoJS.experiment.addData('key_resp_intro.duration', key_resp_intro.duration);
        routineTimer.reset();
        }
    
    key_resp_intro.stop();
    // the Routine "Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 24, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trial_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(trial_1RoutineEachFrame());
      trialsLoopScheduler.add(trial_1RoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blockLoop;
function blockLoopLoopBegin(blockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blockLoop'
    });
    psychoJS.experiment.addLoop(blockLoop); // add the loop to the experiment
    currentLoop = blockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blockLoop.forEach(function() {
      snapshot = blockLoop.getSnapshot();
    
      blockLoopLoopScheduler.add(importConditions(snapshot));
      blockLoopLoopScheduler.add(SetupRoutineRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(SetupRoutineRoutineEachFrame());
      blockLoopLoopScheduler.add(SetupRoutineRoutineEnd(snapshot));
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      blockLoopLoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      blockLoopLoopScheduler.add(trials_2LoopScheduler);
      blockLoopLoopScheduler.add(trials_2LoopEnd);
      blockLoopLoopScheduler.add(blockLoopLoopEndIteration(blockLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 24, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(trial_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(trial_2RoutineEachFrame());
      trials_2LoopScheduler.add(trial_2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(feedback_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(feedback_2RoutineEachFrame());
      trials_2LoopScheduler.add(feedback_2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blockLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blockLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blockLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 24, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(trial_3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(trial_3RoutineEachFrame());
      trials_3LoopScheduler.add(trial_3RoutineEnd(snapshot));
      trials_3LoopScheduler.add(feedback_3RoutineBegin(snapshot));
      trials_3LoopScheduler.add(feedback_3RoutineEachFrame());
      trials_3LoopScheduler.add(feedback_3RoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blockLoop_2;
function blockLoop_2LoopBegin(blockLoop_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blockLoop_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blockLoop_2'
    });
    psychoJS.experiment.addLoop(blockLoop_2); // add the loop to the experiment
    currentLoop = blockLoop_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blockLoop_2.forEach(function() {
      snapshot = blockLoop_2.getSnapshot();
    
      blockLoop_2LoopScheduler.add(importConditions(snapshot));
      blockLoop_2LoopScheduler.add(SetupRoutine_2RoutineBegin(snapshot));
      blockLoop_2LoopScheduler.add(SetupRoutine_2RoutineEachFrame());
      blockLoop_2LoopScheduler.add(SetupRoutine_2RoutineEnd(snapshot));
      const trials_4LoopScheduler = new Scheduler(psychoJS);
      blockLoop_2LoopScheduler.add(trials_4LoopBegin(trials_4LoopScheduler, snapshot));
      blockLoop_2LoopScheduler.add(trials_4LoopScheduler);
      blockLoop_2LoopScheduler.add(trials_4LoopEnd);
      blockLoop_2LoopScheduler.add(blockLoop_2LoopEndIteration(blockLoop_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 24, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(trial_4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(trial_4RoutineEachFrame());
      trials_4LoopScheduler.add(trial_4RoutineEnd(snapshot));
      trials_4LoopScheduler.add(feedback_4RoutineBegin(snapshot));
      trials_4LoopScheduler.add(feedback_4RoutineEachFrame());
      trials_4LoopScheduler.add(feedback_4RoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blockLoop_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blockLoop_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blockLoop_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trial_1MaxDurationReached;
var _key_resp_1_allKeys;
var trial_1MaxDuration;
var trial_1Components;
function trial_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_1Clock.reset();
    routineTimer.reset();
    trial_1MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    if ((trials.thisN >= 24)) {
        continueRoutine = false;
    }
    [stimulus_file, stim_category] = stimuli_pool[stim_index];
    stim_index += 1;
    image_stim.setImage(("images/" + stimulus_file));
    
    key_resp_1.keys = undefined;
    key_resp_1.rt = undefined;
    _key_resp_1_allKeys = [];
    psychoJS.experiment.addData('trial_1.started', globalClock.getTime());
    trial_1MaxDuration = null
    // keep track of which components have finished
    trial_1Components = [];
    trial_1Components.push(image_stim_1);
    trial_1Components.push(Drug_1);
    trial_1Components.push(Positive_1_2);
    trial_1Components.push(Negative_1_2);
    trial_1Components.push(key_resp_1);
    
    trial_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_1' ---
    // get current time
    t = trial_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_stim_1* updates
    if (t >= 0.05 && image_stim_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_stim_1.tStart = t;  // (not accounting for frame time here)
      image_stim_1.frameNStart = frameN;  // exact frame index
      
      image_stim_1.setAutoDraw(true);
    }
    
    
    // *Drug_1* updates
    if (t >= 0.0 && Drug_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Drug_1.tStart = t;  // (not accounting for frame time here)
      Drug_1.frameNStart = frameN;  // exact frame index
      
      Drug_1.setAutoDraw(true);
    }
    
    
    // *Positive_1_2* updates
    if (t >= 0.0 && Positive_1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Positive_1_2.tStart = t;  // (not accounting for frame time here)
      Positive_1_2.frameNStart = frameN;  // exact frame index
      
      Positive_1_2.setAutoDraw(true);
    }
    
    
    // *Negative_1_2* updates
    if (t >= 0.0 && Negative_1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Negative_1_2.tStart = t;  // (not accounting for frame time here)
      Negative_1_2.frameNStart = frameN;  // exact frame index
      
      Negative_1_2.setAutoDraw(true);
    }
    
    
    // *key_resp_1* updates
    if (t >= 0.1 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_1.tStart = t;  // (not accounting for frame time here)
      key_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.clearEvents(); });
    }
    
    if (key_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_1.getKeys({keyList: ['z', 'slash'], waitRelease: false});
      _key_resp_1_allKeys = _key_resp_1_allKeys.concat(theseKeys);
      if (_key_resp_1_allKeys.length > 0) {
        key_resp_1.keys = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_1.rt = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].rt;
        key_resp_1.duration = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_1.keys == this_key) {
            key_resp_1.corr = 1;
        } else {
            key_resp_1.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_1' ---
    trial_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_1.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_1.keys === undefined) {
      if (['None','none',undefined].includes(this_key)) {
         key_resp_1.corr = 1;  // correct non-response
      } else {
         key_resp_1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_1.keys', key_resp_1.keys);
    psychoJS.experiment.addData('key_resp_1.corr', key_resp_1.corr);
    if (typeof key_resp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_1.rt', key_resp_1.rt);
        psychoJS.experiment.addData('key_resp_1.duration', key_resp_1.duration);
        routineTimer.reset();
        }
    
    key_resp_1.stop();
    // the Routine "trial_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedbackMaxDurationReached;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedbackClock.reset();
    routineTimer.reset();
    feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    /* Syntax Error: Fix Python code */
    msg_feedback_1.setColor(new util.Color(fb_color));
    msg_feedback_1.setText(message);
    msg_feedback_1.setHeight(fb_size);
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    feedbackMaxDuration = null
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(msg_feedback_1);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_feedback_1* updates
    if (t >= 0.1 && msg_feedback_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      msg_feedback_1.tStart = t;  // (not accounting for frame time here)
      msg_feedback_1.frameNStart = frameN;  // exact frame index
      
      msg_feedback_1.setAutoDraw(true);
    }
    
    frameRemains = 0.1 + fb_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (msg_feedback_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      msg_feedback_1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Intro_2MaxDurationReached;
var _key_resp_intro_2_allKeys;
var Intro_2MaxDuration;
var Intro_2Components;
function Intro_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intro_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Intro_2Clock.reset();
    routineTimer.reset();
    Intro_2MaxDurationReached = false;
    // update component parameters for each repeat
    message = "";
    fb_color = "white";
    fb_duration = 0.0;
    fb_size = 0.06;
    
    key_resp_intro_2.keys = undefined;
    key_resp_intro_2.rt = undefined;
    _key_resp_intro_2_allKeys = [];
    psychoJS.experiment.addData('Intro_2.started', globalClock.getTime());
    Intro_2MaxDuration = null
    // keep track of which components have finished
    Intro_2Components = [];
    Intro_2Components.push(IntroText_2);
    Intro_2Components.push(Positive_1);
    Intro_2Components.push(Negative_1);
    Intro_2Components.push(key_resp_intro_2);
    
    Intro_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Intro_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intro_2' ---
    // get current time
    t = Intro_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *IntroText_2* updates
    if (t >= 0 && IntroText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroText_2.tStart = t;  // (not accounting for frame time here)
      IntroText_2.frameNStart = frameN;  // exact frame index
      
      IntroText_2.setAutoDraw(true);
    }
    
    
    // *Positive_1* updates
    if (t >= 0.0 && Positive_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Positive_1.tStart = t;  // (not accounting for frame time here)
      Positive_1.frameNStart = frameN;  // exact frame index
      
      Positive_1.setAutoDraw(true);
    }
    
    
    // *Negative_1* updates
    if (t >= 0.0 && Negative_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Negative_1.tStart = t;  // (not accounting for frame time here)
      Negative_1.frameNStart = frameN;  // exact frame index
      
      Negative_1.setAutoDraw(true);
    }
    
    
    // *key_resp_intro_2* updates
    if (t >= 0.0 && key_resp_intro_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro_2.tStart = t;  // (not accounting for frame time here)
      key_resp_intro_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_2.clearEvents(); });
    }
    
    if (key_resp_intro_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_2_allKeys = _key_resp_intro_2_allKeys.concat(theseKeys);
      if (_key_resp_intro_2_allKeys.length > 0) {
        key_resp_intro_2.keys = _key_resp_intro_2_allKeys[_key_resp_intro_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro_2.rt = _key_resp_intro_2_allKeys[_key_resp_intro_2_allKeys.length - 1].rt;
        key_resp_intro_2.duration = _key_resp_intro_2_allKeys[_key_resp_intro_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Intro_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intro_2' ---
    Intro_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Intro_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_intro_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_intro_2.keys', key_resp_intro_2.keys);
    if (typeof key_resp_intro_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_intro_2.rt', key_resp_intro_2.rt);
        psychoJS.experiment.addData('key_resp_intro_2.duration', key_resp_intro_2.duration);
        routineTimer.reset();
        }
    
    key_resp_intro_2.stop();
    // the Routine "Intro_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var General_IntroMaxDurationReached;
var General_IntroMaxDuration;
var General_IntroComponents;
function General_IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'General_Intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    General_IntroClock.reset();
    routineTimer.reset();
    General_IntroMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_14
    message = "";
    fb_color = "white";
    fb_duration = 0.0;
    fb_size = 0.06;
    
    psychoJS.experiment.addData('General_Intro.started', globalClock.getTime());
    General_IntroMaxDuration = null
    // keep track of which components have finished
    General_IntroComponents = [];
    
    General_IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function General_IntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'General_Intro' ---
    // get current time
    t = General_IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    General_IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function General_IntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'General_Intro' ---
    General_IntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('General_Intro.stopped', globalClock.getTime());
    /* Syntax Error: Fix Python code */
    // the Routine "General_Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SetupRoutineMaxDurationReached;
var SetupRoutineMaxDuration;
var SetupRoutineComponents;
function SetupRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SetupRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SetupRoutineClock.reset();
    routineTimer.reset();
    SetupRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    message = "";
    fb_color = "white";
    fb_duration = 0.0;
    fb_size = 0.06;
    
    psychoJS.experiment.addData('SetupRoutine.started', globalClock.getTime());
    SetupRoutineMaxDuration = null
    // keep track of which components have finished
    SetupRoutineComponents = [];
    
    SetupRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SetupRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SetupRoutine' ---
    // get current time
    t = SetupRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SetupRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SetupRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SetupRoutine' ---
    SetupRoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SetupRoutine.stopped', globalClock.getTime());
    /* Syntax Error: Fix Python code */
    // the Routine "SetupRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_2MaxDurationReached;
var _key_resp_2_allKeys;
var trial_2MaxDuration;
var trial_2Components;
function trial_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_2Clock.reset();
    routineTimer.reset();
    trial_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // Run 'Begin Routine' code from code_6
    if ((trials.thisN >= 24)) {
        continueRoutine = false;
    }
    [stimulus_file, stim_category] = stimuli_pool[stim_index];
    stim_index += 1;
    image_stim.setImage(("images/" + stimulus_file));
    
    psychoJS.experiment.addData('trial_2.started', globalClock.getTime());
    trial_2MaxDuration = null
    // keep track of which components have finished
    trial_2Components = [];
    trial_2Components.push(image_stim_2);
    trial_2Components.push(Drug_2);
    trial_2Components.push(Positive_2_2);
    trial_2Components.push(Negative_2_2);
    trial_2Components.push(key_resp_2);
    
    trial_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_2' ---
    // get current time
    t = trial_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_stim_2* updates
    if (t >= 0.05 && image_stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_stim_2.tStart = t;  // (not accounting for frame time here)
      image_stim_2.frameNStart = frameN;  // exact frame index
      
      image_stim_2.setAutoDraw(true);
    }
    
    
    // *Drug_2* updates
    if (t >= 0.0 && Drug_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Drug_2.tStart = t;  // (not accounting for frame time here)
      Drug_2.frameNStart = frameN;  // exact frame index
      
      Drug_2.setAutoDraw(true);
    }
    
    
    // *Positive_2_2* updates
    if (t >= 0.0 && Positive_2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Positive_2_2.tStart = t;  // (not accounting for frame time here)
      Positive_2_2.frameNStart = frameN;  // exact frame index
      
      Positive_2_2.setAutoDraw(true);
    }
    
    
    // *Negative_2_2* updates
    if (t >= 0.0 && Negative_2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Negative_2_2.tStart = t;  // (not accounting for frame time here)
      Negative_2_2.frameNStart = frameN;  // exact frame index
      
      Negative_2_2.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.1 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['z', 'slash'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_2.keys == this_key2) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_2' ---
    trial_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_2.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(this_key2)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "trial_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_2MaxDurationReached;
var feedback_2MaxDuration;
var feedback_2Components;
function feedback_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_2Clock.reset();
    routineTimer.reset();
    feedback_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_7
    if ((key_resp_2.keys && (key_resp_2.rt > 1.5))) {
        [message, fb_color, fb_size, fb_duration] = ["\ub354 \ube60\ub974\uac8c \ud574\uc8fc\uc138\uc694", "white", 0.06, 0.5];
    } else {
        if ((key_resp_2.corr === 1)) {
            [message, fb_color, fb_size, fb_duration] = ["O", "green", 0.1, 0.15];
        } else {
            [message, fb_color, fb_size, fb_duration] = ["X", "red", 0.1, 0.15];
        }
    }
    
    msg_feedback_2.setColor(new util.Color(fb_color));
    msg_feedback_2.setText(message);
    msg_feedback_2.setHeight(fb_size);
    psychoJS.experiment.addData('feedback_2.started', globalClock.getTime());
    feedback_2MaxDuration = null
    // keep track of which components have finished
    feedback_2Components = [];
    feedback_2Components.push(msg_feedback_2);
    
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_2' ---
    // get current time
    t = feedback_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_feedback_2* updates
    if (t >= 0.1 && msg_feedback_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      msg_feedback_2.tStart = t;  // (not accounting for frame time here)
      msg_feedback_2.frameNStart = frameN;  // exact frame index
      
      msg_feedback_2.setAutoDraw(true);
    }
    
    frameRemains = 0.1 + fb_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (msg_feedback_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      msg_feedback_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_2' ---
    feedback_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback_2.stopped', globalClock.getTime());
    // the Routine "feedback_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Intro_3MaxDurationReached;
var _key_resp_intro_3_allKeys;
var Intro_3MaxDuration;
var Intro_3Components;
function Intro_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intro_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Intro_3Clock.reset();
    routineTimer.reset();
    Intro_3MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_intro_3.keys = undefined;
    key_resp_intro_3.rt = undefined;
    _key_resp_intro_3_allKeys = [];
    // Run 'Begin Routine' code from code_8
    message = "";
    fb_color = "white";
    fb_duration = 0.0;
    fb_size = 0.06;
    
    psychoJS.experiment.addData('Intro_3.started', globalClock.getTime());
    Intro_3MaxDuration = null
    // keep track of which components have finished
    Intro_3Components = [];
    Intro_3Components.push(IntroText_3);
    Intro_3Components.push(Positive_3_1);
    Intro_3Components.push(Negative_3_1);
    Intro_3Components.push(key_resp_intro_3);
    
    Intro_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Intro_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intro_3' ---
    // get current time
    t = Intro_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *IntroText_3* updates
    if (t >= 0 && IntroText_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroText_3.tStart = t;  // (not accounting for frame time here)
      IntroText_3.frameNStart = frameN;  // exact frame index
      
      IntroText_3.setAutoDraw(true);
    }
    
    
    // *Positive_3_1* updates
    if (t >= 0.0 && Positive_3_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Positive_3_1.tStart = t;  // (not accounting for frame time here)
      Positive_3_1.frameNStart = frameN;  // exact frame index
      
      Positive_3_1.setAutoDraw(true);
    }
    
    
    // *Negative_3_1* updates
    if (t >= 0.0 && Negative_3_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Negative_3_1.tStart = t;  // (not accounting for frame time here)
      Negative_3_1.frameNStart = frameN;  // exact frame index
      
      Negative_3_1.setAutoDraw(true);
    }
    
    
    // *key_resp_intro_3* updates
    if (t >= 0.0 && key_resp_intro_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro_3.tStart = t;  // (not accounting for frame time here)
      key_resp_intro_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_3.clearEvents(); });
    }
    
    if (key_resp_intro_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_3_allKeys = _key_resp_intro_3_allKeys.concat(theseKeys);
      if (_key_resp_intro_3_allKeys.length > 0) {
        key_resp_intro_3.keys = _key_resp_intro_3_allKeys[_key_resp_intro_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro_3.rt = _key_resp_intro_3_allKeys[_key_resp_intro_3_allKeys.length - 1].rt;
        key_resp_intro_3.duration = _key_resp_intro_3_allKeys[_key_resp_intro_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Intro_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intro_3' ---
    Intro_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Intro_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_intro_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_intro_3.keys', key_resp_intro_3.keys);
    if (typeof key_resp_intro_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_intro_3.rt', key_resp_intro_3.rt);
        psychoJS.experiment.addData('key_resp_intro_3.duration', key_resp_intro_3.duration);
        routineTimer.reset();
        }
    
    key_resp_intro_3.stop();
    // the Routine "Intro_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_3MaxDurationReached;
var _key_resp_3_allKeys;
var trial_3MaxDuration;
var trial_3Components;
function trial_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_3Clock.reset();
    routineTimer.reset();
    trial_3MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // Run 'Begin Routine' code from code_9
    if ((trials.thisN >= 24)) {
        continueRoutine = false;
    }
    [stimulus_file, stim_category] = stimuli_pool[stim_index];
    stim_index += 1;
    image_stim.setImage(("images/" + stimulus_file));
    
    psychoJS.experiment.addData('trial_3.started', globalClock.getTime());
    trial_3MaxDuration = null
    // keep track of which components have finished
    trial_3Components = [];
    trial_3Components.push(image_stim_3);
    trial_3Components.push(Drug_3);
    trial_3Components.push(Positive_3_2);
    trial_3Components.push(Negative_3_2);
    trial_3Components.push(key_resp_3);
    
    trial_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_3' ---
    // get current time
    t = trial_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_stim_3* updates
    if (t >= 0.05 && image_stim_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_stim_3.tStart = t;  // (not accounting for frame time here)
      image_stim_3.frameNStart = frameN;  // exact frame index
      
      image_stim_3.setAutoDraw(true);
    }
    
    
    // *Drug_3* updates
    if (t >= 0.0 && Drug_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Drug_3.tStart = t;  // (not accounting for frame time here)
      Drug_3.frameNStart = frameN;  // exact frame index
      
      Drug_3.setAutoDraw(true);
    }
    
    
    // *Positive_3_2* updates
    if (t >= 0.0 && Positive_3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Positive_3_2.tStart = t;  // (not accounting for frame time here)
      Positive_3_2.frameNStart = frameN;  // exact frame index
      
      Positive_3_2.setAutoDraw(true);
    }
    
    
    // *Negative_3_2* updates
    if (t >= 0.0 && Negative_3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Negative_3_2.tStart = t;  // (not accounting for frame time here)
      Negative_3_2.frameNStart = frameN;  // exact frame index
      
      Negative_3_2.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.1 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['z', 'slash'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_3.keys == correct_key3) {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_3' ---
    trial_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_3.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes(correct_key3)) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "trial_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_3MaxDurationReached;
var feedback_3MaxDuration;
var feedback_3Components;
function feedback_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_3Clock.reset();
    routineTimer.reset();
    feedback_3MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_10
    /* Syntax Error: Fix Python code */
    msg_feedback.setColor(new util.Color(fb_color));
    msg_feedback.setText(message);
    msg_feedback.setHeight(fb_size);
    psychoJS.experiment.addData('feedback_3.started', globalClock.getTime());
    feedback_3MaxDuration = null
    // keep track of which components have finished
    feedback_3Components = [];
    feedback_3Components.push(msg_feedback);
    
    feedback_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_3' ---
    // get current time
    t = feedback_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_feedback* updates
    if (t >= 0.1 && msg_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      msg_feedback.tStart = t;  // (not accounting for frame time here)
      msg_feedback.frameNStart = frameN;  // exact frame index
      
      msg_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0.1 + fb_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (msg_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      msg_feedback.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_3' ---
    feedback_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback_3.stopped', globalClock.getTime());
    // the Routine "feedback_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Intro_4MaxDurationReached;
var _key_resp_intro_4_allKeys;
var Intro_4MaxDuration;
var Intro_4Components;
function Intro_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intro_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Intro_4Clock.reset();
    routineTimer.reset();
    Intro_4MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_intro_4.keys = undefined;
    key_resp_intro_4.rt = undefined;
    _key_resp_intro_4_allKeys = [];
    // Run 'Begin Routine' code from code
    message = "";
    fb_color = "white";
    fb_duration = 0.0;
    fb_size = 0.06;
    
    psychoJS.experiment.addData('Intro_4.started', globalClock.getTime());
    Intro_4MaxDuration = null
    // keep track of which components have finished
    Intro_4Components = [];
    Intro_4Components.push(Positive_4_1);
    Intro_4Components.push(Negative_4_1);
    Intro_4Components.push(key_resp_intro_4);
    Intro_4Components.push(IntroText_4);
    
    Intro_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Intro_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intro_4' ---
    // get current time
    t = Intro_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Positive_4_1* updates
    if (t >= 0.0 && Positive_4_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Positive_4_1.tStart = t;  // (not accounting for frame time here)
      Positive_4_1.frameNStart = frameN;  // exact frame index
      
      Positive_4_1.setAutoDraw(true);
    }
    
    
    // *Negative_4_1* updates
    if (t >= 0.0 && Negative_4_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Negative_4_1.tStart = t;  // (not accounting for frame time here)
      Negative_4_1.frameNStart = frameN;  // exact frame index
      
      Negative_4_1.setAutoDraw(true);
    }
    
    
    // *key_resp_intro_4* updates
    if (t >= 0.0 && key_resp_intro_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro_4.tStart = t;  // (not accounting for frame time here)
      key_resp_intro_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro_4.clearEvents(); });
    }
    
    if (key_resp_intro_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_intro_4_allKeys = _key_resp_intro_4_allKeys.concat(theseKeys);
      if (_key_resp_intro_4_allKeys.length > 0) {
        key_resp_intro_4.keys = _key_resp_intro_4_allKeys[_key_resp_intro_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro_4.rt = _key_resp_intro_4_allKeys[_key_resp_intro_4_allKeys.length - 1].rt;
        key_resp_intro_4.duration = _key_resp_intro_4_allKeys[_key_resp_intro_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *IntroText_4* updates
    if (t >= 0 && IntroText_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroText_4.tStart = t;  // (not accounting for frame time here)
      IntroText_4.frameNStart = frameN;  // exact frame index
      
      IntroText_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Intro_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intro_4' ---
    Intro_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Intro_4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_intro_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_intro_4.keys', key_resp_intro_4.keys);
    if (typeof key_resp_intro_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_intro_4.rt', key_resp_intro_4.rt);
        psychoJS.experiment.addData('key_resp_intro_4.duration', key_resp_intro_4.duration);
        routineTimer.reset();
        }
    
    key_resp_intro_4.stop();
    /* Syntax Error: Fix Python code */
    // the Routine "Intro_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var General_Intro_2MaxDurationReached;
var General_Intro_2MaxDuration;
var General_Intro_2Components;
function General_Intro_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'General_Intro_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    General_Intro_2Clock.reset();
    routineTimer.reset();
    General_Intro_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_16
    message = "";
    fb_color = "white";
    fb_duration = 0.0;
    fb_size = 0.06;
    
    psychoJS.experiment.addData('General_Intro_2.started', globalClock.getTime());
    General_Intro_2MaxDuration = null
    // keep track of which components have finished
    General_Intro_2Components = [];
    
    General_Intro_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function General_Intro_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'General_Intro_2' ---
    // get current time
    t = General_Intro_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    General_Intro_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function General_Intro_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'General_Intro_2' ---
    General_Intro_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('General_Intro_2.stopped', globalClock.getTime());
    /* Syntax Error: Fix Python code */
    // the Routine "General_Intro_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SetupRoutine_2MaxDurationReached;
var SetupRoutine_2MaxDuration;
var SetupRoutine_2Components;
function SetupRoutine_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SetupRoutine_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SetupRoutine_2Clock.reset();
    routineTimer.reset();
    SetupRoutine_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_17
    message = "";
    fb_color = "white";
    fb_duration = 0.0;
    fb_size = 0.06;
    
    psychoJS.experiment.addData('SetupRoutine_2.started', globalClock.getTime());
    SetupRoutine_2MaxDuration = null
    // keep track of which components have finished
    SetupRoutine_2Components = [];
    
    SetupRoutine_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SetupRoutine_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SetupRoutine_2' ---
    // get current time
    t = SetupRoutine_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SetupRoutine_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SetupRoutine_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SetupRoutine_2' ---
    SetupRoutine_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SetupRoutine_2.stopped', globalClock.getTime());
    /* Syntax Error: Fix Python code */
    // the Routine "SetupRoutine_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_4MaxDurationReached;
var _key_resp_4_allKeys;
var trial_4MaxDuration;
var trial_4Components;
function trial_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_4Clock.reset();
    routineTimer.reset();
    trial_4MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // Run 'Begin Routine' code from code_12
    if ((trials.thisN >= 24)) {
        continueRoutine = false;
    }
    [stimulus_file, stim_category] = stimuli_pool[stim_index];
    stim_index += 1;
    image_stim.setImage(("images/" + stimulus_file));
    
    psychoJS.experiment.addData('trial_4.started', globalClock.getTime());
    trial_4MaxDuration = null
    // keep track of which components have finished
    trial_4Components = [];
    trial_4Components.push(image_stim_4);
    trial_4Components.push(Drug_4);
    trial_4Components.push(Positive_4_2);
    trial_4Components.push(Negative_4_2);
    trial_4Components.push(key_resp_4);
    
    trial_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_4' ---
    // get current time
    t = trial_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_stim_4* updates
    if (t >= 0.05 && image_stim_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_stim_4.tStart = t;  // (not accounting for frame time here)
      image_stim_4.frameNStart = frameN;  // exact frame index
      
      image_stim_4.setAutoDraw(true);
    }
    
    
    // *Drug_4* updates
    if (t >= 0.0 && Drug_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Drug_4.tStart = t;  // (not accounting for frame time here)
      Drug_4.frameNStart = frameN;  // exact frame index
      
      Drug_4.setAutoDraw(true);
    }
    
    
    // *Positive_4_2* updates
    if (t >= 0.0 && Positive_4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Positive_4_2.tStart = t;  // (not accounting for frame time here)
      Positive_4_2.frameNStart = frameN;  // exact frame index
      
      Positive_4_2.setAutoDraw(true);
    }
    
    
    // *Negative_4_2* updates
    if (t >= 0.0 && Negative_4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Negative_4_2.tStart = t;  // (not accounting for frame time here)
      Negative_4_2.frameNStart = frameN;  // exact frame index
      
      Negative_4_2.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.1 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['z', 'slash'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_4.keys == correct_key4) {
            key_resp_4.corr = 1;
        } else {
            key_resp_4.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_4' ---
    trial_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_4.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_4.keys === undefined) {
      if (['None','none',undefined].includes(correct_key4)) {
         key_resp_4.corr = 1;  // correct non-response
      } else {
         key_resp_4.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    psychoJS.experiment.addData('key_resp_4.corr', key_resp_4.corr);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "trial_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_4MaxDurationReached;
var feedback_4MaxDuration;
var feedback_4Components;
function feedback_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_4Clock.reset();
    routineTimer.reset();
    feedback_4MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_13
    if ((trials_4.thisTrial === null)) {
        continueRoutine = false;
    }
    if (key_resp_4.keys) {
        if (((key_resp_4.rt !== null) && (key_resp_4.rt > 1.5))) {
            message = "\ub354 \ube60\ub974\uac8c \ud574\uc8fc\uc138\uc694";
            fb_color = "white";
            fb_duration = 0.5;
            fb_size = 0.06;
        } else {
            if ((key_resp_4.corr === 1)) {
                message = "O";
                fb_color = "green";
                fb_duration = 0.15;
                fb_size = 0.1;
            } else {
                if ((key_resp_4.corr === 0)) {
                    message = "X";
                    fb_color = "red";
                    fb_duration = 0.15;
                    fb_size = 0.1;
                }
            }
        }
    } else {
        message = "\ub354 \ube60\ub974\uac8c \ud574\uc8fc\uc138\uc694";
        fb_color = "white";
        fb_duration = 0.5;
        fb_size = 0.06;
    }
    
    msg_feedback_3.setColor(new util.Color(fb_color));
    msg_feedback_3.setText(message);
    msg_feedback_3.setHeight(fb_size);
    psychoJS.experiment.addData('feedback_4.started', globalClock.getTime());
    feedback_4MaxDuration = null
    // keep track of which components have finished
    feedback_4Components = [];
    feedback_4Components.push(msg_feedback_3);
    
    feedback_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_4' ---
    // get current time
    t = feedback_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *msg_feedback_3* updates
    if (t >= 0.1 && msg_feedback_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      msg_feedback_3.tStart = t;  // (not accounting for frame time here)
      msg_feedback_3.frameNStart = frameN;  // exact frame index
      
      msg_feedback_3.setAutoDraw(true);
    }
    
    frameRemains = 0.1 + fb_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (msg_feedback_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      msg_feedback_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_4' ---
    feedback_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback_4.stopped', globalClock.getTime());
    // the Routine "feedback_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var _End_allKeys;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EndClock.reset();
    routineTimer.reset();
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    End.keys = undefined;
    End.rt = undefined;
    _End_allKeys = [];
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(text);
    EndComponents.push(End);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *End* updates
    if (t >= 0.0 && End.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      End.tStart = t;  // (not accounting for frame time here)
      End.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { End.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { End.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { End.clearEvents(); });
    }
    
    if (End.status === PsychoJS.Status.STARTED) {
      let theseKeys = End.getKeys({keyList: ['space'], waitRelease: false});
      _End_allKeys = _End_allKeys.concat(theseKeys);
      if (_End_allKeys.length > 0) {
        End.keys = _End_allKeys[_End_allKeys.length - 1].name;  // just the last key pressed
        End.rt = _End_allKeys[_End_allKeys.length - 1].rt;
        End.duration = _End_allKeys[_End_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(End.corr, level);
    }
    psychoJS.experiment.addData('End.keys', End.keys);
    if (typeof End.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('End.rt', End.rt);
        psychoJS.experiment.addData('End.duration', End.duration);
        routineTimer.reset();
        }
    
    End.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
