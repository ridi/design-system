# Book macro

다양한 플랫폼과 상황에 맞게 구조화한 책 정보를 고객에게 일관성 있게 제공하기 위해 만든 컴포넌트입니다.

## 섬네일 Thumbnail

### Size 

Width 값 기준으로 고정되어 있는 크기를 상황에 맞게 사용합니다.

- 40, 50, 60, 80, 90, 110, 150, 200
  - max-height: width * 1.618 - 10px

### Style

기본 스타일은 동일하지만, 플랫폼의 특성과 상황에 따라 다르게 적용할 수 있습니다.

- Linear Gradient로 입체감을 주고, 배경과 섬네일의 구분을 위해 Border를 적용합니다. 
  Shadow는 여러 개의 섬네일이 나열되어 있을 때 섬네일의 간격을 더 좁아 보이게 하므로 사용하지 않습니다.
- RIDI Select 상세페이지에서 배경색과 구분을 위해 예외적으로 Shadow를 적용합니다.
- PAPER에서는 다른 스타일 요소는 제외하고, Border만 적용합니다.

### Alignment

리스트 타입에 따라 알맞은 정렬을 적용합니다.

- 그리드 뷰(Grid View): 하단 고정
- 리스트 뷰(List View): 상단/중앙 정렬

### Badge

- 도서 정보 및 상태 등 섬네일에 표시되는 시각적인 요소입니다. 
- 새로운 뱃지를 추가할 때에는 섬네일을 많이 가리지 않도록 주의하고, 다양한 표지 스타일에 대응할 수 있도록 복잡한 형태는 피하는 것이 좋습니다.

#### 1. 공통

가격 관련 정보 및 도서 정보에 대한 내용이 표시됩니다. 각 요소의 중복 표시가 가능합니다. PAPER 기기에서는 가격 관련 뱃지는 노출되지 않습니다. 

| 명칭  | 예시             |
| ----- | ---------------- |
| Price | 할인, 대여, 무료 |
| Adult | 성인 도서        |
| Set   | 세트 도서        |
| HD    | 고화질 도서      |

 ![Interpolator](/web/img/bookmacro_badge1.png)

#### 2. 구매목록

구매 목록 페이지 내에서 도서 상태와 관련된 내용이 표시됩니다.

- 시리즈/세트 도서 수
- 기간 만료

 ![Interpolator](/web/img/bookmacro_badge2.png)

## 메타데이터 Metadata

사용자에게 많은 양의 정보를 효과적으로 전달하기 위해 도서 정보를 구조화한 데이터입니다.

### 1. 공통

| 코드                | 구분                |
| ------------------- | ------------------- |
| **Title**           | 도서 제목           |
| **Sub Title**       | 부제목              |
| **Authors**         | 저자                |
| **Translator**      | 역자                |
| **Count**           | 총 권수, 완결 여부  |
| **Publisher**       | 출판사              |
| **Category**        | 분야                |
| **Star Rate**       | 별점 및 참여 인원수 |
| **Description**     | 책 소개             |
| **Rental Price**    | 대여 가격           |
| **Buy Price**       | 구매 가격           |
| **Book Type Badge** | 만화/소설           |
| **Some Deal Badge** | 썸딜                |

### 2. 구매목록

| 코드                    | 구분                |
| ----------------------- | ------------------- |
| **Period Time**         | 대여 도서 남은 시간 |
| **Period Time Expired** | 만료된 날짜         |

## 종류 Types

주로 사용하는 레이아웃 및 메타데이터 노출 순서는 다음과 같이 정의되어 있습니다. 
플랫폼의 종류와 도서 장르, 상황에 따라 표시되는 정보가 다르지만 기본적으로 도서 제목과 저자 명은 꼭 표시되어야 합니다.

### 세로형 Portrait

모든 플랫폼에서 기본값으로 사용합니다. 

 ![Interpolator](/web/img/bookmacro_portrait.png)

- Thumbnail + Component

- Metadata

  - Title

  - Authors
  - Translator
  - Star Rate
  - Rental Price
  - Buy Price
  - Book Type Badge
  - Some Deal Badge

### 가로형 Landscape

#### 1. 가로형 Landscape

  Mobile, PAPER에서 주로 사용합니다. 

 ![Interpolator](/web/img/bookmacro_landscape.png)

- Thumbnail + Component

- Metadata

  - Title
  - Sub Title
  - Authors
  - Translator
  - Publisher
  - Star Rate
  - Rental Price
  - Buy Price

  - Book Type Badge
  - Some Deal Badge

#### 2. 가로형 메타데이터 Landscape Metadata

PC에서 주로 사용합니다. Book Type Badge, Some Deal Badge는 메타데이터 영역의 우측 상단에 위치합니다.

 ![Interpolator](/web/img/bookmacro_landscape_meta.png)

- Thumbnail + Component

- Metadata

  - Title
  - Sub Title
  - Star Rate
  - Authors
  - Translator
  - Publisher
  - Category
  - Description
  - Rental Price
  - Buy Price
  - Book Type Badge
  - Some Deal Badge