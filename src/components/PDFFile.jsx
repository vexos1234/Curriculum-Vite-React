
import { Page, Text, Image, Document, StyleSheet, PDFViewer, View } from "@react-pdf/renderer";
import img1 from '/images/guy.jpg'

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    text: {
        fontFamily: "Helvetica",
        fontSize: 20,
        color: "#333333",
        marginBottom: 5,
    },
    cvHeading: {
        fontFamily: "Helvetica",
        fontSize: 30,
        fontWeight: "bold",
        color: "#333333",
        marginBottom: 10,

    },
});

const PDFFile = () => (
    <Document>
        <Page>
            <Text>Hello, this is a PDF document.</Text>
            <Text>This is the second paragraph.</Text>
            <Text>And heres the third paragraph.</Text>
            <Image src={img1} />
        </Page>
    </Document>
);

export default PDFFile;