type TVShow = {
  name: string
  type: string
  language: string
  genres: string[]
  isRunning: boolean
  premieredDate: Date
  channel: string
}

// Arrow Function
export const getTvShow = (objJson: any): TVShow => {
  // Associação por desestruturação
  const {
    name,
    type,
    language,
    genres,
    status,
    premiered,
    network,
    webChannel,
  } = objJson

  let year = 0
  let month = 0
  let day = 0

  if (premiered) {
    const slicedData = premiered.split('-')
    year = parseInt(slicedData[0])
    month = parseInt(slicedData[1]) - 1
    day = parseInt(slicedData[2])
  }

  const tvShow: TVShow = {
    name,
    type,
    language,
    genres,
    isRunning: status == 'Running' ? true : false,
    premieredDate: premiered ? new Date(year, month, day) : null,
    channel: network ? network.name : webChannel.name,
  }

  return tvShow
}

export default TVShow
