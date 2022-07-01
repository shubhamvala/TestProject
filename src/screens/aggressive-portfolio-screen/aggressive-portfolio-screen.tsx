import React, { useCallback, useRef, useState } from 'react';
import { Box, HStack, ScrollView, useToken } from 'native-base';
import { ButtonMain, HeaderMain, Icon, Text } from '@components/index';
import { useAppNavigation } from '@navigation/utilities';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { arrayCompanyData, arrayPortfolioData } from '@data/index';
import { CompanyType, PortfolioType } from '@extra/extra-types';
import { map } from 'lodash';
import { metrics } from '@styles/metrics';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import PieChart from 'react-native-pie-chart';

const AggressivePortfolioScreen = () => {
  const [primary50, darkBlue50, darkBlue100, darkBlue300, darkBlue600] =
    useToken('colors', [
      'primary.50',
      'darkBlue.50',
      'darkBlue.100',
      'darkBlue.300',
      'darkBlue.600',
    ]);
  const carouselRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useAppNavigation();

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderScreen = useCallback(
    ({ item }: { item: PortfolioType }) => {
      return (
        <Box key={item.id}>
          <Box my={4} alignItems="center">
            <Box style={{ transform: [{ rotate: '50deg' }] }}>
              <PieChart
                widthAndHeight={250}
                series={[50, 175, 40, 95]}
                sliceColor={[darkBlue100, darkBlue600, darkBlue300, darkBlue50]}
                doughnut
                coverRadius={0.55}
                coverFill={'white'}
              />
            </Box>
          </Box>
          <Box
            mt={4}
            ml={8}
            px={4}
            py={2}
            borderRadius={6}
            bg={'other.grayShadeF8'}
            alignSelf={'flex-start'}>
            <Text
              tx={item?.title}
              color="darkGray.600"
              fontFamily="main"
              fontWeight={700}
              fontSize="md"
            />
            <Text
              tx={'risk'}
              color="darkGray.600"
              fontFamily="main"
              fontWeight={700}
              fontSize="md">
              <Text
                text={` ${item?.risk}`}
                color="darkGray.600"
                fontFamily="main"
                fontWeight={700}
                fontSize="md"
              />
            </Text>
            <Text
              tx={'return'}
              color="darkGray.600"
              fontFamily="main"
              fontWeight={700}
              fontSize="md">
              <Text
                text={` ${item?.return}`}
                color="darkGray.600"
                fontFamily="main"
                fontWeight={700}
                fontSize="md"
              />
            </Text>
          </Box>
        </Box>
      );
    },
    [darkBlue100, darkBlue300, darkBlue50, darkBlue600],
  );

  const renderDot = useCallback((activeIndex: number) => {
    return map(arrayPortfolioData, (item: PortfolioType, index: number) => {
      return (
        <Box
          key={item.id}
          mx={2}
          w={index === activeIndex ? 5 : 3}
          h={index === activeIndex ? 5 : 3}
          borderRadius={12}
          borderWidth={1}
          borderColor={'darkBlue.600'}
          bg={index === activeIndex ? 'darkBlue.600' : 'transparent'}
        />
      );
    });
  }, []);

  const renderCompanyItem = useCallback(
    (item: CompanyType) => {
      return (
        <HStack
          key={item.id}
          mt={2}
          px={4}
          py={6}
          borderRadius={6}
          bg={'other.grayShadeF8'}
          alignItems={'center'}>
          <Text
            flex={1}
            tx={item?.title}
            color="darkBlue.800"
            fontFamily="main"
            fontWeight={600}
            fontSize="sm"
          />
          <Box mx={2}>
            <AnimatedCircularProgress
              size={40}
              width={5}
              fill={item?.percentage}
              tintColor={darkBlue600}
              backgroundColor={primary50}
              lineCap="round">
              {() => (
                <Text
                  text={`${item?.percentage}%`}
                  color="darkBlue.700"
                  fontFamily="main"
                  fontWeight={800}
                  fontSize="2xs"
                />
              )}
            </AnimatedCircularProgress>
          </Box>
          <Icon name="arrow-right" />
        </HStack>
      );
    },
    [darkBlue600, primary50],
  );

  return (
    <Box safeAreaBottom flex={1}>
      <HeaderMain
        leftIcon="back"
        onPressLeftIcon={onPressBack}
        rightIcon="question"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          mt={2}
          tx={'aggressive-portfolio'}
          color="darkBlue.800"
          fontFamily="main"
          fontWeight={700}
          fontSize="2xl"
          textAlign="center"
        />
        <Box mt={4}>
          <Pagination
            dotsLength={arrayPortfolioData?.length}
            renderDots={renderDot}
            activeDotIndex={activeTab}
          />
          <Carousel
            ref={carouselRef}
            data={arrayPortfolioData}
            renderItem={renderScreen}
            onSnapToItem={i => setActiveTab(i)}
            sliderWidth={metrics.screenWidth}
            itemWidth={metrics.screenWidth}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
          />
        </Box>
        <Box mx={8}>
          {map(arrayCompanyData, (item: CompanyType) => {
            return renderCompanyItem(item);
          })}
          <ButtonMain
            my={12}
            labelTx="portfolio-selected"
            bg="darkBlue.100"
            colorScheme={'darkBlue'}
            textColor={'darkGray.600'}
          />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default AggressivePortfolioScreen;
