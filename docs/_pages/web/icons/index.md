---
---

# Icons 🔥

아이콘은 기능, 행동, 사물의 상징적인 특징을 최소한으로 표현하여 사용자가 서비스를 이해하는데 도움을 줍니다. 한정된 공간에서 효율적으로 정보를 전달할 수 있으며, 사용자가 콘텐츠에 흥미를 느낄 수 있도록 시각적으로 유도하는 역할을 합니다. 
![Icon](system-icon/icon-intro.png)

## Grid와 Keyline

일정한 사이즈의 Grid와 Keyline 내에서 작업하여 디자인 작업과 제품 구현에서 position과 align이 일정하도록 합니다.
<div class="columnWrapper" markdown="1">

![Grid, 24x24](system-icon/icon-grid.png) 
Grid - Width 24, Height 24
{:.columns .firstImg}

![Grid, 24x24](system-icon/icon-keyline.png)
Keyline
{:.columns}

</div>

### Keyline의 형태
<div class="columnWrapper" markdown="1">

![Keyline, Squre](system-icon/icon-keyline-squre.png)
Square - Width 18, Height 18
{:.columns .firstImg}

![Keyline, Circle](system-icon/icon-keyline-circle.png)
Circle - Diameter 20
{:.columns}

</div>

<div class="columnWrapper" markdown="1">

![Keyline, Vertical rectangle](system-icon/icon-keyline-vertical.png) 
Vertical Rectangle - Width 16, Height 20
{:.columns .firstImg}

![Keyline, Horizontal rectangle](system-icon/icon-keyline-horizontal.png)
Horizontal Rectangle - Width 20, Height 16
{:.columns}
</div>

## 디자인 가이드
### Stroke weight

<div class="columnWrapper" markdown="1">

![Guide, Stroke weight](system-icon/icon-guide-stroke.png) 
{:.columns .firstImg}

Stroke weight는 2px이 기준입니다. 
하지만 유연한 디자인 적용을 위해 Stroke weight는 1px ~ 3px 내에서 작업하되, 동일한 디자인 스타일로 작업합니다.
{:.columns .columnText}

</div>

### Stroke alignment

<div class="columnWrapper" markdown="1">

![Guide, Stroke align](system-icon/icon-guide-align.png) 
{:.columns .firstImg}

Shape의 안쪽으로 Stroke가 생기도록 작업합니다.
이는 아이콘의 형태가 Keyline을 지키면서 아이콘을 구성하는 작은 요소들이 균형을 이룰 수 있도록 합니다.
{:.columns .columnText}

</div>

### Radius

<div class="columnWrapper" markdown="1">

![Guide, Stroke align](system-icon/icon-guide-radius.gif) 
{:.columns .gifBadge .firstImg}

모서리가 직각, 예각인 아이콘의 경우 날카로워 보이지 않도록 1px의 라운드 값을 적용합니다.
{:.columns .columnText}

</div>

### Cutting

<div class="columnWrapper" markdown="1">

![Guide, Cutting icon](system-icon/icon-guide-cutting.gif) 
{:.columns .gifBadge .firstImg}

아이콘의 일부를 잘라야 할 경우 직각을 기준으로 자릅니다.
{:.columns .columnText}

</div>

### Typo

<div class="columnWrapper" markdown="1">

![Guide, Typo in icon](system-icon/icon-guide-typo.png) 
{:.columns .firstImg}

아이콘 내에 텍스트 요소가 들어갈 경우 리디의 제품군과 디자인 스타일에 어울리는 [Roboto](https://fonts.google.com/specimen/Roboto)를 사용합니다.
{:.columns .columnText}

</div>

## 아이콘의 이름
이후 구현에 용이하도록 [파스칼 표기법](https://medium.com/better-programming/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)을 따릅니다.

<div class="columnWrapper" markdown="1">

![Naming Convention, shape과 functiion](system-icon/icon-name-function.png) 
기본적으로 형태의 이름을 따라가고, 형태보다 기능이 명확한 경우 기능의 이름을 적용합니다.
{:.columns .firstImg}

![Naming Convention, style 표기 방법](system-icon/icon-name-style.png)
Filled, Rounded 등의 스타일이나 Disabled와 같이 특정 상황을 표현하는 경우 이름 뒤에 붙입니다.
{:.columns}

</div>

![Naming Convention, stroke weight에 따른 표기 방법](system-icon/icon-name-stroke.png)
같은 형태의 아이콘이 Stroke Weight에 따라 나눠질 경우 폰트 체계(Light, Bold)를 따라 뒤에 붙입니다.  
기준값인 Stroke Weight 2px은 폰트 체계에서 Regular에 속하지만 따로 붙이지 않습니다.

## 아이콘 레이아웃
### 터치, 클릭 영역
터치와 클릭 영역은 너무 작거나 크게 적용하여 사용자가 의도하지 않은 동작을 하지 않도록 주의합니다. Google의 [Material Design 접근성 가이드](https://material.io/design/usability/accessibility.html#layout-typography)와 [System Icon 가이드](https://material.io/design/iconography/system-icons.html#system-icon-metrics)에서는 아이콘을 단독으로 사용할 경우, 아이콘을 포함한 터치 영역을 48 x 48 dp의 터치영역을 권장하며, 포인터 기반의 기기에서는 40 x 40 dp의 영역을 확보하도록 제안하고 있습니다.  
이 크기는 약 9mm의 물리적 크기로 터치 스크린 요소의 권장 크기는 7 - 10mm입니다.
![Layout, 터치와 클릭 영역](system-icon/icon-layout-touch-point.png)

### 특정 요소 내 아이콘

<div class="columnWrapper" markdown="1">

![Layout, 특정 요소 내 아이콘](system-icon/icon-layout-icon-in-shape.gif) 
{:.columns .gifBadge .firstImg}

중앙 정렬하여 배치합니다. 아이콘을 다양한 각도로 적용하더라도 좌 / 우 / 상 / 하의 여백이 달라지지 않도록 주의합니다.
{:.columns .columnText}

</div>

### 텍스트와 함께 사용할 경우

<div class="columnWrapper" markdown="1">

![Layout, 텍스트와 함께 사용할 경우](system-icon/icon-layout-with-text.gif) 
{:.columns .gifBadge .firstImg}

간혹 텍스트와 함께 배치할 때 Keyline의 기본 여백으로 인해 텍스트와 사이 간격이 넓어져 레이아웃이 어색해질 수 있습니다.  
이 경우, 정확한 레이아웃을 위해 예외로 Vertical Rectangle/ Horizontal Rectangle Keyline만을 적용한 아이콘을 사용합니다.  
대체로 레이블 오른쪽에 배치하는 Arrow 아이콘이 이에 해당합니다
{:.columns .columnText}

</div>