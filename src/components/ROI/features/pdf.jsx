import React from 'react'
import {connect} from 'react-redux';
import {Document, Page, Text, View, StyleSheet, Image} from '@react-pdf/renderer';

//functional component
/////result icons
//Hours Saved
import HS from '../../imgs/HS.png';
//Dollars Saved
import DS from '../../imgs/DS.png';
//Cost Per Dollar Raised
import CPDR from '../../imgs/CPDR.png';
//Clients Served
import CS from '../../imgs/CS.png';

export const ResultDocument = () => (
    <Document>

        {/* Current Numbers */}
        <Page size="A4">
            <View>
                <Text>Current Numbers</Text>

                {/* Hours Spent */}
                <View style={styles.info_row}>
                    <Image src={HS}/> 
                </View>

                {/* Dollars Spent */}
                <View style={styles.info_row}>
                    <Image src={DS}/>
                </View>

                {/* Cost Per Dollar Raised */}
                <View style={styles.info_row}>
                    <Image src={CPDR}/>
                </View>

                {/* Clients currently served */}
                <View style={styles.info_row}>
                    <Image src={CS}/>
                </View>

            </View>
        </Page>

        {/* ROI Results */}
        <Page size="A4">
            <View>
                <Text>ROI Results</Text>

                {/* Hours Saved */}
                <View style={styles.info_row}>
                    <Image src={HS}/> 
                </View>
                
                {/* Dollars Saved */}
                <View style={styles.info_row}>
                    <Image src={DS}/>
                </View>
                
                {/* Cost Per Dollar Raised */}
                <View style={styles.info_row}>
                    <Image src={CPDR}/>
                </View>
                
                {/* Clients currently served */}
                <View style={styles.info_row}>
                    <Image src={CS}/>
                </View>
                
            </View>
        </Page>
    </Document>
);

const styles = StyleSheet.create({
    page:{
        flexDirection: "column",
        backgroundColor: '#d8eee9'
    },
    info_row: {
        flexDirection: 'row',
        margin: 5
    }
});