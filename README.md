<div align="center">
  <br />
  <img src="./readme_assets/thumbnail-js-algorithm.png" alt="JS Algorithm" width="300px" />
  <br />
  <h1>자바스크립트 알고리즘 문제풀이</h1>
  <br />
</div>

🎯 `1주일에 7문제 이상`을 푸는 것을 목표로 합니다.

🎯 **[자바스크립트 알고리즘 문제풀이](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4)** 인프런 강의에서 제공하는 알고리즘 문제를 먼저 직접 풀어보고 이후 강의를 통해 더 효율적이고 다양한 풀이법을 익힙니다.

📅 풀이 일정: 2024.03.18. ~ ing

<br />

## 목차

1. [**기본문제 풀이**](#1)
2. [**1, 2차원 배열 탐색**](#2)
3. [**문자열 탐색**](#3)
4. [**완전탐색(블루투포스)**](#4)
5. [**효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)**](#5)
6. [**자료구조(스택, 큐)**](#6)
7. [**정렬과 그리디, 결정알고리즘(이분검색)**](#7)
8. [**재귀함수와 완전탐색(DFS:깊이우선탐색)**](#8)
9. [**그래프와 탐색(DFS, BFS:넓이 우선탐색)**](#9)
10. [**Dynamic programming(동적계획법)**](#10)

<br />

<div id="1"></div>

## 1️⃣ 기본문제 풀이

| 번호 |       문제       |                                                        JS 풀이 코드                                                         | 풀이 일자 |
| :--: | :--------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   | 세 수 중 최소값  |   [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/1-lowest-of-three-numbers.js)    |   03.18   |
|  2   | 삼각형 판별하기  |      [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/2-identify-triangles.js)      |   03.19   |
|  3   |    연필 개수     |      [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/3-number-of-pencils.js)       |   03.20   |
|  4   | 1부터 N까지의 합 |       [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/4-sum-from-1-to-n.js)        |   03.21   |
|  5   |  최소값 구하기   |  [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/5-finding-the-minimum-value.js)   |   03.22   |
|  6   |       홀수       |         [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/6-odd-numbers.js)          |   03.23   |
|  7   |      10부제      |         [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/7-10-subtitles.js)         |   03.24   |
|  8   |    일곱난쟁이    |         [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/8-seven-dwarfs.js)         |   03.25   |
|  9   |    A를 #으로     |           [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/9-a-to-%23.js)           |   03.26   |
|  10  |    문자 찾기     |     [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/10-finding-characters.js)      |   03.27   |
|  11  |   대문자 찾기    |    [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/11-find-capital-letters.js)     |   03.28   |
|  12  |   대문자 통일    |    [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/12-unify-capitalization.js)     |   03.29   |
|  13  |  대소문자 변환   |       [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/13-case-conversion.js)       |   03.30   |
|  14  |  가장 긴 문자열  |       [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/14-longest-string.js)        |   03.31   |
|  15  | 가운데 문자 출력 | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/15.print-the-center-character.js)  |   04.01   |
|  16  |  중복 문자 제거  | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/16-remove-duplicate-characters.js) |   04.02   |
|  17  |  중복 단어 제거  |   [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section1/17-remove-duplicate-words.js)    |   04.03   |

<br />

<div id="2"></div>

## 2️⃣ 1, 2차원 배열 탐색

| 번호 |      문제      |                                                     JS 풀이 코드                                                     | 풀이 일자 |
| :--: | :------------: | :------------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   | 큰 수 출력하기 | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section2/1-print-a-large-number.js)  |   04.04   |
|  2   |  보이는 학생   |   [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section2/2-visible-students.js)    |   04.05   |
|  3   |   가위바위보   |  [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section2/3-rock-paper-scissors.js)  |   04.06   |
|  4   |   점수 계산    | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section2/4-calculate-your-score.js)  |   04.07   |
|  5   |  등수 구하기   | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section2/5-finding-equal-numbers.js) |   04.08   |
|  6   | 격자판 최대합  |     [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section2/6-grid-max-sum.js)      |   04.09   |
|  7   |     봉우리     |         [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section2/7-peaks.js)         |   04.10   |

<br />

<div id="3"></div>

## 3️⃣ 문자열 탐색

| 번호 |              문제              |                                                        JS 풀이 코드                                                        | 풀이 일자 |
| :--: | :----------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   |       회문문자열       |     [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section3/1-palindromic-string.js)      |   04.11   |
|  2   |   유효한 팰린드롬   |      [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section3/2-valid-palindromes.js)      |   04.12   |
|  3   |      숫자만 추출       |    [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section3/3-extract-numbers-only.js)     |   04.13   |
|  4   | 가장 짧은 문자거리 | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section3/4-shortest-character-distance.js) |   04.14   |
|  5   |      문자열 압축      |     [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section3/5-compress-the-string.js)     |   04.15   |

<br />

<div id="4"></div>

## 4️⃣ 완전탐색(블루투포스)

| 번호 |        문제        |                                                     JS 풀이 코드                                                      | 풀이 일자 |
| :--: | :----------------: | :-------------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   | 자리수의 합  |     [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section4/1-sum-of-digits.js)      |   04.16   |
|  2   | 뒤집은 소수 |    [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section4/2-flipped-decimal.js)     |   04.17   |
|  3   |    멘토링     |       [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section4/3-mentoring.js)        |   04.18   |
|  4   |  졸업선물  |    [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section4/4-graduation-gift.js)     |   04.19   |
|  5   | K번째 큰 수  | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section4/5-the-Kth-largest-number.js) |   04.20   |

<br />

<div id="5"></div>

## 5️⃣ 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

| 번호 |        문제        |                                                        JS 풀이 코드                                                         | 풀이 일자 |
| :--: | :----------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   |   두 배열 합치기   |      [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section5/1-combine-two-arrays.js)      |   04.21   |
|  2   |  공통원소 구하기   |    [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section5/2-find-a-common-element.js)     |   04.22   |
|  3   |   연속 부분수열1   | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section5/3-continuous-partial-sequence1.js) |   04.23   |
|  4   |   연속 부분수열2   | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section5/4-continuous-partial-sequence2.js) |   04.24   |
|  5   |     최대 매출      |       [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section5/5-maximum-revenue.js)        |   04.26   |
|  6   |     학급 회장      |   [JS](<https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section5/6-class-president(hash).js>)    |   04.27   |
|  7   |      아나그램      |           [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section5/7-anagrams.js)           |   04.28   |
|  8   | 모든 아나그램 찾기 |         [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section5/8-all-anagrams.js)         |   04.29   |

