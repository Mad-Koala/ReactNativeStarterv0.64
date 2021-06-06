import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
 
        We have reported this to our team ! Please close the app or restart!.
        `,
      [
        {
          text: 'Restart',
          onPress: () => {
            RNRestart.Restart();
          },
        },
      ],
    );
  } else {
  }
};

// import ErrorUtils from 'ErrorUtils';
// import {NativeModules, Alert} from 'react-native';
// import RNRestart from 'react-native-restart';

export default function ErrorUtilsFunction() {
  setJSExceptionHandler(errorHandler, true);

  setNativeExceptionHandler((errorString) => {
    //You can do something like call an api to report to dev team here
    // When you call setNativeExceptionHandler, react-native-exception-handler sets a
    // Native Exception Handler popup which supports restart on error in case of android.
    // In case of iOS, it is not possible to restart the app programmatically, so we just show an error popup and close the app.
    // To customize the popup screen take a look at CUSTOMIZATION section.
  });
}
