import React, {useCallback, useEffect, useRef, useState} from 'react';
import {DeviceEventEmitter} from 'react-native';
import Animated, {
    withTiming,
    useSharedValue,
    useAnimatedStyle,
  } from 'react-native-reanimated';
  import { Button } from '@ui-kitten/components';


const SHOW_TOAST_MESSAGE = 'SHOW_TOAST_MESSAGE';

const Toast = () => {
    const [messageType, setMessageType] = useState(null);
    const timeOutRef = useRef(null);
  
    const animatedOpacity = useSharedValue(0);
  
    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: animatedOpacity.value,
      };
    }, []);
  
    const [timeOutDuration, setTimeOutDuration] = useState(5000);
  
    const [message, setMessage] = useState(null);
  
    const onNewToast = data => {
      if (data.duration) {
        setTimeOutDuration(data.duration);
      }
      setMessage(data.message);
      setMessageType(data.type);
    };
  
    const closeToast = useCallback(() => {
      setMessage(null);
      setTimeOutDuration(5000);
      animatedOpacity.value = withTiming(0);
      clearInterval(timeOutRef.current);
    }, [animatedOpacity]);
  
    useEffect(() => {
      if (message) {
        timeOutRef.current = setInterval(() => {
          if (timeOutDuration === 0) {
            closeToast();
          } else {
            setTimeOutDuration(prev => prev - 1000);
          }
        }, 1000);
      }
  
      return () => {
        clearInterval(timeOutRef.current);
      };
    }, [closeToast, message, timeOutDuration]);
  
    useEffect(() => {
      if (message) {
        animatedOpacity.value = withTiming(1, {duration: 1000});
      }
    }, [message, animatedOpacity]);
  
    useEffect(() => {
      DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast);
  
      return () => {
        DeviceEventEmitter.removeAllListeners();
      };
    }, []);
  
    if (!message) {
      return null;
    }
  
    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: '4%',
            left: '4%',
            right: '4%',
            elevation: 1,
            borderRadius: 4,
          },
          animatedStyle,
        ]}>
        <Button onPress={closeToast} size={'large'} appearance={'outline'} status={messageType}>
            {message}
        </Button>
      </Animated.View>
    );
  };
  
  export default Toast;