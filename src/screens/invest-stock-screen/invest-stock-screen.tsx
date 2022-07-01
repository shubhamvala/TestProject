import React, { useCallback, useRef, useState } from 'react';
import { Box } from 'native-base';
import { Icon, HeaderMain, Text, ButtonMain } from '@components/index';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { arraySwipeData } from '@data/index';
import { metrics } from '@styles/metrics';
import { map } from 'lodash';
import { SwipeDataType } from '@extra/extra-types';
import { useAppNavigation } from '@navigation/utilities';
import Routes from '@navigation/routes';

const InvestStockScreen = () => {
  const carouselRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useAppNavigation();

  const renderScreen = useCallback(({ item }: { item: SwipeDataType }) => {
    return (
      <Box key={item.id} px={8} alignItems={'center'}>
        <Icon name={item.icon} />
        <Text
          tx={item.title}
          color="darkBlue.800"
          fontFamily="main"
          fontWeight={600}
          fontSize="2xl"
          lineHeight="2xl"
          textAlign="center"
        />
        <Text
          mt={1}
          mx={4}
          tx={item.subtitle}
          color="darkGray.700"
          fontFamily="main"
          fontWeight={400}
          fontSize="sm"
          lineHeight="sm"
          textAlign="center"
        />
      </Box>
    );
  }, []);

  const renderDot = useCallback((activeIndex: number) => {
    return map(arraySwipeData, (item: SwipeDataType, index: number) => {
      return (
        <Box
          key={item.id}
          mx={0.5}
          w={2}
          h={2}
          borderRadius={10}
          bg={index === activeIndex ? 'primary.500' : 'other.grayShadeC9'}
        />
      );
    });
  }, []);

  const onPressGetStarted = useCallback(() => {
    navigation.navigate(Routes.FamilyPlusDashboardScreen);
  }, [navigation]);

  return (
    <Box flex={1}>
      <HeaderMain leftIcon="close" />
      <Box mt={8}>
        <Carousel
          ref={carouselRef}
          data={arraySwipeData}
          renderItem={renderScreen}
          onSnapToItem={i => setActiveTab(i)}
          sliderWidth={metrics.screenWidth}
          itemWidth={metrics.screenWidth}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
        />
        <Pagination
          dotsLength={arraySwipeData?.length}
          renderDots={renderDot}
          activeDotIndex={activeTab}
        />
      </Box>
      <ButtonMain labelTx="get-started" mx={8} onPress={onPressGetStarted} />
    </Box>
  );
};

export default InvestStockScreen;
