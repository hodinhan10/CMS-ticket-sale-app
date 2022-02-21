export const addTimeRangeFirst = (payload:Object) => {
  return {
    type: "ADD_TIME_RANGE_FIRST", 
    payload: payload,
  }
}

export const addTimeRangeLast = (payload:Object) => {
  return {
    type: "ADD_TIME_RANGE_LAST", 
    payload: payload,
  }
}

export const addTimeSingle = (payload:Object) => {
  return {
    type: "ADD_TIME_SINGLE", 
    payload: payload,
  }
}

export const addDateSingle = (payload:Object) => {
  return {
    type: "ADD_DATE_SINGLE", 
    payload: payload,
  }
}

export const addDateSingleSoVe = (payload:Object) => {
  return {
    type: "ADD_DATE_SINGLE_SOVE", 
    payload: payload,
  }
}

export const addDateTuNgayDSV = (payload:Object) => {
  return {
    type: "ADD_DATE_TUNGAY_DSV", 
    payload: payload,
  }
}

export const addDateDenNgayDSV = (payload:Object) => {
  return {
    type: "ADD_DATE_DENNGAY_DSV", 
    payload: payload,
  }
}

export const addDateTuNgayDoiSoat = (payload:Object) => {
  return {
    type: "ADD_DATE_TUNGAY_DOISOAT", 
    payload: payload,
  }
}

export const addDateDenNgayDoiSoat = (payload:Object) => {
  return {
    type: "ADD_DATE_DENNGAY_DOISOAT", 
    payload: payload,
  }
}

export const addDateDoiSoatAction = () => {
  return {
    type: "ADD_DATE_DOISOAT_ACTION",
  }
}

export const addDateDSVAction = () => {
  return {
    type: "ADD_DATE_DSV_ACTION",
  }
}


export const addDateRangeFirst = (payload:Object) => {
  return {
    type: "ADD_DATE_RANGE_FIRST", 
    payload: payload,
  }
}

export const addDateRangeLast = (payload:Object) => {
  return {
    type: "ADD_DATE_RANGE_LAST", 
    payload: payload,
  }
}