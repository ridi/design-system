---
---

# Typography

텍스트는 서비스와 사용자가 커뮤니케이션할 수 있는 중요한 요소입니다. 이 과정에서 더 중요한 역할을 하는 것이 바로 ‘타이포그래피’입니다. 좋은 타이포그래피는 가독성과 접근성, 사용성을 높여 사용자에게 읽기 쉽고 일관성 있는 텍스트 정보를 제공합니다.

## 서체(Typefaces)

디자인 시 다음의 서체를 목적에 맞게 사용합니다.

### **Apple SD Gothic Neo**

- 리디북스 서점에서 한글 폰트로 사용합니다. 

### **Helvetica Neue** 

- 리디북스 서점에서 영문, 숫자 폰트로 사용합니다.

### **Museo Sans** 

- 리디북스 서점에서 가격 및 특정 숫자 정보를 강조할 때 사용합니다.

### **Ridi Sans** 

- 페이퍼샵에서 두 가지 폰트를 효율적으로 사용하기 위해 제작한 웹폰트입니다. 한글 폰트는 Noto Sans, 영문/숫자 폰트는 Museo Sans로 구성되어 있습니다.

### **Noto Sans**

- 리디셀렉트, PAPER 서점에서 사용하는 웹폰트 입니다.

## 폰트 스택(Font Stack)

폰트 스택을 다음과 같이 정의하여 각 기기 및 OS에서 지원하는 시스템 폰트를 순차적으로 출력합니다. 시스템 폰트는 사용자가 서비스와 시스템을 오갈 때 익숙하고 일관된 경험을 유지할 수 있게 합니다.

```
font-family: Helvetica Neue,'Apple SD Gothic Neo',arial,'나눔고딕','NanumGothic','돋움',Dotum,Tahoma,Geneva,sans-serif;
```

## 크기(Scale)

정보의 위계에 맞게 일관된 폰트 크기 사용을 권장합니다. 서비스 및 기기 특성에 따라 가이드라인을 적용하기 어려운 경우는 예외를 허용합니다.

| 구분        | 크기(px) |
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

## 두께(Weight)

- Regular와 bold를 사용합니다. 

- Title, text link, 가격 정보 등 강조가 필요한 경우에만 bold를 사용하고 그 외의 경우에는 regular를 사용합니다.

## 컬러(Color)

### 기본 텍스트 컬러(basic text color)

- 일반적인 텍스트에는 slate gray 계열을 사용합니다.

### 포인트 텍스트 컬러(point text color)

- 가격을 나타내는 텍스트의 경우 dodgerblue-50 컬러를 사용합니다.
- 할인율을 나타내는 텍스트의 경우 red-40 컬러를 사용합니다.
  

## 정렬(Alignment)

왼쪽을 기준으로 정렬합니다. 이는 사용자의 시선에 각 행에 대한 일정한 시작점을 제공하여 글을 더 읽기 쉽게 합니다.

## 행간(Line Height)

폰트 크기에 비례한 1.3em 값을 사용합니다. Paragraph의 경우에는 글자 수와 영역에 따라 적절한 값을 유동적으로 적용하여 사용해야 합니다. 

- 권장: 1.4-1.6

## 자간(Spacing)

기본적으로 -0.3px을 사용하지만 한정된 공간을 고려해야 하는 경우에는 -0.7px을 사용하기도 합니다.
