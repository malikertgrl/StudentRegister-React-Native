import React, { Component } from 'react';
import { connect } from "react-redux"
import { stCreate, studentChange} from "../actions"
import { TextInput, View, Picker } from "react-native";
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
import { Button, CardSection } from "../general"

class StudentCreate extends Component {

    clickSave() {
        const { 
            namee,
            surname,
            number,
            branch  } = this.props;

        this.props.stCreate({ namee, surname, number, branch })
        // console.log({ namee, surname, number, branch });
    }
    // renderButton = () => {
    //     if (!this.props.loading) {
    //         return (
    //             <Button onPress={this.clickSave.bind(this)}>Kaydet</Button>
    //         )
    //     }
    //     return <Spinners />;
    // }
    render() {

        return (
            <View style={{ marginTop: 60 }}>
                <CardSection>
                    <TextInput
                        placeholder="İsim"
                        style={styles.inputStyle}
                        value={this.props.namee}
                        onChangeText={namee => this.props.studentChange({title:"namee", value: namee})}
                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder="Soyisim"
                        style={styles.inputStyle}
                        value={this.props.surname}
                        onChangeText={surname => this.props.studentChange({title:"surname", value: surname})}
                    />
                </CardSection>

                {/* <CardSection>
                    <TextInput
                        placeholder="Numara"
                        style={styles.inputStyle}
                        value={this.props.number}
                        onChangeText={number => this.props.numberAdd(number)}
                    />
                </CardSection> */}
                <CardSection>
                    <TextInput
                        placeholder="Numara"
                        style={styles.inputStyle}
                        value={this.props.number}
                        onChangeText={number => this.props.studentChange({title:"number", value: number})}
                    />
                </CardSection> 

                <CardSection >
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.branch}
                        onValueChange={branch =>this.props.studentChange({title:"branch", value: branch})}
                    >
                        <PickerItem label="A Şubesi" value="aBranch" />
                        <PickerItem label="B Şubesi" value="bBranch" />
                        <PickerItem label="C Şubesi" value="cBranch" />
                        <PickerItem label="D Şubesi" value="dBranch" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.clickSave.bind(this)}>Kaydet</Button>
                </CardSection>

            </View>
        )
    }
}

const styles = {


    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }

}

const mapToStateProps = ({ studentListResponse }) => {
    const { namee, surname, number, branch } =  studentListResponse;
    return {  
        namee,
        surname,
        number,
        branch
        };
}

export default connect(mapToStateProps, { stCreate, studentChange })(StudentCreate);