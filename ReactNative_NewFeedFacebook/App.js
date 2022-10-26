import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'

const App = () => {
  const [Like, setLike] = useState(0)
  const [Comment, setComment]=useState(0)
  const onchangeLike = () =>{
    setLike(Like +1)
  }
  const onchangeCommnet = () =>{
    setComment(Comment+1)
  }
  return (
    <React.Fragment>
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.header__icon} source={require('./assets/feed/pen.png')}/>
        <Text style={styles.header__title}>Feed</Text>
        <Image style={styles.header__icon} source={require('./assets/feed/camera.png')}/>
      </View>
      {/* Contact */}
      <View style={styles.contact}>
        <View style={styles.contact__content}>
          <Image
            resizeMode='contain'
            style={styles.contact__content__image}
            source={{uri:'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg'}}
          />
          <Text style={styles.contact__content__text}>Sahara</Text>
        </View>
        <View style={styles.contact__content}>
          <Image
            resizeMode='contain'
            style={styles.contact__content__image}
            source={{uri:'https://kynguyenlamdep.com/wp-content/uploads/2022/06/hinh-gai-xinh-quyen-ru.jpg'}}
          />
          <Text style={styles.contact__content__text}>Sophia</Text>
        </View>
        <View style={styles.contact__content}>
          <Image
            resizeMode='contain'
            style={styles.contact__content__image}
            source={{uri:'https://media.viezone.vn/prod/2022/9/23/lo_lem_9_5863_a3bbef0412.jpeg'}}
          />
          <Text style={styles.contact__content__text}>Hana</Text>
        </View>
        <View style={styles.contact__content}>
          <Image
            resizeMode='contain'
            style={styles.contact__content__image}
            source={{uri:'https://image-us.24h.com.vn/upload/3-2022/images/2022-07-11/21-1657535366-24-width650height650.jpg'}}
          />
          <Text style={styles.contact__content__text}>Naul</Text>
        </View>
        <View style={styles.contact__content}>
          <Image
            resizeMode='contain'
            style={styles.contact__content__image}
            source={{uri:'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg'}}
          />
          <Text style={styles.contact__content__text}>Kimihana</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <ScrollView>
            {/*Account 1 */}
            <View>
              <View style={styles.footer__contact__status}>
                <Image
                  resizeMode='contain'
                  style={styles.contact__content__image}
                  source={{uri:'https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg'}}
                />
                <Text>
                  Lorem ipsum dolor sit amet
                  {"\n"}
                  Sahara hoạt động 6 phút trước
                </Text>
              </View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <View style={styles.footer__contact__image}>
                <TouchableOpacity 
                  onPress={onchangeLike}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/favorite.png')}/>
                  <Text>{+Like}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={onchangeCommnet}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/comment.png')}/>
                  <Text>{Comment}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*Account 2 */}
            <View>
              <View style={styles.footer__contact__status}>
                <Image
                  resizeMode='contain'
                  style={styles.contact__content__image}
                  source={{uri:'https://kynguyenlamdep.com/wp-content/uploads/2022/06/hinh-gai-xinh-quyen-ru.jpg'}}
                />
                <Text>
                  Lorem ipsum dolor sit amet
                  {"\n"}
                  Sophia hoạt động 10 phút trước
                </Text>
              </View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <View style={styles.footer__contact__image}>
                <TouchableOpacity 
                  onPress={onchangeLike}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/favorite.png')}/>
                  <Text>{+Like}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={onchangeCommnet}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/comment.png')}/>
                  <Text>{Comment}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*Account 3 */}
            <View>
              <View style={styles.footer__contact__status}>
                <Image
                  resizeMode='contain'
                  style={styles.contact__content__image}
                  source={{uri:'https://media.viezone.vn/prod/2022/9/23/lo_lem_9_5863_a3bbef0412.jpeg'}}
                />
                <Text>
                  Lorem ipsum dolor sit amet
                  {"\n"}
                  Hana đang hoạt động
                </Text>
              </View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <View style={styles.footer__contact__image}>
                <TouchableOpacity 
                  onPress={onchangeLike}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/favorite.png')}/>
                  <Text>{+Like}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={onchangeCommnet}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/comment.png')}/>
                  <Text>{Comment}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*Account 4 */}
            <View>
              <View style={styles.footer__contact__status}>
                <Image
                  resizeMode='contain'
                  style={styles.contact__content__image}
                  source={{uri:'https://image-us.24h.com.vn/upload/3-2022/images/2022-07-11/21-1657535366-24-width650height650.jpg'}}
                />
                <Text>
                  Lorem ipsum dolor sit amet
                  {"\n"}
                  Naul hoạt động 6 phút trước
                </Text>
              </View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <View style={styles.footer__contact__image}>
                <TouchableOpacity 
                  onPress={onchangeLike}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/favorite.png')}/>
                  <Text>{+Like}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={onchangeCommnet}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/comment.png')}/>
                  <Text>{Comment}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*Account 5 */}
            <View>
              <View style={styles.footer__contact__status}>
                <Image
                  resizeMode='contain'
                  style={styles.contact__content__image}
                  source={{uri:'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg'}}
                />
                <Text>
                  Lorem ipsum dolor sit amet
                  {"\n"}
                  Kimihana hoạt động 6 phút trước
                </Text>
              </View>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <View style={styles.footer__contact__image}>
                <TouchableOpacity 
                  onPress={onchangeLike}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/favorite.png')}/>
                  <Text>{+Like}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={onchangeCommnet}
                  style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
                >
                  <Image source={require('./assets/contact_status/comment.png')}/>
                  <Text>{Comment}</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
      </View>
    </React.Fragment>
  )
}

export default App

const styles = StyleSheet.create({
  header:{
    //Chiều
    flexDirection:'row',
    //Màu nền:
    backgroundColor:'white',
    //Trục chính (Ngang)
    justifyContent:'space-between',
    //bên phải và bên trái có padding:
    paddingLeft:20,
    paddingRight:20,
    //Platform:
    height: Platform.OS =='ios' ? 100 : 56,
    //
    paddingTop: Platform.OS =='ios' ? 64 : 0,
    //Canh giữa theo chiều dọc:
    alignItems:'center',
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    borderColor:'gray',
  },
  header__icon:{
    width:24,
    height:24,
  },
  header__title:{
    fontSize:16,
    fontWeight:'500'
  },
  contact:{
    flexDirection:'row', 
    display: 'flex', 
    justifyContent:'space-between',
    alignItems:'center',
  },
  contact__content:{
    justifyContent:'center',
    alignItems:'center'
  },
  contact__content__image:{
    width:50,
    height:50,
    borderRadius:125,
    borderWidth:1,
    borderColor:'gray',
    marginBottom:20
  },
  contact__content__text:{
    fontSize:10,
    fontWeight:'bold',
  },
  footer:{
    flex:1,
  },
  footer__contact__status:{
    flexDirection:'row',
    //flexWrap:'wrap'
  },
  footer__contact__image:{
    flexDirection:'row'
  }
})