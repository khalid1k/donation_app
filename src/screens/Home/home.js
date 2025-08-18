import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
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
import {
  resetDonations,
  updateSelectedDonationId,
} from '../../redux/reducers/donations';
import { Routes } from '../../navigation/routes';

const Home = ({ navigation }) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  console.log('current donation state is ', donations);
  // console.log('user information is ', user);
  // console.log('categories information is ', categories);
  const dispatch = useDispatch();
  // dispatch(resetToInitialState());
  // dispatch(resetDonations());

  const [donationItems, setDonationItems] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  const categoryPageSize = 4;

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const filteredItem = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(filteredItem);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);
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
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newDate = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newDate.length > 0) {
                setCategoryList(prev => [...prev, ...newDate]);
                setCategoryPage(prev => prev + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
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

        {donationItems.length > 0 && (
          <View style={styles.donationsItemsContainer}>
            {donationItems.map(value => (
              <View
                key={value.donationItemId}
                style={styles.singleDonationItem}
              >
                <SingleDonationItem
                  price={parseFloat(value.price)}
                  badgeTitle={
                    categories.categories.filter(
                      val => val.categoryId === categories.selectedCategoryId,
                    )[0].name
                  }
                  donationTitle={value.name}
                  uri={value.image}
                  donationItemId={value.donationItemId}
                  onPress={selectedDonationItemId => {
                    dispatch(updateSelectedDonationId(selectedDonationItemId));
                    navigation.navigate(Routes.SingleDonationItem);
                  }}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
