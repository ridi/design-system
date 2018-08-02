# Icon

# 공통

## 특징
* 각 플랫폼 별로 최소 해상도를 기준으로 제작합니다. (Android: mdpi /iOS: @1x) 
* 지원하는 해상도 별로 에셋을 각각 추출하여 사용합니다.
* 대부분 24*24px 사이즈로 만들고 컴포넌트에 따라 여백이나 크기를 유동적으로 조정합니다.
* 대부분 라인 아이콘 스타일을 사용합니다. 
* 때에 따라 에셋의 효율적인 표현을 위해 면 아이콘을 쓰기도 합니다. <br>
(ex. 메모 아이콘)

## 에셋 관리
* 아이콘 등의 에셋 네이밍을 자세하게 표기합니다. 이는, 에셋의 수정이 필요할 때 쓰이고 있는 컴포넌트와 경로를 쉽게 파악할 수 있어서 유지보수에 쉽습니다. <br>
    (ex. reader_typo_setting_column_width.xml)
* Android, iOS의 자세한 에셋 네이밍 규칙은 아래를 참조해주세요.
* 에셋 네이밍 규칙 <br>
    [Android](https://github.com/ridi/style-guide/tree/master/Android#%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%84%A4%EC%9D%B4%EB%B0%8D) <br>
    [iOS](https://github.com/ridi/style-guide/tree/master/iOS#%EB%A6%AC%EB%94%94-%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%84%A4%EC%9D%B4%EB%B0%8D)


# Android/PAPER

## 특징
* [Material Design Icons](https://material.io/tools/icons/?style=baseline) 스타일을 기준으로 제작합니다.
* 2dp의 라인 아이콘을 주로 사용합니다. 

## 포맷
* 해상도별 대응이 쉽도록 SVG 형식을 사용합니다.
* 단, 3가지 이상의 색상이 쓰이거나 SVG의 형식으로 표현할 수 없는 에셋의 경우, 지원하는 해상도 별로 png 형식을 사용합니다.<br>
    (ex. TTS 버튼과 같이 섀도가 표현되어야 할 때)


# iOS

## 특징
* Human Interface Guidelines의 [System Icon](https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/system-icons/) 스타일을 기준으로 제작합니다. 
* 1pt의 라인 아이콘을 주로 사용합니다.
* highligthed 된 상태를 표현할 때는 면 아이콘을 사용합니다.

## 포맷
@1x, @2x, @3x 해상도의 png 형식을 사용합니다.


# PAPER

## 특징
* Android와 동일하게 Material Design Icons의 스타일을 기준으로 제작합니다.
* 전자 잉크 디스플레이의 특성(화면 잔상 현상, 리프레시 효과 등)을 고려하여 면 아이콘보다는 라인 아이콘 스타일을 주로 사용합니다.
* 컬러의 사용을 제한하고 주로 검정(#000)색 또는 검정색의 투명도를 조절한 색상 값을 사용합니다. <br>
    (ex. 검정 20%(#ccc), 60%(#666)) 

## 포맷
* 저해상도(hdpi, xhdpi)를 지원함에 따라 SVG 형식만으로는 pixel-perfect 한 표현이 어려울 수 있습니다. 이러한 경우, Android 앱과 공통으로 사용하는 에셋을 제외하고 png 형식을 사용합니다.


# Desktop & Web 뷰어

## 특징
* Desktop 뷰어의 경우 iOS/macOS의 아이콘 스타일을 기준으로 합니다.
* Web 뷰어의 경우 Android의 아이콘 스타일을 기준으로 합니다.

## 포맷
* 대부분의 에셋은 색상, 사이즈 변경이 쉽도록 SVG 형식을 사용합니다.
* 한 가지 아이콘을 hover, active, selected, foucsed와 같은 다양한 상태에 따라 색상을 변형하여 사용합니다. 
