import React from 'react';

import { View , StyleSheet} from 'react-native';

const Spacer = ( { childern } ) =>{
    return  <View style={styles.spacerStyle}>{childern}</View>;
};

const styles = StyleSheet.create({
    spacerStyle:{
                    margin:10
                }
});

export default Spacer;
