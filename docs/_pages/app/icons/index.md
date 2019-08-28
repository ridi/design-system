---
---

# Icons

## 공통

### 특징
* 각 OS별로 최소 해상도를 기준으로 제작합니다. (Android: mdpi /iOS: @1&times;) 
* 지원하는 해상도별로 에셋을 각각 추출하여 사용합니다.
* 주로 24 &times; 24px 캔버스 사이즈를 기준으로 만들고 컴포넌트에 따라 여백이나 크기를 유동적으로 조정합니다.
* 라인 아이콘 스타일을 주로 사용합니다.
  * 때에 따라 에셋의 효율적인 표현을 위해 면 아이콘을 쓰기도 합니다. <br>
  (ex. 메모 아이콘)

### 에셋 관리
* 에셋 이름에 컴포넌트와 경로를 자세하게 표기합니다. 이는 에셋의 수정이 필요할 때 빠르게 찾을 수 있어서 유지보수에 쉽습니다. <br>
    (ex. reader_typo_setting_column_width.xml)
* Android, iOS의 자세한 에셋 네이밍 규칙은 아래를 참조해주세요.
* 에셋 네이밍 규칙 <br>
    [Android](https://github.com/ridi/style-guide/tree/master/Android#%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%84%A4%EC%9D%B4%EB%B0%8D) <br>
    [iOS](https://github.com/ridi/style-guide/tree/master/iOS#%EB%A6%AC%EB%94%94-%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%84%A4%EC%9D%B4%EB%B0%8D)


## Android/PAPER

### 특징
* [Material Design Icons](https://material.io/tools/icons/?style=baseline) 스타일을 기준으로 제작합니다.
* 2dp의 라인 아이콘을 주로 사용합니다. 

### 포맷
* 해상도별 대응이 쉽도록 SVG 형식을 사용합니다.
* 단 3가지 이상의 색상이 쓰이거나 SVG의 형식으로 표현할 수 없는 에셋의 경우, 지원하는 해상도별로 PNG 형식을 사용합니다.<br>
    (ex. TTS 버튼과 같이 섀도가 표현되어야 할 때)


## iOS

### 특징
* Human Interface Guidelines의 [System Icon](https://developer.apple.com/ios/human-interface-guidelines/icons-and-images/system-icons/) 스타일을 기준으로 제작합니다. 
* 1pt의 라인 아이콘을 주로 사용합니다.
* highligthed 된 상태를 표현할 때는 면 아이콘을 사용합니다.

### 포맷
@1&times;, @2&times;, @3&times; 해상도의 PNG 형식을 사용합니다.


## PAPER

### 특징
* Android와 동일하게 Material Design Icons의 스타일을 기준으로 제작합니다.
* 화면 잔상 현상, 리프레시 효과 등 전자 잉크 디스플레이의 특성을 고려하여 면 아이콘보다는 라인 아이콘 스타일을 주로 사용합니다.
* 컬러의 사용을 제한하고 주로 검정(#000)색 또는 검정색의 투명도를 조절한 색상 값을 사용합니다. <br>
    (ex. 검정 20%(#ccc), 60%(#666)) 

### 포맷
* PAPER를 포함한 Android 앱은 Android 5.0 미만도 지원합니다.[^1] 따라서, SVG 형식만으로는 픽셀에 딱 맞추기[^2] 어려울 수 있습니다. 이러한 경우, Android 앱과 공통으로 사용하는 에셋을 제외하고 PNG 형식을 사용합니다.


## Desktop & Web 뷰어

### 특징
* Desktop 뷰어의 경우 iOS/macOS의 아이콘 스타일을 기준으로 합니다.
* Web 뷰어의 경우 Android의 아이콘 스타일을 기준으로 합니다.

### 포맷
* 대부분의 에셋은 색상, 사이즈 변경이 쉽도록 SVG 형식을 사용합니다.
* 한 가지 아이콘을 hover, active, selected, foucsed와 같은 다양한 상태에 따라 변형해서 사용합니다.

[^1]: Android 5.0 미만에서는 vector drawable을 직접 렌더링하지 못하므로 Android build tool이 각 dpi 별로 자동으로 PNG를 생성합니다. 이때 생성된 이미지가 기기의 물리 dpi와 차이가 나는 등의 이유로 인해 원본과 똑같이 표현되지 않는 경우가 있습니다. 
[^2]: 픽셀에 딱 맞추는 작업을 `pixel-perfect`라고 부르기도 합니다.