<br />

<div id="6"></div>

## 6️⃣ 자료구조(스택, 큐)

| 번호 |          문제           |                                                         JS 풀이 코드                                                         | 풀이 일자 |
| :--: | :---------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   |       올바른 괄호       |      [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section6/1-correct-parentheses.js)      |   04.30   |
|  2   |     괄호 문자 제거      | [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section6/2-remove-parenthesis-characters.js) |   05.01   |
|  3   | 크레인 인형뽑기(카카오) |    [JS](<https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section6/3-crane-puppet-(kakao).js>)     |   05.02   |
|  4   |   후위식(postfix)연산   |            [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section6/4-postfix.js)            |   05.03   |
|  5   |        쇠막대기         |            [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section6/5-crowbar.js)            |   05.04   |
|  6   |       공주 구하기       |      [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section6/6-saving-the-princess.js)      |   05.05   |
|  7   |      교육과정 설계      |       [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section6/7-curriculum-design.js)       |   05.06   |

<br />
<div id="7"></div>

## 7️⃣ 정렬과 그리디, 결정알고리즘(이분검색)

| 번호 |            문제             |                                                                                                     JS 풀이 코드                                                                                                     | 풀이 일자 |
| :--: | :-------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------: |
|  1   |          선택 정렬          |                                                    [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section7/1-sort-selections.js)                                                    |   05.07   |
|  2   |          버블 정렬          |                                                     [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section7/2-align-bubbles.js)                                                     |   05.08   |
|  3   | Special Sort(버블 정렬응용) |                                                     [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section7/3-special-sort.js)                                                      |   05.09   |
|  4   |          삽입 정렬          |                                                     [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section7/4-align-inserts.js)                                                     |   05.11   |
|  5   |       LRU(캐시 변형)        | [JS](<https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section7/5-Least%20Recently%20Used(%EC%B9%B4%EC%B9%B4%EC%98%A4%20%EC%BA%90%EC%8B%9C%20%EB%AC%B8%EC%A0%9C%20%EB%B3%80%ED%98%95).js>) |   05.13   |
|  6   |       장난꾸러기 현수       |                                                       [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section7/6-prankster.js)                                                       |   05.14   |
|  7   |          좌표 정렬          |                                                 [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section7/7-coordinate-alignment.js)                                                  |   05.15   |
|  8   |         회의실 배정         |                                                     [JS](https://github.com/misung-dev/inflearn-algorithm-solving-with-js/blob/main/section7/8-assign-a-room.js)                                                     |   05.16   |
|  9   |           결혼식            |                                                                                                                                                                                                                      |           |
|  10  |          이분 검색          |                                                                                                                                                                                                                      |           |
|  11  |         뮤직비디오          |                                                                                                                                                                                                                      |           |
|  12  |        마구간 정하기        |                                                                                                                                                                                                                      |           |

<br />

<div id="8"></div>

## 8️⃣ 재귀함수와 완전탐색(DFS:깊이우선탐색)

| 번호 |         문제         | JS 풀이 코드 | 풀이 일자 |
| :--: | :------------------: | :----------: | :-------: |
|  1   |       재귀함수       |              |           |
|  2   |     이진수 출력      |              |           |
|  3   |    이진 트리 순회    |              |           |
|  4   |   부분집합 구하기    |              |           |
|  5   |  합이 같은 부분집합  |              |           |
|  6   |     바둑이 승차      |              |           |
|  7   |   최대 점수 구하기   |              |           |
|  8   |   중복순열 구하기    |              |           |
|  9   |       동전교환       |              |           |
|  10  |     순열 구하기      |              |           |
|  11  |       팩토리얼       |              |           |
|  12  | 조합수(메모이제이션) |              |           |
|  13  |    수열 추측하기     |              |           |
|  14  |     조합 구하기      |              |           |
|  15  |     수들의 조합      |              |           |

<br />

<div id="9"></div>

## 9️⃣ 그래프와 탐색(DFS, BFS:넓이 우선탐색)

| 번호 |            문제            | JS 풀이 코드 | 풀이 일자 |
| :--: | :------------------------: | :----------: | :-------: |
|  1   |  경로 탐색(DFS-인접행렬)   |              |           |
|  2   | 경로 탐색(DFS-인접리스트)  |              |           |
|  3   |       미로탐색(DFS)        |              |           |
|  4   | 이진트리 넓이우선탐색(BFS) |              |           |
|  5   |        송아지 찾기         |              |           |
|  6   |      섬나라 아일랜드       |              |           |

<br />

<div id="10"></div>

## 🔟 Dynamic programming(동적계획법)

| 번호 |        문제        | JS 풀이 코드 | 풀이 일자 |
| :--: | :----------------: | :----------: | :-------: |
|  1   |    계단 오르기     |              |           |
|  2   |   돌다리 건너기    |              |           |
|  3   | 최대 부분 증가수열 |              |           |
|  4   |      동전교환      |              |           |
|  5   |  최대점수 구하기   |              |           |
