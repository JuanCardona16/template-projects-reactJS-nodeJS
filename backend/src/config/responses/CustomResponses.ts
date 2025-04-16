class CustomApiResponses {

  success = (data: any) => {
    return {
      success: true,
      data: data
    }
  }

  error = (data: any) => { 
    return {
      success: false,
      error: data
    }
  }

}

export default new CustomApiResponses();