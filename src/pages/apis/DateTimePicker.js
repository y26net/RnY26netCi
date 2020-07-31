import React, {useState} from 'react';
import {StyleSheet, View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const DateTimePickers = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          maximumDate={new Date(2020, 5, 20)}
          minimumDate={new Date(2020, 5, 10)}
          // dateFormat={'yyyy-MM-dd hh:mm:ss'}
        />
      )}
    </View>
  );
};

export default DateTimePickers;

// display=>
// "default"
// "spinner"
// "calendar" (only for date mode)
// "clock" (only for time mode)
// import React from 'react';
// import {StyleSheet, Text, View, DatePickerAndroid, Button} from 'react-native';
// // Deprecated. Use @react-native-community/datetimepicker instead.
// const DateTimePickers = () => {
//   const openDateTime = async () => {
//     try {
//       const {action, year, month, day} = await DatePickerAndroid.open({
//         // 要设置默认值为今天的话，使用`new Date()`即可。
//         // 下面显示的会是2020年5月25日。月份是从0开始算的。
//         date: new Date(2020, 4, 25),
//       });
//       // static dateSetAction()
//       // 已选中一个日期。
//       // static dismissedAction()
//       // 对话框已被取消。
//       if (action !== DatePickerAndroid.dismissedAction) {
//         // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
//         console.log(action, year, month, day);
//       }
//     } catch ({code, message}) {
//       console.warn('Cannot open date picker', message);
//     }
//   };
//   return (
//     <View>
//       <Text>DateTimePicker</Text>
//       <Text>本组件会打开一个标准的 Android 日期选择器的对话框。</Text>
//       <Text>date (Date对象或毫秒时间戳) - 默认显示的日期</Text>
//       <Text>minDate (Date对象或毫秒时间戳) - 可选的最小日期</Text>
//       <Text>maxDate (Date对象或毫秒时间戳) - 可选的最大日期</Text>
//       <Text>
//         mode (enum('calendar', 'spinner', 'default')) - 设置选择器的模式：
//       </Text>
//       <Text>'calendar': Show a date picker in calendar mode.</Text>
//       <Text>'spinner': Show a date picker in spinner mode.</Text>
//       <Text>
//         'default': Show a default native date picker(spinner/calendar) based on
//         android versions.
//       </Text>
//       <Button title="打开一个日期时间组件面板" onPress={openDateTime} />
//     </View>
//   );
// };

// export default DateTimePickers;

// const styles = StyleSheet.create({});
