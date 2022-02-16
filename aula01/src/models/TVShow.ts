type TVShow = {
    id: number
    name: string
    type: string
    language: string
    genres: string[]
    running: boolean
    channel: string
    premiereDate: Date
}

export const getTVShow = (tvShowOjb: any) => {
    const {
        id,
        name,
        type,
        language,
        genres,
        status,
        network,
        webChannel,
        premiered } = tvShowOjb

    const tvShow: TVShow = {
        id,
        name,
        type,
        language,
        genres,
        running: status == 'Running' ? true : false,
        channel: network ? network.name : webChannel.name,
        premiereDate: new Date(premiered)
    }

    return tvShow
}

export default TVShow