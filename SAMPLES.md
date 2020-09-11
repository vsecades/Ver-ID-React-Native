## Ver-ID React Native

## Introduction

The following instructions to run a sample will work for each of the
samples provided.

## Steps to run a React Native sample

1. Clone the **samples** branch of the plugin Git repo into your file system:

    ```
    git clone -b samples https://github.com/AppliedRecognition/Ver-ID-React-Native.git
    ```
1. To set up your environment with the basic configuration needed by react native please follow [react native guide](https://reactnative.dev/docs/environment-setup).

1. Please make sure you have installed [Yarn](https://classic.yarnpkg.com/en/docs/install/),
you can check if it is installed by running the following command.

	```
	yarn -v
	```
1. To run the iOS project, make sure to install **XCODE 11.5** or **Android Studio 3.5.3** for Android project.
    - If you need to download this version of Android Studio,
    you can do it from this page: [Android Studio 3.5.3](https://developer.android.com/studio/archive)

1. Go to the directory of the cloned plugin, this can be done by using the following command:

    ```
    cd Ver-ID-React-Native/
    ```

1. Run the following command to install all the dependencies:

    ```
    yarn
    ```
1. Run this command to open a menu that will help to build and run the samples:

    ```
    yarn build
    ```
   A command line menu will show, and looks like this:

   ![ClI_menu](docs/MainMenu.png)

1. Please select the sample version you want to build.

1. After that you can open the platform project you want using Xcode or Android Studio,
the locations are:
    - Android
        ```
            plugin_directory/samples/reactNativeSample[React Native Version]/android
        ```
    - iOS
        ```
            plugin_directory/samples/reactNativeSample[React Native Version]/ios
        ```
1. If you are opening the android version you have to run metro server from the menu options,
on iOS running the app will open a terminal with metro server and reload the app.

      Note: When using Android real devices you could have issues connecting the device with metro server, so please use
      the option  **Fix metro server Android** on the menu above.
## CLI Options
1. **Build react native sample** will install dependencies and install pods for iOS project.
![ClI_menu](docs/BuildMenu.png)
1. **Run react native sample** will open the iOS project on a simulator.
![ClI_menu](docs/RunMenu.png)
1. **Start Metro server** will open the iOS project on a simulator.
![ClI_menu](docs/MetroServerMenu.png)
1. **Fix metro server Android** will try to fix connection issues of an
Android device and Metro server, by running the following command: `adb reverse tcp:8081 tcp:8081`
![ClI_menu](docs/FixAndroid.png)

