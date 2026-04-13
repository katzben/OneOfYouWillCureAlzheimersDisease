export const backgroundStats = {
  biologist: { focus: 65, funding: 40, resilience: 60 },
  neuroscientist: { focus: 55, funding: 55, resilience: 55 },
  clinician: { focus: 40, funding: 70, resilience: 55 },
  dataScientist: { focus: 60, funding: 45, resilience: 50 },
}

export const backgrounds = [
  {
    id: 'biologist',
    name: 'Molecular Biologist',
    description:
      'You trained at the cellular level. You speak the language of proteins, plaques, and tangles. You know more about what might be going wrong than almost anyone -- but the path from bench to bedside feels impossibly long.',
    stats: 'Focus high, Funding low, Resilience moderate',
  },
  {
    id: 'neuroscientist',
    name: 'Neuroscientist',
    description:
      'You study how the brain works -- which means you have spent years trying to understand what it means when it does not. Your training bridges molecules and behavior, mechanism and meaning.',
    stats: 'Balanced start',
  },
  {
    id: 'clinician',
    name: 'Clinician',
    description:
      'You went to medical school first. You have sat with patients, held their hands, watched the disease take hold in real time. You came to research late -- but you know what this costs in ways the others do not.',
    stats: 'Focus low, Funding high, Resilience moderate',
  },
  {
    id: 'dataScientist',
    name: 'Data Scientist',
    description:
      'You came from outside -- physics, maybe, or computer science. You looked at the field and thought: there is a pattern here nobody has seen yet. The biologists are not sure what to make of you. Neither are you, honestly.',
    stats: 'Focus moderate, Funding low, Resilience low',
  },
]

