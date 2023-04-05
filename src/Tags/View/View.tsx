import styled from "styled-components"
 
 
function View({children}:{children:any}) {
    const View= styled.div`
    font-family:'poppins';
    `
  return (
    <View>
      {children}
    </View>
  )
}

export default View
