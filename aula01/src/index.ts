import tvShows from './data/shows.json'
import TVShow, { getTVShow } from './models/TVShow'

tvShows.forEach(t => {
    const tvShow: TVShow = getTVShow(t.show)
    console.log(tvShow)
})

const d1 = new Date(2022, 1, 3, 11, 53, 0)
const d2 = new Date()
console.log(d1 < d2)