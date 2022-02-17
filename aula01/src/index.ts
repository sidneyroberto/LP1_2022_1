import showsJson from './data/shows.json'
import { getTvShow } from './models/TVShow'

let runningSeriesCounter = 0
showsJson.forEach((s) => {
  const show = s.show
  const tvShow = getTvShow(show)
  if (tvShow.isRunning) {
    runningSeriesCounter++
  }
})

// Template literals
console.log(`${runningSeriesCounter} running series`)
