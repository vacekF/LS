import MultipleChoice from 'simple-assessment/questions/MultipleChoice.vue'

export let questions = {
  'q1': {
    type: MultipleChoice,
    options: {
      multiSelect: true
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option A. This is question1 of pool1',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q1 true',
          correct: true,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q1',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q1',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q1',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q2': {
    type: MultipleChoice,
    options: {
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option B. This is question2 of pool1',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q2',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q2 true',
          correct: true,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q2',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q2',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q3': {
    type: MultipleChoice,
    options: {
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option C. This is question3 of pool1',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q3',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q3',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q3 true',
          correct: true,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q3',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q4': {
    type: MultipleChoice,
    options: {
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option D. This is question4 of pool1',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q4',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q4',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q4',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q4 true',
          correct: true,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q5': {
    type: MultipleChoice,
    options: {
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option A. This is question5 of pool1',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q5 true',
          correct: true,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q5',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q5',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q5',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q6': {
    type: MultipleChoice,
    options: {
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option A. This is question1 of pool2',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q6 true',
          correct: true,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q6',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q6',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q6',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q7': {
    type: MultipleChoice,
    options: {
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option B. This is question2 of pool2',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q7',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q7 true',
          correct: true,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q7',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q7',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q8': {
    type: MultipleChoice,
    options: {
      autoSubmit: true
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option C. This is question3 of pool2',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q8',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q8',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q8 true',
          correct: true,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q8',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q9': {
    type: MultipleChoice,
    options: {
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option D. This is question4 of pool2',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q9',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q9',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q9',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q9 true',
          correct: true,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q10': {
    type: MultipleChoice,
    options: {
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option A. This is question5 of pool2',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q10 true',
          correct: true,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q10',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q10',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q10',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q11': {
    type: MultipleChoice,
    options: {
      multiSelect: true
    },
    content: {
      instructions: 'FR: Select all that apply',
      query: 'FR: Select option D and A. This is a multiselect example.',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q11 true',
          correct: true,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am Bv',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q11',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q11 true',
          correct: true,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q12': {
    type: MultipleChoice,
    options: {
      distractorFeedback: true
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option B. This is a distractor feedback example',
      distractors: [
        {
          id: 0,
          label: 'FR:I am A  Q12',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B  Q12 true',
          correct: true,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C  Q12',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D  Q12',
          correct: false,
          selected: false
        }
      ],
      feedback: [
        'FR: You selected I am A. This is incorrect.',
        'FR: You selected I am B This is correct.',
        'FR: You selected I am C This is incorrect.',
        'FR: You selected I am D This is incorrect.'
      ]
    }
  },
  'q13': {
    type: MultipleChoice,
    options: {
      autoSubmit: true
    },
    content: {
      instructions: 'FR: Select the best answer.',
      query: 'FR: Select option A. This question has autosubmit. When you select a distractor, the question will automatically show feedback without having to select submit',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A   Q13 true',
          correct: true,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B   Q13',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C   Q13',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D   Q13',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q14': {
    type: MultipleChoice,
    options: {
      randomizeDistractors: false
    },
    content: {
      instructions: 'FR: Select all that apply',
      query: 'FR: Select option C. This example does not have randomized distractors.',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q14',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q14',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q14 true',
          correct: true,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q14',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q15': {
    type: MultipleChoice,
    options: {
      questionAttempts: 3
    },
    content: {
      instructions: 'FR: Select all that apply',
      query: 'FR: Select option B. This question is set to give you 3 attempts to answer correctly.',
      distractors: [
        {
          id: 0,
          label: 'FR: I am A Q15',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: I am B Q15 true',
          correct: true,
          selected: false
        },
        {
          id: 2,
          label: 'FR: I am C Q15',
          correct: false,
          selected: false
        },
        {
          id: 3,
          label: 'FR: I am D Q15',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  },
  'q16': {
    type: MultipleChoice,
    options: {
    },
    content: {
      instructions: 'FR: Answer correctly',
      query: 'FR: The is is C.',
      distractors: [
        {
          id: 0,
          label: 'FR: A  QALL',
          correct: false,
          selected: false
        },
        {
          id: 1,
          label: 'FR: B QALL',
          correct: false,
          selected: false
        },
        {
          id: 2,
          label: 'FR: C QALL true',
          correct: true,
          selected: false
        },
        {
          id: 3,
          label: 'FR: D QALL',
          correct: false,
          selected: false
        }
      ],
      feedback: {
        correct: 'FR: This is the correct answer',
        incorrect: 'FR: This is the wrong answer'
      }
    }
  }
}

export let quizzes = {
  'pretest': {
    contents: [
      'q11',
      'q12',
      'q13',
      'q14',
      'q15',
      'q16',
      { name: 'pool2', total: 3, pass: 100, group: '' },
      { name: 'pool1', total: 3, pass: 100, group: '' },
      'a1'
    ],
    options: {
      autoSubmit: false,
      freshQuestions: 'preferred',
      passingPercentage: 80,
      highlightFeedback: true,
      randomizeQuestions: true,
      randomizeDistractors: true,
      reviewQuestion: true,
      recordScore: false,
      recordInteraction: false,
      completeCourse: false,
      quizAttempts: 1
    }
  },
  'posttest': {
    contents: [
      { name: 'pool1', total: 3, pass: 60, group: 'Chapter1' },
      { name: 'pool2', total: 3, pass: 60, group: 'Chapter2' },
      'q11',
      'q12',
      'q13',
      'q14',
      'q15'
    ],
    options: {
      autoSubmit: false,
      freshQuestions: 'preferred',
      passingPercentage: 80,
      highlightFeedback: true,
      randomizeQuestions: true,
      randomizeDistractors: true,
      reviewQuestion: true,
      recordScore: true,
      recordInteraction: false,
      completeCourse: false
    }
  },
  'kc1': {
    contents: [
      'q11',
      'q12',
      'q13',
      'q14',
      'q15',
      'q16'
    ],
    options: {
      passingPercentage: 80,
      randomizeQuestions: false,
      randomizeDistractors: true,
      highlightFeedback: true
    }
  }
}

export let pools = {
  'pool1': ['q1', 'q2', 'q3', 'q4', 'q5'],
  'pool2': ['q6', 'q7', 'q8', 'q9', 'q10']
}

export let questionRecords = {
  'q1': [],
  'q2': [],
  'q3': [],
  'q4': [],
  'q5': [],
  'q6': [],
  'q7': [],
  'q8': [],
  'q9': [],
  'q10': [],
  'q11': [],
  'q12': [],
  'q13': [],
  'q14': [],
  'q15': [],
  'q16': []
}

export let quizRecords = {
  'pretest': {
    position: -1,
    questionLists: []
  },
  'posttest': {
    position: -1,
    questionLists: []
  },
  'kc1': {
    position: -1,
    questionLists: []
  }
}