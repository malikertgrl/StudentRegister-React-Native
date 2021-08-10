import _ from "lodash";
import React, { Component } from 'react';
import { studentsListData } from "../actions"
import { View, Text, FlatList  } from "react-native";
import { connect } from "react-redux";

class StudentsList extends Component {
    componentDidMount() {
        this.props.studentsListData();

    }

    render() {

        return (
           
            <View style={{ marginTop: 60 }}>
              
                <Text>öğrenci1</Text>
                <Text>öğrenci2</Text>
                <Text>öğrenci3</Text>
                <Text>öğrenci4</Text>
                <Text>öğrenci5</Text>
            </View>
        )
    }
}



export default connect(null, { studentsListData })(StudentsList);