export const chapters = [
  {
    id: 'ch1',
    label: 'Chapter 1',
    title: 'The Beginning',
    years: 'Years 1-5 · Graduate School',
    intro:
      "Welcome to your first year of graduate school! The sky's the limit -- well, except you're living on a stipend that can barely afford you a can of beans a week, you need to stay up until 4am to prepare for your neuroanatomy midterm, and your advisor is asking for daily updates on your recruitment for their study.",
    decisions: [
      {
        id: 'd1_1',
        title: 'Your advisor',
        prompt:
          'You have been accepted into two PhD programs. One advisor is famous, demanding, and brilliant -- her trainees go on to top faculty positions, but her lab has a high attrition rate. The other is less prominent, but three of his last four students got tenure-track jobs. He has been known to ask how his students are doing and actually wait for the answer.',
        choices: [
          {
            label: 'The Brilliant One',
            text: "Dr. Chen's lab is as close to the frontier as it gets. You will learn more here than anywhere else. The cost is real.",
            effects: { focus: 15, resilience: -10 },
          },
          {
            label: 'The Steady One',
            text: 'Dr. Okafor responds to emails within 24 hours. His publication record is solid but not flashy. His students seem like whole people.',
            effects: { resilience: 15, focus: -5 },
          },
          {
            label: 'Take a year',
            text: 'You are not ready. You defer and spend a year working as a research coordinator -- watching how labs actually function before you commit.',
            effects: { resilience: 8, funding: -10 },
          },
        ],
      },
      {
        id: 'd1_2',
        title: 'The anomaly',
        prompt:
          "Eighteen months in, you find something strange in your data. A pattern that does not fit the prevailing model. It could be artifact. It could be noise. Or it could be something. Following it means deviating from your advisor's approved aims.",
        choices: [
          {
            label: 'Follow it',
            text: 'You ask for a meeting, show the data, make the case. Your advisor is skeptical but gives you six weeks.',
            effects: { focus: 15, funding: -10, resilience: -5 },
          },
          {
            label: 'Stay the course',
            text: 'You flag it in your lab notebook and set it aside. There will be time for anomalies later.',
            effects: { funding: 10, focus: -5 },
          },
          {
            label: 'Do both',
            text: 'You follow the approved path during the day and chase the anomaly on weekends. You will not remember sleeping much this year.',
            effects: { focus: 8, funding: 5, resilience: -15 },
          },
        ],
      },
      {
        id: 'd1_3',
        title: 'The conference',
        prompt:
          'You are invited to present a poster at a regional conference. Your results are real but preliminary -- the story is not complete yet.',
        choices: [
          {
            label: 'Present boldly',
            text: 'You frame what you have around its potential. People stop at your poster. An NIA program officer takes your card.',
            effects: { funding: 12, resilience: 5 },
          },
          {
            label: 'Present carefully',
            text: 'Every caveat intact. A senior researcher gives you a nod that feels like it means something.',
            effects: { focus: 8, resilience: -5 },
          },
          {
            label: "Don't go -- keep working",
            text: 'The travel would cost you two weeks. You stay in the lab.',
            effects: { focus: 10, funding: -5 },
          },
        ],
      },
    ],
  },
  {
    id: 'ch2',
    label: 'Chapter 2',
    title: 'The Grind',
    years: 'Years 5-12 · Postdoc',
    intro:
      "You've finally done it: you've graduated, and somehow made it out in a reasonable time with your dissertation in hand! But that doesn't mean you'll be able to move straight into a faculty position -- nearly everyone in ADRD research has to do a postdoc first.",
    decisions: [
      {
        id: 'd2_1',
        title: 'The replication crisis',
        prompt:
          'A lab in Germany tried to replicate your most important grad school result. They could not. They have posted a preprint. Your inbox fills up.',
        choices: [
          {
            label: 'Defend your methods',
            text: 'A detailed, measured public response. Some people respect it. Others think you are being defensive.',
            effects: { funding: 8, resilience: -10, focus: -5 },
          },
          {
            label: 'Dig deeper',
            text: 'You reach out directly. Share raw data. Three months later you find it: a reagent lot. The finding holds under more specific conditions than you originally claimed.',
            effects: { focus: 15, funding: -12, resilience: -5 },
          },
          {
            label: 'Quietly pivot',
            text: 'You acknowledge the methodological differences and announce a related but updated direction. Science moves on.',
            effects: { resilience: 8, focus: -5, funding: -5 },
          },
        ],
      },
      {
        id: 'd2_2',
        title: 'The offer',
        prompt:
          'A biotech startup working on tau-targeting therapeutics has been watching your work. They reach out. The salary is three times your postdoc stipend. The science is adjacent to everything you care about. They have resources your PI can only dream of.',
        choices: [
          {
            label: 'Take the job',
            text: 'You will do real work. You will have real impact. The path just looks different than you expected.',
            effects: { funding: 20, resilience: 10, focus: -15 },
            flag: 'pivot_path',
          },
          {
            label: 'Negotiate a consulting arrangement',
            text: 'You will consult 20% of your time. They agree, reluctantly. The money helps. The divided attention does not.',
            effects: { funding: 15, focus: -10, resilience: -5 },
          },
          {
            label: 'Decline',
            text: 'You write a polite email and go back to your bench. This is the work.',
            effects: { resilience: 12, funding: -5 },
          },
        ],
      },
      {
        id: 'd2_3',
        title: 'The patient',
        prompt:
          'A community engagement coordinator asks if anyone in your research group would meet with an early-onset Alzheimer\'s patient and their family -- just to talk, to connect the bench to the bedside. It is not required.',
        choices: [
          {
            label: 'Go',
            text: 'A 58-year-old former engineer who still knows who he is, mostly, but can feel the edges going soft. His daughter holds his hand. He asks what you are working on. You tell him. He says: "Good." You will not forget that.',
            effects: { resilience: 15, focus: -5 },
          },
          {
            label: "You can't -- you're in the middle of something",
            text: 'The timing is genuinely bad. You have a deadline. You will do it next time.',
            effects: { focus: 5, resilience: -10 },
          },
          {
            label: 'Go, but keep some distance',
            text: 'You attend. You listen. You are moved more than you expected to be. You take the long way home.',
            effects: { resilience: 8 },
          },
        ],
      },
      {
        id: 'd2_4',
        title: 'The unlikely collaboration',
        prompt:
          'A physicist at your institution works on network dynamics in complex systems. She has been reading neuroscience papers in her spare time. She thinks she can model disease propagation patterns with tools from her field. She emails you. It sounds either brilliant or completely off-base.',
        choices: [
          {
            label: 'Go all in',
            text: 'Six months learning a new mathematical vocabulary. Slow, sometimes humiliating. Something is emerging.',
            effects: { focus: 18, resilience: -12, funding: -5 },
          },
          {
            label: 'Explore it on the side',
            text: 'Monthly coffee. Shared data. You see where it goes.',
            effects: { focus: 5, resilience: 5, funding: -5 },
          },
          {
            label: 'Politely decline',
            text: 'You do not have the bandwidth. You stay in your lane.',
            effects: { focus: 5, resilience: -5 },
          },
        ],
      },
    ],
  },
  {
    id: 'ch3',
    label: 'Chapter 3',
    title: 'The Stakes',
    years: 'Years 12-20 · Early Faculty',
    intro:
      "Wait, is that really your name on a sign next to your very own office? With a tenure-track position, you're now in a position to make a real difference. The decisions you make at this point in your research career are vital.",
    decisions: [
      {
        id: 'd3_1',
        title: 'The R01',
        prompt:
          'Your first R01 is up for renewal. Reviewers want you to broaden your specific aims to increase fundability. You think the narrow focus is exactly right.',
        choices: [
          {
            label: 'Hold your ground',
            text: 'You write a response that explains, without apology, why the focus is intentional. You may lose the funding.',
            effects: { focus: 15, funding: -15 },
          },
          {
            label: 'Broaden the aims',
            text: 'You reshape the grant. Some of the new aims are genuinely interesting. Others are for the study section. The funding comes through.',
            effects: { funding: 15, focus: -10 },
          },
          {
            label: 'Reframe without broadening',
            text: 'Same science, different story. Weeks reworking the framing. An intellectual gamble. You do not know if it worked until the score comes back.',
            effects: { focus: 10, funding: 8, resilience: -10 },
          },
        ],
      },
      {
        id: 'd3_2',
        title: 'The student',
        prompt:
          'Your most creative PhD student -- genuinely talented -- is struggling. Not with the science. With everything around it. They come to your office and say they are thinking about leaving. You have six weeks until your grant deadline.',
        choices: [
          {
            label: 'Invest everything in them',
            text: 'Grant work moves to nights and weekends. You meet three times a week. It works. Five years later they are doing work that matters.',
            effects: { resilience: 15, focus: -10, funding: -5 },
          },
          {
            label: 'Be honest with them',
            text: 'You tell the truth as you see it: the system is not set up for everyone. The kindest cruelty you know how to offer.',
            effects: { focus: 10, resilience: -5 },
          },
          {
            label: 'Find them another path',
            text: 'A month helping them think through options -- industry, science writing, policy. They find something that fits. They thank you later.',
            effects: { resilience: 12, focus: 5, funding: -10 },
          },
        ],
      },
      {
        id: 'd3_3',
        title: 'The profile',
        prompt:
          'A science journalist is working on a piece about the next generation of Alzheimer\'s researchers. She wants to profile you. Your work is real. Your findings are preliminary.',
        choices: [
          {
            label: 'Do it -- be bold',
            text: 'The piece runs. Funding inquiries triple. A major donor reaches out. Two of your grad students mention their families saw it.',
            effects: { funding: 15, focus: -5, resilience: -5 },
          },
          {
            label: 'Do it -- be careful',
            text: 'The piece runs shorter than expected. She quotes your caveats heavily. A few colleagues reach out to say they appreciated the rigor.',
            effects: { funding: 8, resilience: 5 },
          },
          {
            label: 'Decline',
            text: 'You are not ready for the attention. You return to the work.',
            effects: { focus: 12, funding: -8 },
          },
        ],
      },
    ],
  },
  {
    id: 'ch4',
    label: 'Chapter 4',
    title: 'The Long Game',
    years: 'Years 20-30+',
    intro:
      "Tenure achieved -- you don't need to look over your shoulder quite so often. But this is the most incisive point for your work, and you'll need continued funding to make real progress.",
    decisions: [
      {
        id: 'd4_1',
        title: 'The result',
        prompt:
          'After years of work, you have something. Not the cure -- but significant. A mechanism, a biomarker, a therapeutic target that has held up across every test. You could publish now, or wait two more years and chase something bigger.',
        choices: [
          {
            label: 'Publish now',
            text: 'The paper lands well. Three labs immediately begin building on it. You feel, for the first time in a long time, like the work is moving.',
            effects: { funding: 12, resilience: 8, focus: -10 },
          },
          {
            label: 'Wait -- two more years',
            text: 'The grant runs thin. Two of your best people move to other labs. But what you find is bigger than what you would have published.',
            effects: { focus: 20, resilience: -15, funding: -10 },
          },
          {
            label: 'Publish and immediately start the next phase',
            text: 'You submit the paper and begin the follow-up work the same week. You will sleep when you retire.',
            effects: { focus: 8, resilience: 5, funding: -5 },
          },
        ],
      },
      {
        id: 'd4_2',
        title: 'The next generation',
        prompt:
          'A graduate student from another lab has an idea that sounds a lot like something you tried fifteen years ago and abandoned -- but their angle is different. And they are very good.',
        choices: [
          {
            label: 'Share everything',
            text: 'You open your old lab notebooks. Your dead ends become their shortcuts.',
            effects: { resilience: 12, focus: 5 },
          },
          {
            label: 'Let them find their own way',
            text: 'You do not want to steer them wrong based on old assumptions. You might have been wrong about the dead end.',
            effects: { focus: 10, resilience: -5 },
          },
          {
            label: 'Propose a collaboration',
            text: 'Their advisor is less sure. You make it work anyway.',
            effects: { funding: 10, resilience: 10, focus: -10 },
          },
        ],
      },
      {
        id: 'd4_3',
        title: 'Looking back',
        prompt:
          'Late in your career, you still have a chance to make a real difference. The students you mentor, the grants you help review -- all these things keep the field moving forward.',
        choices: [
          {
            label: 'You focused on the science above all else',
            text: 'The data was always the point. Whatever it cost, the work was worth it.',
            effects: { focus: 10, resilience: -5 },
          },
          {
            label: 'You focused on the people around you',
            text: 'Science is a human enterprise. The colleagues, the students, the patients -- they were never a distraction. They were the reason.',
            effects: { resilience: 10, focus: -5 },
          },
          {
            label: 'You tried to hold both',
            text: 'It was not always easy. But you never stopped trying to do right by the science and the people at the same time.',
            effects: { focus: 5, resilience: 5 },
          },
        ],
      },
    ],
  },
]

