import { ListPagination } from './styles'

const Pagination = ({ limit, totalItens, offset, setOffset }) => {
  const MAX_ITENS = 9
  const MAX_LEFT = (MAX_ITENS - 1) / 2

  const current = offset ? offset / limit + 1 : 1
  const pages = Math.ceil(totalItens / limit)
  const first = Math.max(current - MAX_LEFT, 1)

  const onSetPage = page => setOffset(page)

  return (
    <div>
      <ListPagination>
        <li>
          <button onClick={() => onSetPage(0)} disabled={current === 1} className={'first'}>
            Primeiro
          </button>
        </li>
        {Array.from({ length: Math.min(MAX_ITENS, pages) })
          .map((value, index) => index + first)
          .map(page => {
            if (page <= pages) {
              return (
                <li key={page}>
                  <button
                    onClick={() => setOffset((page - 1) * limit)}
                    className={page === current ? 'page_active' : null}
                  >
                    {page}
                  </button>
                </li>
              )
            }
          })}
        <li>
          <button onClick={() => onSetPage((pages - 1) * limit)} disabled={current === pages} className={'last'}>
            Último
          </button>
        </li>
      </ListPagination>
    </div>
  )
}

export default Pagination
