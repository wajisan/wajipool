import React from "react";

import { View, Text, StyleSheet } from 'react-native';
function Icon() {
  return (
    <View style={styles.logoItem} >
      <Text style={styles.title}>Waji</Text>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M18 18V5a3 3 0 00-3-3 3 3 0 00-3 3v1h2V5a1 1 0 011-1 1 1 0 01.71.31A1 1 0 0116 5v2H8V5a2.92 2.92 0 00-.87-2.11A2.94 2.94 0 005 2a3 3 0 00-3 3v1h2V5a1 1 0 011-1 1 1 0 01.71.31A1 1 0 016 5v15c-.56 0-.8-.22-1.29-.71A3.56 3.56 0 002 18v2c.56 0 .8.22 1.29.71A3.56 3.56 0 006 22a3.56 3.56 0 002.7-1.29c.49-.49.73-.71 1.29-.71s.8.22 1.29.71a3.48 3.48 0 005.42 0c.49-.49.73-.71 1.3-.71s.8.22 1.29.71A3.57 3.57 0 0022 22v-2c-.56 0-.8-.22-1.29-.71A3.57 3.57 0 0018 18zm-2-3H8v-2h8zm0-6v2H8V9zm-2 11c-.56 0-.8-.22-1.29-.71A3.56 3.56 0 0010 18a3.2 3.2 0 00-2 .65V17h8v1.65a6.48 6.48 0 00-.71.64c-.5.49-.74.71-1.29.71z"
          data-name="Layer 2"
        ></path>
      </svg>
      <Text style={styles.title}>Pool</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoItem : {
    margin: 'auto'
  },
  title : {
    fontSize: 38
  }
});


export default Icon;
