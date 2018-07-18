# Icon

# 공통

## 기준
* 각 플랫폼 별로 1x (mdpi, @1x) 사이즈를 기준으로 제작하고, 모든 해상도에 대응하는 리소스 사이즈를 각각 추출하여 사용합니다.
* 대부분 24*24px 사이즈로 만들고 컴포넌트에 따라 여백이나 크기를 유동적으로 조정합니다.
## 리소스 관리
* 아이콘등의 리소스 네이밍을 자세하게 표기합니다. 리소스의 이름이 다소 길어질 수 있지만, 수정이 필요할 때 리소스가 쓰이고 있는 경로를 쉽게 찾을 수 있어 유지보수에 용이합니다. <br>
    예) reader_typo_setting_column_width.xml
* 리소스 네이밍 규칙 <br>
    [Android](https://github.com/ridi/style-guide/tree/master/Android#%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%84%A4%EC%9D%B4%EB%B0%8D) <br>
    [iOS](https://github.com/ridi/style-guide/tree/master/iOS#%EB%A6%AC%EB%94%94-%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%84%A4%EC%9D%B4%EB%B0%8D)


# Android/PAPER

## 특징
* [Material Design Icons](https://material.io/tools/icons/?style=baseline) 스타일을 바탕으로 사용하고 부분적으로 커스텀하여 라인, 면 아이콘 스타일을 모두 사용합니다.
* iOS보다는 상대적으로 두꺼운 스타일(2dp)의 라인 아이콘을 주로 사용합니다.
## 리소스 포맷
* 모양이나 색상이 복잡하지 않은 경우 해상도별 대응이 쉽도록 SVG(Vector drawable) 형식을 사용합니다.
* 모양이나 색상이 복잡하고 해상도별로 다른 모양의 리소스가 필요한 경우 각 해상도에 맞는 png 형식을 사용합니다.<br>
    예) 리소스에 쉐도우가 들어갈 때, 색상이 한 가지 이상일 때 등..(ex. tts 버튼)


# 모션과 애니메이션이 중요한 이유
디지털 제품은 동적(Dynamic)입니다. 사용자는 서비스를 이용하는 매 순간 변화하는 화면, 움직이는 요소를 마주하게됩니다. 
그러므로 제품 전반에 걸쳐 일관되고 자연스러운 모션, 트랜지션을 제공해야 사용자 경험을 해치지 않을 수 있습니다.
사용자는 한 번에 한 화면만 볼 수 있습니다. 그러므로 모션과 애니메이션은 화면의 위계를 파악하는 데 도움을 줍니다.

# 모션과 애니메이션 원칙

### 일관성 Consistency
사용자는 시간과 장소에 따라 다양한 기기로 RIDIBOOKS 앱을 사용합니다.
* 플랫폼과 디바이스(모바일,태블릿,PC)에 관계없이 앱 전반에서 일관성을 유지합니다.
* OS의 기본 속성을 활용하여 기본 유틸리티 앱과 유사한 사용성을 표현합니다.

### 간결함 Simplicity
과도한 멋이나 동작 없이 한 번에 이해할 수 있도록 단순해야 합니다.
* 자주 쓰는 기능과 페이지에서는 짧고 간결하게 표현합니다. (ex. 화면 전환, 로딩 애니메이션)
* 불필요한 주의를 끌지 않습니다.
* 눈에 띄고 복잡한 애니메이션은 사용자의 주의를 환기해야 하고 강조해야 하는 경우에만 드물게 사용합니다. (ex. 반대 책 토스트)

### 유용성 Useful
'언제 어디서나 간편하게 책을 읽을 수 있는 최상의 독서 경험을 제공한다'는 리디북스 앱의 미션에 도움이 되어야 합니다.
* 사용자의 다음 행동을 유도하거나 다음 행동에 대한 힌트로서 사용합니다. (ex. 텍스트 토스트)
* 앱을 사용하기 쉽고 편하게 만들어주는 순간에만 드물게 사용합니다. (ex. 스크롤 보기 애니메이션)
* 앱의 기본 사항이나 새로운 기능들을 빠르게 익힐 수 있도록 안내합니다.




# OS별 적용 방법 및 속성

## 전체 공통

### 애니메이션과 트랜지션 (Animation & Transition)
* 화면 간 전환이나, 화면 내 부분적인 변화를 표현할 때와 같은 상황에만 사용합니다. 
* 대부분 OS 자체 시스템 기본 애니메이션, 트랜지션 속성만으로도 자연스럽게 표현할 수 있습니다.
    ex. iOS의 coverVertical, crossDissolve / Android의 AccelerateDecelerateInterpolator 등
* 시스템 스타일만으로는 표현이 부족하다고 판단될 때 커스텀 애니메이션을 적용합니다. <br>
    ex. 독서노트 편집모드
    스크롤 뷰 코치마크 애니메이션
    보기 설정
    튜토리얼 팝업 (UIModalTransitionStyle)
    마지막 페이지 팝업
    그 외 (라이브러리 사용 등)
    ex. 책갈피 표시 (pop library)

### 튜토리얼 (Tutorial)
* 이미지나 글만으로는 설명이 부족해서 보충 설명이 필요할 때 사용합니다.
* 앱에 주요 새 기능이 추가되어 홍보가 필요할 때, 확실한 학습이 필요할 때 짧은 영상 튜토리얼을 제공합니다. <br>
    ex. 이미지 멋지게 공유하기, 인앱검색 튜토리얼 팝업, 반대방향으로 보는 책 토스트 등


## iOS
### 필요 속성
* State : 시작, 중간, 끝 상태 (origin, size, scale, rotate 등) <br>
    * 중간에 큰 변화가 없다면, 시작과 끝의 값만 있어도 충분합니다.
* Duraion & Time : 얼마동안 전환할 것인지 


## Android
### 필요 속성
* State : 시작, 끝 상태 (startPropertyValue, endPropertyValue)
* Duration : 얼마동안 전환할 것인지 
* Interpolator : 한 Duration 동안 어떻게 전환할 것인지 (linear, ease-in, ease-out)
* 반복 횟수 : 1회만 or 여러 번 or 계속 (무한히) 실행

### Interpolator란?
Interpolator는 Android Animation에서 State를 시간에 따라 어떤 양상으로 변화시킬 지 나타내는 function입니다.
Interpolator는 쉽게 변형할 수 있습니다. 각 Interpolator에 factor를 바꿔주면 됩니다.
![Interpolator](/image/motion/interpolator.png){:data-action="zoom"}
<figcaption>Graph 출처 : http://antoine-merle.com/images/interpolators2.png</figcaption>

### Interpolator의 종류
* 시간에 따라 동일한 비율로 변화 : Linear Interpolator
* 처음에 느리게 변하다가 점점 빠르게 : Accelerate Interpolator (ease-in)
* 처음에 빠르게 변하다가 점점 천천히 : Decelerate Interpolator (ease-out)
* 위 둘을 동시에 : AccelerateDecelerate Interpolator (ease-in-out)
* 왔다갔다 : Cycle Interpolator
* 시작 State에서 조금 뒤로 당겼다 이동 : Anticipate Interpolator
* 도착 State를 조금 지나쳤다가 도착 State로 이동 : Overshoot Interpolator
* 위 둘을 동시에 : AnticipateOvershoot Interpolator
* 도착 State에서 통통 튀기 : Bounce Interpolator


