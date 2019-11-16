import { StyleSheet } from "react-native";

export const scenarioStyle = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
    justifyContent: "flex-start", flexDirection: "row", flexWrap: "wrap", flex: 1, paddingTop: 30, borderTopWidth: 20
  },
  text: {
    backgroundColor: "#222222",
    color: "white"
  },
  item: {
    backgroundColor: '#2196f3',  
    alignSelf: "flex-start",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: "white"
  },
  itemText: {
    fontFamily: "Roboto",
    fontWeight: "900",
    color: "white",
    fontSize: 20
  }
});

export default scenarioStyle