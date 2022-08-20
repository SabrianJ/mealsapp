import { StyleSheet, Text } from "react-native";

function Subtitle({children, style}){
    return <Text style={[styles.subtitle, style]}>{children}</Text>;
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle:{
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        padding:6,
        textAlign: 'center',
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4
    }
});