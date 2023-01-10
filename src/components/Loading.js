import { Image, View, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <>
      <View>
        <Image
          style={styles.img}
          source={require('../../assets/iconos/Loading.gif')}
        />
      </View>
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({
  img: {
    width: 270,
    height: 270,
    borderWidth: 2,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 70,
    marginBottom: 50,
    marginTop: 85,
    alignContent: 'center',
  },
});
