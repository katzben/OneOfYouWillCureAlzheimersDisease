import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import BackgroundSelect from './components/BackgroundSelect'
import ChapterIntro from './components/ChapterIntro'
import Decision from './components/Decision'
import ResourceBar from './components/ResourceBar'
import Ending from './components/Ending'
import { backgroundStats, chapters, endings } from './data/gameData'

const SCREENS = {
  INTRO: 'intro',
  BACKGROUND: 'background',
  CHAPTER_INTRO: 'chapterIntro',
  DECISION: 'decision',
  ENDING: 'ending',
}

function clamp(val) {
  return Math.max(0, Math.min(100, val))
}

function determineEnding(resources, flags) {
  for (const ending of endings) {
    if (ending.condition(resources, flags)) {
      return ending
    }
  }
  return endings[endings.length - 1]
}

export default function App() {
  const [screen, setScreen] = useState(SCREENS.INTRO)
  const [resources, setResources] = useState({ focus: 50, funding: 50, resilience: 50 })
  const [flags, setFlags] = useState([])
  const [chapterIndex, setChapterIndex] = useState(0)
  const [decisionIndex, setDecisionIndex] = useState(0)
  const [ending, setEnding] = useState(null)

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [screen, chapterIndex, decisionIndex])

  const handleStart = () => setScreen(SCREENS.BACKGROUND)

  const handleBackground = (bgId) => {
    const stats = backgroundStats[bgId]
    setResources({ ...stats })
    setChapterIndex(0)
    setDecisionIndex(0)
    setFlags([])
    setScreen(SCREENS.CHAPTER_INTRO)
  }

  const handleChapterContinue = () => {
    setDecisionIndex(0)
    setScreen(SCREENS.DECISION)
  }

  const handleChoice = (choice) => {
    const newResources = { ...resources }
    for (const [key, val] of Object.entries(choice.effects)) {
      if (key in newResources) {
        newResources[key] = clamp(newResources[key] + val)
      }
    }
    setResources(newResources)

    if (choice.flag) {
      setFlags((prev) => [...prev, choice.flag])
    }

    const chapter = chapters[chapterIndex]
    const nextDecision = decisionIndex + 1

    // Use a callback to get the latest flags when determining ending
    const updatedFlags = choice.flag ? [...flags, choice.flag] : flags

    if (nextDecision < chapter.decisions.length) {
      setTimeout(() => {
        setDecisionIndex(nextDecision)
      }, 0)
    } else {
      const nextChapter = chapterIndex + 1
      if (nextChapter < chapters.length) {
        setTimeout(() => {
          setChapterIndex(nextChapter)
          setScreen(SCREENS.CHAPTER_INTRO)
        }, 0)
      } else {
        const result = determineEnding(newResources, updatedFlags)
        setEnding(result)
        setTimeout(() => {
          setScreen(SCREENS.ENDING)
        }, 0)
      }
    }
  }

  const handlePlayAgain = () => {
    setScreen(SCREENS.INTRO)
    setResources({ focus: 50, funding: 50, resilience: 50 })
    setFlags([])
    setChapterIndex(0)
    setDecisionIndex(0)
    setEnding(null)
  }

  const chapter = chapters[chapterIndex]
  const decision = chapter?.decisions[decisionIndex]

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-[600px] mx-auto">
        {screen === SCREENS.INTRO && <Intro onStart={handleStart} />}

        {screen === SCREENS.BACKGROUND && (
          <BackgroundSelect onSelect={handleBackground} />
        )}

        {screen === SCREENS.CHAPTER_INTRO && chapter && (
          <ChapterIntro chapter={chapter} onContinue={handleChapterContinue} />
        )}

        {screen === SCREENS.DECISION && decision && (
          <div key={decision.id}>
            <ResourceBar resources={resources} />
            <Decision decision={decision} onChoose={handleChoice} />
          </div>
        )}

        {screen === SCREENS.ENDING && ending && (
          <Ending ending={ending} onPlayAgain={handlePlayAgain} />
        )}
      </div>
    </div>
  )
}
