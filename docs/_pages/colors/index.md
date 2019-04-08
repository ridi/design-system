---
---

# Colors

컬러는 브랜드를 대표하고 다양한 제품들을 하나로 묶어주는 중요한 역할을 합니다.

컬러 사용에는 제한이 필요합니다. 너무 많을 경우 브랜드 아이덴티티가 약해지기 때문입니다. 하지만 너무 적은 단계 수의 컬러로 유연하게 디자인하기는 어렵습니다. 그래서 제한 안에서 자유롭게 디자인할 수 있도록 컬러 별로, 밝기 순으로 총 11단계를 지원합니다.

## 유의사항

- 커뮤니케이션 시, 헥스 코드보다는 컬러 변수명을 사용합니다.
- 같은 페이지 내 텍스트 요소에 가능한 Slate gray와 Gray 계열을 섞어 사용하지 않습니다.
- 정의되지 않은 새로운 컬러를 사용하게 될 경우, 바로 컬러 칩에 추가하지 않고 두 곳 이상에서 사용될 경우 컬러 칩에 추가합니다.
- PAPER 작업 시, 가독성을 높이기 위해 주로 Black을 사용합니다.
- 비슷한 성격의 제품은 다른 플랫폼이라도 되도록 같은 컬러를 사용하여 통일되어 보이도록 합니다.

## 주요 컬러

브랜드를 대표하는 컬러로, 포인트 컬러로 주로 사용합니다.

###  Dodger Blue

앱 아이콘, 서점 GNB 등 브랜드를 대표할 수 있는 영역에 주로 dodgerblue-50을 사용합니다.

<div>
{% for dodgerblue in site.data.dodgerblue-list %}
    <div class="color-box" style="background: var(--{{ dodgerblue.name }});">
        <div class="color-label">
            <span>{{ dodgerblue.name }}</span>
            <span>{{ dodgerblue.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>

###  Slate Gray

텍스트 컬러로 주로 사용합니다.
<div>
{% for slategray in site.data.slategray-list %}
    <div class="color-box" style="background: var(--{{ slategray.name }});">
        <div class="color-label">
            <span>{{ slategray.name }}</span>
            <span>{{ slategray.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>


###  Blue Gray

Slate Gray와 구분이 필요한 경우 보조 컬러로 사용합니다.
<div>
{% for bluegray in site.data.bluegray-list %}
    <div class="color-box" style="background: var(--{{ bluegray.name }});">
        <div class="color-label">
            <span>{{ bluegray.name }}</span>
            <span>{{ bluegray.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>

## 보조 컬러

배경색으로 사용하거나 성공, 경고 등 사용자에게 시각적인 피드백을 제공할 때 사용합니다.

### Light Steel Blue

흰 배경과 구분이 필요할 때, 배경 컬러로 사용합니다.
<div>
{% for lightsteelblue in site.data.lightsteelblue-list %}
    <div class="color-box" style="background: var(--{{ lightsteelblue.name }});">
        <div class="color-label">
            <span>{{ lightsteelblue.name }}</span>
            <span>{{ lightsteelblue.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>

### Blue Purple

- 현재는 서점 내에서 셀렉트 표기 시 bluepurple-40, 70을 사용하고 있습니다.
- 앞으로 셀렉트를 대표하는 컬러로 자리매김할 예정입니다.
<div>
{% for bluepurple in site.data.bluepurple-list %}
    <div class="color-box" style="background: {{ bluepurple.hexcode }};">
        <div class="color-label">
            <span>{{ bluepurple.name }}</span>
            <span>{{ bluepurple.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>

###  Gray

PAPER에서 주로 사용합니다.
<div>
{% for gray in site.data.gray-list %}
    <div class="color-box" style="background: {{ gray.hexcode }};">
        <div class="color-label">
            <span>{{ gray.name }}</span>
            <span>{{ gray.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>

###  Red

오류, 경고, 주의, 실패와 같은 부정적인 메시지에 사용합니다.

<div>
{% for red in site.data.red-list %}
    <div class="color-box" style="background: var(--{{ red.name }});">
        <div class="color-label">
            <span>{{ red.name }}</span>
            <span>{{ red.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>

### Orange

보조 포인트 컬러와 별점에 사용합니다.
<div>
{% for orange in site.data.orange-list %}
    <div class="color-box" style="background: var(--{{ orange.name }});">
        <div class="color-label">
            <span>{{ orange.name }}</span>
            <span>{{ orange.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>

###  Green

확인, 성공과 같은 긍정적인 메세지에 사용합니다.
<div>
{% for green in site.data.green-list %}
    <div class="color-box" style="background: var(--{{ green.name }});">
        <div class="color-label">
            <span>{{ green.name }}</span>
            <span>{{ green.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>

### Brown

안내 메시지에 사용합니다.
<div>
{% for brown in site.data.brown-list %}
    <div class="color-box" style="background: var(--{{ brown.name }});">
        <div class="color-label">
            <span>{{ brown.name }}</span>
            <span>{{ brown.hexcode }}</span>
        </div>
    </div>
{% endfor %}
</div>