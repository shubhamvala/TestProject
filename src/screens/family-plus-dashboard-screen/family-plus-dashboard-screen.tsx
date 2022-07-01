import React, { useCallback, useRef, useState } from 'react';
import {
  Box,
  HStack,
  Pressable,
  ScrollView,
  useToken,
  VStack,
} from 'native-base';
import {
  ButtonMain,
  HeaderMain,
  Icon,
  IconTextButton,
  Text,
} from '@components/index';
import { useAppNavigation } from '@navigation/utilities';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  arrayKnowledgeData,
  arrayListItemData,
  arrayMoneyCardData,
  arrayTransactionData,
} from '@data/index';
import { metrics } from '@styles/metrics';
import { map } from 'lodash';
import {
  KnowledgeDataType,
  ListItemType,
  MoneyCardType,
  TransactionItemType,
} from '@extra/extra-types';
import { ListItemKey } from '@extra/global-enums';
import Routes from '@navigation/routes';
import { StackedBarChart } from 'react-native-chart-kit';

const FamilyPlusDashboardScreen = () => {
  const [primary50, primary100, primary500, darkGray600] = useToken('colors', [
    'primary.50',
    'primary.100',
    'primary.500',
    'darkGray.600',
  ]);
  const carouselRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useAppNavigation();

  const data = {
    labels: ['5', '10', '15', '20', '25', '30', '35', '40'],
    legend: ['Investment', 'Return'],
    data: [
      [2, 3],
      [2, 3],
      [3, 5],
      [4, 5],
      [5, 8],
      [6, 8],
      [7, 9],
      [8, 10],
      [9, 11],
      [10, 12],
      [11, 14],
      [13, 16],
      [14, 20],
      [16, 25],
      [17, 28],
      [20, 32],
    ],
    barColors: [primary500, primary100],
  };

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPressAddMoney = useCallback(() => {
    //code
  }, []);

  const onPressWithdraw = useCallback(() => {
    //code
  }, []);

  const onPressFamilySavings = useCallback(() => {
    //code
  }, []);

  const onPressInvestStocks = useCallback(() => {
    //code
  }, []);

  const onPressForKids = useCallback(() => {
    //code
  }, []);

  const onPressViewAll = useCallback(() => {
    //code
  }, []);

  const renderScreen = useCallback(
    ({ item }: { item: MoneyCardType }) => {
      return (
        <Box
          mx={8}
          py={8}
          key={item.id}
          alignItems={'center'}
          borderRadius={6}
          overflow="hidden"
          bg={'primary.500'}>
          <Box position="absolute" top={0} left={0}>
            <Icon name="card-border-top" />
          </Box>
          <Box position="absolute" bottom={0} right={0}>
            <Icon name="card-border-bottom" />
          </Box>
          <Text
            text={item.amount}
            color="white"
            fontFamily="main"
            fontWeight={700}
            fontSize="6xl"
            lineHeight="5xl"
          />
          <Text
            tx={item.title}
            color="white"
            fontFamily="main"
            fontWeight={600}
            fontSize="md"
          />
          {item?.hasButtons && (
            <HStack mt={2} alignItems={'center'}>
              <ButtonMain
                labelTx="add-money"
                mx={2}
                bg="white"
                colorScheme={'coolGray'}
                textColor={'darkGray.600'}
                onPress={onPressAddMoney}
              />
              <ButtonMain
                labelTx="withdraw"
                mx={2}
                bg="white"
                colorScheme={'coolGray'}
                textColor={'darkGray.600'}
                onPress={onPressWithdraw}
              />
            </HStack>
          )}
        </Box>
      );
    },
    [onPressAddMoney, onPressWithdraw],
  );

  const renderDot = useCallback((activeIndex: number) => {
    return map(arrayMoneyCardData, (item: MoneyCardType, index: number) => {
      return (
        <Box
          key={item.id}
          mx={0.5}
          w={2}
          h={2}
          borderRadius={10}
          borderWidth={1}
          borderColor={'primary.500'}
          bg={index === activeIndex ? 'transparent' : 'primary.500'}
        />
      );
    });
  }, []);

  const onPressListItem = useCallback(
    (item: ListItemType) => {
      switch (item?.key) {
        case ListItemKey.PORTFOLIO:
          navigation.navigate(Routes.AggressivePortfolioScreen);
          break;

        default:
          break;
      }
    },
    [navigation],
  );

  const renderListItem = useCallback(
    (item: ListItemType) => {
      return (
        <Pressable key={item.id} onPress={() => onPressListItem(item)}>
          <HStack p={4} alignItems={'center'} justifyContent={'space-between'}>
            <Text
              tx={item?.title}
              color="darkGray.600"
              fontFamily="main"
              fontWeight={600}
              fontSize="sm"
            />
            <HStack alignItems={'center'}>
              <Text
                tx={item?.subtitle}
                color="primary.500"
                fontFamily="main"
                fontWeight={600}
                fontSize="sm"
                mr={1}
              />
              <Icon name="arrow-right" />
            </HStack>
          </HStack>
        </Pressable>
      );
    },
    [onPressListItem],
  );

  const renderTransactionItem = useCallback((item: TransactionItemType) => {
    return (
      <HStack key={item.id} px={4} py={2}>
        <Box mt={2}>
          <Icon name="check" />
        </Box>
        <VStack flex={0.75} ml={4}>
          <Text
            tx={item?.title}
            color="darkGray.600"
            fontFamily="main"
            fontWeight={600}
            fontSize="sm"
          />
          <Text
            tx={item?.subtitle}
            color="darkGray.600"
            fontFamily="main"
            fontWeight={400}
            fontSize="xs"
          />
        </VStack>
        <Box flex={0.25}>
          <Text
            text={item?.amount}
            color="darkGray.600"
            fontFamily="main"
            fontWeight={400}
            fontSize="xs"
          />
        </Box>
      </HStack>
    );
  }, []);

  const renderKnowledgeItem = useCallback((item: KnowledgeDataType) => {
    return (
      <HStack key={item.id} py={2}>
        <Icon name={item?.icon} />
        <Text
          tx={item?.title}
          color="darkGray.600"
          fontFamily="main"
          fontWeight={600}
          fontSize="sm"
          ml={4}
        />
      </HStack>
    );
  }, []);

  return (
    <Box safeAreaBottom flex={1}>
      <HeaderMain leftIcon="back" onPressLeftIcon={onPressBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Card */}
        <Text
          mt={2}
          tx={'family-plus-investment'}
          color="darkGray.600"
          fontFamily="main"
          fontWeight={500}
          fontSize="xl"
          textAlign="center"
        />
        <Box mt={4}>
          <Carousel
            ref={carouselRef}
            data={arrayMoneyCardData}
            renderItem={renderScreen}
            onSnapToItem={i => setActiveTab(i)}
            sliderWidth={metrics.screenWidth}
            itemWidth={metrics.screenWidth}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
          />
          <Pagination
            dotsLength={arrayMoneyCardData?.length}
            renderDots={renderDot}
            activeDotIndex={activeTab}
          />
        </Box>
        {/* Button Icon */}
        <Box px={8}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <IconTextButton
              labelTx="family-plus-savings"
              icon={{ name: 'family-saving' }}
              onPressButton={onPressFamilySavings}
            />
            <IconTextButton
              labelTx="invest-in-stocks"
              icon={{ name: 'invest-stocks' }}
              onPressButton={onPressInvestStocks}
            />
            <IconTextButton
              labelTx="early-for-kids"
              icon={{ name: 'for-kids' }}
              onPressButton={onPressForKids}
            />
          </HStack>
          {/* List Item */}
          <Box mt={8} borderRadius={6} bg={'other.grayShadeF2'}>
            {map(arrayListItemData, (item: ListItemType) => {
              return renderListItem(item);
            })}
          </Box>
          {/* Transaction */}
          <Box mt={8}>
            <Box p={4} borderTopRadius={6} bg={'other.grayShadeFA'}>
              <Text
                tx={'recent-transaction'}
                color="darkGray.600"
                fontFamily="main"
                fontWeight={700}
                fontSize="md"
              />
            </Box>
            <Box py={2} bg={'other.grayShadeFD'}>
              {map(arrayTransactionData, (item: TransactionItemType) => {
                return renderTransactionItem(item);
              })}
            </Box>
            <ButtonMain labelTx="view-all" onPress={onPressViewAll} />
          </Box>
          {/* Bar Chart */}
          <Box mt={8} px={4} py={8} bg={'primary.50'}>
            <Text
              mx={12}
              tx={'chart-title'}
              color="darkGray.600"
              fontFamily="main"
              fontWeight={500}
              fontSize="lg"
              textAlign="center">
              <Text
                tx={'chart-amount'}
                color="darkGray.600"
                fontFamily="main"
                fontWeight={700}
                fontSize="lg"
              />
              <Text
                tx={'at'}
                color="darkGray.600"
                fontFamily="main"
                fontWeight={500}
                fontSize="lg"
              />
              <Text
                tx={'chart-age'}
                color="darkGray.600"
                fontFamily="main"
                fontWeight={700}
                fontSize="lg"
              />
            </Text>
            <HStack
              mt={8}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <Text
                tx={'investment'}
                color="darkGray.600"
                fontFamily="main"
                fontWeight={500}
                fontSize="xs"
              />
              <Text
                tx={'returns'}
                color="darkGray.600"
                fontFamily="main"
                fontWeight={500}
                fontSize="xs"
              />
            </HStack>
            <Box mt={8}>
              <StackedBarChart
                data={data}
                width={metrics.screenWidth - 100}
                height={220}
                withVerticalLabels
                withHorizontalLabels={false}
                barPercentage={1}
                hideLegend
                chartConfig={{
                  backgroundColor: primary50,
                  backgroundGradientFrom: primary50,
                  backgroundGradientTo: primary50,
                  barPercentage: 0.2,
                  labelColor: () => darkGray600,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
              />
            </Box>
          </Box>
          {/* Knowledge */}
          <Box mt={8} px={4} py={2} bg={'other.grayShadeFA'}>
            <Text
              tx={'grow-knowledge'}
              color="darkGray.600"
              fontFamily="main"
              fontWeight={700}
              fontSize="md"
              pt={2}
            />
            <Box py={2}>
              {map(arrayKnowledgeData, (item: KnowledgeDataType) => {
                return renderKnowledgeItem(item);
              })}
            </Box>
          </Box>
        </Box>
        <Box mt={8} />
      </ScrollView>
    </Box>
  );
};

export default FamilyPlusDashboardScreen;
