import { useFetch } from '../hooks'

export const MultipleCustomHooks = () => {

  const { data, hasError, isLoading } = useFetch('https://api.frankfurter.dev/v1/latest');
  return (
    <>
      <div>MultipleCustomHooks</div>
      <hr />
      {isLoading && <p>Cargando...</p>}
      <h2>{data?.date}</h2>
    </>
  )
}
