import { iconHome, iconAnimes, iconFilmes, iconSeries, iconMangas } from '../icons'

const navigation = () => {
  return [
    { title: 'Página Inicial', icon: iconHome, path: '/', openInNewTab: false },
    { sectionTitle: 'Categoria' },
    { title: 'Animes', icon: iconAnimes, path: '/animes', openInNewTab: false },
    { title: 'Filmes', icon: iconFilmes, path: '/filmes', openInNewTab: false },
    { title: 'Séries', icon: iconSeries, path: '/series', openInNewTab: false },
    { title: 'Mangás', icon: iconMangas, path: '/mangas', openInNewTab: false }
  ]
}

export default navigation
