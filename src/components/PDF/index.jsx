import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10
  }
});

const MyDocument = (props) => {
  const { totalName, typeAndNumberDoc, officeData } = props;
  return (
    <Document>
      <Page size="A7" style={styles.page}>
        <View style={styles.section}>
          <Text>{totalName}</Text>
        </View>
        <View style={styles.section}>
          <Text>{typeAndNumberDoc}</Text>
        </View>
        <View style={styles.section}>
          <Text>Cruz Verde</Text>
          <Text>{officeData.nombre}</Text>
          <Text>{officeData.direccion}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
