const createServices = ApiServices => {
  const ViajaSeguroServices = {}
  ViajaSeguroServices.login = user => {
    return ApiServices.post('/login', user).then(
      response => response.data
    )
  }
  ViajaSeguroServices.getAddress = (address) => {
    return ApiServices.get(`api/v1/student/address/${address}`).then(
      response => response.data
    )
  }
  ViajaSeguroServices.createAddressUser = (body) => {
    return ApiServices.post(`api/v1/student`, body).then(
      response => response.data
    )
  }
  return ViajaSeguroServices
}
export default createServices
