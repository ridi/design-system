# Typography

텍스트(Text)는 서비스와 사용자가 커뮤니케이션할 수 있는 중요한 요소입니다. 이 과정에서 더 중요한 역할을 하는 것이 바로 ‘타이포그래피(Typography)’입니다. 좋은 타이포그래피는 가독성과 접근성, 사용성을 높여 사용자에게 읽기 쉽고 일관성 있는 텍스트 정보를 제공합니다.

## 서체 Typefaces

용도와 목적에 맞게 5가지 서체를 사용합니다.

### **Apple SD Gothic Neo**

- 리디북스 서점에서 한글 폰트로 사용합니다.

### **Helvetica Neue** 

- 리디북스 서점에서 영문, 숫자 폰트로 사용합니다.

### **Museo Sans** 

- 리디북스 서점에서 가격 및 특정 숫자 정보를 강조할 때 사용합니다.

### **Ridi Sans** 

- 한글 폰트 Noto sans와 영문, 숫자 폰트 Museo Sans를 효율적으로 사용하기 위해 제작한 웹폰트입니다. 페이퍼샵에서 사용합니다.

### **Noto Sans**

- PAPER 서점에서 사용합니다.

## Font Stack

각 OS / 브라우저에서 지원하는 시스템 폰트를 우선으로 출력할 수 있도록 합니다.

```
font-family: Helvetica Neue,'Apple SD Gothic Neo',arial,'나눔고딕','NanumGothic','돋움',Dotum,Tahoma,Geneva,sans-serif;
```

## 글자 크기 Font Scale

각 플랫폼 별 정보의 위계에 따라 일관된 폰트 크기를 사용합니다. 

### 1. 글자 크기 분류 기준

#### Display 

- 가장 강조되어야 하는 제목 등에 사용하는 폰트

#### Heading 

- 타이틀 등 다양한 위치에서 사용하는 폰트

#### Paragraph 

- 단락을 포함하는 본문에 사용하는 폰트

#### Caption 

- 작은 영역에서 사용하는 폰트

### 2. 글자 크기 (PC/Mobile/PAPER 공통)

- PC/Mobile/PAPER 공통으로 사용할 수 있는 글자 크기입니다. 
- 상황에 따라 분류 기준과 관계 없이 사용할 수 있습니다.
- 필요하다고 판단 되면 가이드에 등록되지 않은 글자 크기도 사용할 수 있습니다.

| 명칭        | 크기(px) |
| ----------- | -------- |
| Display 1   | 30px     |
| Display 2   | 24px     |
| Heading 1   | 20px     |
| Heading 2   | 18px     |
| Heading 3   | 16px     |
| Paragraph 1 | 15px     |
| Paragraph 2 | 14px     |
| Paragraph 3 | 13px     |
| Caption     | 11-12px  |

## 글자 두께 Font Weight

Regular와 Bold를 사용합니다. 
Title, Text Link, 가격 정보 등 강조가 필요한 경우에만 Bold를 사용하고 그 외의 경우에는 Regular를 사용합니다.

## 글자 색 Text Colors

목적에 따라 텍스트의 색상을 아래와 같이 사용합니다.

### Basic Text Colors

- 일반적인 텍스트에는 Gray 계열을 주로 사용하고, 구분이 필요할 때에는 한 단계 밝은 텍스트인 Slate Gray 계열을 같이 사용합니다.
- 가독성을 위해 흰 배경 기준 40 이상의 색상으로 사용합니다. 

### Point Text Colors

- 가격을 나타내는 텍스트의 경우 Dodgerblue-50 컬러를 사용합니다.
- 할인율을 나타내는 텍스트의 경우 Red-40 컬러를 사용합니다.
  

## 정렬 Alignment

글자는 왼쪽을 기준으로 정렬합니다. 이는 사용자의 시선에 각 행에 대한 일정한 시작점을 제공하여 글을 더 읽기 쉽게 합니다.

## 행간 Line Height

텍스트 크기에 비례한 1.3em 값을 사용합니다. Paragraph의 경우에는 글자 수와 영역에 따라 적절한 값을 유동적으로 적용하여 사용해야 합니다. (*권장: 1.4-1.6)

## 자간 Spacing

기본적으로 -0.3px을 사용하지만 한정된 공간을 고려해야 하는 경우에는 -0.7px을 사용하기도 합니다.
