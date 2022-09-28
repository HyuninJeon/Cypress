# Cypress
+ 준비
cypress를 공부할 프로젝트를 하나 준비한 다음 cypress 설치 후 실행해본다.

  + 설치
  ```
  npx i --save -dev cypress
  ```
  + 실행
  ```
  npx cypress run
  ```
  ![image](https://user-images.githubusercontent.com/67428001/192533931-ed73fffd-3925-4f5a-b6b0-42cc72eb59ca.png)

    + e2e : test 코드가 위치하는 곳이다. examples 폴더에 예제 파일들이 추가되어 있는데 참고하는 것도 많은 도움이 된다.
    + fixtures : 네트워크 응답 같은 테스트에 필요한 정적인 데이터들을 만들어 둘 수 있다. cy.fixture() 커맨드를 통해 사용할 수 있다. 
    + support : cypress/plugins/index.js 이 포함되어 있는데 각 spec 파일이 실행되기 전에 한 번 수행된다. 주로 custom이나 command나 모든 sepc 파일에 적용하거나 사용할 코드를 작성한다.
-----
+ 테스트 코드 작성
  + 웹사이트 방문
  > 특정 웹사이트에 대해 테스트를 작성하려면 기본적으로 해당 웹을 방문해야 한다. cypress에서는 cy.visit()을 사용한다. 
  ```
  const { eq } = require("loadsh")

  describe('My first Test', () => {
    it('visit', () => {
      cy.visit('https://naver.com') //페이지 방문
    })
  })
  ```
  