export const endings = [
  {
    id: 'cure',
    title: 'The Cure',
    condition: (r) => r.focus >= 70 && r.funding >= 70 && r.resilience >= 70,
    text: "You've done it! Your work might have been just one part of a larger puzzle, but each line of research, and each researcher, matters. Your piece helped us finally reach a cure.\n\nIt wasn't one single discovery -- it never is. Somewhere along the way, your findings connected with someone else's, and theirs connected with another lab's work from a decade ago, and that chain of small true things added up to something that will change millions of lives. People who haven't been born yet will grow old without this disease because of work like yours.\n\nThat's what research careers are for.",
  },
  {
    id: 'keystone',
    title: 'The Keystone',
    condition: (r) => r.focus >= 70 && r.resilience >= 45,
    text: "Your work didn't cure it. But it was the piece.\n\nSomewhere in your published record -- a paper from fifteen years ago, a dataset you almost didn't release, a mechanism you described more carefully than anyone else had bothered to -- there is the foundation on which the answer was built.\n\nYou will read the cure paper when it comes out. You will find your citation in the references, somewhere in the middle, the way that all the best science lives: quietly, unannounced, doing its work.\n\nThe researchers who did it drove four hours to see you. They sat in your office and told you what your work had meant to theirs. They were younger than your students.\n\nThat night you called someone you love and didn't say much. But they could tell.",
  },
  {
    id: 'mentor',
    title: 'The Mentor',
    condition: (r) => r.resilience >= 75 && r.focus < 55,
    text: "You didn't cure it. But you made the people who tried.\n\nThe list of researchers who came through your lab reads like a small history of the field. Some went into industry and built things you'll never fully know about. Some are running their own labs now, raising their own students. One of them is close -- closer than anyone has ever been -- and she calls you sometimes on Sunday evenings to think out loud.\n\nYou shaped the culture as much as you shaped the science. You were the one who asked how people were doing and waited for the answer. You were the one who said: your humanity is not a distraction from this work. It is the reason for it.",
  },
  {
    id: 'advocate',
    title: 'The Advocate',
    condition: (r) => r.funding >= 70 && r.resilience >= 60,
    text: "The science mattered. But what you changed was the landscape.\n\nYou understood, earlier than most, that the bottleneck wasn't ideas -- it was the infrastructure around them. Funding structures that punished risk. Review panels that rewarded the safe bet. A public that didn't understand what they were paying for or why.\n\nThe grants that now exist, the policy language that now protects longitudinal research, the congressional hearing where someone finally asked the right question -- there are fingerprints of yours on all of it.\n\nThe cure will come. When it does, part of what made it possible was a path you helped clear.",
  },
  {
    id: 'pivot',
    title: 'The Pivot',
    condition: (r, flags) =>
      (r.resilience >= 22 && r.resilience <= 38) || flags.includes('pivot_path'),
    text: "You left research. You want to be honest about that, even now.\n\nIt was the right decision. Maybe not for the field, but for you -- and you've come to believe those aren't as separate as you once thought. A researcher who is broken is not more useful than a person who is whole.\n\nYou carry the work with you. The questions you were asking, the patients, the mechanism, the numbers that never quite added up -- they haven't left you. They just live in a different part of your life now.\n\nYou still read the papers. You still follow the trials. You still care, in the particular way that only people who have been that close to something can care.",
  },
  {
    id: 'burnout',
    title: 'The Burnout',
    condition: (r) => r.resilience < 22,
    sting: true,
    text: "You are very good at this. Were.\n\nYou need to rest. Not a vacation -- a real stop. You've known it for a while.\n\nThe work mattered. You mattered. Those things are still true.\n\nBut something got lost somewhere in the last decade, and you're not sure you can name it anymore. The curiosity that brought you here -- you can remember it but you can't quite feel it. That's not a character flaw. That's what happens when a system takes everything a person has to give and calls it dedication.\n\nTake care of yourself first.",
  },
  {
    id: 'wrongpath',
    title: 'The Wrong Path',
    condition: (r) => r.focus < 25 && r.funding < 30,
    sting: true,
    text: "You followed an idea for a very long time that turned out to be wrong.\n\nYou are not the first person this has happened to. You will not be the last. Some of the most important work in the history of science was done by people who were wrong -- wrong in ways that took the field twenty years to understand, but wrong in ways that still moved the map.\n\nYou feel it differently, of course. From the inside it doesn't feel like a contribution. It feels like a decade of your life.\n\nThe field is still there. The question is still open. Whether you go back to it is a real question, and you should take your time answering it.",
  },
  {
    id: 'foundation',
    title: 'The Foundation',
    condition: () => true,
    text: "Thirty years. Hundreds of papers. Thousands of hours.\n\nNo single breakthrough that bears your name. No moment where everything came together in a flash.\n\nJust the work, done carefully, over a long time.\n\nScience doesn't look like a tree with a few great branches. It looks like a root system. Vast, tangled, invisible. The work that holds everything up is mostly underground.\n\nYour roots run deep.",
  },
]
