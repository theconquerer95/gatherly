# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# Prevent ProGuard from stripping classes used by React Native Reanimated
-keep class com.swmansion.reanimated.** { *; }

# Prevent ProGuard from stripping classes used by React Native Gesture Handler
-keep class com.swmansion.gesturehandler.** { *; }

# Ensure that React Native classes are not removed
-keep class com.facebook.react.** { *; }

# Keep annotation classes (needed for React Native and other libraries)
-keepattributes *Annotation*

# Keep Kotlin metadata for reflection
-keepattributes InnerClasses
-keep class kotlin.Metadata { *; }

# Keep all classes with @Keep annotation
-keep @androidx.annotation.Keep class * { *; }
