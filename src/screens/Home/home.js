import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalStyle } from '../../assets/styles/globalStyle';
import { styles } from './style';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Tab } from '../../components/Tab/Tab';
import { Badge } from '../../components/Badge/Badge';
import { Search } from '../../components/Search/Search';
import { SingleDonationItem } from '../../components/SingleDonationItem/SingleDonation';
import {
  updateFirstName,
  resetToInitialState,
} from '../../redux/reducers/user';
import { updateSelectedCategoryId } from '../../redux/reducers/categories';

const Home = () => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  console.log('user information is ', user);
  console.log('categories information is ', categories);
  const dispatch = useDispatch();
  dispatch(resetToInitialState());
  const imageUrl = require('../../assets/images/stickers-cactus.jpg');
  return (
    <View style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello,</Text>
            <View style={styles.userName}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            resizeMode="contain"
            style={styles.profileImage}
          />
        </View>
        <View style={styles.searchBox}>
          <Search placeholder={'Search'} />
        </View>
        <Pressable style={styles.imageHighLightedContainer}>
          <Image
            style={styles.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={styles.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={styles.categories}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({ item }) => (
              <View style={styles.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
