import useFetch from "@Hooks/useFetch"

const useViaCEP = (initialCep: string) => {

  const { data, refetch } = useFetch(`https://viacep.com.br/ws/${initialCep}/json/`)
}