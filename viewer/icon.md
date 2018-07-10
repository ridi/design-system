# Icon

# 공통

## 기준
* 각 플랫폼 별로 1x (mdpi, @1x) 사이즈를 기준으로 제작하고, 모든 해상도에 대응하는 리소스 사이즈를 각각 추출하여 사용합니다.
* 대부분 24*24px 사이즈로 만들고 컴포넌트에 따라 여백이나 크기를 유동적으로 조정합니다.
## 리소스 관리
* 아이콘등의 리소스 네이밍을 자세하게 표기합니다. 리소스의 이름이 다소 길어질 수 있지만, 수정이 필요할 때 리소스가 쓰이고 있는 경로를 쉽게 찾을 수 있어 유지보수에 용이합니다. <br>
    예) reader_typo_setting_column_width.xml
* 리소스 네이밍 규칙 <br>
    [Android](https://github.com/ridi/style-guide/tree/master/Android#%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%84%A4%EC%9D%B4%EB%B0%8D)
    [iOS](https://github.com/ridi/style-guide/tree/master/iOS#%EB%A6%AC%EB%94%94-%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%84%A4%EC%9D%B4%EB%B0%8D)


# Android/PAPER

## 특징
* [Material Design Icons](https://material.io/tools/icons/?style=baseline) 스타일을 바탕으로 사용하고 부분적으로 커스텀하여 라인, 면 아이콘 스타일을 모두 사용합니다.
* iOS보다는 상대적으로 두꺼운 스타일(2dp)의 라인 아이콘을 주로 사용합니다.
## 리소스 포맷
* 모양이나 색상이 복잡하지 않은 경우 해상도별 대응이 쉽도록 SVG(Vector drawable) 형식을 사용합니다.
* 모양이나 색상이 복잡하고 해상도별로 다른 모양의 리소스가 필요한 경우 각 해상도에 맞는 png 형식을 사용합니다.<br>
    예) 리소스에 쉐도우가 들어갈 때, 색상이 한 가지 이상일 때 등..(ex. tts 버튼)


# iOS

## 특징
* Human Interface Guidelines의 [System Icon](https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/system-icons/) 스타일을 바탕으로 1pt의 라인 아이콘을 주로 사용합니다.
* 가끔 highligthed 된 상태를 표현할 때 면 아이콘도 함께 사용합니다.
##리소스 포맷
@1x, @2x, @3x 사이즈의 png 형식을 사용합니다.


# PAPER

## 특징
* e-book 리더기의 특성(화면 잔상 현상, 리프레시 효과 등)으로 인해 불편하지 않도록 최대한 라인 스타일의 아이콘을 사용합니다.
* 때에 따라 강조가 필요한 곳에는 면 아이콘을 사용합니다.<br>
    예) 독서노트 내 책갈피, 메모, 책장 목록 편집 등
## 리소스 포맷
* 모바일 앱과 달리 SVG 형식 리소스의 표현이 매끄럽지 않을 수 있으므로 기기별 해상도에 맞는 png 형식을 주로 사용합니다.


# PC & Web 뷰어

## 특징
* PC뷰어의 경우 iOS/macOS의 아이콘 스타일, Web뷰어의 경우 Android의 아이콘 스타일을 기준으로 적절하게 차용합니다.
* hover, active, selected, foucsed와 같은 다양한 상태에 따라 한 가지 아이콘의 색상등을 변형하여 사용합니다. 
## 리소스 포맷
* 대부분의 리소스는 컬러, 사이즈 변경을 용이하게 하기 위해 SVG 형식을 사용합니다.
* 애니메이션이 필요한 요소들은 gif 형식을 쓰거나 CSS animation 으로 처리합니다.
