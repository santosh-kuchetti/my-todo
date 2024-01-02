import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const Dates = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDate = new Date();
  const currentMonth = months[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

 const renderDates = () => {
   const dates = [];
   const today = currentDate.getDate();
   const startDate = new Date(currentYear, currentDate.getMonth(), today);
   const lastDayOfMonth = new Date(
     currentYear,
     currentDate.getMonth() + 1,
     0,
   ).getDate();

   for (let i = today; i <= lastDayOfMonth; i++) {
     const date = new Date(startDate);
     date.setDate(i);
     dates.push(date);
   }

   return dates.map((date, index) => (
     <View style={styles.dateContainer} key={index}>
       <Text style={styles.date}>{date.getDate()}</Text>
       <Text style={styles.dayOfWeek}>{daysOfWeek[date.getDay()]}</Text>
     </View>
   ));
 };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{`${currentMonth} ${currentYear}`}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {renderDates()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal:10
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    color: 'white'
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    height: 90,
    width: 70,
    backgroundColor: '#FFFFFF',
    borderRadius:10
  },
  dayOfWeek: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'#000'
  },
});

export default Dates;
