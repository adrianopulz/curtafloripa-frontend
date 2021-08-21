export const drupalToGatsby = route => {
  const url = route.split("internal:")
  if (url[1]) {
    return url[1]
  }

  return ""
}
