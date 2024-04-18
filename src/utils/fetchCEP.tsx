


interface IFullAddressData {
  address: String
  postal_code: String
  district: String
  city: String
  state: String
  sanitized_postal_code?: String
}

export async function fetchVIACEP(cep: string): Promise<IFullAddressData> {
  const sanitizedCEP = cep.replace(/\D/g, '')
  const url = `https://viacep.com.br/ws/${sanitizedCEP}/json/`
  const response = await fetch(url, { cache: 'no-store' })
  const jsonResponse = await response.json()
  const data: IFullAddressData = {
    address: jsonResponse.logradouro,
    postal_code: jsonResponse.cep,
    district: jsonResponse.bairro,
    city: jsonResponse.localidade,
    state: jsonResponse.uf,
    get sanitized_postal_code(): String {
      return this.postal_code.replace(/\D/g, '')
    }
  }
  return data
}